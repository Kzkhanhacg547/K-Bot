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
	name: 'giotp',
	version: '1.1.1',
	hasPermssion: 0,
	credits: 'TáoTpk',
	description: 'Như tên',
	commandCategory: 'THÀNH VIÊN',
	usages: 'xem time thành phố',
	cooldowns: 5
};
const run = async function ({ api, event }) {
const { threadID: tid, messageID: mid, senderID: sid, type, args, body, isGroup, messageReply: mR, mentions } = event;
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
  var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
  var gio3 = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
  var gio4 = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
  var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio6 = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");var gio1 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
  var gio8 = moment.tz("Europe/Lisbon").format("HH:mm:ss || D/MM/YYYY");
const UID = sid
  
      const images = ["https://i.imgur.com/2dvR7Wp.jpeg",
"https://i.imgur.com/wxWx21V.png",
"https://i.imgur.com/YA4eZGl.jpeg",
"https://i.imgur.com/KHT6I9i.png",
"https://i.imgur.com/6jAwMWB.png",
"https://i.imgur.com/BOGXcfD.png",
"https://i.imgur.com/gevqTxd.png",
"https://i.imgur.com/KxSUuPk.png","https://i.imgur.com/DZ4iF2k.png"];
      const pn = args[0][0] + config.name
      api.sendMessage({body: `🌐=== 「 𝗧𝗜𝗠𝗘 𝗧𝗛𝗔̀𝗡𝗛 𝗣𝗛𝗢̂́ 」===🌐\n\n🇻🇳 𝗛𝗮̀ 𝗡𝗼̣̂𝗶: ${gio}\n🇬🇧 𝗟𝗼𝗻𝗱𝗼𝗻: ${gio2}\n🇺🇸 𝗡𝗲𝘄 𝗬𝗼𝗿𝗸 : ${gio5}\n🇰🇷 𝗦𝗲𝗼𝘂𝗹: ${gio3}\n🇯🇵 𝗧𝗼𝗸𝘆𝗼: ${gio4}\n🇧🇷 𝗕𝗿𝗮𝘀𝗶𝗹𝗶𝗮: ${gio1}\n🇲🇾 𝗞𝘂𝗮𝗹𝗮 𝗟𝘂𝗺𝗽𝘂𝗿: ${gio6}\n🇫🇷 𝗣𝗮𝗿𝗶𝘀: ${gio7}\n🇵🇹 𝗟𝗶𝘀𝗯𝗼𝗮: ${gio8}\n\n→ 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗶𝗺𝗲 𝗰𝘂̉𝗮 𝗰𝗮́𝗰 𝘁𝗵𝗮̀𝗻𝗵 𝗽𝗵𝗼̂́ 𝘁𝗿𝗲̂𝗻 𝗰𝗮́𝗰 𝗤𝘂𝗼̂́𝗰 𝗚𝗶𝗮 🌸`, attachment: await DownLoad(images, sid, 'png')}, tid, mid);
}
module.exports = {config,run}