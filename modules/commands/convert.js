module.exports.config = {
  name: "convert",
  version: "1.0.0",
  hasPermssion: 0, // Typo: should be "hasPermission"
  credits: "araxy",
  description: "Chuyển đổi video từ dạng video sang mp4",
  commandCategory: "Tiện ích",
  usages: "reply",
  cooldowns: 5,
  dependencies: {
    "tinyurl": ""
  }
};

module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  try {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request"); // Unused dependency
    const moment = require('moment-timezone');
    var audioss = [];
    var audio = args.join(" ") || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio, { method: 'GET', responseType: 'arraybuffer' });
    fs.writeFileSync(__dirname + "/cache/vdtoau.m4a", Buffer.from(data, 'utf-8'));
    audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a"));
    let s = process.uptime(),
      u = [s / 3600 << 0, s / 60 % 60 << 0, s % 60 << 0].map(el => el < 10 ? '0' + el : el);
    let { messageReply, threadID } = event;

    if (event.type !== "message_reply" || !event.messageReply.attachments || event.messageReply.attachments.length == 0) {
      api.sendMessage("❌ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
      return;
    }

    for (var i = 0; i < messageReply.attachments.length; i++) {
      var shortLink = await global.nodemodule["tinyurl"].shorten(messageReply.attachments[i].url);

      var msg = {
        body: `===== 『 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 』 =====\n━━━━━━━━━━━━━━━━━━\n『🧸』𝐋𝐢𝐧𝐤: ${shortLink}\n『💿』𝐂𝐡𝐮𝐲𝐞̂̉𝐧 đ𝐨̂̉𝐢 𝐯𝐢𝐝𝐞𝐨 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠.\n『🌐』𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${u.join(':')}\n『⏳』 𝐍𝐠𝐚̀𝐲: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY")}\n『⏰』 𝐆𝐢𝐨̛̀: ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")}\n━━━━━━━━━━━━━━━━━\n`,
        attachment: audioss
      };
      api.sendMessage(msg, threadID, messageReply.messageID);
    }
  } catch (e) {
    console.log(e);
  }
};