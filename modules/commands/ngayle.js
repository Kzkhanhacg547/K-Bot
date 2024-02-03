const axios = require('axios');
const fse = require('fs-extra');
const DownLoad = async (url, file, ext) => {
var array = [];
  for (var i = 0; i < url.length; i++) {
const dest = __dirname + `/cache/${file}_${i}.${ext}`; 
await require('image-downloader').image({ url: url[i], dest }); 
 array.push(fse.createReadStream(dest));
//fse.unlinkSync(dest);
  };
return array;
}
const config = {
  name: 'ngayle',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'mod TNT',
  description: 'Như tên',
  commandCategory: 'THÀNH VIÊN',
  usages: 'xem time đến ngày lễ',
  cooldowns: 5
};
const run = async function ({ api, event }) {
const { threadID: tid, messageID: mid, senderID: sid, type, args, body, isGroup, messageReply: mR, mentions } = event;
       var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
const UID = sid
      const images = ["https://i.imgur.com/2dvR7Wp.jpeg"];
      const pn = args[0][0] + config.name
      api.sendMessage({body: `🎊⚌⚌[ 𝗛𝗢𝗟𝗜𝗗𝗔𝗬 ]⚌⚌🎊\n━━━━━━━━━━━━━━━\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n𝟭.𝗛𝗼𝗹𝗶𝗱𝗮𝘆: 𝗟𝗲̂̃ 𝗴𝗶𝗮́𝗻𝗴 𝘀𝗶𝗻𝗵 \n𝟮.𝗛𝗼𝗹𝗶𝗱𝗮𝘆𝟮: 𝗛𝗮𝗹𝗹𝗼𝘄𝗲𝗲𝗻\n𝟯.𝗛𝗼𝗹𝗶𝗱𝗮𝘆𝟯: 𝗻𝗴𝗮̀𝘆 𝗹𝗲̂̃ 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂𝗻\n𝟰.𝗛𝗼𝗹𝗶𝗱𝗮𝘆𝟰: 𝘃𝗮\n`, attachment: await DownLoad(images, sid, 'png')}, tid, mid);
}
module.exports = {config,run}