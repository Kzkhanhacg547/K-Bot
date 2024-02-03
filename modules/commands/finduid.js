var tool = require("fb-downloads");
module.exports.config = {
  name: "finduid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai",
  description: "Lấy UID của link của Profile.",
  commandCategory: "Công cụ",
  usages: "finduid + link fb",
  cooldowns: 1,
  dependencies: {
    "fb-downloads":""
  }
}

module.exports.run = async ({ api, event, args }) => {
  var { threadID, messageID } = event;
  
  try {
    var id = await tool.findUid(args[0] || event.messageReply.body);
    return api.sendMessage(id, threadID, messageID)
  }
  catch (e) {
    return api.sendMessage("Người dùng không tồn tại.!", event.threadID, event.messageID)
  }
}