const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "yêu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki",
  description: "Yêu người bạn tag",
  commandCategory: "Hành động",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/wbAH54b.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗧𝗼̛́ 𝗬𝗲̂𝘂 𝗖𝗮̣̂𝘂 𝗩𝗟 🎀`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/spair.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/spair.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/spair.gif")).on("close",() => callback());
}