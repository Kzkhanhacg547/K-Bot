const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Kz Khánhh",//copy text từ các mdl sendnoti khác của các coder: MANHIT, N1002, TruongMini | Lưu ý: Không xóa hoặc sửa đoạn này
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `👤 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗨𝘀𝗲𝗿: ${name}\n👪 𝗡𝗵𝗼́𝗺: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${body}\n\n» 𝗥𝗲𝗽𝗹𝘆 ( 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 ) 𝗹𝗮̣𝗶 𝘂𝘀𝗲𝗿💞`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `❖ -- [ 𝙁𝙀𝙀𝘿𝘽𝘼𝘾𝙆 𝙁𝙍𝙊𝙈 𝙐𝙎𝙀𝙍 ] -- ❖\n--------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n--------------\n ✎ 𝘾𝙤𝙣𝙩𝙚𝙣𝙩: ${body}\n--------------\n ➣ 𝙁𝙧𝙤𝙢 ${name}  𝒕𝒓𝒐𝒏𝒈 𝒏𝒉𝒐́𝒎 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻 ${name}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${body}\n𝗥𝗲𝗽𝗹𝘆 ( 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 ) 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗴𝘂̛̉𝗶 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘃𝗲̂̀ 𝗔𝗱𝗺𝗶𝗻 💓`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻 ${name}\n⏰ 𝗧𝗶𝗺𝗲: ${gio}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n𝗥𝗲𝗽𝗹𝘆 ( 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 ) 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗴𝘂̛̉𝗶 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘃𝗲̂̀ 𝗔𝗱𝗺𝗶𝗻 💓`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `====== [ 𝑻𝒉𝒐̂𝒏𝒈 𝒃𝒂́𝒐 ] ======\n--------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n--------------\n『𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠』 : ${args.join(" ")}\n\n--------------\n『𝐓𝐮̛̀ 𝐍𝐠𝐚̀𝐢』 ${await Users.getNameUser(senderID)} \n--------------\n𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 => 𝒈𝒖̛̉𝒊 𝒗𝒆̂̀ 𝒂𝒅𝒎𝒊𝒏`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `====== [ 𝑻𝒉𝒐̂𝒏𝒈 𝒃𝒂́𝒐 ] ======\n--------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n--------------\n『𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠』 : ${args.join(" ")}\n\n--------------\n『𝐓𝐮̛̀ 𝐍𝐠𝐚̀𝐢』 ${await Users.getNameUser(senderID)}\n--------------\n𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 => 𝒈𝒖̛̉𝒊 𝒗𝒆̂̀ 𝒂𝒅𝒎𝒊𝒏`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
  }
