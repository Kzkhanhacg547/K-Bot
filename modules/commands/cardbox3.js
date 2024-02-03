const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsName = 35
const fontsInfo = 25
const fontsOthers = 27
const colorName = "#EEEEEE"
module.exports.config = {
  name: "cardbox3",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Dũngkon", // Vui Lòng Ko Đổi Cre
  description: "Xem thông tin box của bạn",
  commandCategory: "Tạo ảnh",
  usages: "",
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
module.exports.run = async function ({ api, event, args, Users }) {
  var _0xee18=["\x63\x72\x65\x64\x69\x74\x73","\x63\x6F\x6E\x66\x69\x67","\x44\u0169\x6E\x67\x6B\x6F\x6E","\x54\x68\x61\x79\x20\x63\x72\x65\x64\x69\x74\x73\x20\u0103\x6E\x20\x63\u1EE9\x74\x20\xE0\x20\u0111\u1ED5\x69\x20\x6C\u1EA1\x69\x20\x6E\x68\x61\x6E\x68\x20\x63\xF2\x6E\x20\x6B\u1ECB\x70","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if((this[_0xee18[1]][_0xee18[0]])!= _0xee18[2]){return api[_0xee18[6]](`${_0xee18[3]}`,event[_0xee18[4]],event[_0xee18[5]])}
  let { senderID, threadID, messageID } = event;
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
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
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
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#EEEEEE";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`» Số thành viên: ${threadMem}`, 265, 143);
  ctx.fillText(`» Quản trị viên: ${qtv}`, 265, 186);
  ctx.fillText(`» Nam: ${nam}`, 265, 230);
  ctx.fillText(`» Nữ: ${nu}`, 265, 274);
  ctx.fillText(`» Tổng số tin nhắn: ${sl}`, 265, 317);
  ctx.font = `${fontsOthers}px Play-Bold`;
  ctx.fillStyle = "#33FF00";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`» ID BOX: ${id}`, 265, 405);
  ctx.font = `${fontsOthers}px Play-Bold`;
  ctx.fillStyle = "#EEEEEE";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`» Cùng ${parseInt(threadMem)-3} thành viên khác...`, 265, 357);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};