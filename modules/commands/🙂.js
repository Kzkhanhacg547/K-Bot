module.exports.config = {
  name: "🙂",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "Lmao tủn tủn",
  description: "🙂🙂🙂",
  commandCategory: "Noprefix",
  usages: "[trống]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ api, event, Users }) => {
  const cc = [
    "icon của sự thỉu năng😏",
    "Nhìn icon là đủ biết mày bị ngáo đá🙄"
    ];
  let name = await Users.getNameUser(event.senderID)
  if (event.body.toLowerCase() == "🙂"){ 
    return api.sendMessage(
       ` ${cc[Math.floor(Math.random() * cc.length)]}`
      , event.threadID, event.messageID)
  }

}

module.exports.run = async ({ api, event, Users }) => {
  let name = await Users.getNameUser(event.senderID)
  return api.sendMessage(name + ' biết xài không hả', event.threadID, event.messageID)
}
