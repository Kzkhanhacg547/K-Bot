module.exports.config = {
    name: "antiout",
    version: "1.0.0",
    credits: "DungUwU (Khánh Milo Fix)",
    hasPermssion: 1,
    description: "Bật tắt antiout",
    usages: "antiout on/off",
    commandCategory: "Box",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads, Users}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
  var la = Math.floor((dcm % (60 * 60)) / 60);
  var vtan = Math.floor(dcm % 60);
   const timeStart = Date.now();
  const name = await Users.getNameUser(event.senderID)
  const axios = require('axios');
  const fs = require('fs-extra');
var so = [
  "2","3","4","5","6"
];
const dongdev = so[Math.floor(Math.random()*so.length)];
  const imageUrls = await Promise.all(Array.from({ length: `${dongdev}` }, async () => {
    const res = await axios.get(`https://randomapi.kzbott.repl.co/images/loli`);
    return res.data.url;   
  }));
  const imgurl = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));
  const img = imgurl[Math.floor(Math.random()*imgurl.length)];
    let uid = event.senderID;
  var thơ = (await axios.get("https://randomapi.kzbott.repl.co/poem/love")).data.data;
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
    else data["antiout"] = false;

    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);

    return api.sendMessage({body:`=== [ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] ====\n━━━━━━━━━━━━━━━━━━\n[🍍] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 : ${name}\n[💕] → 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 ${(data["antiout"] == true) ? "𝗯𝗮̣̂𝘁" : "𝘁𝗮̆́𝘁"} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼̂́𝗻𝗴 𝗼𝘂𝘁 𝗰𝗵𝘂̀𝗮 🐧\n[🕰] → 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀ : ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")}\n━━━━━━━━━━━━━━━━━━\n[⏳] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹 : ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${vtan} 𝗴𝗶𝗮̂𝘆\n[🍒] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́ : ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n[☁️] → 𝗧𝗵𝗶́𝗻𝗵 : ${thơ}`, attachment: imgurl}, event.threadID, event.messageID); 

}