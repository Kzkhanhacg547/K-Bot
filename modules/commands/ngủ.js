module.exports.config = {
  name: "ngủ",
  version: "1.0.0",
  hasPermssion: 2,
  credit: "Sam",
  description: "ngủ gửi sticker",
  commandCategory: "Tiện ích",
  usages: "[text]",
  cooldowns: 0
}

module.exports.handleEvent = async ({ event, api, Users }) => {
const moment = require("moment-timezone");
  var time = moment.tz('Asia/Ho_Chi_Minh').format('HH : mm : ss  -  DD/MM/YYYY');
  let KEY = [ 
    "ngủ",
    "tạm biệt",
    "goodbye",
    "hẹn gặp lại",
    "ngủ ngon",
    "đi ngủ",
    "nnmđ",
    "nn",
    "Nnmđ",
    "Mn ngủ ngon",
    "Nnmđ nhé mn",
    "Ngủ",
    "Đi ngủ",
    "Ngủu",
    "Nn",
    "Nnmđ",
    "Ngủ ngon nha mn",
    "nnmđ nhé mn",
    "ae nn",
    "Ae nn",
    "mn ngủ ngon",
    "Mn ngủ ngon",
    "Mn nn",
    "mn nn"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["ngủ"] == "undefined", thread["ngủ"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "526224854777613",
      "1841028592616583",
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    let data2 = [
      "𝘁𝗼̂́𝘁 𝗹𝗮̀𝗻𝗵",
      "𝘃𝘂𝗶 𝘃𝗲̉"
    ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "𝘀𝗮́𝗻𝗴 𝘁𝗶𝗻𝗵 𝗺𝗼̛" : 
    hours > 401 && hours <= 700 ? "𝘀𝗮́𝗻𝗴 𝘀𝗼̛́𝗺" :
    hours > 701 && hours <= 1000 ? "𝘀𝗮́𝗻𝗴" :
    hours > 1001 && hours <= 1200 ? "𝘁𝗿𝘂̛𝗮" : 
    hours > 1201 && hours <= 1700 ? "𝗰𝗵𝗶𝗲̂̀𝘂" : 
    hours > 1701 && hours <= 1800 ? "𝗰𝗵𝗶𝗲̂̀𝘂 𝘁𝗮̀" : 
    hours > 1801 && hours <= 2100 ? "𝘁𝗼̂́𝗶" : 
    hours > 2101 && hours <= 2400 ? "𝘁𝗼̂́𝗶 𝗺𝘂𝗼̣̂𝗻" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = `🥨 === [ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 ] === 🥨\n━━━━━━━━━━━━━━━━━━━\n[😘] → 𝗖𝗵𝘂́𝗰 ${name} 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 𝗺𝗼̛ đ𝗲̣𝗽 𝗻𝗵𝗼́ 🥺❤️\n[🌱] → 𝗦𝗼̛́𝗺 𝗾𝘂𝗮𝘆 𝗹𝗮̣𝗶 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝗻𝗵𝗮, 𝘆𝗲̂𝘂 ${name} 𝗻𝗵𝗶𝗲̂̀𝘂 😍\n━━━━━━━━━━━━━━━━━━━\n${time}`
    api.sendMessage({body: msg, mentions ,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/sleep')).data.url,
method: "GET",
responseType: "stream"
})).data
} ,event.threadID,(e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
      }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": `${this.config.name} thành công`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["ngủ"] == "undefined" || data["ngủ"] == true) data["ngủ"] = false;
  else data["ngủ"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["ngủ"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
  }