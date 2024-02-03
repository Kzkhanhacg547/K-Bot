module.exports.config = {
  name: "cnbh",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Comment trên cnbh ( ͡° ͜ʖ ͡°)",
  commandCategory: "Tạo ảnh",
  usages: "[text]",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.wrapText = (ctx, text, maxWidth) => {
  return new Promise((resolve) => {
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
};

module.exports.run = async function ({ api, event, args, Users, Threads }) {
  let { senderID, threadID, messageID } = event;
  var datathread = (await Threads.getData(event.threadID)).threadInfo; // get data, id box
    var namethread = datathread.threadName; // get name box
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
    if(!fs.existsSync(__dirname+'/cache/AlegreyaSans-Regular.ttf')) { 
        let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1cXbgV7NmlDKYNb-ygBDGHl4EBVKPuUKm&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname+"/cache/AlegreyaSans-Regular.ttf", Buffer.from(getfont, "utf-8"));
      };   
    
  let pathImg = __dirname + "/cache/cnbh.png";
  var text = args.join(" ");
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var name = (await Users.getData(id)).name
  let pathAva = __dirname + "/cache/avt.png";
  let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  if (!text)
    return api.sendMessage("Nhập nội dung comment cnbh", threadID, messageID);
  let getPorn = (
    await axios.get(`https://i.imgur.com/jlqcZ5g.png`, {
      responseType: "arraybuffer",
    })
  ).data;
  const Canvas = global.nodemodule["canvas"];
	Canvas.registerFont(__dirname+`/cache/AlegreyaSans-Regular.ttf`, {
        family: "AlegreyaSans"
    });
  fs.writeFileSync(pathImg, Buffer.from(getPorn, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(pathAva);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.font = "700 23px AlegreyaSans";
  ctx.fillStyle = "#6e0a78";
  ctx.textAlign = "start";
  let fontSize = 23;
  ctx.drawImage(baseAva, 27, 24, 165, 210);
  ctx.fillText(name, 310, 180);
  ctx.fillText("ID: "+id, 294, 65);
  ctx.fillText(namethread, 300, 208);
  ctx.font = "400 23px AlegreyaSans";
  ctx.fillStyle = "#6e0a78";
  ctx.textAlign = "start";
  fontSize = 23;

  while (ctx.measureText(text).width > 2600) {
    fontSize--;
    ctx.font = `400 ${fontSize}px AlegreyaSans, sans-serif`;
  }
  const lines = await this.wrapText(ctx, text, 1160);
  ctx.fillText(lines.join("\n"), 328, 237); //comment
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  return api.sendMessage(
    { body: "+1 cháu ngoan của Bác <3",
      attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};