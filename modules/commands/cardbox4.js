const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsName = 35
const fontsInfo = 25
const fontsOthers = 27
const colorName = "#EEEEEE"
module.exports.config = {
  name: "cardbox4",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Dũngkon", // Vui Lòng Ko Đổi Cre
  description: "Xem thông tin box của bạn",
  commandCategory: "Thông tin",
  usages: "cardbox2",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + `/cache/${senderID}123.png`;
  let pathAva = __dirname + `/cache/avtuserthread.png`;
  let pathAvata = __dirname + `/cache/avtuserrd.png`;
  let pathAvata2 = __dirname + `/cache/avtuserrd2.png`;
  let pathAvata3 = __dirname + `/cache/avtuserrd3.png`;
  let pathAvata4 = __dirname + `/cache/avtuserrd4.png`;

  var threadInfo = await api.getThreadInfo(threadID);
  let threadName = threadInfo.threadName;
  var nameMen = [];
  var gendernam = [];
  var gendernu = [];
  var nope = [];

  for (let z in threadInfo.userInfo) {
    var gioitinhone = threadInfo.userInfo[z].gender;
    var nName = threadInfo.userInfo[z].name;
    if (gioitinhone == 'MALE') {
      gendernam.push(z + gioitinhone);
    } else if (gioitinhone == 'FEMALE') {
      gendernu.push(gioitinhone);
    } else {
      nope.push(nName);
    }
  }

  var nam = gendernam.length;
  var nu = gendernu.length;
  let qtv = threadInfo.adminIDs.length;
  let sl = threadInfo.messageCount;
  let threadMem = threadInfo.participantIDs.length;
  const path = global.nodemodule["path"];
  const Canvas = global.nodemodule["canvas"];
  const __root = path.resolve(__dirname, "cache");
  var qtv2 = threadInfo.adminIDs;
  var idad = qtv2[Math.floor(Math.random() * qtv)];
  let idmem = threadInfo.participantIDs
  var idmemrd = idmem[Math.floor(Math.random() * qtv)];
  var idmemrd1 = idmem[Math.floor(Math.random() * qtv)];
  var idmemrd2 = idmem[Math.floor(Math.random() * qtv)];
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${idad.id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let getAvatarOne2 = (await axios.get(`https://graph.facebook.com/${idmemrd}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let getAvatarOne3 = (await axios.get(`https://graph.facebook.com/${idmemrd1}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let getAvatarOne4 = (await axios.get(`https://graph.facebook.com/${idmemrd2}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let Avatar = (
    await axios.get(encodeURI(
      `${threadInfo.imageSrc}`),
      { responseType: "arraybuffer" }
    )
  ).data;
  let getWanted = (
    await axios.get(encodeURI(`https://i.imgur.com/VxUEnHD.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  fs.writeFileSync(pathAvata2, Buffer.from(getAvatarOne2, 'utf-8'));
  fs.writeFileSync(pathAvata3, Buffer.from(getAvatarOne3, 'utf-8'));
  fs.writeFileSync(pathAvata4, Buffer.from(getAvatarOne4, 'utf-8'));
  avatar = await this.circle(pathAva);
  avataruser = await this.circle(pathAvata);
  avataruser2 = await this.circle(pathAvata2);
  avataruser3 = await this.circle(pathAvata3);
  avataruser4 = await this.circle(pathAvata4);
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));

  /*-----------------download----------------------*/
  if (!fs.existsSync(__dirname + `${fonts}`)) {
    let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + `${fonts}`, Buffer.from(getfont, "utf-8"));
  };
  /*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  let baseAvata = await loadImage(avataruser);
  let baseAvata2 = await loadImage(avataruser2);
  let baseAvata3 = await loadImage(avataruser3);
  let baseAvata4 = await loadImage(avataruser4);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  let text = args.join(" ") || threadName
  let id = threadInfo.threadID;
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, 38, 130, 183, 183);
  ctx.drawImage(baseAvata, 20, 325, 40, 40);
  ctx.drawImage(baseAvata2, 72, 325, 40, 40);
  ctx.drawImage(baseAvata3, 128, 325, 40, 40);
  ctx.drawImage(baseAvata4, 182, 325, 40, 40);
  ctx.font = `700 ${fontsName}px Arial`;
  ctx.fillStyle = `${colorName}`
  ctx.textAlign = "start";
  fontSize = 40;
  ctx.fillText(text, 215, 50);
  Canvas.registerFont(__dirname + `${fonts}`, {
    family: "Play-Bold"
  });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#EEEEEE";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`➜ Số thành viên: ${threadMem}`, 265, 143);
  ctx.fillText(`➜ Quản trị viên: ${qtv}`, 265, 186);
  ctx.fillText(`➜ Nam: ${nam}`, 265, 230);
  ctx.fillText(`➜ Nữ: ${nu}`, 265, 274);
  ctx.fillText(`➜ Tổng số tin nhắn: ${sl}`, 265, 317);
  ctx.font = `${fontsOthers}px Play-Bold`;
  ctx.fillStyle = "#33FF00";
  ctx.textAlign = "start";
  fontSize = 30;
  ctx.fillText(`ID BOX: ${id}`, 18, 470);
  ctx.font = `${fontsOthers}px Play-Bold`;
  ctx.fillStyle = "#EEEEEE";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`➜ Cùng ${parseInt(threadMem) - 3} thành viên khác...`, 265, 357);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  fs.removeSync(pathAvata);

  return api.sendMessage({
    body: `=== 『 INFORMATION BOX 』 ===\n━━━━━━━━━━━━━━━\n\n[🎁] ➜ Tên nhóm: ${threadName}\n[🔢] ➜ Số thành viên: ${threadMem}\n[🗝️] ➜ Quản trị viên: ${qtv}\n[🙍‍♂️] ➜ Nam: ${nam}\n[🙍‍♀️] ➜ Nữ: ${nu}\n[💬] ➜ Tổng số tin nhắn: ${sl}\n[🆔] ➜ ID BOX: ${id}\n\n━━━━━━━━━━━━━━━\n[🌟]=== 『 𝐁𝐎𝐓  』 ===[🌟]\n\n===「${timeNow}」===`,
    attachment: fs.createReadStream(pathImg)
  },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
