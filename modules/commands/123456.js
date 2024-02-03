module.exports.config = {
  name: "123456",
  version: "1.0.2",
  hasPermssion: "0",
  credits: "Kz Khánhh", //copy nội dung từ TNT 
  description: "Noprefix",
  commandCategory: "Noprefix",
  usages: "goibot",
  cooldowns: 5
};

// Khai báo biến cờ
var isBotEnabled = true;

module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
  const moment = require("moment-timezone"); 
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭';
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢';
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚';
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛';
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦';
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮';
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲';

  var { threadID, messageID, body } = event, { PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;

  if (!event.body) return;
  var { threadID, messageID } = event;
  const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;

  // Thêm kiểm tra cờ để xác định có tiếp tục trả lời tiếp không 
  if (isBotEnabled && event.body.toLowerCase().indexOf("bot") == 0) {
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("Bot")) ? threadSetting.PREFIX : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
          hours = Math.floor(time / (60 * 60)),
          minutes = Math.floor((time % (60 * 60)) / 60),
          seconds = Math.floor(time % 60);
    const admins = global.config.ADMINBOT;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    var i = 1;
    var msg = [];

    const name = await Users.getNameUser(event.senderID);
    api.sendMessage({
      body: `🌏[ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗘𝗗 𝗕𝗢𝗧𝗦 ]🌏\n━━━━━━━━━━━━━━━━━━\n→ 𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 𝗰𝗵𝘂́𝗰 𝗯𝗮̣𝗻 ${name} 𝗺𝗼̣̂𝘁 𝗻𝗴𝗮̀𝘆 𝘁𝗼̂́𝘁 𝗹𝗮̀𝗻𝗵 💞\n→⏰ 𝗧𝗶𝗺𝗲: ${gio}\n→🗓 𝗧𝗵𝘂̛́: ${thu}\n❄[ 𝗞𝗲̂́𝘁 𝗡𝗼̂́𝗶 𝗛𝗲̣̂ 𝗧𝗵𝗼̂́𝗻𝗴 ]❄\n━━━━━━━━━━━━━━━━━\n→🤖 𝗧𝗲̂𝗻 𝗕𝗼𝘁: ${global.config.BOTNAME}\n→🌷 𝗕𝗼𝘅:${threadname}\n→🍓 𝗨𝗶𝗱 𝗯𝗼𝘅: ${event.threadID}\n→🌐 𝗣𝗿𝗲𝗳𝗶𝘅 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̀: ${global.config.PREFIX}\n→💒 𝗧𝗼̂̉𝗻𝗴 𝗰𝗮́𝗰 𝗯𝗼𝘅 đ𝗮𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁: ${global.data.allThreadID.length} \n→📈 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n→📡 𝗣𝗶𝗻𝗴: ${Date.now() - dateNow} ms\n→💾 𝗩𝗲𝗿𝘀𝗶𝗼𝗻: ${global.config.version}\n→⏱️ 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝗶́ 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗹𝗮̀: ${Date.now() - dateNow} 𝗴𝗶𝗮̂𝘆\n→🕰 𝗕𝗼𝘁 đ𝗮̃ 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰: ${hours} 𝗚𝗶𝗼̛̀ ${minutes} 𝗣𝗵𝘂́𝘁 ${seconds} 𝗚𝗶𝗮̂𝘆`,
      attachment: (await global.nodemodule["axios"]({
        url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/trai')).data.url,
        method: "GET",
        responseType: "stream"
      })).data
    }, event.threadID, event.messageID);
  }
};

// Thêm hàm để chuyển đổi trạng thái bật/tắt của chức năng trả lời bot 
module.exports.run = async ({ api, event, args }) => {
  if (!args[0]) return api.sendMessage("Hãy nhập bật hoặc tắt để thay đổi trạng thái của bot trả lời tin nhắn có chứa từ 'bot'!", event.threadID, event.messageID);
  let text = args[0].toLowerCase();
  if (text == "bật") {
    isBotEnabled = true;
    api.sendMessage(`Đã bật chức năng trả lời tin nhắn có chữ 'bot'!`, event.threadID, event.messageID);
  }
  else if (text == "tắt") {
    isBotEnabled = false;
    api.sendMessage(`Đã tắt chức năng trả lời tin nhắn có chữ 'bot'!`, event.threadID, event.messageID);
  }
  else {
    api.sendMessage("Hãy nhập bật hoặc tắt để thay đổi trạng thái của bot trả lời tin nhắn có chứa từ 'bot'!", event.threadID, event.messageID);
  }
};