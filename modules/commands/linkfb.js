module.exports.config = {
  name: "linkfb",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Lấy ID người dùng.",
  commandCategory: "THÀNH VIÊN",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
  uid = event.messageReply.senderID
  return api.sendMessage(`https://facebook.com/${uid}`, event.threadID, event.messageID) }
    if (!args[0]) {return api.sendMessage(`https://facebook.com/${event.senderID}`, event.threadID, event.messageID);}
  else {
  if (args[0].indexOf("https://www.facebook.com/")!==-1) {
    const res_ID = await api.getUID(args[0]);  
    return api.sendMessage(`https://facebook.com/${res_ID}`, event.threadID, event.messageID) }
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: https://facebook.com/${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
}
}
