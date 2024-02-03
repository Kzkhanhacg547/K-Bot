const recentMessages = {};

module.exports.config = {
  name: "deletesp",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "",
  description: "Phát hiện tin nhắn gửi đi nhiều lần từ người dùng",
  commandCategory: "Box",
  usages: "",
  cooldowns: 1,
}

module.exports.run = async function ({ api, event, args }) { 
  const { threadID, messageID, senderID } = event;

  const timePeriod = 10; // Thời gian (giây)
  const messageThreshold = 10; // Số lượng tin nhắn tối đa trong khoảng thời gian trên

  if (!recentMessages[senderID]){
    recentMessages[senderID] = {count: 0, time: Date.now()};
  }

  if (Date.now() - recentMessages[senderID].time < timePeriod * 1000){
    recentMessages[senderID].count++;
  } else {
    recentMessages[senderID] = {count: 1, time: Date.now()};
  }

  if (recentMessages[senderID].count > messageThreshold){
    const spamAlert = `User ${senderID} đang spam trong cuộc trò chuyện ${threadID}, với số lượng tin nhắn là: ${recentMessages[senderID].count}`;
    console.log(spamAlert); // Hiển thị thông báo trên console
    api.sendMessage(spamAlert, threadID); // Gửi thông báo đến cuộc trò chuyện
  }
}