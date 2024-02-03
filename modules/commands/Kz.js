module.exports.config = {
  name: "Kz",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "sos", 
  commandCategory: "Noprefix",
  usages: "¹",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};

function random(arr) {
var rd = arr[Math.floor(Math.random() * arr.length)];
    return rd;
        };
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require("axios")
  const picture = (await axios.get(`https://i.imgur.com/bPOWt5P.jpeg`, { responseType: "stream"})).data
      const moment = require("moment-timezone");
      const timeStart = Date.now();
  const timeupt = process.uptime(),
    hoursupt = Math.floor(timeupt / (60 * 60)),
    minutesupt = Math.floor((timeupt % (60 * 60)) / 60),
    secondsupt = Math.floor(timeupt % 60);
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const t = Date.parse("February 10, 2024 00:00:00") - Date.parse(new Date());
  const s = Math.floor( (t/1000) % 60 );
    const m = Math.floor( (t/1000/60) % 60 );
    const h = Math.floor( (t/(1000*60*60)) % 24 );
    const d = Math.floor( t/(1000*60*60*24) );
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/cadao`);
var cadao = res.data.data;
  const namebot = global.config.BOTNAME;
  const kz = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var thinh = kz.data.data;
  const kz2 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/danhngon`);
var danhngon = kz2.data.data;
  var nameThread = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
  const kzhoi = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/hoi`);
  var cauhoi = kzhoi.data.data;
  const ex = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/kinhnghiem`);
var experience = ex.data.data;
  const fast = global.nodemodule["fast-speedtest-api"];
  const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
  const resault = await speedTest.getSpeed();
    var tocdo = resault + " Mbps";
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? "Tốt ✔️":
  xuly > 10 && xuly < 100 ? "𝐆𝐨𝐨𝐝👍" : "𝐃𝐞𝐥𝐚𝐲 ";
  const icon = [""];
  if (body.toLowerCase() == "dấu lệnh" || (body.toLowerCase() == "Kz") ||  (body.toLowerCase() == "kz") || (body.toLowerCase() == "dùng sao?")) {
       api.sendMessage({body: `====『 𝗣𝗥𝗘𝗙𝗜𝗫 』====\n━━━━━━━━━━━━━━━━\n❍ 𝐁𝐨𝐱: ${nameThread}\n➮ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘅 𝗹𝗮̀: ${prefix}\n❃ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̀: ${global.config.PREFIX}\n➥ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${client.commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n☑ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁: ${global.data.allUserID.length}\n🏘 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n௹ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${trinhtrang} \n𖤼 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms\n© 𝐓𝐨̂́𝐜 Đ𝐨̣̂ 𝐋𝐨𝐚𝐝: ${tocdo}\n▣ ${namebot} đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜\n→      ${hoursupt}: ${minutesupt} : ${secondsupt}\n⪼ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻: 1.2.14\n✮ 𝐂𝐚 𝐝𝐚𝐨: ${cadao}\nღ 𝐓𝐡í𝐧𝐡: ${thinh}\n☘︎ 𝐃𝐚𝐧𝐡 𝐧𝐠ô𝐧: ${danhngon}\n❉ 𝐊𝐢𝐧𝐡 𝐧𝐠𝐡𝐢ệ𝐦 𝐜ủ𝐚 𝐛𝐨𝐭: \n${experience}\n➫ 𝐓ô𝐢 đố 𝐛ạ𝐧 𝐭𝐫ả 𝐥ờ𝐢: ${cauhoi}\n❥ 𝐒ử 𝐝ụ𝐧𝐠 𝐯𝐮𝐢 𝐯ẻ\n→ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "❤" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝐥𝐢𝐬𝐭 𝐀𝐝𝐦𝐢𝐧\n➠ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 𝗰𝗵𝗼 𝗧𝗲̂́𝘁 𝗔̂𝗺 𝗹𝗶̣𝗰𝗵\n    → ${d} 𝗻𝗴𝗮̀𝘆 ${h} 𝘁𝗶𝗲̂́𝗻𝗴 ${m} 𝗽𝗵𝘂́𝘁 ${s} 𝗴𝗶𝗮̂𝘆 ❃\n━━━━━━━━━━━━━━━\n©️ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} (${thu})`, attachment: (await axios.get((await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/images/KzGIF`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }
//ko api thì attachment: (picture)}, event.threadID, event.messageID);
module.exports.run = async ({ api, event, args, Threads }) => {
                          }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
  const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return;
 api.unsendMessage(handleReaction.messageID);
    var msg =`==== [ 𝗠𝗘𝗡𝗨 𝗔𝗗𝗠𝗜𝗡 ] ====
━━━━━━━━━━━━━━━━━━\n\n𝟭. 𝐊𝐳_𝐊𝐡á𝐧𝐡 ( 𝗮𝗱𝗺𝗶𝗻 𝗰𝗵𝗶́𝗻𝗵 )\n𝟮. 𝐘𝐞̂́𝐧 𝐍𝐡𝐢👾\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        return api.sendMessage({body: msg, attachment: (await axios.get((await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/gaiaodai`)).data.url,  {
                    responseType: 'stream'
                })).data},event.threadID, 
                              (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            });
  
})
                               }

module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`𝗫𝗶𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 đ𝗼̛̣𝗶 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘅𝘂̛̉ 𝗹𝘆́ !`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "Kz" :
          case "admin 1":
        case "1": {
          const axios = require('axios');
          const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var thinh = res.data.data;
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `🌟====𝐓𝐡ô𝐧𝐠 𝐓𝐢𝐧 𝐀𝐝𝐦𝐢𝐧====🌟
  👀 Tên: 𝐁ù𝐢 𝐕ă𝐧 𝐊𝐡á𝐧𝐡
  👤 Giới tính: 𝐍𝐚𝐦
  🙄 Sinh ngày: 𝟏𝟎/𝟏𝟏/𝟐𝟎𝟎𝟕 
  💫 Chiều cao / cân nặng: 𝟏𝐦𝟔𝟓 × 𝟓𝟒𝐤𝐠
  😎 Quê quán: 𝐇ả𝐢 𝐃ươ𝐧𝐠 
  🤔 Nơi ở: 𝐆𝐢𝐚 𝐋𝐚𝐢
  🌸 Cung: 𝐁ọ 𝐂ạ𝐩
  🌸 Tính cách: 𝐐𝐮𝐞𝐧 𝐋𝐚̂𝐮 𝐋𝐚̀ 𝐁𝐢𝐞̂́𝐭 ❤️
  📱 Facebook: https://fb.me/kzkhanh547
      [ ✰ ]=== [  𝐊𝐳 𝐁𝐨𝐭𝐭 ] ===[ ✰ ]
[ ⚠️ ] 𝐍𝐡ữ𝐧𝐠 𝐥ư𝐮 ý 𝐤𝐡𝐢 𝐬ử 𝐝ụ𝐧𝐠 𝐛𝐨𝐭 𝐜ủ𝐚 𝐦ì𝐧𝐡 𝐧𝐞𝐤 :
[ 🛩 ] 𝙺𝚑ô𝚗𝚐 𝚜𝚙𝚊𝚖 𝚋𝚘𝚝
[ 🛩 ] 𝙺𝚑ô𝚗𝚐 𝚜ử 𝚍ụ𝚗𝚐 𝚋𝚘𝚝 𝚚𝚞á 𝚗𝚑𝚊𝚗𝚑 𝚝𝚛ê𝚗 3 𝚕ầ𝚗/120𝚜
[ 🛩 ] 𝙺𝚑ô𝚗𝚐 𝚛𝚎𝚙𝚘𝚛𝚝 𝚊𝚌𝚌 𝚋𝚘𝚝
[ 🛩 ] 𝚃𝚛𝚘𝚗𝚐 𝚚𝚞á 𝚝𝚛ì𝚗𝚑 𝚜ử 𝚍ụ𝚗𝚐 𝚗ế𝚞 𝚋𝚘𝚝 𝚕ỗ𝚒, 𝚑ã𝚢 𝚋á𝚘 𝚕ạ𝚒 𝚟ớ𝚒 𝚊𝚍𝚖𝚒𝚗 👑
[ 🌟 ] 𝙰𝚍𝚖𝚒𝚗 𝙱𝚘𝚝 𝚃𝚑𝚊𝚗𝚔𝚜 𝙲á𝚌 𝙱ạ𝚗 Đã 𝙻ự𝚊 𝙲𝚑ọ𝚗 𝙱𝚘𝚝 𝙽à𝚢 Để 𝚂ử 𝙳ụ𝚗𝚐
       █░▄▀░▀▀▀█
       █▀▄░░░▄▀░
       ▀░▀▀░▀▀▀▀
[ ❤️‍🩹 ] 𝐓𝐡í𝐧𝐡: ${thinh}
      [ ✰ ]=== [  𝐊𝐳 𝐁𝐨𝐭𝐭 ] ===[ ✰ ]`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/ad')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "" :
            case "" :
          case "admin 2":
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻: 𝐓𝐫𝐚̂̀𝐧 𝐓𝐡𝐢̣ 𝐘𝐞̂́𝐧 𝐍𝐡𝐢
🎟️  𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: 𝐂𝐡𝐢𝐁𝐢
🌹 𝐍𝐚̆𝐦 𝐬𝐢𝐧𝐡: 𝟐𝟎𝟎𝟕
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐮̛̃
📅 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟏𝟎 - 𝟑
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟏𝐦𝟔𝟓 
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐍𝐢𝐧𝐡 𝐁𝐢̀𝐧𝐡
🏠 𝗡𝗼̛𝗶 𝗼̛̉: 𝐓𝐡𝐚̀𝐧𝐡 𝐩𝐡𝐨̂́ 𝐇𝐨̂̀ 𝐂𝐡𝐢́ 𝐌𝐢𝐧𝐡
💞 𝗖𝘂𝗻𝗴: 𝐒𝐨𝐧𝐠 𝐍𝐠𝐮̛
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: ...
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/yennhy27.chibi
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 ❤ 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ ❤`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdnhac')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 3 || choose < 1) return api.sendMessage("𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
    }