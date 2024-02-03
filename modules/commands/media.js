module.exports.config = {
name: "media",
version: "1.0.0",
hasPermssion: 0,
credits: "Kz Khánhh",
description: "Random ảnh gái khi dùng dấu lệnh",
commandCategory: "Hình ảnh",
usages: "prefix",
cooldowns: 5,
dependencies: {
"request": "",
"fs-extra": ""
}
}; 

const request = require('request');
const fs = require("fs"); 

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const threadID = event.threadID; 

const imageUrls = await Promise.all(Array.from({ length: 6 }, async () => {
const res = await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/loli');
return res.data.url;
})); 

const attachments = await Promise.all(imageUrls.map(async (url) => {
return (await axios({
url,
method: "GET",
responseType: "stream"
})).data
}));


const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var thinh = res.data.data;
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const prefix = config.PREFIX;
const moment = require("moment-timezone");
const timeStart = Date.now();
var gio =
moment.tz('Asia/Ho_Chi_Minh').format("HH:mm:ss || D/MM/YYYY");
var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲' 

const namebot = global.config.BOTNAME;
var getlink = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data;
var uid = event.senderID; 

api.sendMessage({
body: `❏====『 𝐌𝐄𝐃𝐈𝐀 』====❑\n『🤖』${namebot} đ𝐚𝐧𝐠 𝐭𝐡𝐮̛̣𝐜 𝐡𝐢𝐞̣̂𝐧 𝐭𝐚̉𝐢 𝐥𝐞̂𝐧 𝐝𝐮̛̃ 𝐥𝐢𝐞̣̂𝐮\n『⚡』 𝗧𝗼̂́𝗰 𝗱𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${timeStart}\n\n『✅』 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👍" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 đ𝐞̂̉ 𝐱𝐚́𝐜 𝐧𝐡𝐚̣̂𝐧\n═══════════════\n${gio} || ${thu}\n`,
attachment: attachments
},threadID,  (err, info) => {
global.client.handleReaction.push({
name: this.config.name,
messageID: info.messageID,
author: event.senderID,
});
},event.messageID);
};



module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
const imageUrls = await Promise.all(Array.from({ length: 3 }, async () => {
const res = await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/loli');
return res.data.url;
})); 

const attachment = await Promise.all(imageUrls.map(async (url) => {
return (await axios({
url,
method: "GET",
responseType: "stream"
})).data
}));
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
let color = threadInfo.color;
let icon = threadInfo.emoji;
let threadMem = threadInfo.participantIDs.length;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
api.unsendMessage(handleReaction.messageID);
api.sendMessage({
body: `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${id}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadMem}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━`,
attachment: attachment },event.threadID, (err, info) => { 

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
api.sendMessage(`vui lòng chờ 1 xíu`, event.threadID, (err, info) =>
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
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/tet').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐍𝐡𝐚̣𝐜 𝐓𝐞̂́𝐭 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp3`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp3`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp3`)).on("close", callback);
})
}break;


case "2": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdnhac').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐍𝐡𝐚̣𝐜 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp3`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp3`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp3`)).on("close", callback);
})
}break;

case "3": {
const { threadID, messageID, senderID, body } = event;
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var thinh = res.data.data;
const moment = require("moment-timezone");
var gio =
moment.tz('Asia/Ho_Chi_Minh').format("HH:mm:ss || D/MM/YYYY");
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
const seconds = Math.floor( (t/1000) % 60 );
const minutes = Math.floor( (t/1000/60) % 60 );
const hours = Math.floor( (t/(1000*60*60)) % 24 );
const days = Math.floor( t/(1000*60*60*24) );
const time = process.uptime(),
h = Math.floor(time / (60 * 60)),
p = Math.floor((time % (60 * 60)) / 60),
s = Math.floor(time % 60);
var link = [
"https://i.imgur.com/CgP3D97.mp4",
"https://i.imgur.com/TRl17f7.mp4",
"https://i.imgur.com/yp9z5QN.mp4",
"https://i.imgur.com/qeIxxvn.mp4",
"https://i.imgur.com/LhINDGL.mp4",
"https://i.imgur.com/ygEYdzr.mp4",
"https://i.imgur.com/9thHnST.mp4",
"https://i.imgur.com/AMi9NiT.mp4",
"https://i.imgur.com/l8UisUZ.mp4",
"https://i.imgur.com/BZXJerW.mp4",
"https://i.imgur.com/xJpuVLs.mp4",
"https://i.imgur.com/MOQDCjg.mp4",
"https://i.imgur.com/kz7S5JO.mp4",
"https://i.imgur.com/K4pnAw0.mp4",
"https://i.imgur.com/WrPhJrH.mp4",
"https://i.imgur.com/fsol3MG.mp4",
"https://i.imgur.com/XT0d0a2.mp4",
"https://i.imgur.com/voxsCFv.mp4",
"https://i.imgur.com/QzyFnVK.mp4",
"https://i.imgur.com/BlI7Jbh.mp4",
"https://i.imgur.com/mK44Aod.mp4",
"https://i.imgur.com/UM95eCs.mp4",
"https://i.imgur.com/jDOLZYQ.mp4",
"https://i.imgur.com/xDfgeeD.mp4",
"https://i.imgur.com/iTUuWjl.mp4",
"https://i.imgur.com/WpnFSm5.mp4",
"https://i.imgur.com/nTw4lOF.mp4",
"https://i.imgur.com/5lrWddV.mp4",
"https://i.imgur.com/QRd4BCs.mp4",
"https://i.imgur.com/26ckWFR.mp4",
"https://i.imgur.com/Lzfz1kO.mp4",
"https://i.imgur.com/xVGLkGv.mp4",
"https://i.imgur.com/dXDJzCy.mp4",
"https://i.imgur.com/PPUGhmB.mp4",
"https://i.imgur.com/aZKx6VU.mp4",
"https://i.imgur.com/jG6uBjO.mp4",
"https://i.imgur.com/urLh5YY.mp4",
"https://i.imgur.com/WMrkIpE.mp4",
"https://i.imgur.com/8gCbvp7.mp4",
"https://i.imgur.com/y65Ca7R.mp4",
"https://i.imgur.com/zaWey6t.mp4",
"https://i.imgur.com/b4DAHmp.mp4",
"https://i.imgur.com/7S9zgzS.mp4",
"https://i.imgur.com/rQbbWTe.mp4",
"https://i.imgur.com/GiBE3pB.mp4",
"https://i.imgur.com/ZDwSxR2.mp4",
"https://i.imgur.com/d69YoWG.mp4",
"https://i.imgur.com/BEIVEeL.mp4",
"https://i.imgur.com/XjFRXLC.mp4",
"https://i.imgur.com/miPoxUE.mp4",
"https://i.imgur.com/jPoduAa.mp4",
"https://i.imgur.com/nnBtUvs.mp4",
"https://i.imgur.com/18b4dYW.mp4",
"https://i.imgur.com/FjlFGqN.mp4",
"https://i.imgur.com/Zi42ele.mp4",
"https://i.imgur.com/qc6Lvbn.mp4",
"https://i.imgur.com/datpS26.mp4",
"https://i.imgur.com/kSFBhfG.mp4",
"https://i.imgur.com/RX7OVmh.mp4",
"https://i.imgur.com/NRO7bdg.mp4",
"https://i.imgur.com/ll1xtkb.mp4",
"https://i.imgur.com/bcJZSzn.mp4",
"https://i.imgur.com/WQ4fZ4O.mp4",
"https://i.imgur.com/qsJ7vc8.mp4",
"https://i.imgur.com/rlPcOFZ.mp4",
"https://i.imgur.com/H56OWJp.mp4",
"https://i.imgur.com/vWDbID7.mp4",
"https://i.imgur.com/5Up4FPW.mp4",
"https://i.imgur.com/o3o6cUG.mp4",
"https://i.imgur.com/4DDIXGg.mp4",
"https://i.imgur.com/mQiuy3Q.mp4",
"https://i.imgur.com/yHlYX6H.mp4",
"https://i.imgur.com/XWH7YI3.mp4",
"https://i.imgur.com/8nO53RV.mp4",
"https://i.imgur.com/fK0d4SM.mp4",
"https://i.imgur.com/LD7dKKy.mp4",
"https://i.imgur.com/eZL0dYb.mp4",
"https://i.imgur.com/yy0Q3e2.mp4",
"https://i.imgur.com/tl93y9t.mp4",
"https://i.imgur.com/4oSiH6I.mp4",
"https://i.imgur.com/KQpOxAj.mp4",
"https://i.imgur.com/HpTkibI.mp4",
"https://i.imgur.com/cFgfQq6.mp4",
"https://i.imgur.com/gGsDrKd.mp4",
"https://i.imgur.com/aLDqvXB.mp4",
"https://i.imgur.com/IX8zdwz.mp4",
"https://i.imgur.com/aWpMWFY.mp4",
"https://i.imgur.com/XB8r4aJ.mp4",
"https://i.imgur.com/FJIJvol.mp4",
"https://i.imgur.com/FJIJvol.mp4",
"https://i.imgur.com/FJIJvol.mp4",
"https://i.imgur.com/JbULkHU.mp4",
"https://i.imgur.com/SqkxW36.mp4",
"https://i.imgur.com/SqkxW36.mp4",
"https://i.imgur.com/SqkxW36.mp4",
"https://i.imgur.com/RhxOIIO.mp4",
"https://i.imgur.com/RhxOIIO.mp4",
"https://i.imgur.com/ZQIumLc.mp4",
"https://i.imgur.com/eXUaXJV.mp4",
"https://i.imgur.com/L022j1M.mp4",
"https://i.imgur.com/L022j1M.mp4",
"https://i.imgur.com/fLe6AoI.mp4",
"https://i.imgur.com/R5VPPuA.mp4",
"https://i.imgur.com/6tkZdZP.mp4",
"https://i.imgur.com/JlsOYBU.mp4",
"https://i.imgur.com/oxFYx9O.mp4",
"https://i.imgur.com/z2HMI55.mp4",
"https://i.imgur.com/UeKHJP2.mp4",
"https://i.imgur.com/CHROKR0.mp4",
"https://i.imgur.com/cLg3LPt.mp4",
"https://i.imgur.com/1ZEsONC.mp4",
"https://i.imgur.com/b45vxpb.mp4",
"https://i.imgur.com/aQERmfA.mp4",
"https://i.imgur.com/4ZXTEFX.mp4",
"https://i.imgur.com/rPFNUfL.mp4",
"https://i.imgur.com/S7rSJxf.mp4",
"https://i.imgur.com/GbS7bj3.mp4",
"https://i.imgur.com/2j3dLjO.mp4",
"https://i.imgur.com/aVvtb0Z.mp4",
"https://i.imgur.com/kTkZA7x.mp4",
"https://i.imgur.com/LrFbbA5.mp4",
"https://i.imgur.com/J6Wq06v.mp4",
"https://i.imgur.com/bp6NiTQ.mp4",
"https://i.imgur.com/Q9TEK7e.mp4",
"https://i.imgur.com/wzu1Eoq.mp4",
"https://i.imgur.com/OJksO64.mp4",
"https://i.imgur.com/xRD5pXd.mp4",
"https://i.imgur.com/qsJ7vc8.mp4",
"https://i.imgur.com/wGKNeup.mp4",
"https://i.imgur.com/ZUKORKW.mp4",
"https://i.imgur.com/JryGDCI.mp4",
"https://i.imgur.com/3SYSACG.mp4",
"https://i.imgur.com/qVkDs4i.mp4",
"https://i.imgur.com/OrEXjr0.mp4",
"https://i.imgur.com/Sa9TVTN.mp4",
"https://i.imgur.com/9NK1OdE.mp4",
"https://i.imgur.com/KNyzD1J.mp4",
"https://i.imgur.com/RO9ZNh0.mp4",
"https://i.imgur.com/WLtWVEK.mp4",
"https://i.imgur.com/UbC66yP.mp4",
"https://i.imgur.com/QZuzecn.mp4",
"https://i.imgur.com/twOdpl6.mp4",
"https://i.imgur.com/Y0GTaCI.mp4",
"https://i.imgur.com/fXM7eaf.mp4",
"https://i.imgur.com/Bg2aAJu.mp4",
"https://i.imgur.com/vJpocHx.mp4",
"https://i.imgur.com/m9oCzSe.mp4",
"https://i.imgur.com/oIVERTi.mp4",
"https://i.imgur.com/hAyly2s.mp4",
"https://i.imgur.com/sIM6z5m.mp4",
"https://i.imgur.com/noKbbrF.mp4",
"https://i.imgur.com/8o5QY7s.mp4",
"https://i.imgur.com/AzuG6eg.mp4",
"https://i.imgur.com/IWcYlun.mp4",
"https://i.imgur.com/QsL5oa4.mp4",
"https://i.imgur.com/OFCA4Yr.mp4",
"https://i.imgur.com/89Adgiu.mp4",
"https://i.imgur.com/Bl9BsVW.mp4",
"https://i.imgur.com/MzrA4qk.mp4",
"https://i.imgur.com/I6JhzB2.mp4",
"https://i.imgur.com/8FMmCQY.mp4",
"https://i.imgur.com/FH52IvD.mp4",
"https://i.imgur.com/tnL2PbA.mp4",
"https://i.imgur.com/uPTF3Kd.mp4",
"https://i.imgur.com/N8hMFwx.mp4",
"https://i.imgur.com/JiAeqUu.mp4",
"https://i.imgur.com/oQa4LjR.mp4",
];
var callback = () =>
api.sendMessage({body: `◆━◆『 𝐊𝐳 𝐁𝐨𝐭 』◆━◆\n『✪』 → 𝐓𝐢𝐦𝐞: ${gio} || ${thu}\n『★』 → 𝐓𝐡𝐢́𝐧𝐡 : ${thinh} \n『✶』 → 𝐇𝐚̃𝐲 𝐜𝐮̀𝐧𝐠 𝐭𝐨̂𝐢 𝐧𝐠𝐡𝐞 𝐛𝐚̉𝐧 𝐧𝐡𝐚̣𝐜 𝐧𝐚̀𝐲 𝐧𝐡𝐚`, attachment: fs.createReadStream(__dirname + "/cache/5.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp3"));           
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp3")).on("close",() => callback());
}break;



case "4": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdnhac').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐕𝐢𝐝𝐞𝐨 𝐍𝐡𝐚̣𝐜 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp4`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp4`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp4`)).on("close", callback);
})
}break;




case "5": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/chill').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐕𝐢𝐝𝐞𝐨 𝐂𝐡𝐢𝐥𝐥 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp4`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp4`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp4`)).on("close", callback);
})
}break;



case "6": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/tamtrang').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐓𝐚̂𝐦 𝐓𝐫𝐚̣𝐧𝐠 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp4`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp4`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp4`)).on("close", callback);
})
}break;



case "7": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdanime').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐕𝐢𝐝𝐞𝐨 𝐀𝐧𝐢𝐦𝐞 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp4`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp4`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp4`)).on("close", callback);
})
}break;




case "8": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdgirlvdgirl').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐕𝐢𝐝𝐞𝐨 𝐆𝐢𝐫𝐥 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp4`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp4`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp4`)).on("close", callback);
})
}break;




case "9": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdnuaodai').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 == 𝐕𝐢𝐝𝐞𝐨 𝐆𝐢𝐫𝐥 𝐀́𝐨 𝐃𝐚̀𝐢 == 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp4`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp4`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp4`)).on("close", callback);
})
}break;



case "10": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdtrai').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐕𝐢𝐝𝐞𝐨 𝐁𝐨𝐲 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp4`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp4`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp4`)).on("close", callback);
})
}break;



case "11": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/doraemon').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐫𝐚𝐞𝐦𝐨𝐧 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.mp4`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.mp4`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.mp4`)).on("close", callback);
})
}break; 



case "12": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/gaiaodai').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐀́𝐨 𝐃𝐚̀𝐢 𝐈𝐦𝐚𝐠𝐞 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.jpg`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.jpg`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.jpg`)).on("close", callback);
})
}break;




case "13": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/images/').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐆𝐢𝐫𝐥 𝐈𝐦𝐚𝐠𝐞 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.jpg`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.jpg`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.jpg`)).on("close", callback);
})
}break;




case "14": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/trai').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐁𝐨𝐲 𝐈𝐦𝐚𝐠𝐞 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.jpg`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.jpg`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.jpg`)).on("close", callback);
})
}break;





case "15": {
const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
var poem = res.data.data;
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/cosplay').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
let callback = function () {
api.sendMessage({
body: `ㅤ💞 === 𝐂𝐨𝐬𝐩𝐥𝐚𝐲 𝐈𝐦𝐚𝐠𝐞 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
attachment: fs.createReadStream(__dirname + `/cache/anh.jpg`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.jpg`), event.messageID);
					};
					request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.jpg`)).on("close", callback);
					})
				}break;

				
			
			
			
			case "16": {
					const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
					var poem = res.data.data;
					const fs = require("fs");
					const moment = require("moment-timezone");
					var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
					var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
					if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
					if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
					if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
					if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
					if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
					if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
					if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
					const time = process.uptime(),
					hours = Math.floor(time / (60 * 60)),
					minutes = Math.floor((time % (60 * 60)) / 60),
					seconds = Math.floor(time % 60);
					const pidusage = await global.nodemodule["pidusage"](process.pid);
					const timeStart = Date.now();
					axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/images/wallpaper').then(res => {
					let ext = res.data.data.substring(res.data.data.lastIndexOf("") + 1);
					let callback = function () {
						api.sendMessage({
						body: `ㅤ💞 === 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 𝐈𝐦𝐚𝐠𝐞 === 💞\n\n${poem}\n\n🎀──── •❤️‍🔥• ────🎀\nㅤㅤㅤ🏮 ${thu} 🏮\n⏳ ${gio} ⏳`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.jpg`)
						}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.jpg`), event.messageID);
					};
					request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.jpg`)).on("close", callback);
					})
				}break;
				
			default:
			const choose = parseInt(event.body);
				if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
				if (choose > 2 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
		}
	}
}
}