module.exports.config = {
  name: "lolinopre",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Kz Khánh",
  description: "",
  commandCategory: "Tiện ích",
  usages: "Noprefix",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.handleEvent = async ({
  args,
  event,
  api,
  Users
}) => {
  const fs = global.nodemodule["fs-extra"];
  const moment = require('moment-timezone');
  const timeStart = Date.now();
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  var {
    threadID,
    messageID,
    body,
    senderID
  } = event;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["loli"] !== "undefined" && thread["chill"] == false) return;
const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  let name = await Users.getNameUser(event.senderID);
  if (senderID == api.getCurrentUserID()) return;
const namebot = global.config.BOTNAME;
  const PREFIX = config.PREFIX;
  const { commands } = global.client; 
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var thinh = res.data.data;
  //trả lời
  const imageUrls = await Promise.all(Array.from({length: 6}, async () => {
  const res = await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/loli');
  return res.data.url;
}));
const attachments = await Promise.all(imageUrls.map(async (url) => {
  return (await global.nodemodule["axios"]({ url, method: "GET", responseType: "stream" })).data;
}));
var msg = {
  body: `𖤛𖤐==『 𝐋𝐨𝐥𝐢'𝐬 𝐏𝐡𝐨𝐭𝐨 』==𖤐𖤛\nღ 𝐓𝐡í𝐧𝐡: ${thinh}\n❏ 𝐏𝐫𝐞𝐟𝐢𝐱: ${PREFIX}\n:✯ 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}ms\n\n➠Bot đã online ${hours} giờ ${minutes} phút ${seconds} giây\n➠𝐍𝐨𝐰: ${thu}\n      ${gio}\n━━━━━━━━━━━━━`,
  attachment: attachments
}
  // Gọi bot
  var arr = ["loli"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "loli thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "loli success!",
  }
}

module.exports.run = async function({
  api,
  event,
  Threads,
  getText
}) {
  const {
    threadID,
    messageID
  } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["loli"] == "undefined" || data["loli"] == true) data["loli"] = false;
  else data["loli"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["loli"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}