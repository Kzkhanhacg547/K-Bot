module.exports.config = {
  name: "\n3",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Tpk",
  description: "sailenh",
  commandCategory: "Tiện ích",
  usages: "Tiện ích",
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    var os = require("os");
  var cpus = os.cpus();
  var chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined);
  const timeStart = Date.now();
  /*const res = await axios.get(`https://tan.kizz-kinncuti.repl.co/images/cosplay`);
var tpk = res.data.url;*/
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
  const dateNow = Date.now();
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? "Tốt ✔️":
  xuly > 10 && xuly < 100 ? "Ổn định 📊" : "deplay ";
var tpk = [
  "https://i.imgur.com/d3LPo9d.jpeg",
"https://i.imgur.com/Ld414MY.jpeg",
"https://i.imgur.com/FHGbBel.jpeg",
"https://i.imgur.com/mxeIaMN.jpeg",
"https://i.imgur.com/jJedCAy.jpeg",
"https://i.imgur.com/qNU2aIw.jpeg",
"https://i.imgur.com/y7xwPp5.jpeg",
"https://i.imgur.com/SJFFVsn.jpeg",
"https://i.imgur.com/kyoEe3K.jpeg",
"https://i.imgur.com/4bBmlwm.jpeg",
"https://i.imgur.com/bAnoZ6I.jpeg",
"https://i.imgur.com/3iAQtgJ.jpeg",
"https://i.imgur.com/eXzDbCq.jpeg",
"https://i.imgur.com/njbOky4.jpeg",
"https://i.imgur.com/bl5V9er.jpeg",
"https://i.imgur.com/TS4eLOS.jpeg",
"https://i.imgur.com/eYLcmYw.jpeg",
"https://i.imgur.com/DGW5uy1.jpeg",
"https://i.imgur.com/xLAReHI.jpeg",
"https://i.imgur.com/hYUHZvd.jpeg",
"https://i.imgur.com/Qh5RUE4.jpeg",
"https://i.imgur.com/VlX2FFD.jpeg",
"https://i.imgur.com/vKrJtox.jpeg",
"https://i.imgur.com/I5rXAs1.jpeg",
"https://i.imgur.com/s2VI3w9.jpeg",
"https://i.imgur.com/hGrVKLA.jpeg",
"https://i.imgur.com/8wHsFl2.jpeg",
"https://i.imgur.com/i8HqieM.jpeg",
"https://i.imgur.com/9L2HnXb.jpeg",
"https://i.imgur.com/3UiRm0B.jpeg",
"https://i.imgur.com/VevAPqv.jpeg",
"https://i.imgur.com/pBMMx5R.jpeg",
"https://i.imgur.com/6CX5nmV.jpeg",
"https://i.imgur.com/fr9NXvz.jpeg",
"https://i.imgur.com/4jceamg.jpeg",
"https://i.imgur.com/yk8VGhl.jpeg",
"https://i.imgur.com/xKDK4Hc.jpeg",
"https://i.imgur.com/ep0zUWZ.jpeg",
"https://i.imgur.com/6kQMw6a.jpeg",
"https://i.imgur.com/Z1a1KxC.jpeg",
"https://i.imgur.com/dX8KNAq.jpeg",
"https://i.imgur.com/Zy2O584.jpeg",
"https://i.imgur.com/hkoQ5Ue.jpeg",
"https://i.imgur.com/iKtAAZ5.jpeg",
"https://i.imgur.com/swIK791.jpeg",
"https://i.imgur.com/etXCFVh.jpeg",
"https://i.imgur.com/OirP1ZH.jpeg",
"https://i.imgur.com/kfwBvUs.jpeg",
"https://i.imgur.com/Ud9SbrN.jpeg",
"https://i.imgur.com/ocgr6Ue.jpeg",
"https://i.imgur.com/CpnTdVz.jpeg",
"https://i.imgur.com/oGioFlL.jpeg",
"https://i.imgur.com/0JtU1du.jpeg",
"https://i.imgur.com/kP9NKyv.jpeg",
"https://i.imgur.com/9qH7W9l.jpeg",
"https://i.imgur.com/rn0HdXy.jpeg",
"https://i.imgur.com/qdu2mvP.jpeg",
"https://i.imgur.com/tBnVWr6.jpeg",
"https://i.imgur.com/PFUFtsT.jpeg",
"https://i.imgur.com/y1GI3nD.jpeg",
"https://i.imgur.com/PrAPlM7.jpeg",
"https://i.imgur.com/8JxaRwr.jpeg",
"https://i.imgur.com/uIxci9E.jpeg",
"https://i.imgur.com/SoicJLu.jpeg",
"https://i.imgur.com/L25fv7L.jpeg",
"https://i.imgur.com/Mwn8gAS.jpeg",
"https://i.imgur.com/hrCtxMn.jpeg",
"https://i.imgur.com/NCy70tv.jpeg",
"https://i.imgur.com/wCUZRei.jpeg", "https://i.imgur.com/rmBmkQS.jpeg", "https://i.imgur.com/f3mZI5M.jpeg", "https://i.imgur.com/M9u5jnc.jpeg",
"https://i.imgur.com/DVJkUZi.jpeg", "https://i.imgur.com/mqCcO7b.jpeg",
"https://i.imgur.com/2k45Y0Q.jpeg",
"https://i.imgur.com/uEWhCVu.jpeg",
"https://i.imgur.com/TzTN7TF.jpeg", "https://i.imgur.com/PfRFeJZ.jpeg", "https://i.imgur.com/A8BnEdB.jpeg", "https://i.imgur.com/2VrAIYu.jpeg", "https://i.imgur.com/2V130U8.jpeg",
"https://i.imgur.com/u8rpDrY.jpeg", "https://i.imgur.com/Q20VYTN.jpeg",
"https://i.imgur.com/nTPUii6.jpeg",
"https://i.imgur.com/aTdyuTz.jpeg",
"https://i.imgur.com/JDmCudx.jpeg",
"https://i.imgur.com/FMBbpR9.jpeg",
"https://i.imgur.com/53KZb7V.jpeg",
"https://i.imgur.com/5oOV4F7.jpeg", "https://i.imgur.com/gGUTX6S.jpeg", "https://i.imgur.com/d4nLOlm.jpeg",
"https://i.imgur.com/jyrIzGI.jpeg",
];
var so = [
  "2","3","4"
];
const tao = so[Math.floor(Math.random()*so.length)];
  let image = [];
 for(let i = 0; i < tao; i++) {
   const a = tpk[Math.floor(Math.random()*tpk.length)];
   const namebot = global.config.NAMEBOT;
    const stream = (await axios.get(a, {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const msg = {
    body: `💓 ==== [  ] ==== 💓\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗧𝗶𝗺𝗲: ${timeNow}\n⏳ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹: ${hours}:${minutes}:${seconds}\n⚙️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${trinhtrang}\n🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${xuly} 𝗴𝗶𝗮̂𝘆\n⏳ Đ𝗼̣̂ 𝘁𝗿𝗲̂̃: ${Date.now() - timeStart}ms
━━━━━━━━━━━━━━━━━━━━━━
👍 𝗫𝗲𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝗱𝘂̀𝗻𝗴
🥰 𝗫𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗮𝗱𝗺𝗶𝗻
😆 𝗖𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁 𝗰𝗼̛ 𝗯𝗮̉𝗻
💵 𝗖𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗰𝗮́𝗰𝗵 𝘁𝗵𝘂𝗲̂ 𝗯𝗼𝘁
😍 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗳𝗶𝗹𝗲 𝗯𝗼𝘁
━━━━━━━━━━━━━━━━━━━━━━
👑 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 𝗶𝗰𝗼𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`,
    attachment: image
};
    api.sendMessage(msg,event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID,reaction,messageID, userID } = event;
if (reaction == '👍') {
  api.unsendMessage(handleReaction.messageID);
var msg = `📗 ==== 𝗟𝗜𝗦𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ====📗 
━━━━━━━━━━━━━━━━━━━━━
𝟭. !𝗵𝗲𝗹𝗽 𝗮𝗹𝗹 𝗵𝗼𝗮̣̆𝗰 𝘁𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵
𝟮. 𝗱𝘂̀𝗻𝗴 !𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
𝟯. 𝗱𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻
𝟰. 𝗱𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸
𝟱. !𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅 
𝟲. !𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 
𝟳. !𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿
𝟴. !𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰
𝟵. !𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺
𝟭𝟬. !𝘆𝗼𝘂𝘁𝘂𝗯𝗲 & 𝘁𝗲̂𝗻 𝗰𝗹𝗶𝗽: 𝘁𝗮̉𝗶 𝗰𝗹𝗶𝗽 𝘁𝗿𝗲̂𝗻 𝘆𝘁𝗯
𝟭𝟭. !𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁
𝟭𝟮. !𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀
𝟭𝟯. !𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
𝟭𝟰. !𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿
𝟭𝟱. !𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆
𝟭𝟲. !𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻
𝟭𝟳. 𝗾𝗿 + 𝗾𝗿𝘀: 𝗹𝗮̀𝗺 𝗾𝗿 𝘃𝗮̀ 𝗾𝘂𝗲́𝘁 𝗾𝗿

🌸 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻  𝗗𝘂𝗻𝗴 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴
`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/images/loli')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID);
}
else if (reaction == '🥰') {
  api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`🌟====𝐓𝐡ô𝐧𝐠 𝐓𝐢𝐧 𝐀𝐝𝐦𝐢𝐧====🌟
  👀 Tên: 𝐁ù𝐢 𝐕ă𝐧 𝐊𝐡á𝐧𝐡
  👤 Giới tính: 𝐍𝐚𝐦
  🙄 Sinh ngày: 𝟏𝟎/𝟏𝟏/𝟐𝟎𝟎𝟕 
  💫 Chiều cao × cân nặng: 𝟏𝐦𝟔𝟓 × 𝟓𝟒𝐤𝐠
  😎 Quê quán: 𝐇ả𝐢 𝐃ươ𝐧𝐠 
  🤔 Nơi ở: 𝐆𝐢𝐚 𝐋𝐚𝐢
  🌸 Cung: 𝐁ọ 𝐂ạ𝐩
  🌸 Tính cách: Quen Lâu Là Biết ❤️
  📱 Facebook: https://fb.me/kzkhanh547
      [ ✰ ]=== [  𝐊𝐳 𝐁𝐨𝐭𝐭 ] ===[ ✰ ]`, event.threadID, event.messageID);
    }
  else if (reaction == '😆') {
    api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`❤️ =『 𝗖𝗔́𝗖𝗛 𝗗𝗨̀𝗡𝗚 𝗖𝗢̛ 𝗕𝗔̉𝗡 』=❤️

𝗛𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗼̛ 𝗯𝗮̉𝗻!

😻 𝗡𝗵𝗮̣̂𝗽 !𝗺𝗲𝗻𝘂 𝗵𝗼𝗮̣̆𝗰 !𝗵𝗲𝗹𝗽 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝘁𝗿𝗲̂𝗻 𝗕𝗼𝘁
🎊 𝗡𝗵𝗮̣̂𝗽 !𝗿𝘂𝗹𝗲 đ𝗲̂̉ 𝘅𝗲𝗺 𝗹𝘂𝗮̣̂𝘁 𝗻𝗵𝗼́𝗺
𝗻𝗲̂́𝘂 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗵𝗮̃𝘆 𝘁𝗵𝗲̂𝗺 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 
🍏 !𝗿𝘂𝗹𝗲 𝗮𝗱𝗱 + [𝗟𝘂𝗮̣̂𝘁 𝗡𝗵𝗼́𝗺] đ𝗲̂̉ 𝘁𝗵𝗲̂𝗺 𝗹𝘂𝗮̣̂𝘁
🌸 !𝗗𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 !𝗰𝗮𝗹𝗹𝗮𝗱 + [𝗟𝗼̛̀𝗶 𝗡𝗵𝗮̆́𝗻] 
đ𝗲̂̉ 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝗹𝗼̛̀𝗶 đ𝗲̂́𝗻 𝗮𝗱𝗺𝗶𝗻

𝗖𝗼́ 𝘁𝗵𝗮̆́𝗰 𝗺𝗮̆́𝗰 𝗵𝗮𝘆 𝘃𝗮̂́𝗻 đ𝗲̂̀ 𝗴𝗶̀ 𝘁𝗵𝗶̀ 𝗹𝗶𝗲̂𝗻 
☎️ 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/profile.php?id=kzkhanh547 `, event.threadID, event.messageID);
  }
else if (reaction == '💵') {
  api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`🔔 =====『 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 』=====🔔
━━━━━━━━━━━━━━━━━━━━━
💵 𝗖𝗮́𝗰𝗵 𝘁𝗵𝘂̛́𝗰 𝘁𝗵𝘂𝗲̂ 𝗯𝗼𝘁
🌸 𝗧𝗵𝘂𝗲̂ 𝗯𝗼𝘁 50k/1tháng
👑 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗵𝘂𝗲̂ đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝗹𝗮̀𝗺 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁
☎️ 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂: https://www.facebook.com/tony.derby.773
`, event.threadID, event.messageID);
}
  else if (reaction == '😍') {
    api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`
𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨!
Đ𝐚̂𝐲 𝐥𝐚̀ 𝐊𝐳 𝐁𝐎𝐓🌠 𝐦𝐨̣̂𝐭 𝐯𝐞𝐫𝐬𝐢𝐨𝐧 𝐜𝐮̉𝐚 𝐌𝐢𝐫𝐚𝐢 đ𝐮̛𝐨̛̣𝐜 𝐊𝐳 𝐊𝐡𝐚́𝐧𝐡𝐡 𝐩𝐡𝐚́𝐭 𝐭𝐫𝐢𝐞̂̉𝐧
𝐂𝐚̉𝐦 𝐨̛𝐧 đ𝐚̃ 𝐭𝐢𝐧 𝐭𝐮̛𝐨̛̉𝐧𝐠, 𝐥𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐊𝐳 𝐁𝐨𝐭
𝗠𝗼̣𝗶 𝘁𝗵𝗮̆́𝗰 𝗺𝗮̆́𝗰 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻
🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/kzkhanh547
`, event.threadID, event.messageID);
  }
    };