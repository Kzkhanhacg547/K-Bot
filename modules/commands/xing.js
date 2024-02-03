module.exports.config = {
  name: "xing",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "xing",
  commandCategory: "Noprefix",
  usages: "mp4",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("xing")==0 || 
event.body.indexOf("xinh")==0 ||
event.body.indexOf("Xinh")==0 ||
event.body.indexOf("Xing")==0 ||
event.body.indexOf("đẹp")==0 ||
event.body.indexOf("Đẹp")==0 ||
event.body.indexOf("xink")==0 ||
event.body.indexOf("xik")==0 ||
event.body.indexOf("xinh quá")==0 ||
event.body.indexOf("ngon")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/vuW1Ut3.mp4",
          ];
     var callback = () => api.sendMessage({body:`𝗨𝗔̂𝗬 Đ𝗜̣𝗧 𝗖𝗢𝗡 𝗠𝗘̣ 𝗠𝗔̀𝗬 𝗡𝗚𝗢𝗡 𝗩𝗔̃𝗜 𝗟𝗢̂̀𝗡`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };