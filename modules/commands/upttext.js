module.exports.config = {
  name: "upttext",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Vihoo",
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

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  const moment = require('moment-timezone');

  const timeStart = Date.now();
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);

 
  var { threadID, messageID, body, senderID } = event;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["upt"] !== "undefined" && thread["upt"] == false) return;

  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }

  //trả lời
  var msg = {
    body: `𝐓𝐡𝐨̛̀𝐢 𝐆𝐢𝐚𝐧 𝐁𝐨𝐭 𝐃𝐚̃ 𝐎𝐧𝐥𝐢𝐧𝐞 
================
${hours} 𝐠𝐢𝐨̛̀  ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲\n━━━━━━━━━━━━\n━━━━━━━━━━━━`,
  }

  // Gọi bot
  var arr = ["Upt"];

  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body.toUpperCase() === i.toUpperCase() || body === i || str === body) {
      return out(msg);
    }
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "upt thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["upt"] == "undefined" || data["upt"] == true) data["upt"] = false;
  else data["upt"] = true;

  await Threads.setData(threadID, { data });

  global.data.threadData.set(threadID, data);

  api.sendMessage(`${(data["upt"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}