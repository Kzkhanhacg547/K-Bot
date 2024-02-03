const axios = require("axios");
module.exports.config = {
  name: "urlshort",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Prince Sanel",
  description: "Shortened Url api by Sensui",
  usePrefix: true,
  commandCategory: "Tiện ích",
  usages: "[url]",
  cooldowns: 0,
}; // Original Code by Prince Sanel Osorio
module.exports.run = async function({ api, event, args }) {
  var { threadID, messageID } = event;
  const res1 = args[0];
  try {
    if (!args[0]) return api.sendMessage("[!] cần 1 liên kết để rút gọn 😏", threadID, messageID);
    if (!args[1]) {
      const res = await axios(`https://url.codersensui.repl.co/api/urlshort?url=${encodeURI(args[1])}}`);
      api.sendMessage("❯ link gốc Url: " + res1 + "\n❯ link đã rút gọn Url: " + res.data.shortUrl + "\n❯ Expiration: " + res.data.expireAt, threadID, messageID);
    };
  } catch (error) {
    api.sendMessage(error, threadID, messageID);
  }
}