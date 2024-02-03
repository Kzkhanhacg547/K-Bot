module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thêm người dùng vào nhóm bằng link hoặc uid",
    commandCategory: "Box",
    usages: "[args]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
const { threadID, messageID } = event;
const axios = require('axios')
  const imageUrls = await Promise.all(Array.from({ length: 2 }, async () => {
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
const link = args.join(" ")
if(!args[0]) return api.sendMessage({body:`=====『 𝐌𝐄𝐍𝐔 𝐀𝐃𝐃𝐔𝐒𝐄𝐑 』=====\n◆━━━━━━━━━━━━━◆\n1. 𝐁𝐚̣𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 𝐚𝐝𝐝𝐮𝐬𝐞𝐫 + 𝐥𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤\n2. 𝐁𝐚̣𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 𝐚𝐝𝐝𝐮𝐬𝐞𝐫 + 𝐮𝐢𝐝\n${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")}\n━━━━━━━━━━━━━━━━━━\n`, attachment: attachments },event.threadID, event.messageID)
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await api.getUID(args[0] || event.messageReply.body);
    var uidUser = res
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage('𝐓𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 đ𝐚̃ 𝐜𝐨́ 𝐦𝐚̣̆𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐨́𝐦', threadID, messageID);
    if (err) return api.sendMessage(`𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐯𝐚̀𝐨 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭`, threadID, messageID);
    else return api.sendMessage(`𝐓𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`𝐓𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 đ𝐚̃ 𝐜𝐨́ 𝐦𝐚̣̆𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐨́𝐦`, threadID, messageID);
    if (err) return api.sendMessage(`𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐯𝐚̀𝐨 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭`, threadID, messageID);
    else return api.sendMessage(`𝐓𝐡𝐞̂𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠`, threadID, messageID);
    });
  }
}