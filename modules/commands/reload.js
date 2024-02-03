module.exports.config = {
  name: "reload",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Tpk",
  description: "Khởi động lại Bot",
  commandCategory: "Tiện ích",
  usages: "reload + time",
  cooldowns: 5
};
module.exports.onLoad= async ({ api, event, args, Users, Threads, Currencies })=>{
  const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  const { commands } = global.client;
  var os = require("os");
  var cpus = os.cpus();
  var chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined);
  const timeStart = Date.now();
  const moment = require("moment-timezone");
  const tpk1 = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? "Tốt ✔️":
  xuly > 10 && xuly < 100 ? "Ổn định 📊" : "deplay ";
var tpk = [
  "https://i.imgur.com/9Uk7O8O.jpeg",
"https://i.imgur.com/KfNBAeg.jpeg",
];
let image = [];
 for(let i = 0; i < 1; i++) {
   const a = tpk[Math.floor(Math.random()*tpk.length)];
    const stream = (await axios.get(a, {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const msg = {
    body: `💓 ==『 𝗦𝗘𝗥𝗩𝗘𝗥 𝗦𝗧𝗔𝗥𝗧 』== 💓
━━━━━━━━━━━━━━━━━━━
[⏰] 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpk1}
[🔰] 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻: ${global.config.version}
[🌸] 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${xuly} giây
[💖] 𝗗𝗲𝗹𝗮𝘆: ${Date.now() - timeStart}ms
[⚙️] 𝗟𝘂𝗼̂̀𝗻𝗴 𝗰𝗽𝘂: ${os.cpus().length}
[📚] 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${trinhtrang}
━━━━━━━━━━━━━━━━━━━
[💼] 𝗧𝗼̂̉𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${commands.size}
[🏠] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}
[👥] 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}
━━━━━━━━━━━━━━━━━━━
⬆️ 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘀𝗮𝗼 𝗸𝗵𝗶 𝘀𝘁𝗮𝗿𝘁 𝗰𝘂̉𝗮 𝗯𝗼𝘁
⚠️ 𝗟𝘂̛𝘂 𝘆́: 𝘀𝗮𝗼 𝗸𝗵𝗶 𝗿𝘂𝗻 𝘁𝗵𝗶̀ 𝘁𝗮̂̀𝗺 𝟱,𝟲 𝗴𝗶𝗮̂𝘆 𝗯𝗼𝘁 𝗺𝗼̛́𝗶 𝗴𝘂̛̉𝗶 đ𝗲̂̉ 𝗹𝗮̂́𝘆 𝗱𝗮𝘁𝗮 𝗰𝗵𝘂𝗮̂̉𝗻 𝗻𝗵𝗮̂́𝘁`,
    attachment: image
};
  setTimeout(() =>
api.sendMessage(msg, global.config.VTHIEN), 10000)
                 };
module.exports.run = async ({ api, event, args }) => {
  const { commands } = global.client;
  const axios = require('axios')
  const fs = require("fs");
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const moment = require("moment-timezone");
  const tpk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var os = require("os");
  var cpus = os.cpus();
  var chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined);
  const timeStart = Date.now();
 const permission = ["100081129610697"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("?", event.threadID, event.messageID);
  const { threadID, messageID } = event;
  var time = args.join(" ");
  var rstime = "9";
  if (!time) rstime = "10";
  else rstime = time;
  api.sendMessage({body: `🤖 ==== [ 𝐑𝐄𝐋𝐎𝐀𝐃 ] ==== 🤖\n━━━━━━━━━━━━━━━━━━━\n⚙️ 𝗕𝗼𝘁 𝘀𝗲̃ 𝘁𝗶𝗲̂́𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗿𝗲𝗹𝗼𝗮𝗱 𝘀𝗮𝘂 ${rstime} 𝗴𝗶𝗮̂𝘆 𝗻𝘂̛̃𝗮 
⏰ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${tpk}
📊 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝗶́ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶: ${speed}𝗠𝗛𝘇
↪️ 𝗦𝗼̂́ 𝗹𝘂𝗼̂̀𝗻𝗴 𝗖𝗣𝗨: ${os.cpus().length}
💞 đ𝗼̣̂ 𝘁𝗿𝗲̂̃ 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶: ${Date.now() - timeStart}𝗺𝘀\n━━━━━━━━━━━━━━━━━━━\n💓 𝗦𝗮𝘂 𝗸𝗵𝗶 𝗯𝗼𝘁 𝗿𝗲𝗹𝗼𝗮𝗱 𝗯𝗼𝘁 𝘀𝗲̃ 𝗴𝘂̛̉𝗶 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗮𝘂 𝗸𝗵𝗶 𝗿𝘂𝗻 𝗼̛̉ 𝗶𝗯 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/loli')).data.url,
method: "GET",
responseType: "stream"
})).data
     }, event.threadID, event.messageID);
  return setTimeout(() => { api.sendMessage("💨 𝗕𝗼𝘁 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗥𝗲𝗹𝗼𝗮𝗱 𝗕𝗼𝘁 !",event.threadID,() => process.exit(1) )},	rstime * 1000);
};
