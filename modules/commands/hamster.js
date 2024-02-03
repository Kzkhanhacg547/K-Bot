/*
@credit Thịnh võ mod lại từ cave
@chỉnh sửa credit cái con cặc
*/
const fs = require("fs");
module.exports.config = {
    name: "hamster",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "thịnh võ",
    description: "Kiếm tiền từ hamster",
    commandCategory: "kiếm tiền",
    cooldowns: 0,
    envConfig: {
        cooldownTime: 60
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hamster.jpg")) request("https://i.imgur.com/K4U6EWc.jpg").pipe(fs.createWriteStream(dirMaterial + "hamster.jpg"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("⚡𝑨𝒊 𝒄𝒉𝒐̣𝒏 𝒍𝒂̀𝒎 𝒕𝒉𝒊̀ 𝒏𝒈𝒖̛𝒐̛̀𝒊 đ𝒐́ 𝒕𝒖̛̣ 𝒂̂́𝒏 𝒍𝒂̀𝒎 𝒏𝒉𝒂!", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 100) + 10000; 
var b = Math.floor(Math.random() * 100) + 10000; 
var c = Math.floor(Math.random() * 100) + 10000; 
var x = Math.floor(Math.random() * 100) + 10000; 
var y = Math.floor(Math.random() * 100) + 10000; 
var f = Math.floor(Math.random() * 1000) - 10000; 

  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("") - Date.parse(new Date()),
            m = Math.floor( (t/00/60) % 60 ),
            h = Math.floor( (t/(00*60*60)) % 24 ),
            d = Math.floor( t/(00*60*60*24) ); 

            switch(e.body) {
                case "1": msg = ` 𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 Thu mua hamster bình thường và bán được ${a}.𝑽𝑵𝑫`;
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                break;             
                case "2": msg = ` 𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 Thu mua hamster bear và bán được ${b}.𝑽𝑵𝑫`; 
                await Currencies.increaseMoney(e.senderID, parseInt(b)); 
                break;
                case "3": msg = ` 𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 Thu mua hamster wanter white và bán được ${c}.𝑽𝑵𝑫`; 
                await Currencies.increaseMoney(e.senderID, parseInt(c)); 
                break;
                case "4": msg = ` 𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 Thu mua hamster campell và bán được ${x}.𝑽𝑵𝑫`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x)); 
                break;
                case "5": msg = ` 𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 Thu mua hamster bear mắt đỏ và bán được ${y}.𝑽𝑵𝑫`; 
                await Currencies.increaseMoney(e.senderID, parseInt(y)); 
                break;
                case "6": msg = ` 𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 bán tất cả các loại chuột đang có và bạn bị lừa hết ${f}.𝑽𝑵𝑫`; 
                await Currencies.increaseMoney(e.senderID, parseInt(f)); 
                break;
                attachment: fs.createReadStream(__dirname + `/cache/hamster.jpg`)
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("⚡𝑩𝒂̣𝒏 𝒎𝒖𝒐̂́𝒏 làm việc gì thì chọn việt đó!", e.threadID, e.messageID);
            if (choose > 6 || choose < 1) 
            return api.sendMessage("⚡Số mà bạn chọn không nằm trong danh sách", e.threadID, e.messageID);
          attachment: fs.createReadStream(__dirname + `/cache/hamster.jpg`)
            api.unsendMessage(handleReply.messageID);
            if (msg == "...") {
                msg = "...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });

        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("") - Date.parse(new Date()),
    d = Math.floor( t/(10*60*00) ),
    h = Math.floor( (t/(10*60*00)) % 00 ),
    m = Math.floor( (t/10/60) % 00 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (10* 60 ))/00),
            minutes = Math.floor(time / 10),
            seconds = ((time % 30) / 00).toFixed(0); 
        return api.sendMessage(`⚡𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 làm 𝒙𝒐𝒏𝒈 𝒏𝒈𝒉𝒊̉ 𝒏𝒈𝒐̛𝒊 𝒅𝒖̛𝒐̛̃𝒏𝒈 𝒔𝒖̛́𝒄 đ𝒊!`, e.threadID, e.messageID);
    }
    else {    
        var msg = {
            body: "========HAMSTER========"+`\n`+
                "\n1 ≻ hamster bình thường" +
                "\n2 ≻ hamster bear" +
                "\n3 ≻ hamster wanter white" +
                "\n4 ≻ hamster campell" +
                "\n5 ≻ hamster bear mắt đỏ" +
                "\n6 ≻ Bán hamster" +
                `\n\n📌𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒏𝒂̀𝒚 𝒕𝒉𝒆𝒐 𝒔𝒐̂́ đ𝒆̂̉ 𝒄𝒉𝒐̣𝒏!`,
                attachment: fs.createReadStream(__dirname + `/cache/hamster.jpg`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
  }
