module.exports.config = {
  name: "time",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "TNT",// mod by vthien 
  description: "giờ",
  commandCategory: "Cộng cụ",
  usages: "timee",
  cooldowns: 5,
  depndencies: {
      "axios": ""
  }
};

module.exports.run = async function ({ api, event,args,client,Users,Threads,__GLOBAL,Currencies }) {
 const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
  const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const moment = require("moment-timezone"); 
  var vthien = moment.tz('Asia/Ho_Chi_Minh').format('HH 𝗴𝗶𝗼̛̀ mm 𝗽𝗵𝘂́𝘁 ss 𝗴𝗶𝗮̂𝘆 - 𝗡𝗴𝗮̀𝘆 DD 𝘁𝗵𝗮́𝗻𝗴 MM 𝗻𝗮̆𝗺 YYYY');
var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗡𝗵𝗮̣̂𝘁'
if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗛𝗮𝗶'
if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮'
if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝗧𝘂̛'
if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗡𝗮̆𝗺'
if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮̉𝘆'
  const dateNow = Date.now();
  const time = process.uptime(),
        ti = Math.floor(time / (60 * 60)),
        en = Math.floor((time % (60 * 60)) / 60),
        tit = Math.floor(time % 60);
  const threadInfo = await api.getThreadInfo(event.threadID)
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
async function streamURL(url, mime='jpg') {
  const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
  downloader = require('image-downloader'),
  fse = require('fs-extra');
  await downloader.image({
      url, dest
  });
  setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
  return fse.createReadStream(dest);
};
      var getlink = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data;
      var day = getlink.data.date;
  var name = await Users.getNameUser(event.senderID);
  var tnt = event.senderID;
const res1 = await axios.get(`https://randomapi.kzbott.repl.co/images/girl`);
const res2 = await axios.get(`https://randomapi.kzbott.repl.co/images/girl`);
const res3 = await axios.get(`https://randomapi.kzbott.repl.co/images/girl`);
const res4 = await axios.get(`https://randomapi.kzbott.repl.co/images/girl`);
const res5 = await axios.get(`https://randomapi.kzbott.repl.co/images/girl`);
const res6 = await axios.get(`https://randomapi.kzbott.repl.co/images/girl`);
var data1 = res1.data.url;
var array = [];
var data2 = res2.data.url;
var data3 = res3.data.url;
var data4 = res4.data.url;
var data5 = res5.data.url;
var data6 = res6.data.url;
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
  array.push(downloadfile1);
  array.push(downloadfile2);
  array.push(downloadfile3);
  array.push(downloadfile4);
  array.push(downloadfile5);
  array.push(downloadfile6);
api.sendMessage({
    body:  `⏰ === [ 𝗦𝗘𝗩𝗘𝗥 𝗧𝗜𝗠𝗘 ] === ⏰\n━━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${vthien}\n[📅] → 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀: ${thu}\n[🌟] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${name}\n[🔗] → 𝗟𝗶𝗻𝗸 𝗙𝗯: https://wwww.facebook.com/${tnt}\n[🎀] → 𝗨𝗶𝗱: ${tnt}\n[⌛] → 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹 đ𝘂̛𝗼̛̣𝗰: ${ti} 𝗚𝗶𝗼̛̀ ${en} 𝗣𝗵𝘂́𝘁 ${tit} 𝗚𝗶𝗮̂𝘆\n━━━━━━━━━━━━━━━━━━━\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 '❤' đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗶𝗺𝗲 𝗸𝗵𝘂 𝘃𝘂̛̣𝗰 𝗸𝗵𝗮́𝗰`,attachment:
array},event.threadID, (err, info) => {
  global.client.handleReaction.push({
    name: this.config.name, 
    messageID: info.messageID,
    author: event.senderID,
  })
  },event.messageID);
   }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
const moment = require("moment-timezone");
var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
async function streamURL(url, mime='jpg') {
  const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
  downloader = require('image-downloader'),
  fse = require('fs-extra');
  await downloader.image({
      url, dest
  });
  setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
  return fse.createReadStream(dest);
};

let threadInfo = await api.getThreadInfo(event.threadID);
let threadName = threadInfo.threadName;
let id = threadInfo.threadID;
let sex = threadInfo.approvalMode;
var pd = sex == false ? 'Tắt' : sex == true ? 'Bật' : '\n';
var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
 var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
 var gio3 = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
 var gio4 = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
 var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
 var gio6 = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");
 var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
var gio8 = moment.tz("Europe/Lisbon").format("HH:mm:ss || D/MM/YYYY");
var gio9 = moment.tz("Asia/Jordan").format("HH:mm:ss || D/MM/YYYY");
var gio10 = moment.tz("Asia/Lao").format("HH:mm:ss || D/MM/YYYY");
var gio11 = moment.tz("Asia/Thai_Lan").format("HH:mm:ss || D/MM/YYYY");
var gio12 = moment.tz("Asia/Brunei").format("HH:mm:ss || D/MM/YYYY");
let color = threadInfo.color;
let icon = threadInfo.emoji;
let threadMem = threadInfo.participantIDs.length;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
api.sendMessage({
    body: `🌐 === [ 𝗦𝗘𝗩𝗘𝗥 𝗧𝗜𝗠𝗘 ] == 🌐\n━━━━━━━━━━━━━━━━━━━\n🌐𝟭.𝗧𝗶𝗺𝗲 𝗟𝗼𝗻𝗱𝗼𝗻: ${gio2}\n🌐𝟮.𝗧𝗶𝗺𝗲 𝗕𝗿𝗮𝘀𝗶𝗹𝗶𝗮: ${gio1} \n🌐𝟯.𝗧𝗶𝗺𝗲 𝗦𝗲𝗼𝘂𝗹: ${gio3}\n🌐𝟰.𝗧𝗶𝗺𝗲 𝗧𝗼𝗸𝘆𝗼: ${gio4}\n🌐𝟱.𝗧𝗶𝗺𝗲 𝗡𝗲𝘄𝗬𝗼𝗿𝗸: ${gio5}\n🌐𝟲.𝗧𝗶𝗺𝗲 𝗞𝘂𝗮𝗹𝗮 𝗟𝘂𝗺𝗽𝘂𝗿: ${gio6}\n🌐𝟳.𝗧𝗶𝗺𝗲 𝗣𝗮𝗿𝗶𝘀: ${gio7}\n🌐𝟴.𝗧𝗶𝗺𝗲 𝗟𝗶𝘀𝗯𝗼𝗻: ${gio8}\n🌐𝟵.𝗧𝗶𝗺𝗲 𝗝𝗼𝗿𝗱𝗮𝗻: ${gio9}\n🌐𝟭𝟬.𝗧𝗶𝗺𝗲 𝗟𝗮̀𝗼: ${gio10}\n🌐𝟭𝟭.𝗧𝗶𝗺𝗲 𝗧𝗵𝗮́𝗶 𝗟𝗮𝗻: ${gio11}\n🌐𝟭𝟮.𝗧𝗶𝗺𝗲 𝗕𝗿𝘂𝗻𝗲𝗶: ${gio12}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘅𝗲𝗺 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡 𝗻𝗵𝗼́𝗺 𝘃𝗮̀ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧\n[🍒] → 𝟭: 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n[🍑] → 𝟮: 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁`,
         attachment: await streamURL(threadInfo.imageSrc)
},event.threadID, (err, info) => {

          global.client.handleReply.push({
              type: "choosee",
              name: this.config.name,
              author: event.senderID,
              messageID: info.messageID
          })
      })
  }
module.exports.handleReply = async function ({
  args,
  event,
  Users,
  api,
  handleReply,
  Currencies,
  permssion,
  getText,
  __GLOBAL
}) {
const axios = require("axios");
const fs = require("fs-extra");
      api.sendMessage(`[🌟] → 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗺𝗼̣̂𝘁 𝘁𝗶́ 𝗻𝗵𝗲́, 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗹𝗮̂́𝘆 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻.`, event.threadID, (err, info) =>
setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
const request = require("request");
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
let data = (await Currencies.getData(event.senderID)).ghepTime;


  switch (handleReply.type) {
  case "choosee": {
      switch (event.body) {
        case "" :
        case "":
        case "1": {
       var threadInfo = await api.getThreadInfo(event.threadID);
  let qtv = threadInfo.adminIDs.length;
  var listad = '';
  var qtv2 = threadInfo.adminIDs;
  dem = 1;
  for (let i = 0; i < qtv2.length; i++) {
      const info = (await api.getUserInfo(qtv2[i].id));
      const name = info[qtv2[i].id].name;
      listad += '' + `${dem++}` + '. ' + name + '\n';
  }

  api.sendMessage(
      `[💋] → 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 ${qtv} 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡:\n ${listad}`,event.threadID,event.messageID)
}break;
      case "2": {
        const { ADMINBOT } = global.config;
         listAdmin = ADMINBOT || config.ADMINBOT ||  [];
          var msg = [];
          for (const idAdmin of listAdmin) {
              if (parseInt(idAdmin)) {
                const tnt = (await Users.getData(idAdmin)).name
                  msg.push(`→  ${tnt}\n𝗟𝗶𝗻𝗸: fb.me/${idAdmin}`);              
              }
          }
         return api.sendMessage(`===[ 𝗗𝗮𝗻𝗵 𝗦𝗮́𝗰𝗵 𝗔𝗗𝗠𝗜𝗡 ]===\n${msg.join("\n")}\n`, event.threadID, event.messageID);
}break;
        default:
         const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            if (choose > 2 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
     }
  }
}
}