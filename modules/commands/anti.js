const chalk = require('chalk');
module.exports.config = {
  name: "anti",
  version: "0.0.1",
  hasPermssion: 1,
  credits: "Tpk",
  description: "anti như tên",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 0
};

const totalPath = __dirname + '/bot/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
function handleByte(byte) {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  let i = 0, usage = parseInt(byte, 10) || 0;

  while(usage >= 1024 && ++i){
    usage = usage/1024;
  }

  return(usage.toFixed(usage < 10 && i > 0 ? 1 : 0) + ' ' + units[i]);
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'bot', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function({ api, args, event, Users, handleReply }) {
  const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  const picture = (await axios.get(`https://i.imgur.com/jwAbLs0.mp4`, { responseType: "stream"})).data
  const { threadID, messageID, senderID } = event;
   return api.sendMessage({body: "🥨 === [ 𝗔𝗡𝗧𝗜 𝗙𝗨𝗟𝗟 ] === 🥨\n━━━━━━━━━━━━━━━━━━━\n[ 𝟭 ] → 𝗢𝗻/𝗼𝗳𝗳 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝗹𝗲̂𝗻 𝗿𝗮𝗻𝗸 𝗰𝘂̉𝗮 𝗯𝗼𝘁 🌟\n[ 𝟮 ] → 𝗢𝗻/𝗼𝗳𝗳 𝗮𝗱𝗺𝗶𝗻𝗯𝗼𝘅𝗼𝗻𝗹𝘆 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝗰𝗵𝗶̉ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗱𝘂̀𝗻𝗴 𝗱𝗰 👑\n[ 𝟯 ] → 𝗢𝗻/𝗼𝗳𝗳 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗻𝘁𝗶𝗷𝗼𝗶𝗻 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝗰𝗮̂́𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻/𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 🔰\n[ 𝟰 ] → 𝗢𝗻/𝗼𝗳𝗳 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗵𝗼̂́𝗻𝗴 𝗰𝘂̛𝗼̛́𝗽 𝗯𝗼𝘅 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗻𝗮̀𝘆 𝗯𝗼𝘁 𝘀𝗲̃ 𝗴𝗼̛̃ 𝗮𝗹𝗹 𝗾𝘁𝘃/𝗸𝗲𝘆 𝘁𝗿𝗮́𝗻𝗵 𝗯𝗶̣ 𝗰𝘂̛𝗼̛́𝗽 𝗯𝗼𝘅 💞\n[ 𝟱 ] → 𝗢𝗻/𝗼𝗳𝗳 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗻𝘁𝗶𝗼𝘂𝘁 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝗻𝗮̀𝘆 𝗹𝘂́𝗰 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗼𝘂𝘁 𝗯𝗼𝘁 𝘀𝗲̃ 𝘁𝗮𝗴 𝗹𝗮̣𝗶 𝘁𝗿𝗮́𝗻𝗵 𝗵𝗮̀𝗻𝗵 𝘃𝗶 𝗼𝘂𝘁 𝗰𝗵𝘂̀𝗮 💓\n[ 𝟲 ] → 𝗢𝗻/𝗼𝗳𝗳 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝗸𝗵𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 𝗷𝗼𝗶𝗻𝗡𝗼𝘁𝗶 🌸\n[ 𝟳 ] → 𝗢𝗻/𝗼𝗳𝗳 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝗸𝗵𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗼𝘂𝘁 𝗻𝗵𝗼́𝗺 𝗹𝗲𝗮𝘃𝗲𝗡𝗼𝘁𝗶 🌺 \n[ 𝟴 ] → 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 👻\n[ 𝟵 ] → 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗯𝗼𝘅 😼\n[ 𝟭𝟬 ] → 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗼𝘅 📕\n━━━━━━━━━━━━━━━━━━\n[👉🏻] → 𝗤𝘂𝗮̉𝗻 𝗧𝗿𝗶̣ 𝗩𝗶𝗲̂𝗻 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻",attachment: (picture)
        }, threadID, (error, info) => {
            global.client.handleReply.push({
               name: this.config.name,
                    messageID: info.messageID,
                    ú: event.senderID,
                    type: "choosee",
            })
        }, event.messageID)
}

module.exports.handleReply = async function({ args, event, Users,Threads, api, permssion, handleReply }) {
  const { threadID, messageID, senderID } = event;
  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {  
        case "2": {
if (permssion < 1) return api.sendMessage("Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID);
        const { writeFileSync } = global.nodemodule["fs-extra"];
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'bot', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;  
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("→ 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐦𝐨𝐝𝐞 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐨𝐧𝐥𝐲 𝐜𝐡𝐢̉ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 🎀", threadID, messageID);
        } else {
            api.sendMessage("→ 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐦𝐨𝐝𝐞 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐨𝐧𝐥𝐲 𝐜𝐡𝐢̉ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 🎀", threadID, messageID);
            adminbox[threadID] = true;
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
    }break;
          case "1": {
            if (permssion < 1) return api.sendMessage("→ Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["rankup"] == "undefined" || data["rankup"] == false) data["rankup"] = true;
  else data["rankup"] = false;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`→ Đã ${(data["rankup"] == true) ? "bật" : "tắt"} thành công thông báo rankup ✔️`, event.threadID);
          }break;
        case "3": {
          if (permssion < 1) return api.sendMessage("→ Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('→ 𝐁𝐨𝐭 𝐜𝐚̂̀𝐧 𝐪𝐮𝐲𝐞̂̀𝐧 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐧𝐡𝐨́𝐦 💕', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`→ 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 ${(data.newMember == true) ? "bật" : "tắt"} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼̂́𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 ✔️`, event.threadID, event.messageID);
}break;
        case "4": {
          if (permssion < 1) return api.sendMessage("→ 𝗫𝗶𝗻 𝗹𝗼̂̃𝗶! 𝗹𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗰𝗵𝗶̉ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 𝗱𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰", threadID, messageID);
            const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('→ 𝗕𝗼𝘁 𝗰𝗮̂̀𝗻 𝗤𝘂𝗮̉𝗻 𝗧𝗿𝗶̣ 𝗩𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺 đ𝗲̂̉ 𝘁𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 𝗹𝗲̣̂𝗻𝗵!!', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`→ 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 ${(data["guard"] == true) ? "bật" : "tắt"} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗵𝗼̂́𝗻𝗴 𝗰𝘂̛𝗼̛́𝗽 𝗯𝗼𝘅 ✔️`, event.threadID, event.messageID);
}break;
        case "5": {
          if (permssion < 1) return api.sendMessage("→ 𝗹𝗼̂̃𝗶! 𝗹𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗰𝗵𝗶̉ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 𝗱𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰", threadID, messageID);
           var info = await api.getThreadInfo(event.threadID);
 let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
 else data["antiout"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`→ 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 ${(data["antiout"] == true) ? "bật" : "tắt"} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗵𝗼̂́𝗻𝗴 𝗼𝘂𝘁 𝗰𝗵𝘂̀𝗮 ✔️`, event.threadID);

}break;
          case "6": {
            if (permssion < 1) return api.sendMessage("→ 𝗫𝗶𝗻 𝗹𝗼̂̃𝗶! 𝗹𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗰𝗵𝗶̉ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 𝗱𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰", threadID, messageID);
            var info = await api.getThreadInfo(event.threadID);
 let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["join"] == "undefined" || data["join"] == false) data["join"] = true;
 else data["join"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`→ 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 ${(data["join"] == true) ? "bật" : "tắt"} 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 JoinNoti!!`, event.threadID);

}break;            
          case "7": {
            if (permssion < 1) return api.sendMessage("→ 𝗫𝗶𝗻 𝗹𝗼̂̃𝗶! 𝗹𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗰𝗵𝗶̉ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗺𝗼̛́𝗶 𝗱𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰", threadID, messageID);
            var info = await api.getThreadInfo(event.threadID);
let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["leave"] == "undefined" || data["leave"] == false) data["leave"] = true;
 else data["leave"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`→ 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 ${(data["leave"] == true) ? "bật" : "tắt"} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗿𝗼̛̀𝗶 𝗻𝗵𝗼́𝗺`, event.threadID);

}break;                    
        case "8": {
  const { ADMINBOT } = global.config;
   listAdmin = ADMINBOT || config.ADMINBOT ||  [];
    var msg = [];
    for (const idAdmin of listAdmin) {
        if (parseInt(idAdmin)) {
          const name = (await Users.getData(idAdmin)).name
            msg.push(`→  ${name}\n→ 𝗟𝗶𝗻𝗸: fb.me/${idAdmin} `);              
        }
    }
   return api.sendMessage(`====〘『 𝐀𝐃𝐌𝐈𝐍 』〙====\n${msg.join("\n")}\n`, event.threadID, event.messageID);
}break;
        case "9": {
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
        `📜 𝐃𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 ${qtv} 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐠𝐨̂̀𝐦:\n${listad}`,event.threadID,event.messageID)

}break;
   case "10": {
 const fullTime = global.client.getTime("fullTime");
 const moment = require("moment-timezone");
 const request = require("request")
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    let threadInfo = await api.getThreadInfo(event.threadID);
    let timeByMS = Date.now();
    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
    let icon = threadInfo.emoji;
    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let color = threadInfo.color;
    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'Kh';


    if (!totalChat[event.threadID]) {
      totalChat[event.threadID] = {
        time: timeByMS,
        count: sl,
        ytd: 0
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }

    let mdtt = "𝗖𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻";
    let preCount = totalChat[event.threadID].count || 0;
    let ytd = totalChat[event.threadID].ytd || 0;
    let hnay = (ytd != 0) ? (sl - preCount) : "𝗖𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻";
    let hqua = (ytd != 0) ? ytd : "𝗖𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻";
    if (timeByMS - totalChat[event.threadID].time > _24hours) {
      if (timeByMS - totalChat[event.threadID].time > (_24hours * 2)) {
        totalChat[event.threadID].count = sl;
        totalChat[event.threadID].time = timeByMS - _24hours;
        totalChat[event.threadID].ytd = sl - preCount;
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
      }
      getHour = Math.ceil((timeByMS - totalChat[event.threadID].time - _24hours) / 3600000);
      if (ytd == 0) mdtt = 100;
      else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
      mdtt += "%";
    }
var listqtv = '';
var adminIDs = threadInfo.adminIDs;
for (let get of adminIDs) {
const infoUsers = await Users.getInfo(get.id);
    listqtv += `\n ${infoUsers.name}\n`
    }
    api.unsendMessage(handleReply.messageID);
    var callback = () =>
      api.sendMessage({
        body: `🌟 === [ 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] === 🌟\n━━━━━━━━━━━━━━━━━━━\n[🍒] → 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺:${threadName}\n[🆔] → 𝗜𝗗: ${id}\n[🌱] → 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n[✨] → 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴: ${icon}\n[💨] → 𝗠𝗮̃ 𝗱𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n[👥] → 𝗧𝗼̂̉𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻:  ${threadMem}\n[👦] → 𝗡𝗮𝗺: ${nam}\n[👧] → 𝗡𝘂̛̃: ${nu}\n[🍀] → 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n[💫] → 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝘂𝗮̉𝗻 𝗧𝗿𝗶̣ 𝗩𝗶𝗲̂𝗻: ${listqtv}\n━━━━━━━━━━━━━━━━━━━\n[🍓] → 𝗧𝗼̂̉𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${sl}\n[🌷] → 𝗠𝘂̛́𝗰 đ𝗼̣̂ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰: ${mdtt}\n[🍇] → 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗵𝗼̂𝗺 𝗾𝘂𝗮: ${hqua}\n[🥑] → 𝗛𝗼̂𝗺 𝗻𝗮𝘆 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻 đ𝘂̛𝗼̛̣𝗰: ${hnay}\n[🍋] → 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂: ${fullTime}\n===== [ ${timeNow} ] =====`,
        attachment: fs.createReadStream(__dirname + '/cache/box.png')
      },
        threadID,
        () => fs.unlinkSync(__dirname + '/cache/box.png')
      );
    return request(encodeURI(`${threadInfo.imageSrc}`))
      .pipe(fs.createWriteStream(__dirname + '/cache/box.png'))
      .on('close', () => callback());
  }break;


}}}}

