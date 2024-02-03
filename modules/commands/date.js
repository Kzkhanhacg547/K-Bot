module.exports.config = {
  name: "date",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "Xem giờ bằng ảnh\nCredits: NTKhang",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5,
};

function wrapText(ctx, text, maxWidth) {
  return new Promise(resolve => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText("W").width > maxWidth) return resolve(null);
    const words = text.split(" ");
    const lines = [];
    let line = "";
    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const temp = words[0];
        words[0] = temp.slice(0, -1);
        if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, temp.slice(-1));
        }
      }
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
        line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = "";
      }
      if (words.length === 0) lines.push(line.trim());
    }
    return resolve(lines);
  });
}

module.exports.run = async function ({ api, event, args, client, __GLOBAL }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas, Canvas } = require("canvas");
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + "/cache/clock.png";

  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");

  var cadao = ((await axios.get("https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/cadao")).data).data;
  //câu ca dao

  var texta = gio;
  var textb = cadao;
  var name = "𝐊𝐳 𝐁𝐎𝐓";


  var imgg = [
    "https://mega.com.vn/media/news/1907_khung-nen-ppt-dep-cho-slide3.jpg",
  "https://i.ibb.co/59wcrjW/395646046-1624991844576254-4596651772306861838-n-png-stp-dst-png-p480x480-nc-cat-100-ccb-1-7-nc-sid.png",
  "https://i.ibb.co/fkdzjr2/393967930-263041790065018-7812079661426611611-n-png-stp-dst-png-p480x480-nc-cat-103-ccb-1-7-nc-sid-8.png"
  ];
  var imgrd = imgg[Math.floor(Math.random() * imgg.length)];

  let getimg = (await axios.get(`${imgrd}`, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(pathImg, Buffer.from(getimg, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(1920, 1080);
  let ctx = canvas.getContext("2d");
  let tittle = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, 1920, 1080);
  ctx.font = "54px Bold";
  tittle.font = "70px Bold";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";

  // vẽ thời gian ở chính giữa
  let textWidth = ctx.measureText(texta).width;
  ctx.fillText(texta, 960, 540);

  // vẽ đoạn ca dao ở chính giữa và dưới thời gian
  let textWidth2 = ctx.measureText(textb).width;
  ctx.fillText(textb, 960, 620);

  //let textWidth3 = tittle.measureText(name).width;
  //tittle.fillText(name, 960, 430);

  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();

  fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};