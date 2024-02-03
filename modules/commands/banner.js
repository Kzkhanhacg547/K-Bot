const axios = require("axios");
const fs = require("fs");
const { loadImage, createCanvas, registerFont } = require("canvas");

module.exports.config = {
    name: "banner",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "",
    description: "Tạo ảnh",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
  };

module.exports.run = async function({ api, event }) {
    if (!fs.existsSync(__dirname + `/tad/SVN-ARIAL-bold.ttf`)) {
        let getfont = (await axios.get(`https://github.com/PLViet/fonts/blob/main/SVN-ARIAL%202%20BOLD%20ITALIC.TTF?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/SVN-ARIAL-bold.ttf`, Buffer.from(getfont, "utf-8"));
    };
   if (!fs.existsSync(__dirname + `/tad/SVN-Suargie.ttf`)) {
        let getfont = (await axios.get(`https://github.com/PLViet/fonts/raw/main/SVN-Suargie.ttf`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/SVN-Suargie.ttf`, Buffer.from(getfont, "utf-8"));
    };
 
    return api.sendMessage("🌸Reply Tin Nhắn Này tên 1🌸", event.threadID, (err, info) => {
        global.client.handleReply.push({
            step: 1,
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        });
    });
    }

module.exports.handleReply = async function({ api, event, handleReply }) {
   let pathImg = __dirname + `/cache/1.png`; 
  if (event.senderID != handleReply.author) return api.sendMessage('hông pé ơi', event.threaID);switch(handleReply.step) {
        case 1: {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🌸Bạn chọn tên 1 ${event.body}, hãy reply tin nhắn này để nhập tên 2🌸`, event.threadID, (err, info) => {
                global.client.handleReply.push({
                    step: 2,
                    name: this.config.name,
                    author: event.senderID,
                    text1: event.body,
                    messageID: info.messageID
                });
            });
        }
        case 2: {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🌸Bạn chọn tên 2 ${event.body}, hãy reply tin nhắn này để nhập tên 3🌸`, event.threadID, (err, info) => {
                global.client.handleReply.push({
                    step: 3,
                    name: this.config.name,
                    author: event.senderID,
                    text1: handleReply.text1,
                    text2: event.body,
                    messageID: info.messageID
                });
            });
        }
        case 3: {
            api.unsendMessage(handleReply.messageID);
            const text2 = handleReply.text2
            const text1 = handleReply.text1
            const text3 = event.body
            registerFont(__dirname + `/tad/SVN-ARIAL-bold.ttf`, {
                family: "SVN-ARIAL-bold"
            });
          registerFont(__dirname + `/tad/SVN-Suargie.ttf`, {
                family: "SVN-Suargie"
            });
            let img = await loadImage("https://i.imgur.com/NY6CzuE.jpg");
            let canvas = createCanvas(img.width, img.height);
            var ctx = canvas.getContext("2d");
            ctx.fillRect(0, 0, canvas.width, canvas.height);

         ctx.save()
         ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
                
         ctx.restore()
         ctx.save()
         ctx.fillStyle = 'rgba(30,30,30,0.5)'
         ctx.fillRect(0, 0, canvas.width, canvas.height)
         ctx.restore()
         ctx.save();

         ctx.shadowBlur = 30,
         ctx.shadowColor = 'rgba(255,255,255, 0.8)'

        ctx.save(),
        ctx.fillStyle = '#fff',
        ctx.textAlign = 'center',
        ctx.font = "250px SVN-Suargie",
        ctx.fillText( text1, canvas.width / 2, canvas.height / 2 + 60 )
        ctx.restore();
        ctx.save(),
       
        ctx.textAlign = 'center',
        ctx.font = '60px SVN-ARIAL-bold'
        ctx.fillStyle = '#fff'
        ctx.fillText( text2, canvas.width / 2,  canvas.height /2 + 190, 1300, 60 )
        ctx.restore();
        ctx.save();
        
        ctx.textAlign = 'center',
        ctx.font = '50px SVN-ARIAL-bold',
        ctx.fillStyle = '#fff',
        ctx.fillText(text3,  canvas.width / 2, canvas.height / 2 + 250,  1300, 50  )
        ctx.restore();
            ctx.save();
            ctx.beginPath();
            const imageBuffer = canvas.toBuffer();
            fs.writeFileSync(pathImg, imageBuffer);
            return api.sendMessage({
            body: `🌸ảnh của bạn đây🌸`,
            attachment: fs.createReadStream(pathImg)
            }, event.threadID, event.messageID);
        }
    }
}

