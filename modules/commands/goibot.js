module.exports.config = {
    name: "alobot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Gọi Bot Version 3",
    commandCategory: "Noprefix",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
};

module.exports.handleReply = async function({ api, args, Users, event, handleReply }) {
    var name = await Users.getNameUser(event.senderID);
    switch (handleReply.type) {
        case "reply":
            {
                var idad = global.config.ADMINBOT;
                for (let ad of idad) {
                    api.sendMessage({
                        body: "=== 『 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 𝗧𝘂̛̀ 𝗨𝘀𝗲𝗿 』 ====\n━━━━━━━━━━━━━━━━━━\n\n" + name + ":\n→ 𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴:" + event.body,
                        mentions: [{
                            id: event.senderID,
                            tag: name
                        }]
                    }, ad, (e, data) => global.client.handleReply.push({
                        name: this.config.name,
                        messageID: data.messageID,
                        messID: event.messageID,
                        author: event.senderID,
                        id: event.threadID,
                      type: "goibot"
                    }))
                }
                break;
            }
        case "goibot":
            {
                api.sendMessage({ body: `=== 『 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 』===\n━━━━━━━━━━━━━━━━━━\n\n→ [🧸] 𝗚𝘂̛̉𝗶 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻: ${name}\n→ [💓] 𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴: ${event.body}\n\n→ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗯𝗮́𝗼 𝘃𝗲̂̀ 𝗮𝗱𝗺𝗶𝗻 🐧`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
                    name: this.config.name,
                    author: event.senderID,
                    messageID: data.messageID,
                    type: "reply"
                }), handleReply.messID);
                break;
            }
    }
};


module.exports.handleEvent = async({ event, api, Users, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    if (senderID == global.data.botID) return;

    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    let name = await Users.getNameUser(event.senderID);
    var idbox = event.threadID;
    let uidUser = event.senderID;
    let dataThread = await Threads.getData(event.threadID);
    let threadInfo = dataThread.threadInfo;
    const listAdmin = global.config.ADMINBOT;

    var tl = [
        "Yêu em <3", "Hi, chào con vợ bé:3", "Vợ gọi có việc gì không?",
        "Dạ, có em đây, yêu em không mà gọi <3. hmm...",
        `${name}` + ", sử dụng callad để liên lạc với admin!",
        `${name}` + ", gọi em có việc gì thế",
        `${name}` + ", yêu em ko mà gọi😢",
        `${name}` + ", tôi yêu bạn nhiều lắm ❤",
        `${name}` + ", bạn có yêu tôi không dạ ❤",
        `${name}` + ", dạ có em đây:3",
        `${name}` + ", yêu admin bot đi rồi hãy gọi",
      `${name}` + ", đánh nhau với min k 🥺",
      `${name}` + ", yêu thằng chồng❤️",
        `${name}` + ", yêu em ❤",
      `${name}` + ", em dỗi rồi k chơi với anh nữa huhu 🥺",
        `${name}` + ", hmmmmm gọi min có việc gì không dạ?",
      `${name}` + ", min tuyển ghê đít bự dú to để bay lắc hihi",
      `${name}` + ", cần thì alo mình nha 500k một đêm 🥲",
      `${name}` + ", tương tác đi gọi bé làm gì dạ? Có ý đồ gì đúm khum khai mau",
`${name}` + ", bé ghe nè chồng^^",
`${name}` + ", không bé ơi 😇",
        `${name}` + ", min ghe nè ❤️"
    ];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    // Gọi bot
    var arr = ["bot", "bot ơi","kick bot đi","admin","Kz Khánhh","@Kz Khánhh","bé ơi"," vợ ơi","box","bot oi",  "yêu bot", "bot đâu","kick bot","xin"];
    arr.forEach(value => {
        let str = value[0].toUpperCase() + value.slice(1);
    if (body === value.toUpperCase() | body === value | str === body) {
            let nameT = threadInfo.threadName;
            modules = "------ Gọi bot ------\n";
            console.log(modules, value + "|", nameT);
            api.sendMessage(rand, threadID, () => {
                var idad = listAdmin;
                for (var idad of listAdmin) {
                    api.sendMessage(`=== 𝗚𝗢̣𝗜 𝗕𝗢𝗧 ===\n━━━━━━━━━━━━━━━━━━\n\n→ [🧸] 𝗕𝗼𝘅 𝗡𝗮𝗺𝗲: ${nameT}\n→ [🌸] 𝗜𝗱 𝗕𝗼𝘅: ${idbox}\n→ [💓] 𝗡𝗮𝗺𝗲 𝗨𝘀𝗲𝗿: ${name} \n→ [👤] 𝗜𝗱 𝗨𝘀𝗲𝗿: ${uidUser}\n→ [⏰️] 𝗧𝗶𝗺𝗲: ${time}\n→ [🐒] 𝗚𝗼̣𝗶 𝗕𝗼𝘁: ${value}\n\n⏰️= 『 ${time} 』=⏰️`,
                        idad, (error, info) =>
                        global.client.handleReply.push({
                            name: this.config.name,
                            author: senderID,
                            messageID: info.messageID,
                            messID: messageID,
                            id: idbox,
                            type: "goibot"
                        })
                    );
                }
            });
        }
    });
}

module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)\n( •_•)\n// >🧠\nĐưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", event.threadID)
    }