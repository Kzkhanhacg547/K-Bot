module.exports.config = {
  name: "getavt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DuyVuong",
  description: "Lấy avt người dùng",
  commandCategory: "Tiện ích",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args, Threads }) {
const request = require("request");
const fs = require("fs")
const axios = require("axios")
const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
const mn = this.config.name
if (!args[0]) return api.sendMessage(`=== 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗔𝗩𝗧 ===\n\n${prefix}${mn} box: Get avt của nhóm bạn\n\n${prefix}${mn} id < ID cần get >: Get ảnh theo ID người đó\n\n${prefix}${mn} link < link cần get >: Get theo link của người đó\n\n${prefix}${mn} user < để trống >: Get avatar của chính người dùng lệnh\n\n${prefix}${mn} user < tag >: Get avt người được tag`,event.threadID,event.messageID);
  if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
       if(!imgg) api.sendMessage(`Avatar của nhóm ${threadInfo.threadName} đây`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`Avatar nhóm ${threadInfo.threadName} đây`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
             }    

            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
          if(!img) api.sendMessage(`Avatar của nhóm ${threadInfo.threadName} đây`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`Avatar của nhóm ${threadInfo.threadName} đây`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

}
else if (args[0] == "id") {
  try {
  var id = args[1];
  if (!id) return api.sendMessage(`Vui lòng nhập ID cần get avatar`,event.threadID,event.messageID);
   var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
   return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 }
 catch (e) {
  api.sendMessage(`Không thể lấy ảnh người dùng`,event.threadID,event.messageID);
 }
}
else if (args[0] == "link") {
var link = args[1];
if (!link) return api.sendMessage(`Vui lòng nhập link cần get avatar`,event.threadID,event.messageID);
var tool = require("fb-tools");
try {
var id = await tool.findUid(args[1] || event.messageReply.body);
var callback = () => api.sendMessage({body:`Avatar của bạn đây`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}
catch(e){
    api.sendMessage("Người dùng không tồn tại",event.threadID,event.messageID)
}
}
else if(args[0] == "user") {
  if (!args[1]) {
    var id = event.senderID;
    var callback = () => api.sendMessage({body:`Avatar của bạn đây`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
  else if (args.join().indexOf('@') !== -1) {
    var mentions = Object.keys(event.mentions)
    var callback = () => api.sendMessage({body:`Avatar của bạn đây`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
  else {
    api.sendMessage(`Sai cú pháp dùng lệnh\nNhập ${prefix}${mn} để xem các tùy chọn`,event.threadID,event.messageID);
  }
}
else {
  api.sendMessage("Sai cú pháp dùng lệnh",event.threadID,event.messageID);
}
}