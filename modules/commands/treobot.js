module.exports.config = {
    name: "treobot",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "J-Dukie", 
    description: "Treo uptimerobot",
    commandCategory: "Tiện ích",
    usages: " +uptrobot +Url",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args,}) {
     const axios = require('axios');
      const fs = require("fs");
    const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const { threadID, messageID, senderID } = event;
  var out = (msg) => api.sendMessage(msg, threadID, messageID);
  if (!args.join(" ")) return out("Thiếu Url,Vui lòng thêm Url để uptimerobot!");
  if (event.type == "message_reply") url  = event.messageReply.senderID
else url = args.join(" ");
 var getlink = (await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`)).data;
  var img = getlink.url
  var getimg = (await axios.get(img, {responseType: "arraybuffer"})).data;
var data = await global.utils.getContent(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/uptimerobot/create?url=${url}`)
    let uptime = data.data.error;

fs.writeFileSync(__dirname + `/cache/${event.senderID}-${event.threadID}.png`, Buffer.from(getimg, "utf-8")); 
    api.sendMessage({body: `🤖== [ 𝐔𝐏𝐓𝐈𝐌𝐄 𝐑𝐎𝐁𝐎𝐓 ] ==🤖
━━━━━━━━━━━━━\n✅𝐓𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐝𝐚̃ 𝐮𝐩𝐭𝐢𝐦𝐞𝐫𝐨𝐛𝐨𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${gio}\n⚙️𝐓𝐢̀𝐧𝐡 𝐭𝐫𝐚̣𝐧𝐠: ${uptime}`,attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}-${event.threadID}.png`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}-${event.threadID}.png`), event.messageID);

    console.log(getlink)
}