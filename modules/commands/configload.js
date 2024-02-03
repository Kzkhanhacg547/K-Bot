module.exports.config = {
  name: "conload",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "D-Jukie",//Mod by H.Thanh
  description: "Tải lại dữ liệu file config",
  commandCategory: "Hệ Thống",
  usages: "load",
  cooldowns: 300
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("[ 𝗖𝗢𝗡𝗙𝗜𝗚 ] → File config.json được làm mới thành công", event.threadID, event.messageID);    
                        }