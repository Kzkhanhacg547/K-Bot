module.exports.config = {
  name: "fbvideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sam",
  description: "Tải video/story facebook",
  commandCategory: "tiện ích",
  usages: "",
  cooldowns: 5
}

module.exports.run = async function({ args, event, api }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  var img = [];
  if (!args[0]) {
    return api.sendMessage(`𝑩𝒂̣𝒏 𝑪𝒉𝒖̛𝒂 𝑵𝒉𝒂̣̂𝒑 𝑵𝒐̣̂𝒊 𝑫𝒖𝒏𝒈 𝑲𝒊̀𝒂`, event.threadID, event.messageID)
  }
  const res = await require("tools-fb").getVideoUrl(args[0]);
  let imga = (await axios.get(res.thumb, {
     responseType: "arraybuffer" 
   })).data; 
  fs.writeFileSync(__dirname + "/cache/tiktok.png", Buffer.from(imga, "utf-8") );
  img.push(fs.createReadStream(__dirname + "/cache/tiktok.png"));
  var msg = {body: `𝟏.𝐓𝐚̉𝐢 𝐕𝐢𝐝𝐞𝐨\n𝟐.𝐓𝐚̉𝐢 𝐌𝐮𝐬𝐢𝐜\n\n𝐇𝐚̃𝐲 𝐑𝐞𝐩𝐥𝐲 𝐒𝐨̂́ 𝐌𝐮𝐨̂́𝐧 𝐂𝐡𝐨̣𝐧!`, attachment: img}
  return api.sendMessage(msg, event.threadID, (error, info) => {
    global.client.handleReply.push({
      type: "reply",
      name: this.config.name,
      author: event.senderID,
      messageID: info.messageID,
      video: res.HD,
      mp3: res.audio,
      time: res.time
    })
  }) 
}
module.exports.handleReply = async function ({ args, event, Users, Currencies, api, handleReply }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  let { author, video, mp3, time, messageID } = handleReply;
  if (event.senderID != author) return api.sendMessage("Xàm lồn", event.threadID, event.messageID); 
    switch (handleReply.type) {
      case "reply": {
        switch(event.body){
          case "1": {
            const data = (await axios.get(video, {
              responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/toptop.mp4", Buffer.from(data, "utf-8"));
            return api.sendMessage({
              body: `Time: ${time}`,
              attachment: fs.createReadStream(__dirname + "/cache/toptop.mp4")
            }, event.threadID)
          };
            break;
          case "2":{
            const data = (await axios.get(mp3, {
              responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/toptop.mp3", Buffer.from(data, "utf-8"));
            return api.sendMessage({
              body: `Time: ${time}`,
              attachment: fs.createReadStream(__dirname + "/cache/toptop.mp3")
            }, event.threadID)
          };
            break;
        }
      }
    }
}
