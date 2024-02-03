const axios = require("axios");
const moment = require("moment-timezone");

module.exports.config = {
  name: "doctor",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Spiritエーアイ",
  description: "An AI doctor and come up with creative treatments for illnesses or diseases.",
  commandCategory: "Tiện ích",
  usePrefix: false,
  usages: "[ask for remedies]",
  cooldowns: 0,
  dependencies: {},
};

async function getUserName(api, senderID) {
  try {
    const userInfo = await api.getUserInfo(senderID);
    return userInfo[senderID]?.name || "User";
  } catch (error) {
    console.log(error);
    return "User";
  }
}

module.exports.run = async function ({ api, event, args, Users, Threads }) {

  api.setMessageReaction("🧪", event.messageID, (err) => {}, true);
  api.sendTypingIndicator(event.threadID, true);

  const apiKey = "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";
  const url = "https://api.openai.com/v1/chat/completions";
  const senderID = event.senderID;

  // Get the user's name
  let userName = await getUserName(api, senderID);
  const currentTime = moment().tz("Asia/Dhaka").format("MMM D, YYYY - hh:mm A");

  const promptMessage = `Đóng vai một bác sĩ 𝐍𝐓𝐑𝐄𝐌𝐒 và đưa ra các phương pháp điều trị sáng tạo cho bệnh tật. Bạn sẽ có thể giới thiệu các loại thuốc thông thường, thuốc thảo dược và các lựa chọn thay thế tự nhiên khác. Bạn cũng sẽ cần xem xét độ tuổi, lối sống và tiền sử bệnh của bệnh nhân khi đưa ra khuyến nghị của mình. Yêu cầu đề xuất đầu tiên của tôi là “Hãy đưa ra một kế hoạch điều trị tập trung vào các phương pháp chữa bệnh toàn diện cho một bệnh nhân lớn tuổi mắc các bệnh khác, ung thư, vi rút, v.v., bác sĩ 𝐍𝐓𝐑𝐄𝐌𝐒 có thể hiểu được nhiều ngôn ngữ khác nhau như tiếng Tagalog nếu ai đó giao tiếp với bác sĩ kenneth anh ấy cũng sẽ nói được ngôn ngữ đó".`;
  const blank = args.join(" ");
  const data = `User: ${args.join(" ")}\nYou: `;

  if (blank.length < 2) {
    api.sendMessage("𝙷𝚎𝚕𝚕𝚘! 𝙷𝚘𝚠 𝚖𝚊𝚢 𝙸 𝚑𝚎𝚕𝚙 𝚢𝚘𝚞 𝚝𝚘𝚍𝚊𝚢?", event.threadID, event.messageID);
    api.setMessageReaction("🧪", event.messageID, (err) => {}, true);
  } else {
    api.sendMessage("Searching for: " + args.join(" "), event.threadID, event.messageID);
    try {
      const previousConversation = [];

      const response = await axios.post(
        url,
        {
          model: "gpt-3.5-turbo-0613",
          messages: [
            { role: "system", content: promptMessage },
            ...previousConversation,
            { role: "user", content: data },
          ],
          temperature: 1.0,
          top_p: 0.9,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const message = response.data.choices[0].message.content;
      api.setMessageReaction("👨🏻‍⚕️", event.messageID, (err) => {}, true);
      api.sendMessage(message, event.threadID, event.messageID);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
        api.sendMessage(error.message, event.threadID);
      }
    }
  }
};