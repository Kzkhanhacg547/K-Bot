const fse = require("fs-extra")
const approved = __dirname + "/../commands/bot/approvedThreads.json"
module.exports.config = {
    name: "checkduyet",
    eventType: ["log:subscribe"],
    version: "1.1.1",
    credits: "DC-Nam",
    description: "Noti check duyệt"
};
module.exports.run = async function({
    api,
    event,
    Users
}) {
    const {
        threadID,
        logMessageData
    } = event
    const {
        PREFIX
    } = global.config
    const {
        getCurrentUserID: botID,
        sendMessage: send,
        unsendMessage: unsend
    } = api
    let data = JSON.parse(fse.readFileSync(approved))
    if (logMessageData.addedParticipants.find(el => el.userFbId == botID())) {
        return api.sendMessage({body:`====『 𝐂𝐇𝐄𝐂𝐊 𝐋𝐈𝐒𝐓 𝐁𝐎𝐗 』====\n━━━━━━━━━━━━━━━━\n→ [❗] 𝐓𝐢𝐞̂́𝐧 𝐇𝐚̀𝐧𝐡 𝐂𝐡𝐞𝐜𝐤 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐁𝐨𝐱 𝐃𝐮𝐲𝐞̣̂𝐭\n━━━━━━━━━━━━━━━━`},event.threadID, (error, info) => {
            setTimeout(function() {
                unsend(info.messageID)
                if (!data.includes(threadID)) send("======『 𝐊𝐢𝐞̂̉𝐦 𝐃𝐮𝐲𝐞̣̂𝐭 』======\n━━━━━━━━━━━━━━━━\n→ [⚠️] → 𝐒𝐚𝐮 𝐤𝐡𝐢 𝐤𝐢𝐞̂̉𝐦 𝐭𝐫𝐚 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭 𝐛𝐨𝐭 𝐩𝐡𝐚́𝐭 𝐡𝐢𝐞̣̂𝐧 𝐧𝐡𝐨́𝐦 𝐛𝐚̣𝐧 𝐯𝐚̂̃𝐧 𝐜𝐡𝐮̛𝐚 đ𝐮̛𝐨̛̣𝐜 𝐚𝐝𝐦𝐢𝐧 𝐝𝐮𝐲𝐞̣̂𝐭\n━━━━━━━━━━━━━━━━\n→ [📤] 𝐍𝐞̂́𝐮 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 đ𝐮̛𝐨̛̣𝐜 𝐝𝐮𝐲𝐞̣̂𝐭 𝐡𝐚̃𝐲 𝐜𝐡𝐚𝐭 request", threadID)
                else send(`====『 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝟵𝟵% 』====\n━━━━━━━━━━━━━━━━\n→ [🔰] 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 , 𝐋𝐮̛𝐮 𝐕𝐚̀𝐨 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐃𝐮𝐲𝐞̣̂𝐭✅`, threadID)
            }, 5000);
        })
    } else return
}
