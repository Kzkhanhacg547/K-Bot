module.exports.config = {
  name: "tetduong",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Kz Khánh",
  description: "",
  commandCategory: "Tiện ích",
  usages: "",
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
  if (thu == 'Sund2025 00:00:00") - Date.parse(new Date());
  const s = Math.floor( (t/1000) % 60 );
  const m = Math.floor( (t/1000/60) % 60 );
  const h = Math.floor( (t/(1000*60*60)) % 24 );
  const d = Math.floor( t/(1000*60*60*24) );
  const { commands } = global.client;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }

  //trả lời
  var msg = {
    body: `➠ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 𝗰𝗵𝗼 𝗧𝗲̂́𝘁 𝐃𝐮̛𝐨𝐧𝐠 𝐋𝐢̣𝐜𝐡\n    → ${d} 𝗻𝗴𝗮̀𝘆 ${h} 𝘁𝗶𝗲̂́𝗻𝗴 ${m} 𝗽𝗵𝘂́𝘁 ${s} 𝗴𝗶𝗮̂𝘆 ❃`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/tetduong')).data.url,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["tết dương"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "tetduong thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "tetduong success!",
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

  if (typeof data["tetduong"] == "undefined" || data["tetduong"] == true) data["tetduong"] = false;
  else data["tetduong"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["tetduong"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}
