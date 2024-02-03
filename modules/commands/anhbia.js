module.exports.config = {
    name: "anhbia",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "",
    description: "sai roi biet",
    commandCategory: "Tiện ích",
    usages: "[text1] [text2]",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { threadID, messageID } = event;
  const text1 = args[0];
  const text2 = args[1];
    	if (!args[0]) return api.sendMessage("🌸 Cần nhập [text1 text2] để tạo ảnh 🌸", threadID, messageID);
     	if (!args[1]) return api.sendMessage("🌸 Cần nhập [text2] để tạo ảnh 🌸", threadID, messageID);
var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/gg.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gg.png"),event.messageID);
      api.sendMessage("🌸 Đang khởi tạo hình ảnh, vui lòng chờ đợi 🌸", event.threadID, event.messageID);
	 return request(encodeURI(`https://rest-api.victoriasmp.repl.co/api/textpro/glitch2?text=${text1}&text2=${text2}`)).pipe(fs.createWriteStream(__dirname+'/cache/gg.png')).on('close',() => callback());     
}