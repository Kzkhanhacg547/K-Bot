module.exports.config = {
	name: "autorequest",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "gửi yêu cầu duyệt box về admin",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 5
};
module.exports.run = async function({ api , event , args }) {
  const axios = require("axios");
    console.log('Hello, world !');
    const { body , senderID , threadID } = event;
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  var qtv = listAdmin
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs-extra");
    try {
        if (body === undefined || !body.includes('kzkhanh') || senderID == api.getCurrentUserID() || senderID == '') return;
  const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
        var name = await Users.getNameUser(event.senderID);
        var nameBox = global.data.threadInfo.get(event.threadID).threadName || "❌𝐓𝐞̂𝐧 𝐛𝐨𝐱 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐨̂̀𝐧 𝐭𝐚̣𝐢";
              api.sendMessage({body:`⚠️=[ 𝐘𝐄̂𝐔 𝐂𝐀̂̀𝐔 𝐃𝐔𝐘𝐄̣̂𝐓 𝐁𝐎𝐗]=⚠️
━━━━━━━━━━━━━━━
⏰ 𝐭𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${time}
👥 𝐧𝐡𝐨́𝐦: ${nameBox}
💾𝐔𝐢𝐝 𝐧𝐡𝐨́𝐦: ${event.threadID}
❗️𝐝𝐚̃ 𝐠𝐮̛̉𝐢 𝟏 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐝𝐮𝐲𝐞̣̂𝐭 𝐛𝐨𝐱`,}, `${listAdmin}`);
api.sendMessage({body: `[‼️] 𝐘𝐞̂𝐮 𝐂𝐚̂̀𝐮 𝐃𝐮𝐲𝐞̣̂𝐭 𝐁𝐨𝐱\n[❗️] 𝐓𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n[⚠️] 𝐆𝐮̛̉𝐢 𝐲𝐞̂𝐮 𝐜𝐚̂̀𝐮 𝐝𝐮𝐲𝐞̣̂𝐭 𝐛𝐨𝐱 𝐯𝐞̂̀ 𝐚𝐝𝐦𝐢𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠`,}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`);
    }
};