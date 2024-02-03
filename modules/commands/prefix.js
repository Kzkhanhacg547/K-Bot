module.exports.config = {
  name: "prefix",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Kz Khánh",
  description: "",
  commandCategory: "Noprefix",
  usages: "noprefix",
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
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - DD/MM/YYYY");

  var {
    threadID,
    messageID,
    body,
    senderID
  } = event;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["prefix","Prefix"] !== "undefined" && thread["prefix","Prefix"] == false) return;
const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  let name = await Users.getNameUser(event.senderID);
  if (senderID == api.getCurrentUserID()) return;
const namebot = global.config.BOTNAME;
  const PREFIX = config.PREFIX;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const { commands } = global.client; 
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }

  const imageUrls = await Promise.all(Array.from({length: 2}, async () => {
  const res = await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl');
  return res.data.url;
}));
const attachments = await Promise.all(imageUrls.map(async (url) => {
  return (await global.nodemodule["axios"]({ url, method: "GET", responseType: "stream" })).data;
}));
  //trả lời
var msg = {
  body: `====『 𝙿𝚁𝙴𝙵𝙸𝚇 』====
    ▱▱▱▱▱▱▱▱▱▱▱▱▱
    →𝙿𝚛𝚎𝚏𝚒𝚡 𝚌𝚞̉𝚊 𝚗𝚑𝚘́𝚖: ${prefix}
    →𝙿𝚛𝚎𝚏𝚒𝚡 𝚑𝚎̣̂ 𝚝𝚑𝚘̂́𝚗𝚐: ${PREFIX}
    →𝚃𝚎̂𝚗 𝚋𝚘𝚝:  ${namebot}
    →𝙱𝚘𝚝 𝚑𝚒𝚎̣̂𝚗 𝚌𝚘́ ${client.commands.size} 𝚕𝚎̣̂𝚗𝚑
    →𝑃𝑖𝑛𝑔: ${Date.now() - timeStart}ms
    ▱▱▱
▱▱▱▱▱▱▱▱▱▱▱▱▱
『  ${timeNow} 』`,
  attachment: attachments
}
  // Gọi bot
  var arr = ["prefix","Prefix"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "prefix thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "prefix success!",
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

  if (typeof data["prefix","Prefix"] == "undefined" || data["prefix","Prefix"] == true) data["prefix","Prefix"] = false;
  else data["prefix","Prefix"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["prefix","Prefix"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}