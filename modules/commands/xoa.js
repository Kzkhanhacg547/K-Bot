const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "xoa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki",
  description: "xoa người Bạn Muốn",
  commandCategory: "game",
  usages: "@tag",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
  "https://i.imgur.com/O7hz5O4.gif",
             ];
   var callback = () => api.sendMessage({body: `${tag} ‎𝐍𝐠𝐨𝐚𝐧 𝐥𝐚̆́𝐦 𝐛𝐞́ 𝐢𝐮𝐮 ><`, mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/noprefix/xoa.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/xoa.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/xoa.gif")).on("close",() => callback());
   };