module.exports.config = {
  name: "Hônnopre",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Kz Khánh",
  description: "",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 0,
  dependencies: {
    "fs-extra": "",
    "request": ""
  }
};

function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0,
    n = parseInt(bytes, 10) || 0;
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
  if (typeof thread["Hôn"] !== "undefined" && thread["Hôn"] == false) return;
  const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  let name = await Users.getNameUser(event.senderID);
  if (senderID == api.getCurrentUserID() || !body.includes("Hôn")) return; // Nếu không có "Ôm" trong tin nhắn thì return
  const { commands } = global.client;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }

  var mention = Object.keys(event.mentions)[0];
  let tag = event.mentions[mention].replace("@", "");
  //trả lời
  var link = [
 "https://i.postimg.cc/yxDKkJyH/02d4453f3eb0a76a87148433395b3ec3.gif",
"https://i.postimg.cc/nLTf2Kdx/1483589602-6b6484adddd5d3e70b9eaaaccdf6867e.gif",
"https://i.postimg.cc/Wpyjxnsb/574fcc797b21e-1533876813029926506824.gif",
"https://i.postimg.cc/xdsT8SVL/kiss-anime.gif",
  ];
  var callback = () => {
    var msg = {
      body: `${tag}, 𝗕𝗮𝗲 𝗰𝗵𝗼 𝗮𝗻𝗵 𝘁𝗵𝗼̛𝗺 𝗺𝗼̣̂𝘁 𝗰𝗮́𝗶, 𝗻𝗲̂́𝘂 𝗲𝗺 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗶́𝗰𝗵 𝘁𝗵𝗶̀ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘁𝗿𝗮̉ 𝗹𝗮̣𝗶 𝗮𝗻𝗵 𝗻𝗲̀ 💞`,
      attachment: fs.createReadStream(__dirname + "/cache/om.gif")
    };
    api.sendMessage(msg, threadID, messageID)
      .then(() => fs.unlinkSync(__dirname + "/cache/om.gif"));
  }
  return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/om.gif"))
    .on("close", () => callback());
  // Gọi bot
  var arr = [`Hôn @${mention}`];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "Hôn thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "Hôn success!",
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
    messageID,
    body
  } = event;
  if (!body.includes("Hôn")) return; // Nếu không có "Đá"," trong tin nhắn thì return
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["Hôn"] == "undefined" || data["Hôn"] == true) data["Hôn"] = false;
  else data["Hôn"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["Đá"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}