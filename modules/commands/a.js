const fs = require("fs-extra");
module.exports ={
  config: {
    name: 'a',
    commandCategory: 'Tiện ích',
    hasPermssion: 1,
    credits: 'Trần Văn Tân',
    usages: 'resset data checktt của nhóm',
    description: 'resset data checktt của nhóm',
    cooldowns: 0
  },
run: async function({ api, event, args, Users }) {
const { threadID, messageID } = event;
const name = await Users.getNameUser(event.senderID)
let uid = event.senderID;
var vthien = moment.tz('Asia/Ho_Chi_Minh').format('HH 𝗴𝗶𝗼̛̀ mm 𝗽𝗵𝘂́𝘁 ss 𝗴𝗶𝗮̂𝘆 - 𝗡𝗴𝗮̀𝘆 DD 𝘁𝗵𝗮́𝗻𝗴 MM 𝗻𝗮̆𝗺 YYYY');
 const dcm = process.uptime(); 
  var anh = Math.floor(dcm / (60 * 60));
  var la = Math.floor((dcm % (60 * 60)) / 60);
  var vt = Math.floor(dcm % 60);
const t = args[0] || threadID;
fs.unlinkSync(__dirname + '/checktt/'+ t + '.json')
return api.sendMessage({body:`🔰 === [ 𝗥𝗲𝘀𝗲𝘁 𝗧𝗧 𝗕𝗢𝗫 ] === 🔰\n━━━━━━━━━━━━━━━━━━\n[👤] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴: ${name}\n[✅] → Đ𝗮̃ 𝗿𝗲𝘀𝗲𝘁 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${t}\n[⏰] → 𝗩𝗮̀𝗼 𝗟𝘂́𝗰: ${vthien}\n━━━━━━━━━━━━━━━━━━\n[🤖] → 𝗕𝗼𝘁 Đ𝗮̃ 𝗢𝗻𝗹 Đ𝘂̛𝗼̛̣𝗰: ${anh} 𝗚𝗶𝗼̛̀ ${la} 𝗣𝗵𝘂́𝘁 ${vt} 𝗚𝗶𝗮̂𝘆`,attachment: (await axios.get((await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/cosplay`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, threadID,messageID)
  if (args[0] == 'all') {
fs.unlinkSync(__dirname + '/checktt/')
return api.sendMessage(`[💫] → Đ𝗮̃ 𝗿𝗲𝘀𝗲𝘁 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗮𝗹𝗹 𝗻𝗵𝗼́𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴`,threadID,messageID) 
  }
  }
    }