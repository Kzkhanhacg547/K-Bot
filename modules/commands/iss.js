const request = require('request');

module.exports.config = {
  name: "iss",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Xem toạ độ mà tàu vũ trụ đang lưu lạc",
  commandCategory: "Công Cụ",
  usages: "iss",
  cooldowns: 5,
  dependencies: {
    "request": ""
  }
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  return request(`http://api.open-notify.org/iss-now.json`, (err, response, body) => {
    if (err) throw err;
    var jsonData = JSON.parse(body);
    api.sendMessage(`𝗩𝗶̣ 𝘁𝗿𝗶́ 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝘂̉𝗮 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗦𝗽𝗮𝗰𝗲 𝗦𝘁𝗮𝘁𝗶𝗼𝗻 🌌🌠🌃\n- Vĩ độ: ${jsonData.iss_position.latitude}\n- Kinh độ: ${jsonData.iss_position.longitude}`, event.threadID, event.messageID);
  });
}