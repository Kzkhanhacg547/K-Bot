const axios = require("axios");
const fs = require("fs")
const linkapi = "https://api-0703.0703-opa.repl.co"
exports.config = {
    name: "capcut",
    version: "0.9.9",
    hasPermssion: 0,
    credits: "harin", 
    description: "Download Mẫu Capcut",
    commandCategory: "Tiện ích",
    usages: "{name} + link mẫu capcut",
    cooldowns: 5
};
exports.run = async function (_) {
  const { threadID: t, messageID: m, messageReply: mrl, type } = _.event;
  const send = msg => _.api.sendMessage(msg, t, m)
  if (type == "message_reply") link  = mrl.body
  else link = _.args.join(" ");
  if (!link) return send("Nhập Link Mẫu Capcut");
  send('Vui lòng đợi xíu!!')
  try {
  var res = (await axios.get(`${linkapi}/capcut?url=${link}`))
  const stream = (await axios.get(res.data.videoUrl,{ responseType: "arraybuffer" })).data
  const path = __dirname+`/cache/1.mp4`;
  fs.writeFileSync(path, Buffer.from(stream, "utf-8"));
  send({body: `📸==== [ 𝗖𝗔𝗣𝗖𝗨𝗧 ] ====📸
━━━━━━━━━━━━━━━━━━━

📝 𝗧𝗶𝘁𝗹𝗲: ${res.data.title}
😻 𝗠𝗼̂ 𝘁𝗮̉: ${res.data.description}
🌸 𝗟𝘂̛𝗼̛̣𝘁 𝗱𝘂̀𝗻𝗴: ${res.data.usage}
🧸 𝗟𝗶𝗻𝗸 𝗰𝗮𝗽𝗰𝘂𝘁: ${link}
🔗 𝗟𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼: ${res.data.videoUrl}

👉 𝗕𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗲𝗱𝗶𝘁 𝘃𝗶𝗱𝗲𝗼 𝘁𝗵𝗶̀ 𝗮̂́𝗻 𝘃𝗼̂ 𝗹𝗶𝗻𝗸 𝗰𝗮𝗽𝗰𝘂𝘁 𝗼̛̉ 𝘁𝗿𝗲̂𝗻 đ𝗲̂̉ 𝗲𝗱𝗶𝘁 𝗻𝗵𝗮́`, attachment: fs.createReadStream(path)})
  } catch (error) {
  console.error(error);
  send("Lỗi!! đã có vấn đề xảy ra vui lòng thử lại");
};
};