module.exports.config = {
  name: "texttoimg",
  version: "1.0.",
  hasPermssion: 0,
  credits: "",
  description: "Text to Image",
  commandCategory: "Tiện ích",
  usages: "texttoimg <nội dung>",
  cooldowns: 2,
};
module.exports.run = async ({api, event, args, Users }) => {
let timeStart = Date.now();
const axios = require('axios');
const fs = require('fs-extra');
const name = await Users.getNameUser(event.senderID)
const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - DD/MM/YYYY");
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("nhập nội dung", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://fab95171-a887-4d92-b536-76930bcc4067-00-25il4x4f1jbtd.riker.replit.dev/texttoimg?prompt=${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: `Ảnh ${query} được Al vẽ cho ${name}\n⏰ Time: ${timeNow}\n⏳ Thời gian xử lý: ${Math.floor((Date.now() - timeStart)/1000)} giây`,
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};