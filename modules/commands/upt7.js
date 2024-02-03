const fbname = "kzkhanh547";
const githubname = "kzkhanh";
module.exports.config = {
  name:"upt7",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai-Team",
  description: "Random ảnh theo api - uptime",
  commandCategory: "Thông tin",
  cooldowns: 3,
  dependencies: {
    "pidusage": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args, getText }) => {
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
   const namebot = config.BOTNAME;
  const { commands } = global.client;
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/J-JRT/Font/blob/mainV2/UTM%20Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/J-JRT/Font/raw/mainV2/phenomicon.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/J-JRT/Font/raw/mainV2/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");

  let k = args[0];
   if (args[0] == "list") {
    axios.get(`https://docs-api.jrtxtracy.repl.co/taoanhdep/list`).then(res => {
      var count = res.data.listAnime.length;
      var data = res.data.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].Name} |  ${data[i].color}\n`;
      }
      msg += `💥 Trang (${page}/${numPage})\n→ Dùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, threadID,messageID);
    });
  }
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
  const loz = ["https://imgur.com/evWplKH.png","https://imgur.com/VwOYMn3.png","https://imgur.com/WuOVJIa.png","https://imgur.com/6SiB9yB.png","https://imgur.com/BRmVPFh.png","https://imgur.com/63E6i9f.png","https://imgur.com/o3OaHBz.png","https://imgur.com/JxeFlO8.png","https://imgur.com/i5wFLzQ.png","https://imgur.com/L209zJL.png","https://imgur.com/Y1AJjrN.png","https://imgur.com/0rQdQPO.png","https://imgur.com/hcOkU5i.png","https://imgur.com/KNajylt.png","https://imgur.com/cKWScwd.png","https://imgur.com/xrLi2Ss.png","https://imgur.com/PdVcRjh.png","https://imgur.com/9gSky1P.png","https://imgur.com/aG76R3G.png","https://imgur.com/VD6yYki.png","https://imgur.com/5cBezU8.png","https://imgur.com/5cBezU8.png","https://imgur.com/9Gw4scs.png"]
        const lengthchar = (await axios.get(`https://docs-api.jrtxtracy.repl.co/taoanhdep/search?type=id&id=${id - 1}`)).data
      var color = lengthchar.colorBg;
    const lengthcharr = (await axios.get(`https://docs-api.jrtxtracy.repl.co/taoanhdep/search?type=id&id=${id - 1}`)).data
    console.log(lengthcharr.length)
  const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/avatar_1111231.png`;
    let pathAva = __dirname + `/tad/avatar_3dsc11.png`;
    let background = (await axios.get(encodeURI((loz[Math.floor(Math.random() * loz.length)])), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthcharr.imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1


let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/tad/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = color;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "100px phenomicon";
    ctx.fillStyle = color;
    ctx.fillText("Kz BOT", 965, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/tad/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#000000";
    ctx.fillText(`${z_1} : ${x_1} : ${y_1} `, 1050, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "45px time";
    ctx.fillText("@" + "kzkhanh547", 930, 540)
    ctx.fillText("@" + "kzkhanh", 930, 610)
    ctx.fillText("@" + "kzkhanh547", 930, 690)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `=== 『 𝑼𝑷𝑻𝑰𝑴𝑬 𝑹𝑶𝑩𝑶𝑻 』 ===\n◆━━━━━━━━━━━━━━━━◆\n\n[📈]➜ Bot đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây\n[🔰]➜ Tên Bot: ${namebot}\n≻━━━━━•👇🏻•━━━━━≺\n\n[🌟]➜ Tổng người dùng: ${global.data.allUserID.length}\n[🍁]➜ Hiện đang có: ${global.config.ADMINBOT.length} Admin\n[💥]➜ Hiện đang có: ${global.config.NDH.length} Support Bot\n\n[🍑]➜ Tổng Nhóm: ${global.data.allThreadID.length}\n[📝]➜ Số lệnh: ${commands.size}\n[🌐]➜ Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}%\n[💹]➜ Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n[❗]➜ Ping: ${Date.now() - timeStart}ms\n\n≻━━━━━•❤️•━━━━━≺\n 
[📝]➜ Prefix tổng: ${global.config.PREFIX}\n[🍒]➜ ID Nhân Vật: ${id}`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
                         }