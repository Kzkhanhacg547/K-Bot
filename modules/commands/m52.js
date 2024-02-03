module.exports.config = {
  name: "m52",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DC-Nam",
  description: "tạo ảnh trên taoanhdep",
  commandCategory: "THÀNH VIÊN",
  usages: "",
  cooldowns: 5
};
module.exports.run = async function({ api, args, event, permssion }) {
 return api.sendMessage("Reply Tin Nhắn Này Để Nhập Tên Bạn Nam", event.threadID, (err, info) => {
    return global.client.handleReply.push({
      step: 1,
      name: this.config.name,
      author: event.senderID,
      messageID: info.messageID
    });
  }, event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios");
  const { threadID, messageID, senderID} = event
  const request = require('request');
    const Canvas = require("canvas"); 
  const fs = require('fs')
if(!fs.existsSync(__dirname+'/tad/UTMLibelKT.ttf')) { 
      let getfont = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/UTMLibelKT.ttf`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/tad/UTMLibelKT.ttf", Buffer.from(getfont, "utf-8"));
    };
if(!fs.existsSync(__dirname+'/tad/SVN-Holidays.ttf')) { 
  let getfont2 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/SVN-Holidays.ttf`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname + "/tad/SVN-Holidays.ttf", Buffer.from(getfont2, "utf-8"));
    };
   let path = __dirname + `/tad/avatar_1.png`;
    if(handleReply.step == 1){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`Bạn đã chọn tên bạn nam là ${event.body}, reply tin nhắn này để nhập năm sinh hoặc chiều cao của bạn nam :>`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 2,
        name: this.config.name,
        author: event.senderID,
        name_nam: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
  else if(handleReply.step == 2){
    api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`Bạn đã nhập năm sinh bạn nam là ${event.body}, reply tin nhắn này để nhập tên của bạn nữ`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 3,
        name: this.config.name,
        author: event.senderID,
        name_nam: handleReply.name_nam,
        ns_nam: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
   else if(handleReply.step == 3){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`Bạn chọn tên bạn nữ là ${event.body}, reply tin nhắn này để nhập năm sinh hoặc chiều cao của bạn nữ`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Lỗi bất định`, event.threadID)
      return global.client.handleReply.push({
        step: 4,
        name: this.config.name,
        author: event.senderID,
        name_nam: handleReply.name_nam,
        ns_nam: handleReply.ns_nam,
        name_nu: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
  else if(handleReply.step == 4){
    api.unsendMessage(handleReply.messageID);
    let bg = (await axios.get(`https://lh3.googleusercontent.com/-Ph7K4UgiZXI/Ye_iE5sLh8I/AAAAAAAA4dQ/AOiqTIE7kc8L-X8XKY-z8ptY4K0__yFpgCNcBGAsYHQ/s0/m52.jpg`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
  let bgBase = await Canvas.loadImage(path);
    let canvas = Canvas.createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
   Canvas.registerFont(__dirname + `/tad/UTMLibelKT.ttf`, {
      family: "UTM-Libel-KT"
    });
    ctx.textAlign = "right";
    ctx.fillStyle = "#3f3e3c"
    ctx.font = "130px UTM-Libel-KT";
    ctx.fillText(handleReply.name_nam, 500, 260);
    ctx.textAlign = "left";
    ctx.fillText(handleReply.name_nu, 1200, 400);
    Canvas.registerFont(__dirname + `/tad/SVN-Holidays.ttf`, {
      family: "SVN-Holidays"
    });
    ctx.textAlign = "right";
    ctx.fillStyle = "#d64f55"
    ctx.font = "130px UTM-Libel-KT";
    ctx.fillText(handleReply.ns_nam, 600, 380);
    ctx.textAlign = "left";
    ctx.fillText(event.body, 1250, 500);
    ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(path, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(path)}, threadID, () => fs.unlinkSync(path), messageID);   
  }
                                                                                   }