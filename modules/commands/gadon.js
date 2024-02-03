const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "gadon",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Gạ đòn người Bạn Muốn",
  commandCategory: "Game",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
          "https://i.imgur.com/PrTvtfk.gif",
             ];
   var callback = () => api.sendMessage({body: `${tag} nè đấm nhau k 🤕` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/đấm.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/đấm.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/đấm.jpg")).on("close",() => callback());
   };