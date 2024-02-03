module.exports.config = {
  name: "taoanhbox2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "shion - key chinhle",
  description: "Tạo ảnh all thành viên trong box",
  commandCategory: "Tiện ích",
  usages: "family <size> [#mã màu] hoặc family <size>\nNhập size avatar thành viên thích hợp và mã màu cho chữ (mặc định là đen) theo cú pháp:\n$family <size> <mã màu> <title>\nTrong đó:\n•size: Size mỗi avatar thành viên\n•mã màu: mã màu dạng hex\n•title: tiêu đề ảnh, mặc định là tên box\nVí dụ: $family 200 #ffffff Anh em một nhà\nNếu chọn size = 0 thì sẽ tự chỉnh size, nếu không điền title thì title sẽ là tên box",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "", 
    "axios":"", 
    "canvas": "", 
    "jimp": "", 
    "node-superfetch": "",
    "chalk": ""
  }
};
module.exports.run = async ({ event, api, args }) => {
module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
const jimp = global.nodemodule["jimp"];
const Canvas = global.nodemodule["canvas"];
const superfetch=global.nodemodule["node-superfetch"];
const fs = global.nodemodule["fs-extra"];
const axios = global.nodemodule["axios"];
const img = new Canvas.Image();
function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)) };
const { threadID, messageID } = event;
var live = [], admin = [], i = 0;
if(args[0] == 'help' || args[0] == '0' || args[0] == '-h') return api.sendMessage('Sử dụng: '+ this.config.name + ' [size avt]' + ' [mã màu]' + ' [tên nhóm (title)] || bỏ trống tất cả bot sẽ get thông tin tự động', threadID, messageID)
/*============DOWNLOAD FONTS=============*/
if(!fs.existsSync(__dirname+`/cache/TUVBenchmark.ttf`)) { 
    let downFonts = (await axios.get(`https://drive.google.com/u/0/uc?id=1NIoSu00tStE8bIpVgFjWt2in9hkiIzYz&export=download`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname+`/cache/TUVBenchmark.ttf`, Buffer.from(downFonts, "utf-8"));
  };
/*===========BACKGROUND & AVATAR FRAMES==========*/
var bg = ['https://i.imgur.com/P3QrAgh.jpg', 'https://i.imgur.com/RueGAGI.jpg', 'https://i.imgur.com/bwMjOdp.jpg', 'https://i.imgur.com/trR9fNf.jpg']
var background = await Canvas.loadImage(bg[Math.floor(Math.random() * bg.length)]);
var bgX = background.width;
var bgY = background.height;
var khungAvt = await Canvas.loadImage("https://i.imgur.com/gYxZFzx.png")
const imgCanvas = Canvas.createCanvas(bgX, bgY);
const ctx = imgCanvas.getContext('2d');
ctx.drawImage(background, 0, 0, imgCanvas.width, imgCanvas.height);
/*===============GET INFO GROUP CHAT==============*/
var { participantIDs, adminIDs, name, userInfo } = await api.getThreadInfo(threadID)
for(let idAD of adminIDs) { admin.push(idAD.id) };
/*=====================REMOVE ID DIE===================*/
for(let idUser of userInfo) {
  if (idUser.gender != undefined) { live.push(idUser) }
}
/*======================CUSTOM====================*/
let size, color, title
var image = bgX*(bgY-200);
var sizeParti = Math.floor(image/live.length);
var sizeAuto = Math.floor(Math.sqrt(sizeParti));
if(!args[0]) { size = sizeAuto; color = '#FFFFFF' ; title = encodeURIComponent(name) }
else { size = parseInt(args[0]); color = args[1] || '#FFFFFF' ; title = args.slice(2).join(" ") || name; }
/*===========DISTANCE============*/
var l = parseInt(size/15), x = parseInt(l), y = parseInt(200), xcrop = parseInt(live.length*size), ycrop = parseInt(200+size);
size = size-l*2;
/*================CREATE PATH AVATAR===============*/
api.sendMessage(`==== [ 𝗧𝗮̣𝗼 𝗮̉𝗻𝗵 𝗯𝗼𝘅 ] ====\n━━━━━━━━━━━━━━━━\n[📷] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗱𝘂̛̣ 𝘁𝗶́𝗻𝗵: ${participantIDs.length}\n[✂️] → 𝗦𝗶𝘇𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱: ${bgX} x ${bgY}\n[🌹] → 𝗦𝗶𝘇𝗲 𝗔𝘃𝗮𝘁𝗮𝗿: ${size}\n[🐧] → 𝗠𝗮̀𝘂: ${color}`,threadID, messageID);
var pathAVT = (__dirname+`/cache/${Date.now()+10000}.png`)
/*=================DRAW AVATAR MEMBERS==============*/
  for(let idUser of live) {
    console.log("Vẽ: " + idUser.id);
    try { var avtUser = await superfetch.get(`https://graph.facebook.com/${idUser.id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`) } 
    catch(e) { continue }
    if(x+size > bgX) { xcrop = x; x += (-x)+l; y += size+l; ycrop += size+l };
    if(ycrop > bgY) { ycrop += (-size); break };
    avtUser = avtUser.body;
    var avatar = await this.circle(avtUser);
    var avatarload = await Canvas.loadImage(avatar);
    img.src = avatarload;
    ctx.drawImage(avatarload, x, y, size, size);
    if(admin.includes(idUser.id)) { ctx.drawImage(khungAvt, x, y, size, size) };
    i++
    console.log("Done: " + idUser.id);
    x += parseInt(size+l);
  }
  /*==================DRAW TITLE==================*/
  Canvas.registerFont(__dirname+`/cache/TUVBenchmark.ttf`, { family: "TUVBenchmark"});
  ctx.font = "100px TUVBenchmark";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(decodeURIComponent(title), xcrop/2, 133);
  /*===================CUT IMAGE===================*/
  console.log(`==== [ 𝗧𝗮̣𝗼 𝗮̉𝗻𝗵 𝗯𝗼𝘅 ] ====\n━━━━━━━━━━━━━━━━\n[🎀] → 𝗩𝗲̃ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${i} 𝗮𝘃𝘁`)
  console.log(`[⚜️] → 𝗟𝗼̣𝗰 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${participantIDs.length-i} 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸`)
  const cutImage = await jimp.read(imgCanvas.toBuffer());
  cutImage.crop(0, 0, xcrop, ycrop+l-30).writeAsync(pathAVT);
  await delay(300);
  /*====================SEND IMAGE==================*/ 
  return api.sendMessage({body: `==== [ 𝗧𝗮̣𝗼 𝗮̉𝗻𝗵 𝗯𝗼𝘅 ] ====\n━━━━━━━━━━━━━━━━\n[👤] → 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻: ${i}\n[🎀] → 𝘀𝗶𝘇𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱: ${bgX} x ${bgY}\n[👻] → 𝗟𝗼̣𝗰 ${participantIDs.length-i} 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸`, attachment: fs.createReadStream(pathAVT)}, threadID, (error, info) =>{
    if (error) return api.sendMessage(`Đã xảy ra lỗi ${error}`, threadID, () => fs.unlinkSync(pathAVT), messageID)
    console.log('𝗚𝘂̛̉𝗶 𝗮̉𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴'); 
    fs.unlinkSync(pathAVT) }, messageID); 
}
//export FONTCONFIG_PATH=/etc/fonts