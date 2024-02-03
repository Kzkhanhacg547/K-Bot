module.exports.config = {
  name: "shell",
  version: "7.3.1",
  hasPermssion: 2,
  credits: "Nguyen",
  description: "running shell",
  commandCategory: "System",
  usages: "[shell]",
  cooldowns: 2,
  dependencies: {
    "child_process": ""
  }
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {    
const { exec } = require("child_process");
const permission = ["100081129610697",""];
  if (!permission.includes(event.senderID))  api.sendMessage( "Lệnh này dành cho admin" , event.threadID, event.messageID);
let text = args.join(" ")
exec(`${text}`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`𝐋ỗ𝐢: \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`stderr:\n ${stderr}`, event.threadID, event.messageID);
        return;
    }
    api.sendMessage(`stdout:\n ${stdout}`, event.threadID, event.messageID);
});
}