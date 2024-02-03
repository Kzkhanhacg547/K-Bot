module.exports.config = {
  name: "loli",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh, Tiny",
  description: "Ảnh gái loli cực chill!",
  commandCategory: "Hình ảnh",
  usages: "loli",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":""
  }
};

const request = require('request');
const fs = require("fs");

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const threadID = event.threadID;

  const imageUrls = await Promise.all(Array.from({ length: 3 }, async () => {
    const res = await axios.get('http://toan-culi.tutoan205.repl.co/images/loli');
    return res.data.url;
  }));

  const attachments = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));

  const res = await axios.get(`https://sex.accountkz.repl.co/thinhv2`);
  var thinh = res.data.url;
  const moment = require("moment-timezone");
  var gio =
moment.tz('Asia/Ho_Chi_Minh').format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
 if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  api.sendMessage({
    body: `『✪』𝗔̉𝗻𝗵 𝗹𝗼𝗹𝗶 𝗰𝘂̛̣𝗰 𝗰𝘂𝘁𝗲 ><\n『💓』 𝗧𝗵𝗶́𝗻𝗵: 『 ${thinh} 』\n═══════════════\n${gio} || ${thu}`,
    attachment: attachments
  }, threadID);
};
