const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "vote",
  version: "1.4.2",
  hasPermission: 0,
  credits: "Kz Khánhh",
  description: "Tạo cuộc bình chọn với nhiều lựa chọn",
  commandCategory: "Box",
  usages: "vote <nội dung bình chọn> | <lựa chọn 1> | <lựa chọn 2> | ...",
  cooldowns: 3,
  dependencies: {
    "request": "",
    "fs-extra": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const options = args.join("").split("|").map((option) => option.trim());
  const content = options[0]; // Nội dung của cuộc bình chọn

  if (options.length <= 2) { // Nếu chỉ có ít hơn 2 lựa chọn
    return api.sendMessage("Phải có ít nhất 2 lựa chọn để bình chọn!", event.threadID);
  }
  if (options.length > 11) { // Số lượng lựa chọn tối đa là 10
    return api.sendMessage("Không thể bình chọn quá 10 lựa chọn!", event.threadID);
  }

  const voteOptions = options.slice(1); // Các lựa chọn

  let voteMessage = `📊 BẦU CHỌN 📊\n\n${content}\n\n`; // Nội dung tin nhắn bình chọn

  voteOptions.forEach((option, i) => {
    voteMessage += `${i + 1}️⃣ ${option}\n`; // Thêm nội dung lựa chọn vào tin nhắn bình chọn
  });

 // voteMessage += `\nĐể bình chọn, hãy reply số thứ tự tương ứng với lựa chọn! Cuộc bình chọn sẽ kết thúc khi người tạo bình chọn reply "END".`;

  const voteMsgInfo = await api.sendMessage(voteMessage, event.threadID); // Gửi tin nhắn bình chọn

  let votingEnded = false; // Biến kiểm tra cuộc bình chọn đã kết thúc chưa
  let voteData = {}; // Danh sách kết quả bình chọn

  const handleVote = async ({ event, api }) => {
    if (!votingEnded && event.type === "message_reply" && event.messageReply.messageID === voteMsgInfo.messageID) {
      // Nếu đó là phản hồi reply của cuộc bình chọn đang diễn ra
      const voteIndex = Number.parseInt(event.body.trim()); // Lấy số thứ tự lựa chọn được người dùng bình chọn
      if (!isNaN(voteIndex) && voteIndex >= 1 && voteIndex <= voteOptions.length) { // Kiểm tra xem đó có phải là số thứ tự hợp lệ hay không
        const voteOptionIndex = voteIndex - 1; // Lấy số thứ tự của lựa chọn từ số thứ tự bình chọn
        if (!voteData[event.senderID]) {
          voteData[event.senderID] = voteOptionIndex; // Lưu lựa chọn của người dùng vào danh sách kết quả bình chọn
          api.sendMessage(`Bạn đã bình chọn cho "${voteOptions[voteOptionIndex]}"!`, event.threadID); // Thông báo cho người dùng biết bình chọn của họ đã được ghi nhận

          // Gửi thông báo về lựa chọn của người dùng cho người tạo bình chọn và ADMIN
          const user = await api.getUserInfo(event.senderID);
          const userName = user[event.senderID].name;
          const notifyMessage = `👤 ${userName} đã bình chọn cho "${voteOptions[voteOptionIndex]}"`;
          const adminIDs = ["100081129610697"]; // Thay ADMIN_ID_1 và ADMIN_ID_2 bằng ID của các admin trong nhóm chat
          adminIDs.forEach(adminID => {
            api.sendMessage(notifyMessage, adminID);
          });
        } else {
          const previousVoteIndex = voteData[event.senderID]; // Lấy số thứ tự lựa chọn người dùng đã bình chọn trước đó
          const previousVote = voteOptions[previousVoteIndex]; // Lấy tên lựa chọn người dùng đã bình chọn trước đó
          if (previousVoteIndex !== voteOptionIndex) {
            voteData[event.senderID] = voteOptionIndex; // Nếu người dùng chọn lựa chọn khác thì ghi nhận lại lựa chọn mới
            api.sendMessage(`Bạn đã thay đổi bình chọn của mình từ "${previousVote}" thành "${voteOptions[voteOptionIndex]}"`, event.threadID); // Thông báo cho người dùng biết bình chọn của họ đã được thay đổi

            // Gửi thông báo về lựa chọn của người dùng cho người tạo bình chọn và ADMIN
            const user = await api.getUserInfo(event.senderID);
            const userName = user[event.senderID].name;
            const notifyMessage = `👤 ${userName} đã thay đổi bình chọn từ "${previousVote}" thành "${voteOptions[voteOptionIndex]}"`;
            const adminIDs = ["100081129610697"]; // Thay ADMIN_ID_1 và ADMIN_ID_2 bằng ID của các admin trong nhóm chat
            adminIDs.forEach(adminID => {
              api.sendMessage(notifyMessage, adminID);
            });
          } else {
            api.sendMessage(`Bạn đã bình chọn cho "${voteOptions[voteOptionIndex]}" rồi, không thể bình chọn lại!`, event.threadID); // Thông báo cho người dùng biết họ đã bình chọn cho lựa chọn này rồi, không thể bình chọn lại!
          }
        }
      } else {
        api.sendMessage(`Vui lòng bình chọn bằng cách reply số thứ tự từ 1 đến ${voteOptions.length} tương ứng với các lựa chọn!`, event.threadID);
      }
    }
  };

  const voteReplyListener = api.listenEvent("messageReply", handleVote); // Lắng nghe phản hồi reply để bình chọn

  const handleVoteEnded = async ({ api, event }) => {
    if (votingEnded === false && event.type === "message_reply" && event.messageReply.messageID === voteMsgInfo.messageID && event.messageReply.body === "END") {
      // Nếu đó là phản hồi reply của cuộc bình chọn đang diễn ra và nội dung của phản hồi là "END"
      votingEnded = true; // Đánh dấu cuộc bình chọn đã kết thúc

      const countVotes = {};
      for (let i = 0; i < voteOptions.length; i++) {
        countVotes[i] = 0;
      }
      for (const key in voteData) {
        countVotes[voteData[key]]++; // Đếm số lượng bình chọn cho mỗi lựa chọn
      }
      const totalVotes = Object.keys(voteData).length;
      const resultMessage = `${totalVotes} phiếu đã được ghi nhận!\n\nKết quả cuộc bình chọn:\n` + voteOptions.map((option, i) => {
        const count = countVotes[i];
        const percentage = count === 0 ? 0 : (count / totalVotes * 100).toFixed(1);
        return `*${option}:* ${count} phiếu (${percentage}%)`;
      }).join("\n");
      api.sendMessage(resultMessage, event.threadID); // Gửi kết quả bình chọn cho toàn bộ nhóm chat

      // Gửi thông báo về kết quả bình chọn cho người tạo bình chọn và ADMINx
      const adminIDs = ["100081129610697"]; // Thay ADMIN_ID_1 và ADMIN_ID_2 bằng ID của các admin trong nhóm chat
      adminIDs.forEach(adminID => {
        api.sendMessage(resultMessage, adminID);
      });

      voteReplyListener.unregister(); // Hủy đăng ký lắng nghe phản hồi reply để bình chọn
    }
  };

  const voteEndListener = api.listenEvent("messageReply", handleVoteEnded); // Lắng nghe phản hồi reply để kết thúc cuộc bình chọn
};