module.exports.config = {
  name: "chuky",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Yae Miko",
  description: "Tạo ảnh chữ ký",// đừng đổi tên module nếu không muốn nó đứng càng không nên đổi credits nêu không muốn bị mất appstate và bay file <3
  commandCategory: "Tạo ảnh",
  cooldowns: 0,
  dependencies: {
      "fs-extra": "",
      "request": "",
      "axios": ""
  }
};

module.exports.run = async function ({ api, args, event, permssion }) {
  const request = require('request');
const fs = require("fs-extra")
const axios = require("axios")
const { threadID, messageID, senderID, body } = event;

  return api.sendMessage(`𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝗵𝗼̣, 𝘁𝗲̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 🌸`, event.threadID, (err, info) => {
      return global.client.handleReply.push({
          type: "text1",
          name: this.config.name,
          author: senderID,
          messageID: info.messageID
      });
  }, event.messageID);
} 
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  var nameSender = (await Users.getData(event.senderID)).name
  var arraytag = [];
      arraytag.push({id: event.senderID, tag: nameSender});
  if (handleReply.author != event.senderID) return;
  const {
      threadID,
      messageID,
      senderID
  } = event;

  switch (handleReply.type) {

      case "text1": { 
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗵𝗼̣, 𝘁𝗲̂𝗻 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝗻𝗮̆𝗺 𝘀𝗶𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
          return global.client.handleReply.push({ 
            type: 'text2',
            name: 'chuky',
            author: senderID,
            text1: event.body,
            messageID: info.messageID
          })
        }, messageID);
      }
      case "text2": { 
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗻𝗮̆𝗺 𝘀𝗶𝗻𝗵 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝗸𝗶𝗲̂̉𝘂 𝗮̉𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻)\n(𝗖𝗵𝗼̣𝗻 𝘀𝗼̂́ 𝟭 𝗵𝗼𝗮̣̆𝗰 𝘀𝗼̂́ 𝟮) 🌸`,threadID , function (err, info) { 
          return global.client.handleReply.push({ 
            type: 'create',
            name: 'chuky',
            author: senderID,
            text1: handleReply.text1,
            text2: event.body,
            messageID: info.messageID
          })
        }, messageID);
      }
      //xog rui ne pri

      case "create": {
          var text1 = handleReply.text1;
          var text2 = handleReply.text2;
          var text3 = event.body;
          const choose = parseInt(text3);
            if (isNaN(choose)) return api.sendMessage("Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 2 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); 

          api.unsendMessage(handleReply.messageID);
          api.sendMessage(`🌸 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗕𝗼𝘁 𝘁𝗮̣𝗼 𝗮̉𝗻𝗵 🌸`,threadID, (err, info) => {
          setTimeout(() => {
            api.unsendMessage(info.messageID);
            var callback = () => api.sendMessage({body:`𝗔̉𝗻𝗵 𝗯𝗶̀𝗮 𝗰𝘂̉𝗮 ${nameSender} 𝗻𝗲̀ 🌸\n𝗨𝗜𝗗: ${event.senderID}\n𝗛𝗼̣ 𝘃𝗮̀ 𝘁𝗲̂𝗻: ${text1}\n𝗡𝗮̆𝗺 𝘀𝗶𝗻𝗵: ${text2}\n𝗞𝗶𝗲̂̉𝘂 𝗮̉𝗻𝗵: ${text3}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
              return request(encodeURI(`https://apis-jrt.catteam123.repl.co/bannertc?name=${text1}&age=${text2}&kieu=${text3}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
          }, 1000);
        }, messageID);
      }
  }} 