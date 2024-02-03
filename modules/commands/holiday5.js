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
	name: 'holiday5',
	version: '1.1.1',
	hasPermssion: 0,
	credits: 'mod TNT',
	description: 'holiday',
	commandCategory: 'THÀNH VIÊN',
	usages: 'xem holiday',
	cooldowns: 5
};
const run = async function ({ api, event }) {
const { threadID: tid, messageID: mid, senderID: sid, type, args, body, isGroup, messageReply: mR, mentions } = event;
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
   const t = Date.parse("March ,8 2024 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
const UID = sid
  
      const images = ["https://i.imgur.com/sPTDj7J.jpg"];
      const pn = args[0][0] + config.name
      api.sendMessage({body: `💖[ 𝗤𝗨𝗢̂́𝗖 𝗧𝗘̂́ 𝗪𝗢𝗠𝗘𝗡 ]💖\n━━━━━━━━━━━━━\n⏰ 𝗧𝗶𝗺𝗲 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶: ${gio}\n🕰 𝗡𝗴𝗮̀𝘆 𝗹𝗲̂̃ 𝗾𝘂𝗼̂́𝗰 𝘁𝗲̂́ 𝗽𝗵𝘂̣ 𝗻𝘂̛̃ 𝗰𝗼̀𝗻:${days} 𝗻𝗴𝗮̀𝘆 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 \n⚠️ 𝗦𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 '𝗻𝗴𝗮𝘆𝗹𝗲' đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗻𝗴𝗮̀𝘆 𝗹𝗲̂̃ 𝗸𝗵𝗮́𝗰.`, attachment: await DownLoad(images, sid, 'png')}, tid, mid);
}
module.exports = {config,run}