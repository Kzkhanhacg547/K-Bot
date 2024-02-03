module.exports.config = {
  name: "upt4",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Vtuan",//mod by ARAXY XD
  description: "Kiểm tra",
  commandCategory: "Hệ Thống",
  usages: "[Tag]",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args, Currencies, Users }) {
  const { threadID, messageID, senderID, mentions } = event;
  const fs = require('fs');
const axios = require('axios')
 if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
   const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);


   var upt = `${hours}:${minutes}:${seconds}`;


   const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/atmaraxy.png";
    let bg = (await axios.get(`https://i.ibb.co/Yfs8vhk/368282327-1688238738353038-8756635674355218001-n-png-nc-cat-108-ccb-1-7-nc-sid-8cd0a2-nc-ohc-xen5-Yh.png`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
           let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "70px SplineSans-Medium";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText('' + upt.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '', 200, 190);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);

    const moment = require("moment-timezone");
    const Ngay = moment.tz("Asia/Ho_Chi_Minh").format("DD");
    const Thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
    const Nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
    if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
    if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
    if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
    if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
    if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
    if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'


     const timeStart = Date.now();
     const admin = config.ADMINBOT;


       var msg =  {body: `======『 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 』======\n◆━━━━━━━━━━◆\n 🌸 ${thu} 𝑛𝑔𝑎̀𝑦 ${Ngay} 𝑡ℎ𝑎́𝑛𝑔 ${Thang} 𝑛𝑎̆𝑚 ${Nam} \n 『 🌸 』 ➜ 𝐿𝑒̣̂𝑛ℎ 𝑐𝑢̉𝑎 ℎ𝑒̣̂ 𝑡ℎ𝑜̂́𝑛𝑔: ${global.config.PREFIX}\n『 🌸 』 → 𝑇𝑜̂̉𝑛𝑔 𝑠𝑜̂́ 𝐴𝐷𝑀𝐼𝑁𝐵𝑂𝑇: ${admin.length}\n『 🌸 』 ➜ 𝐵𝑜𝑡 𝑐𝑜́ ${client.commands.size} 𝑙𝑒̣̂𝑛ℎ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔\n◆━━━━━━━━━━◆\n❗ Ping: ${Date.now() - timeStart}ms`, attachment: fs.createReadStream(path)
    }

   return api.sendMessage( msg,  threadID, async (error, info) => {
    fs.unlinkSync(path),
        messageID
      })
      }

