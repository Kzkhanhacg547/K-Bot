module.exports.config = {
  name: "fbget",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Zera",
  description: "Tải video hoặc ghi âm từ fb",
  commandCategory: "Tiện ích",
  usages: "fbget audio/video [link]",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const axios = global.nodemodule['axios'];
    const fs = global.nodemodule["fs-extra"];

    if (args[0] === 'audio') {
      const path = __dirname + `/cache/2.mp3`;
      const getPorn = (await axios.get(event.attachments[0].playableUrl, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getPorn, 'arraybuffer'));
      return api.sendMessage({ body: '', attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    } else if (args[0] === 'video') {
      const path1 = __dirname + `/cache/1.mp4`;
      const getPorn = (await axios.get(event.attachments[0].playableUrl, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path1, Buffer.from(getPorn, 'arraybuffer'));
      return api.sendMessage({ body: '', attachment: fs.createReadStream(path1) }, event.threadID, () => fs.unlinkSync(path1), event.messageID);
    } else if (args[0] === 'uid') {
      api.sendMessage(`Đang xử lý yêu cầu!!!`, event.threadID, (err, info) => {
        setTimeout(() => {
          api.unsendMessage(info.messageID);
        }, 100);
      }, event.messageID);
          if(event.type == "message_reply") { 
        uid = event.messageReply.senderID
        return api.sendMessage(`${uid}`, event.threadID, event.messageID) }
          if (!args[0]) {return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);}
        else {
        if (args[0].indexOf(".com/")!==-1) {
          const res_ID = await api.getUID(args[0]);  
          return api.sendMessage(`${res_ID}`, event.threadID, event.messageID) }
        else {
          for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
          return;
        }
      }
    }
  } catch (error) {
    api.sendMessage(`Không thể xử lý yêu cầu`, event.threadID, event.messageID);
  }
};
