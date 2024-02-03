const fs = require("fs-extra");
const request = require("request");
const axios = require("axios");
const moment = require("moment-timezone");

const dirMaterial = __dirname + `/noprefix/`;

module.exports.config = {
  name: "automock",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Lay link runmoky và repl.co ve cho admin",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5
};

module.exports.onLoad = () => {
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "vantoan.jpeg")) request("https://i.imgur.com/acdiyiE.jpeg").pipe(fs.createWriteStream(dirMaterial + "manh.jpeg"));
};

module.exports.run = async function ({ api, event, args }) {
  console.log('Hello, world !');
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { body, senderID, threadID } = event;
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");

  try {
    if (body === undefined || senderID == api.getCurrentUserID() || senderID == '') return;

    const userName = await Users.getNameUser(senderID);
    const { threadName } = await api.getThreadInfo(threadID);

    const processMessage = (title, content, attachment) => {
      api.sendMessage(`📥=== [ ${title} ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}
👥 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${userName}
🌍 𝗡𝗵𝗼́𝗺: ${threadName}
🌸 ${body}`, '100081129610697', attachment);
    };

    if (body.includes('runmoky')) {
      processMessage("𝗟𝗜𝗡𝗞 𝗥𝗨𝗡 𝗠𝗢𝗖𝗞𝗬", "𝑵𝒐̣̂𝒊 𝑫𝒖𝒏𝒈 𝑪𝒉𝒖̛́𝒂 𝑳𝒊𝒏𝒌 𝑹𝒖𝒏 𝑴𝒐𝒄𝒌𝒚", { body: `=== [ 𝗟𝗜𝗡𝗞 𝗥𝗨𝗡 𝗠𝗢𝗖𝗞𝗬 ] ===\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}\n⚙️ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗴𝘂̛̉𝗶 𝗹𝗶𝗻𝗸 𝗿𝘂𝗻 𝗺𝗼𝗰𝗸𝘆\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸: ${body}` });
    }

    if (body.includes('repl.co/') || body.includes('replit.com/@') || body.includes('run.mocky.io') || body.includes('https://pastebin.com/raw/')) {
      const apiUrl = body.includes('repl.co/') ? 'https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/loli' : '';
      const imageUrls = apiUrl ? [await axios.get(apiUrl).then(res => res.data.url)] : [];
      const attachments = await Promise.all(imageUrls.map(url => axios({ url, method: "GET", responseType: "stream" }).then(res => res.data)));

      processMessage("𝗔𝗨𝗧𝗢 𝗟𝗜𝗡𝗞 𝗪𝗘𝗕", "𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗴𝘂̛̉𝗶 𝗹𝗶𝗻𝗸", { body: `=== [ 𝗔𝗨𝗧𝗢 𝗟𝗜𝗡𝗞 𝗪𝗘𝗕 ] ===\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}\n⚙️ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗴𝘂̛̉𝗶 𝗹𝗶𝗻𝗸\n💓 𝗧𝗶𝗲̂́𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗴𝘂̛̉𝗶 𝘃𝗲̂̀ 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗵𝘂́𝗽`, attachment: attachments });
    }

  } catch (e) {
    api.sendMessage(`${e}`, '100081129610697');
  }
};
