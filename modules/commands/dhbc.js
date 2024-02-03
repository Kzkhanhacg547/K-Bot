  const coinsup = 1000000 //thay số coins được nhận khi đoán trúng
const coinsdown = 10000 //thay số coins bị mất khi yêu cầu gợi ý
const timeUnsend = 1 //thời gian thu hồi tin nhắn sau khi trả lời đúng trong thời gian timeUnsend
const axios = global.nodemodule["axios"];
module.exports.config = {
    name: "dhbc",
    version: "1.2.0",
    hasPermssion: 0,
    credits: "D-Jukie",//Mod thêm by Tpk
    description: "Đuổi hình bắt chữ trên chính messenger của bạn!!!",
    commandCategory: "Trò Chơi",
    usages: "[1/2]",
    cooldowns: 10
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "dhbc.jpeg")) request("https://i.imgur.com/WxpP7YF.jpeg").pipe(fs.createWriteStream(dirMaterial + "dhbc.jpeg"));
}
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies
}) {
    var {
        tukhoa,
        suggestions
    } = handleReply;
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "2": {
            api.unsendMessage(handleReply.messageID);
            const res = await axios.get(`https://raw.githubusercontent.com/J-JRT/api1/mainV2/data.json`);
            const length1 = res.data.doanhinh.length
            const dataGame = res.data.doanhinh[Math.floor(Math.random() * length1)]
            const tukhoadung = dataGame.tukhoa;
            const suggestions = dataGame.suggestions
            const fs = global.nodemodule["fs-extra"];
            const sokitu = dataGame.sokitu;
            const anh1 = dataGame.link1
            const anh2 = dataGame.link2


            let Avatar = (await axios.get(anh1, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh1.png", Buffer.from(Avatar, "utf-8"));
            let Avatar2 = (await axios.get(anh2, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh2.png", Buffer.from(Avatar2, "utf-8"));
            var imglove = [];
            imglove.push(fs.createReadStream(__dirname + "/cache/anh1.png"));
            imglove.push(fs.createReadStream(__dirname + "/cache/anh2.png"));

            var msg = {
                body: `→ 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐧à𝐲 để 𝐭𝐫ả 𝐥ờ𝐢:\n𝐆ợ𝐢 ý: ${sokitu}\n\n→ 𝐑𝐞𝐩𝐥𝐲: 𝐆ợ𝐢 ý - để 𝐱𝐞𝐦 𝐠ợ𝐢 ý 2 (-${coinsdown}$)`,
                attachment: imglove
            }
            return api.sendMessage(msg, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "reply",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    tukhoa: tukhoadung,
                    suggestions: suggestions
                })
            })
        }
        case "1": {
            api.unsendMessage(handleReply.messageID);
            const res = await axios.get(`https://raw.githubusercontent.com/kzkhanh/kzkhanh/main/dhbc.json`);
            const length2 = res.data.doanhinh.length
            const dataGame = res.data.doanhinh[Math.floor(Math.random() * length2)]
            const tukhoadung = dataGame.tukhoa;
            const suggestions = dataGame.suggestions
            const fs = global.nodemodule["fs-extra"];
            const sokitu = dataGame.sokitu;
            const anh1 = dataGame.link


            let Avatar = (await axios.get(anh1, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh1.png", Buffer.from(Avatar, "utf-8"));
            var imglove = [];
            imglove.push(fs.createReadStream(__dirname + "/cache/anh1.png"));

            var msg = {
                body: `→ 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐧à𝐲 để 𝐭𝐫ả 𝐥ờ𝐢:\n𝐆ợ𝐢 ý: ${sokitu}\n\n→ 𝐑𝐞𝐩𝐥𝐲: 𝐆ợ𝐢 ý - để 𝐱𝐞𝐦 𝐠ợ𝐢 ý 2 (-${coinsdown}$)`,
                attachment: imglove
            }
            return api.sendMessage(msg, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "reply2",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    tukhoa: tukhoadung,
                    suggestions: suggestions
                })
            })
        }
        }
        const choose = parseInt(event.body);
        if (isNaN(event.body)) return api.sendMessage("→ 𝐇ã𝐲 𝐧𝐡ậ𝐩 1 𝐜𝐨𝐧 𝐬ố", event.threadID, event.messageID);
        if (choose > 2 || choose < 1) return api.sendMessage("→ 𝐋ự𝐚 𝐜𝐡ọ𝐧 𝐜ủ𝐚 𝐛ạ𝐧 𝐤𝐡ô𝐧𝐠 𝐧ằ𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬á𝐜𝐡", event.threadID, event.messageID)
    }


    case "reply": {
        const dapan = event.body
        if (dapan.toLowerCase() == "gợi ý" ) { 
            let balance = (await Currencies.getData(event.senderID)).money;
            if (coinsdown > balance) return api.sendMessage(`→ 𝐁ạ𝐧 𝐤𝐡ô𝐧𝐠 đủ ${coinsdown}$ để 𝐱𝐞𝐦 𝐠ợ𝐢 ý!!`,event.threadID,event.messageID);
            await Currencies.decreaseMoney(event.senderID, parseInt(coinsdown))
            api.sendMessage(`→ 𝐆ợ𝐢 ý 𝐜𝐡𝐨 𝐛ạ𝐧 𝐥à: \n→ ${suggestions} (-${coinsdown}$)`, event.threadID, event.messageID) 
        }
        else { 
        if (dapan.toLowerCase() == tukhoa) {
            //console.log(suggestions)
            await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
            var name1 = await Users.getData(event.senderID)
            setTimeout(function () {
                api.unsendMessage(handleReply.messageID);
            }, timeUnsend*1000);
            return api.sendMessage(`→ ${name1.name},𝐁ạ𝐧 đã 𝐭𝐫ả 𝐥ờ𝐢 𝐜𝐡í𝐧𝐡 𝐱á𝐜!\n→ Đá𝐩 á𝐧 𝐥à: ${tukhoa} (+${coinsup}$)`, event.threadID, event.messageID)
        } else
            return api.sendMessage(`→ 𝐒𝐚𝐢 𝐫ồ𝐢 𝐛ạ𝐧 ơ𝐢 :)​)`, event.threadID, event.messageID)
    }
} ; break;
    case "reply2": {
        const dapan1 = event.body
        if (dapan1.toLowerCase() == "gợi ý") { 
            let balance = (await Currencies.getData(event.senderID)).money;
            if (coinsdown > balance) return api.sendMessage(`→ 𝐁ạ𝐧 𝐤𝐡ô𝐧𝐠 đủ ${coinsdown}$ để 𝐱𝐞𝐦 𝐠ợ𝐢 ý!!`,event.threadID,event.messageID);
            await Currencies.decreaseMoney(event.senderID, parseInt(coinsdown))
            api.sendMessage(`→ 𝐆ợ𝐢 ý 𝐜𝐡𝐨 𝐛ạ𝐧 𝐥à: \n→ ${suggestions} (-${coinsdown}$)`, event.threadID, event.messageID) 
        }
            else {

        if (dapan1.toLowerCase() == tukhoa) {
            await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
            var name1 = await Users.getData(event.senderID)
            setTimeout(function () {
                api.unsendMessage(handleReply.messageID);
            }, timeUnsend*1000);
            return api.sendMessage(`→ ${name1.name} 𝐁ạ𝐧 đã 𝐭𝐫ả 𝐥ờ𝐢 𝐜𝐡í𝐧𝐡 𝐱á𝐜!\n→ Đá𝐩 á𝐧 𝐥à: ${tukhoa} (+${coinsup}$)`, event.threadID, event.messageID)
        } else
            return api.sendMessage(`→ 𝐒𝐚𝐢 𝐫ồ𝐢 𝐛ạ𝐧 ơ𝐢 :)​`, event.threadID, event.messageID)
}
}
default: break;

}
}

module.exports.run = async function ({
    args,
    api,
    event,
    Users
}) {
  const fs = require("fs");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    if ((this.config.credits) != "D-Jukie") { return api.sendMessage(`⚡️Phát hiện credits đã bị thay đổi`, event.threadID, event.messageID)}
    if (!args[0]) {
    return api.sendMessage({body: `====『 Đ𝗨𝗢̂̉𝗜 𝗛𝗜̀𝗡𝗛 𝗕𝗔̆́𝗧 𝗖𝗛𝗨̛̃ 』====\n━━━━━━━━━━━━━━━━\n[💞] → ${name} 𝗕𝗮̣𝗻 𝗵𝗮̃𝘆 𝗰𝗵𝗼̣𝗻 𝗰𝗵𝗲̂́ đ𝗼̣̂ đ𝗲̂̉ 𝗰𝗵𝗼̛𝗶:\n━━━━━━━━━━━━━━━━\n[ 𝟭 ] → 𝗖𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗵𝗼̛𝗶 𝘃𝗼̛́𝗶 𝟭 𝗮̉𝗻𝗵 🖼️\n[ 𝟮 ] → 𝗖𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗵𝗼̛𝗶 𝘃𝗼̛́𝗶 𝟮 𝗮̉𝗻𝗵 🎟️\n━━━━━━━━━━━━━━━━\n[👤] → 𝗕𝗮̣𝗻 𝗵𝗮̃𝘆 𝗿𝗲𝗽𝗹𝘆 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗵𝗼̛𝗶 𝗻𝗵𝘂̛ 𝘁𝗿𝗲̂𝗻`,mentions , attachment: fs.createReadStream(__dirname + `/noprefix/dhbc.jpeg`)},event.threadID,(error, info) => {
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
    if (args[0] == '1') {
    //api.unsendMessage(handleReply.messageID);
            const res = await axios.get(`https://raw.githubusercontent.com/kzkhanh/kzkhanh/main/dhbc.json`);
            const length2 = res.data.doanhinh.length
            const dataGame = res.data.doanhinh[Math.floor(Math.random() * length2)]
            const tukhoadung = dataGame.tukhoa;
            const suggestions = dataGame.suggestions
            const fs = global.nodemodule["fs-extra"];
            const sokitu = dataGame.sokitu;
            const anh1 = dataGame.link


            let Avatar = (await axios.get(anh1, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh1.png", Buffer.from(Avatar, "utf-8"));
            var imglove = [];
            imglove.push(fs.createReadStream(__dirname + "/cache/anh1.png"));

            var msg = {
                body: `🌭 ==== [ 𝗧𝗿𝗮̉ 𝗟𝗼̛̀𝗶 ] ==== 🌭\n━━━━━━━━━━━━━━\n[🍔] → 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐧à𝐲 để 𝐭𝐫ả 𝐥ờ𝐢:\n𝐆ợ𝐢 ý: ${sokitu}\n[🍞]→ 𝐑𝐞𝐩𝐥𝐲: 𝐆ợ𝐢 ý - để 𝐱𝐞𝐦 𝐠ợ𝐢 ý 2 (-${coinsdown}$)\n━━━━━━━━━━━━━━\n[⏰] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${time}`,
                attachment: imglove
            }
            return api.sendMessage(msg, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "reply2",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    tukhoa: tukhoadung,
                    suggestions: suggestions
                })
            })    
    }
    if (args[0] == '2') {
    //api.unsendMessage(handleReply.messageID);
            const res = await axios.get(`https://raw.githubusercontent.com/kzkhanh/kzkhanh/main/dhbc.json`);
            const length1 = res.data.doanhinh.length
            const dataGame = res.data.doanhinh[Math.floor(Math.random() * length1)]
            const tukhoadung = dataGame.tukhoa;
            const suggestions = dataGame.suggestions
            const fs = global.nodemodule["fs-extra"];
            const sokitu = dataGame.sokitu;
            const anh1 = dataGame.link1
            const anh2 = dataGame.link2


            let Avatar = (await axios.get(anh1, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh1.png", Buffer.from(Avatar, "utf-8"));
            let Avatar2 = (await axios.get(anh2, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh2.png", Buffer.from(Avatar2, "utf-8"));
            var imglove = [];
            imglove.push(fs.createReadStream(__dirname + "/cache/anh1.png"));
            imglove.push(fs.createReadStream(__dirname + "/cache/anh2.png"));

            var msg = {
                body: `🌭 ==== [ 𝗧𝗿𝗮̉ 𝗟𝗼̛̀𝗶 ] ==== 🌭\n━━━━━━━━━━━━━━\n[🍔] → 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐧à𝐲 để 𝐭𝐫ả 𝐥ờ𝐢:\n𝐆ợ𝐢 ý: ${sokitu}\n[🍞]→ 𝐑𝐞𝐩𝐥𝐲: 𝐆ợ𝐢 ý - để 𝐱𝐞𝐦 𝐠ợ𝐢 ý 2 (-${coinsdown}$)\n━━━━━━━━━━━━━━\n[⏰] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 : ${time}`,
                attachment: imglove
            }
            return api.sendMessage(msg, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "reply",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    tukhoa: tukhoadung,
                    suggestions: suggestions
                })
            })    
    }
      }