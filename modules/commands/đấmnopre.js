module.exports.config = {
  name: "Đấmnopre",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Kz Khánh",
  description: "",
  commandCategory: "Hành động",
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
  if (typeof thread["Đấm"] !== "undefined" && thread["Đấm"] == false) return;
  const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  let name = await Users.getNameUser(event.senderID);
  if (senderID == api.getCurrentUserID() || !body.includes("Đấm")) return; // Nếu không có "Ôm" trong tin nhắn thì return
  const { commands } = global.client;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }

  var mention = Object.keys(event.mentions)[0];
  let tag = event.mentions[mention].replace("@", "");
  //trả lời
  var link = [
"https://i.imgur.com/RfOn1ww.gif", 
"https://i.postimg.cc/SNX8pD8Z/13126.gif",
"https://i.postimg.cc/TYZb2gJT/146.g7506881-1016b5fd386cf30488508cf6f0a2bee5if",
"https://i.postimg.cc/fyV3DR33/anime-punch.gif",
"https://i.postimg.cc/P5sLnhdx/onehit-30-5-2016-3.gif",
  ];
  var callback = () => {
    var msg = {
      body: `${tag},   𝗕𝗮̣𝗻 𝘁𝗵𝗮̣̂𝘁 𝗹𝗮̀ 𝘅𝗮̀𝗺 𝗹𝗼̂̀𝗻 𝗺𝗶̀𝗻𝗵 𝘅𝗶𝗻 𝗽𝗵𝗲́𝗽 Đ𝗮̂́𝗺 𝗰𝗵𝗲̂́𝘁 𝗰𝗼𝗻 𝗺𝗲̣ 𝗯𝗮̣𝗻 𝗻𝗵𝗲́ 🎀`,
      attachment: fs.createReadStream(__dirname + "/cache/om.gif")
    };
    api.sendMessage(msg, threadID, messageID)
      .then(() => fs.unlinkSync(__dirname + "/cache/om.gif"));
  }
  return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/om.gif"))
    .on("close", () => callback());
  // Gọi bot
  var arr = [`Đấm @${mention}`];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "Đấm thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "Đấm success!",
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
  if (!body.includes("Đấm")) return; // Nếu không có "Đấm"," trong tin nhắn thì return
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["Đấm"] == "undefined" || data["Đấm"] == true) data["Đấm"] = false;
  else data["Đấm"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["Đấm"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}