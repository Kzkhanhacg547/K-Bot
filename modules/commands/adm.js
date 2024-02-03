module.exports.config = {
  name: "adm",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Kz Khánh",
  description: "",
  commandCategory: "Admin",
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
  if (typeof thread["adm"] !== "undefined" && thread["chill"] == false) return;
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
  var msg = {
    body: `🌟====𝐓𝐡ô𝐧𝐠 𝐓𝐢𝐧 𝐀𝐝𝐦𝐢𝐧====🌟
  👀 Tên: 𝐁ù𝐢 𝐕ă𝐧 𝐊𝐡á𝐧𝐡
  👤 Giới tính: 𝐍𝐚𝐦
  🙄 Sinh ngày: 𝟏𝟎/𝟏𝟏/𝟐𝟎𝟎𝟕 
  💫 Chiều cao × cân nặng: 𝟏𝐦𝟔𝟓 × 𝟓𝟒𝐤𝐠
  😎 Quê quán: 𝐇ả𝐢 𝐃ươ𝐧𝐠 
  🤔 Nơi ở: 𝐆𝐢𝐚 𝐋𝐚𝐢
  🌸 Cung: 𝐁ọ 𝐂ạ𝐩
  🌸 Tính cách: Quen Lâu Là Biết ❤️
  📱 Facebook: https://fb.me/kzkhanh547
      [ ✰ ]=== [  𝐊𝐳 𝐁𝐨𝐭𝐭 ] ===[ ✰ ]
[ ⚠️ ] 𝐍𝐡ữ𝐧𝐠 𝐥ư𝐮 ý 𝐤𝐡𝐢 𝐬ử 𝐝ụ𝐧𝐠 𝐛𝐨𝐭 𝐜ủ𝐚 𝐦ì𝐧𝐡 𝐧𝐞𝐤 :
[ 🛩 ] 𝙺𝚑ô𝚗𝚐 𝚜𝚙𝚊𝚖 𝚋𝚘𝚝
[ 🛩 ] 𝙺𝚑ô𝚗𝚐 𝚜ử 𝚍ụ𝚗𝚐 𝚋𝚘𝚝 𝚚𝚞á 𝚗𝚑𝚊𝚗𝚑 𝚝𝚛ê𝚗 3 𝚕ầ𝚗/120𝚜
[ 🛩 ] 𝙺𝚑ô𝚗𝚐 𝚛𝚎𝚙𝚘𝚛𝚝 𝚊𝚌𝚌 𝚋𝚘𝚝
[ 🛩 ] 𝚃𝚛𝚘𝚗𝚐 𝚚𝚞á 𝚝𝚛ì𝚗𝚑 𝚜ử 𝚍ụ𝚗𝚐 𝚗ế𝚞 𝚋𝚘𝚝 𝚕ỗ𝚒, 𝚑ã𝚢 𝚋á𝚘 𝚕ạ𝚒 𝚟ớ𝚒 𝚊𝚍𝚖𝚒𝚗 👑
[ 🌟 ] 𝙰𝚍𝚖𝚒𝚗 𝙱𝚘𝚝 𝚃𝚑𝚊𝚗𝚔𝚜 𝙲á𝚌 𝙱ạ𝚗 Đã 𝙻ự𝚊 𝙲𝚑ọ𝚗 𝙱𝚘𝚝 𝙽à𝚢 Để 𝚂ử 𝙳ụ𝚗𝚐
[ ⏰ ] Bây giờ là:  ${thu} | ${gio}
[ ❤️‍🩹 ] 𝐓𝐡í𝐧𝐡: ${thinh}
      [ ✰ ]=== [  𝐊𝐳 𝐁𝐨𝐭𝐭 ] ===[ ✰ ]`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/ad')).data.url,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["adm"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "adm thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
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

  if (typeof data["adm"] == "undefined" || data["adm"] == true) data["adm"] = false;
  else data["adm"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["adm"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}

//𝐕𝐃𝐀𝐍𝐈𝐌𝐄