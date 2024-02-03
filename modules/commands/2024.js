module.exports.config = {
  name: "2024",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vthien",
  description: "Random video",
  commandCategory: "Noprefix",
  usages: "tết",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("2025")==0 || (event.body.indexOf("Năm mới vui vẻ")==0) || event.body.indexOf("Chúc mừng năm mới")==0 ||
event.body.indexOf("2023")==0 ||
event.body.indexOf("vd tết")==0 ||
event.body.indexOf("Tết 2024")==0 ||
event.body.indexOf("Năm mới")==0 ||
event.body.indexOf("Video tết")==0 ||
event.body.indexOf("Tết")==0 ||
event.body.indexOf("2024")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/fkVJxTC.mp4",
      "https://i.imgur.com/CtpMG58.mp4",
      "https://i.imgur.com/GRLfDlF.mp4",
      "https://i.imgur.com/pK3l42P.mp4",
      "https://i.imgur.com/1pj4TNN.mp4",
      "https://i.imgur.com/7k3mkLT.mp4",
      "https://i.imgur.com/7gaEhGF.mp4",
      "https://i.imgur.com/nhciuc7.mp4",
      "https://i.imgur.com/0Bj87Tf.mp4",
      "https://i.imgur.com/ZNFZdkJ.mp4",
      "https://i.imgur.com/KJhicUF.mp4",
      "https://i.imgur.com/UOnCy46.mp4",
      "https://i.imgur.com/szbNYTT.mp4",
      "https://i.imgur.com/XXiMLMT.mp4",
      "https://i.imgur.com/QWfyifh.mp4",
      "https://i.imgur.com/cO45FLs.mp4",
      "https://i.imgur.com/kBeXdjt.mp4",
      "https://i.imgur.com/k4aFrUf.mp4",
      "https://i.imgur.com/2eaCRx2.mp4",
      "https://i.imgur.com/qtONXCM.mp4",
      "https://i.imgur.com/0lKTLNs.mp4",
      "https://i.imgur.com/TQxV15O.mp4",
      "https://i.imgur.com/cDgEk1U.mp4",
      "https://i.imgur.com/QLOF6hX.mp4",
      "https://i.imgur.com/nKBslYL.mp4",
      "https://i.imgur.com/R8QH5Q4.mp4",
      "https://i.imgur.com/uzQmPCC.mp4",
      "https://i.imgur.com/FMMeSKx.mp4",
  "https://i.imgur.com/VUogqZz.mp4",
 "https://i.imgur.com/Z2ValUy.mp4",
 "https://i.imgur.com/mrwpb41.mp4",
 "https://i.imgur.com/geytZNo.mp4",
 "https://i.imgur.com/Ra91mtn.mp4",
 "https://i.imgur.com/9Tuei68.mp4",
 "https://i.imgur.com/bxeOtbg.mp4",
 "https://i.imgur.com/Jw26SGG.mp4",
 "https://i.imgur.com/wth1ism.mp4",
 "https://i.imgur.com/alOBkTO.mp4",
 "https://i.imgur.com/idux2ux.mp4",
 "https://i.imgur.com/zS5bzro.mp4",
 "https://i.imgur.com/dQeBDL3.mp4",
 "https://i.imgur.com/x9lbbkl.mp4",
 "https://i.imgur.com/j0RtUgI.mp4",
 "https://i.imgur.com/p11krsf.mp4",
 "https://i.imgur.com/WtRRHR3.mp4",
 "https://i.imgur.com/jHlfMAt.mp4",
 "https://i.imgur.com/4TqUGsF.mp4",
  "https://i.imgur.com/l32D2lH.mp4",
  "https://i.imgur.com/XBKuhI8.mp4",
  "https://i.imgur.com/KVXmkLk.mp4",
    ];
     var callback = () => api.sendMessage({body:`🎆 ==== [ 𝗩𝗶𝗱𝗲𝗼 𝗧𝗲̂́𝘁 ] ==== 🎆\n━━━━━━━━━━━━━━━━━━━\n[🧨] → 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗮̆𝗺 𝗠𝗼̛́𝗶 𝗩𝘂𝗶 𝗩𝗲̉ 🥳\n[☁️] → 𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n[🧧] → 𝗥𝗮𝗻𝗱𝗼𝗺 𝘃𝗶𝗱𝗲𝗼 𝘁𝗲̂́𝘁 🤗\n━━━━━━━━━━━━━━━━━━━\n🌟===[ 𝗧𝗵𝗼̂𝗻𝗴 𝗧𝗶𝗻 𝗕𝗼𝘁 ]===🌟\n[🛸] → 𝗣𝗿𝗲𝗳𝗶𝘅: [ ${PREFIX} ]\n[⚙️] → 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: deplay ✓\n[🍒] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n[⌛] → ${global.config.BOTNAME} đ𝗮̃ 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰: ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${vt} 𝗴𝗶𝗮̂𝘆`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vt = Math.floor(dcm % 60);
const res = await
axios.get(`https://apirandom.api-official.repl.co/thinh`);
var thinh = res.data.url;
let ext = res.data.data.substring(res.data.url.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/2024.mp4")).on("close",() => callback());
}
  
  module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
		"successText": `🧠`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["2024"] == "undefined" || data["2024"] == true) data["2024"] = false;
	else data["2024"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["2024"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      




  
    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };