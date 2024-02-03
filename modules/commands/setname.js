const axios = require('axios');

module.exports.config = {
  name: "setname",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Đổi biệt danh của bạn hoặc người bạn tag, có thể phản hồi tin nhắn người khác!",
  commandCategory: "Box",
  usages: "[trống/tag/reply] + [name]",
  cooldowns: 5
}

module.exports.run = async ({ api, event, args, Users }) => {
  try {
    let { threadID, messageReply, senderID, mentions, type } = event;
    const delayUnsend = 5; // tính theo giây

    if (type === "message_reply") {
      let name2 = await Users.getNameUser(messageReply.senderID);
      const name = args.join(" ");

      await api.changeNickname(name || "", threadID, messageReply.senderID);

      api.sendMessage({
        body: `[🔰]=== 『 𝗨𝗣𝗗𝗔𝗧𝗘 𝗦𝗘𝗧𝗡𝗔𝗠𝗘 』 ===[🔰]\n━━━━━━━━━━━━━━━━\n[📊]➜ Đã đổi tên của: ${name2} thành ${name || "tên gốc"}`,
        attachment: (await axios.get((await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`)).data.data, {
          responseType: 'stream'
        })).data
      }, threadID, async (err, info) => {
        setTimeout(() => { api.unsendMessage(info.messageID) }, delayUnsend * 1000);
      });
    } else {
      const mention = Object.keys(mentions)[0];
      const name2 = await Users.getNameUser(mention || senderID);
      const name = args.join(' ');

      if (args.join().includes('@')) {
        await api.changeNickname(name.replace(mentions[mention], ""), threadID, mention);
      } else {
        await api.changeNickname(name || "", threadID, senderID);
      }

      api.sendMessage({
        body: `[🔰]=== 『 𝗨𝗣𝗗𝗔𝗧𝗘 𝗦𝗘𝗧𝗡𝗔𝗠𝗘 』 ===[🔰]\n━━━━━━━━━━━━━━━━\n[📊]➜ Đã đổi tên của: ${name2} thành ${name.replace(mentions[mention], "") || "tên gốc"}`,
        attachment: (await axios.get((await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`)).data.data, {
          responseType: 'stream'
        })).data
      }, threadID, async (err, info) => {
        setTimeout(() => { api.unsendMessage(info.messageID) }, delayUnsend * 1000);
      });
    }
  } catch (err) {
    api.sendMessage("» Thay đổi biệt danh thất bại.", threadID);
  }
};
