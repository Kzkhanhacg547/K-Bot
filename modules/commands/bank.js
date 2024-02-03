module.exports.config = {
    name: "bank",
    version: "1.0.0 - DungUwU hotfix",
    hasPermssion: 0,
    credits: "Judas",
    description: "Bank No Api Update Siêu Vip pờ rồ",
    commandCategory: "Kiếm Tiền",
    usages: "",
    cooldowns: 3,
    dependencies: {
        "fs-extra": "",
        "path": "",
        "canvas": "",
        "axios": "",
        "moment-timezone": ""
    }
};

const laisuat = 0.004;
const laisuatvay = 0.05;
const timeIM = 1800; // what is this?


let makeimg, banking;

function replace(num) {
    let stringNum = String(num);
    return stringNum.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

module.exports.onLoad = function ({ }) {
    const { existsSync, writeFileSync } = global.nodemodule['fs-extra'];
    const { join } = global.nodemodule['path'];
    const pathData = join(__dirname, "noprefix", "bank.json");
    if (!existsSync(pathData)) writeFileSync(pathData, "[]", "utf-8");

    makeimg = async function (num) {
        const fs = global.nodemodule['fs-extra'];
        const axios = global.nodemodule['axios'];
        if (!fs.existsSync(__dirname + '/cache/SplineSans-Medium.ttf')) {
            let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(__dirname + "/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
        };
        if (!fs.existsSync(__dirname + '/cache/SplineSans.ttf')) {
            let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(__dirname + "/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
        };
        const { loadImage, createCanvas, registerFont } = global.nodemodule['canvas'];
        let path = __dirname + "/cache/atmaraxy.png";
        let bg = (await axios.get(`https://imgur.com/wrS74gQ.jpg`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
        let bgBase = await loadImage(path);
        let canvas = createCanvas(bgBase.width, bgBase.height);
        let ctx = canvas.getContext("2d");

        ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
        registerFont(__dirname + `/cache/SplineSans-Medium.ttf`, {
            family: "SplineSans-Medium"
        });
        registerFont(__dirname + `/cache/SplineSans.ttf`, {
            family: "SplineSans"
        });
        ctx.font = "50px SplineSans-Medium";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText('' + `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ', 530, 359);
        const imageBuffer = canvas.toBuffer();
        fs.writeFileSync(path, imageBuffer);

        return path;
    }

    banking = async function () {
        const { readFileSync, writeFileSync } = global.nodemodule['fs-extra'];
        const { join } = global.nodemodule['path'];
        const pathData = join(__dirname, "noprefix", "bank.json");
        console.log("=======[ BANKING LOADED SUCCESSFULLY ]=======");
        while (true) {
            const dataJSON = JSON.parse(readFileSync(pathData, "utf-8"));
            for (const user of dataJSON) {
                const userDataIndex = dataJSON.findIndex(e => e.senderID == user.senderID);
                if (userDataIndex > -1) {
                    const userData = dataJSON[userDataIndex];
                    if (userData.vay.davay == true) {
                        const time_vay_array = userData.vay.time.split(":");
                        const time_vay_ms = Date.parse(new Date()) - Date.parse(`${time_vay_array[1]} ${time_vay_array[0]}, ${time_vay_array[2]} 00:00:00`);
                        const days = Math.floor(time_vay_ms / (1000 * 60 * 60 * 24));
                        if (days >= 7) {
                            userData.status = false;
                            userData.vay.noxau = true;
                        }
                        userData.vay.sotien *= (1 + laisuatvay);
                        userData.vay.sotien = parseInt(userData.vay.sotien);
                    }

                    userData.money *= (1 + laisuat);
                    userData.money = parseInt(userData.money);  
                    dataJSON[userDataIndex] = userData;
                }
            }
            writeFileSync(pathData, JSON.stringify(dataJSON, null, 2));
            await new Promise(resolve => setTimeout(resolve, `${timeIM}` * 1000))
        }
    }

    banking();
}

module.exports.run = async ({ event, api, Currencies, args, Users }) => {
    const { readFileSync, writeFileSync, unlinkSync, createReadStream } = global.nodemodule['fs-extra'];
    const axios = global.nodemodule['axios'];
    const moment = global.nodemodule['moment-timezone'];
    const { join } = global.nodemodule['path'];

    try {
        const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD:MM:YYYY");
        const stk = String(Math.floor(Math.random() * (900000000)) + 1000000);
        const { threadID, messageID, senderID, mentions } = event;
        const username = (await Users.getData(senderID)).name;
        const pathData = join(__dirname, "noprefix", "bank.json");

        let msg = [],
            date = new Date(),
            duocsui = date.getDay();

        // DungUwU Note: fix tới đây thôi, lười quá ~~
        var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
        var userData = dataJson.find(item => item.senderID == senderID) || { senderID: senderID, name: username, money: 200, stk: stk, time: timeNow, status: true, vay: { solan: 0, davay: false, sotien: 0, noxau: false, time: "" } };
        const moneyUser = (await Currencies.getData(senderID)).money
        if (duocsui == "9") {
            return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗖𝗵𝘂̉ 𝗻𝗵𝗮̣̂𝘁 𝗻𝗴𝗮̂𝗻 𝗵𝗮̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝗹𝗮̀𝗺 𝘃𝗶𝗲̣̂𝗰 𝗽𝗵𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝘀𝗮́𝗻𝗴 𝘁𝗵𝘂̛́ 𝟮 𝗾𝘂𝗮𝘆 𝗹𝗮̣𝗶 𝗻𝗵𝗲́ 😽`, threadID, messageID)
        }
        if (args[0] == '-r' || args[0] == 'register') {
            if (!dataJson.some(i => i.senderID == senderID)) {
                dataJson.push(userData);
                writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
                return api.sendMessage(`[ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ✅ ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘁𝗮̣𝗼 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗯𝗮𝗻𝗸 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 🏦\n𝗦𝗼̂́ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀ ${stk}, 𝗰𝗵𝘂́𝗻𝗴 𝘁𝗼̂𝗶 𝘁𝗮̣̆𝗻𝗴 𝗯𝗮̣𝗻 𝟮𝟬𝟬$ 𝘃𝗮̀ 𝘀𝗮𝘂 𝗻𝗮̀𝘆 𝗯𝗮̣𝗻 𝗽𝗵𝗮̉𝗶 𝗴𝘂̛̉𝗶 𝗶́𝘁 𝗻𝗵𝗮̂́𝘁 𝟮𝟬𝟬$ 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝗶𝗻𝗵 𝗿𝗮 𝗹𝗮̃𝗶 𝗻𝗵𝗲́ 💰\n===== [ ${timeNow} ] =====`, threadID, messageID)
            }
            else return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗠𝗶𝗿𝗮𝗶 𝗕𝗮𝗻𝗸 𝗿𝗼̂̀𝗶 🏦`, threadID, messageID)
        }
        if (args[0] == 'vay' || args[0] == '-v') {
            if (userData.vay.solan == 5 || userData.status == false) { return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗕𝗮̣𝗻 ${userData.vay.solan == 5 ? "𝘃𝗮𝘆 𝘁𝗼̂̉𝗻𝗴 𝗰𝗼̣̂𝗻𝗴 𝟱 𝗹𝗮̂̀𝗻" : "𝗱𝗶́𝗻𝗵 𝗻𝗼̛̣ 𝘅𝗮̂́𝘂"} 𝗿𝗼̂̀𝗶 𝗻𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝘃𝗮𝘆`, threadID, messageID) }
            if (!dataJson.find(i => i.senderID == senderID)) { return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗠𝗶𝗿𝗮𝗶 𝗕𝗮𝗻𝗸 🏦\n[ ${timeNow} ]`, threadID) }
            if (isNaN(args[1]) || !args[1]) { return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗽 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰`, threadID) }
            if (args[1] < 5000 || args[1] > 50000000) { return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗽 ${args[1] < 5000 ? "𝗻𝗵𝗼̉ 𝗵𝗼̛𝗻" : "𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻"} 𝗺𝘂̛́𝗰 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝘃𝗮𝘆 𝗰𝘂̉𝗮 𝗰𝗵𝘂́𝗻𝗴 𝘁𝗼̂𝗶\n𝗕𝗮̣𝗻 𝗰𝗵𝗶̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘃𝗮𝘆 𝗶́𝘁 𝗻𝗵𝗮̂́𝘁 𝗹𝗮̀ 𝟱.𝟬𝟬𝟬$ 𝘃𝗮̀ 𝗻𝗵𝗶𝗲̂̀𝘂 𝗻𝗵𝗮̂́𝘁 𝗹𝗮̀ 𝟱𝟬.𝟬𝟬𝟬.𝟬𝟬𝟬$ 𝗰𝗵𝗼 𝗺𝗼̣̂𝘁 𝗹𝗮̂̀𝗻 𝘃𝗮𝘆 💷`, threadID) }
            else {
                return api.sendMessage("[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗥𝗲𝗮𝗰𝘁 [❤️] 𝗩𝗮̀𝗼 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗡𝗲̂́𝘂 𝗕𝗮̣𝗻 𝗖𝗵𝗮̂́𝗽 𝗡𝗵𝗮̣̂𝗻 𝗩𝗮𝘆 𝗧𝗶𝗲̂̀𝗻", threadID,
                    async (err, info) => {
                        global.client.handleReaction.push({
                            thread: event.threadID,
                            type: "vay",
                            name: this.config.name,
                            money: args[1],
                            author: senderID,
                            messageID: info.messageID
                        });
                    })
            }
        }
        if (args[0] == "trả") {
            if (!dataJson.find(i => i.senderID == senderID)) { return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗠𝗶𝗿𝗮𝗶 𝗕𝗮𝗻𝗸 🏦\n[ ${timeNow} ]`, threadID) }
            if (isNaN(args[1]) || !args[1]) { return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗽 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰`, threadID) }
            const tra_v = parseInt(userData.vay.sotien) - parseInt(args[1]);
            if (tra_v < -1) { return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝘁𝗿𝗮̉ 𝗰𝗵𝗼 𝗸𝗵𝗼𝗮̉𝗻 𝘃𝗮𝘆 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝘃𝗮𝘆 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗸𝗶𝗮 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗿𝗮̉ 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 ${replace(parseInt(userData.vay.sotien))}$`, threadID, messageID) }
            if (userData.vay.sotien == 0) { return api.sendMessage('[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗧𝗿𝗮̉ 𝗵𝗲̂́𝘁 𝗻𝗼̛̣ ', threadID) }
            else {
                return api.sendMessage("[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗥𝗲𝗮𝗰𝘁 [❤️] 𝗩𝗮̀𝗼 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗡𝗲̂́𝘂 𝗕𝗮̣𝗻 𝗖𝗵𝗮̂́𝗽 𝗡𝗵𝗮̣̂𝗻 𝗧𝗿𝗮̉ 𝗧𝗶𝗲̂̀𝗻", threadID,
                    async (err, info) => {
                        global.client.handleReaction.push({
                            thread: event.threadID,
                            type: "tra",
                            name: this.config.name,
                            money: args[1],
                            author: senderID,
                            messageID: info.messageID
                        });
                    })
            }
        }
        if (args[0] == 'all' || args[0] == '-a') {
            for (let stt in dataJson) {
                var title = dataJson[stt].stk;
                var name = dataJson[stt].name;
                var sender = dataJson[stt].senderID;
                msg += `👤 𝗖𝗵𝘂̉: ${name}\n🔰 𝗦𝗲𝗻𝗱𝗲𝗿𝗜𝗗: ${sender} \n💳 𝗦𝗧𝗞: ${title}\n📌 𝗧𝗿𝗮̣𝗻𝗴 𝘁𝗵𝗮́𝗶 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${dataJson[stt].status == true ? "Tốt" : "Nợ xấu"}\n======================\n`
            }
            return api.sendMessage({ body: msg }, event.threadID);
        }
        if (args[0] == "gửi" || args[0] == "send") {
            var money = args[1];
            if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗡𝗵𝗮̣̂𝗽 𝗖𝗵𝗶́𝗻𝗵 𝗫𝗮́𝗰 𝗦𝗼̂́ 𝗧𝗶𝗲̂̀𝗻", threadID, messageID);
            if (moneyUser < money) return api.sendMessage(`[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗦𝗼̂́ 𝗗𝘂̛ 𝗧𝗵𝗶𝗲̂́𝘂 𝗞𝗵𝗼̂𝗻𝗴 𝗧𝗵𝗲̂̉ 𝗚𝗶𝗮𝗼 𝗗𝗶̣𝗰𝗵`, threadID, messageID);
            if (!userData) { return api.sendMessage('[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗠𝗶𝗿𝗮𝗶 𝗕𝗮𝗻𝗸 🏦', threadID, messageID) }
            else {
                return api.sendMessage("[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗥𝗲𝗮𝗰𝘁 [❤️] 𝗩𝗮̀𝗼 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗡𝗲̂́𝘂 𝗕𝗮̣𝗻 𝗖𝗵𝗮̂́𝗽 𝗡𝗵𝗮̣̂𝗻 𝗚𝘂̛̉𝗶 𝗧𝗶𝗲̂̀𝗻 𝗩𝗮̀𝗼 𝗕𝗮𝗻𝗸", threadID,
                    async (err, info) => {
                        global.client.handleReaction.push({
                            thread: event.threadID,
                            type: "send",
                            name: this.config.name,
                            send: money,
                            author: senderID,
                            messageID: info.messageID
                        });
                    })
            }
        }
        if (args[0] == "rút") {
            var money = args[1];
            if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗡𝗵𝗮̣̂𝗽 𝗖𝗵𝗶́𝗻𝗵 𝗫𝗮́𝗰 𝗦𝗼̂́ 𝗧𝗶𝗲̂̀𝗻", threadID, messageID);
            if (userData.money < money) return api.sendMessage(`[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗦𝗼̂́ 𝗗𝘂̛ 𝗧𝗵𝗶𝗲̂́𝘂 𝗞𝗵𝗼̂𝗻𝗴 𝗧𝗵𝗲̂̉ 𝗚𝗶𝗮𝗼 𝗗𝗶̣𝗰𝗵`, threadID, messageID);
            if (!userData) { return api.sendMessage('[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗠𝗶𝗿𝗮𝗶 𝗕𝗮𝗻𝗸 🏦', threadID, messageID) }
            else {
                return api.sendMessage("[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗥𝗲𝗮𝗰𝘁 [❤️] 𝗩𝗮̀𝗼 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗡𝗲̂́𝘂 𝗕𝗮̣𝗻 𝗖𝗵𝗮̂́𝗽 𝗥𝘂́𝘁 𝗧𝗶𝗲̂̀𝗻 💸", threadID,
                    async (err, info) => {
                        global.client.handleReaction.push({
                            thread: event.threadID,
                            type: "rut",
                            name: this.config.name,
                            send: money,
                            author: senderID,
                            messageID: info.messageID
                        });
                    })
            }
        }
        if (args[0] == 'top' || args[0] == '-t') {
            let i = 0,
                option = parseInt(1000),
                data, msg = "";

            dataJson.sort((a, b) => {
                if (a.money > b.money) return -1;
                if (a.money < b.money) return 1;
            })
            if (dataJson.length < option) option = dataJson.length;
            for (const dataUser of dataJson) {
                if (i == option) break;
                msg += `🏆 𝗧𝗼𝗽 ${i + 1}\n👤 𝗧𝗲̂𝗻: ${dataUser.name}\n🔰 𝗨𝗜𝗗: ${dataUser.senderID}\n💳 𝗦𝗧𝗞: ${dataUser.stk}\n💰 𝗦𝗼̂́ 𝗗𝘂̛ 𝗕𝗮𝗻𝗸: ${replace(dataUser.money)}$\n===================\n`;
                i += 1;
            }
            return api.sendMessage(msg, threadID)
        }
        if (args[0] == 'pay' || args == '-p') {
            var userStk = dataJson.find(i => i.stk == args[1])
            if (!userStk) return api.sendMessage('[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗻𝗮̀𝘆 🚫', threadID, messageID)
            else {
                return api.sendMessage('[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗩𝗮̀ 𝗡𝗵𝗮̣̂𝗽 𝗦𝗼̂́ 𝗧𝗶𝗲̂̀𝗻 𝗠𝘂𝗼̂́𝗻 𝗖𝗵𝘂𝘆𝗲̂̉𝗻', threadID, (error, info) => {
                    return global.client.handleReply.push({
                        name: this.config.name,
                        type: "pay",
                        messageID: info.messageID,
                        author: senderID,
                        stk: userStk.stk
                    })
                    // messageID
                })
            }
        }
        if (args[0] == 'check' || args[0] == '-c') {
            if (Object.keys(event.mentions).length == 1) {
                var mention = (Object.keys(mentions))[0];
                var users = dataJson.find(item => item.senderID == mention)
                if (!dataJson.find(i => i.senderID == mention)) return api.sendMessage('[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗵𝘂̛𝗮 𝘁𝗮̣𝗼 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗯𝗮𝗻𝗸𝗶𝗻𝗴, /𝗯𝗮𝗻𝗸 -𝗿 𝘃𝗮̀ 𝘁𝗮̣𝗼 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 🏦', threadID, messageID)
                return api.sendMessage(`[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝘅𝗲𝗺 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗰𝘂̉𝗮 ${users.name} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 💸\n𝗖𝗵𝘂̉ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗽𝗵𝗮̉𝗶 𝗿𝗲𝗮𝗰𝘁 [❤️] 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘅𝗲𝗺 𝗶𝗻𝗳𝗼 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻`, threadID, (error, info) => {
                    return global.client.handleReaction.push({
                        name: this.config.name,
                        type: "check",
                        messageID: info.messageID,
                        author: mention,
                    })
                    // messageID
                })
            }
            else {
                if (!dataJson.find(i => i.senderID == senderID)) { return api.sendMessage('[ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ❗ ] » 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗵𝘂̛𝗮 𝘁𝗮̣𝗼 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗯𝗮𝗻𝗸𝗶𝗻𝗴, /𝗯𝗮𝗻𝗸 -𝗿 𝘃𝗮̀ 𝘁𝗮̣𝗼 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 🏦', threadID, messageID) }
                var userMoney = userData.money;
                var userStk = userData.stk;
                return makeimg(userMoney).then(path => api.sendMessage({ body: `[ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ✅ ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗴𝘂̛̉𝗶 𝗠𝗜𝗥𝗔𝗜 𝗕𝗮𝗻𝗸 𝗹𝗮̀: ${replace(userMoney)}$\n♻️ 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗻𝗼̛̣: ${replace(parseInt(userData.vay.sotien))}$\n📆 𝗡𝗴𝗮̀𝘆 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮: ${userData.time}\n💳 𝗦𝗧𝗞: ${userStk}\n⚖ 𝗟𝗮̃𝗶 𝘀𝘂𝗮̂́𝘁: +${laisuat * 90}% 𝘁𝗿𝗼𝗻𝗴 𝘃𝗼̀𝗻𝗴 ${1800 / 60} 𝗽𝗵𝘂́𝘁\n🔰 𝗧𝗿𝗮̣𝗻𝗴 𝘁𝗵𝗮́𝗶 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${userData.status == true ? "Tốt" : "Nợ xấu"}`, attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID));
            }
        } else {
            const t = (await axios.get(`https://i.imgur.com/b1mG555.jpg`, {
                responseType: "stream"
            })).data;

            return api.sendMessage({
                body: `=====[ 𝐌𝐈𝐑𝐀𝐈 𝐁𝐀𝐍𝐊 ]=====\n\n[𝗿𝗲𝗴𝗶𝘀𝘁𝗲𝗿/-𝗿] - 𝗧𝗮̣𝗼 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗕𝗮𝗻𝗸 💰\n[𝗰𝗵𝗲𝗰𝗸/-𝗰] - 𝗫𝗲𝗺 𝘁𝗶𝗲̂̀𝗻 𝗕𝗮𝗻𝗸 💳\n[𝘀𝗲𝗻𝗱/𝗴𝘂̛̉𝗶] - 𝗚𝘂̛̉𝗶 𝘁𝗶𝗲̂̀𝗻 𝗕𝗮𝗻𝗸 💶\n[𝗿𝘂́𝘁/-𝗿] - 𝗥𝘂́𝘁 𝘁𝗶𝗲̂̀𝗻 𝗕𝗮𝗻𝗸 💸\n[𝘃𝗮𝘆/-𝘃] - 𝗩𝗮𝘆 𝘁𝗶𝗲̂̀𝗻 𝗕𝗮𝗻𝗸 💷\n[𝘁𝗿𝗮̉] - 𝗧𝗿𝗮̉ 𝗻𝗼̛̣ 𝗕𝗮𝗻𝗸 📋\n[𝘁𝗼𝗽/-𝘁] - 𝗫𝗲𝗺 𝘁𝗼𝗽 𝗕𝗮𝗻𝗸 🏆\n[𝗮𝗹𝗹/-𝗮] - 𝗫𝗲𝗺 𝗮𝗹𝗹 𝘂𝘀𝗲𝗿 𝗕𝗮𝗻𝗸 👤\n\n💲 𝗟𝗮̃𝗶 𝘀𝘂𝗮̂́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶: +${laisuat * 90}% 𝘁𝗿𝗼𝗻𝗴 ${1800 / 60} 𝗽𝗵𝘂́𝘁`,
                attachment: t
            }, threadID)
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("Lỗi rồi...", event.threadID);
    }
}

module.exports.handleReply = function ({ api, event, handleReply }) {
    if (handleReply.author !== event.senderID) return
    const { readFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "noprefix", "bank.json");

    const dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    const userData = dataJson.find(item => item.senderID == event.senderID);
    if (!event.body || event.body < 50 || isNaN(event.body)) return api.sendMessage("[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝗰𝗵𝗶́𝗻𝗵 𝘅𝗮́𝗰 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻", event.threadID);
    if (userData.money < event.body) return api.sendMessage(`[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗦𝗼̂́ 𝗱𝘂̛ 𝘁𝗵𝗶𝗲̂́𝘂 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗚𝗗`, event.threadID);

    api.unsendMessage(handleReply.messageID);
    api.sendMessage(`[ 𝐁𝐀𝐍𝐊𝐈𝐍𝐆 💲 ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗻𝗵𝗮̣̂𝗽 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝗮̂̀𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝗹𝗮̀ ${replace(event.body)}, 𝗿𝗲𝗮𝗰𝘁 [❤️] 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗵𝗼𝗮̀𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗴𝗶𝗮𝗼 𝗱𝗶̣𝗰𝗵`, event.threadID, (err, info) => {
        if (err) console.log(err);
        else global.client.handleReaction.push({
            name: this.config.name,
            type: "pay",
            money: event.body,
            author: handleReply.author,
            stk: handleReply.stk,
            messageID: info.messageID
        });
    });

    return;
    // DungUwU Note: Optimize done, maybe ~~
}

module.exports.handleReaction = async function ({ event, api, handleReaction, Currencies, Users }) {
    if (handleReaction.author != event.userID) return;

    const { readFileSync, writeFileSync, unlinkSync, createReadStream } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const moment = global.nodemodule["moment-timezone"];

    try {
        api.unsendMessage(handleReaction.messageID);
        const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm - DD:MM:YYYY");
        const timeva = moment.tz("Asia/Ho_Chi_Minh").format("DD:MM:YYYY");
        const pathData = join(__dirname, "noprefix", "bank.json");
        const dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
        const userDataIndex = dataJson.findIndex(item => item.senderID == handleReaction.author);
        const userData = dataJson[userDataIndex];
        const userMoney = userData.money;
        const userstk = userData.stk;
        const money = userData.money;

        if (handleReaction.type == "check") {
            makeimg(userMoney).then(path => api.sendMessage({ body: `[ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ✅ ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 ${userData.name} 𝗴𝘂̛̉𝗶 𝗠𝗜𝗥𝗔𝗜 𝗕𝗮𝗻𝗸 𝗹𝗮̀: ${replace(userMoney)}$\n♻️ 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗻𝗼̛̣: ${replace(userData.vay.sotien)}\n📆 𝗡𝗴𝗮̀𝘆 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮: ${userData.time}\n💳 𝗦𝗧𝗞: ${userstk}\n⚖ 𝗟𝗮̃𝗶 𝘀𝘂𝗮̂́𝘁: +${laisuat * 90}% 𝘁𝗿𝗼𝗻𝗴 𝘃𝗼̀𝗻𝗴 ${1800 / 60} 𝗽𝗵𝘂́𝘁\n🔰 𝗧𝗿𝗮̣𝗻𝗴 𝘁𝗵𝗮́𝗶 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${userData.status == true ? "Tốt" : "Nợ xấu"}`, attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID));
        } else if (handleReaction.type == "send") {
            userData.money = parseInt(userMoney) + parseInt(handleReaction.send);
            dataJson[userDataIndex] = userData;
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            await Currencies.decreaseMoney(event.userID, parseInt(handleReaction.send))
            api.sendMessage(`[ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ✅ ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗴𝘂̛̉𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${replace(handleReaction.send)}$ 𝘃𝗮̀𝗼 𝗠𝗜𝗥𝗔𝗜 𝗕𝗮𝗻𝗸\n⚖ 𝗟𝗮̃𝗶 𝘀𝘂𝗮̂́𝘁: +${laisuat * 90}% 𝘁𝗿𝗼𝗻𝗴 𝘃𝗼̀𝗻𝗴 ${timeIM / 60} 𝗽𝗵𝘂́𝘁\n[ ${timeNow} ]`, event.threadID)
        } else if (handleReaction.type == "rut") {
            userData.money = parseInt(userMoney) - parseInt(handleReaction.send);
            dataJson[userDataIndex] = userData;
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            await Currencies.increaseMoney(event.userID, parseInt(handleReaction.send))
            api.sendMessage(`[ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ✅ ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗿𝘂́𝘁 ${replace(handleReaction.send)}$ 𝘁𝘂̛̀ 𝗠𝗜𝗥𝗔𝗜 𝗕𝗮𝗻𝗸\n[ ${timeNow} ]`, event.threadID)
        } else if (handleReaction.type == "pay") {
            const tergetDataIndex = dataJson.findIndex(item => item.stk == handleReaction.stk);
            const targetData = dataJson[tergetDataIndex];

            targetData.money += parseInt(handleReaction.money);
            userData.money -= parseInt(handleReaction.money);

            dataJson[tergetDataIndex] = targetData;
            dataJson[userDataIndex] = userData;
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage(`[ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ✅ ] » 𝗖𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗶𝗲̂̀𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${replace(parseInt(handleReaction.money))}$\n𝗦𝗼̂́ 𝗗𝘂̛ 𝗖𝗼̀𝗻 𝗟𝗮̣𝗶 𝗟𝗮̀ ${replace(parseInt(money) - parseInt(handleReaction.money))}$\n[ ${timeNow} ]`, event.threadID)
        } else if (handleReaction.type == "vay") {
            if (userData.vay.solan == 0) {
                userData.vay.davay = true;
                userData.vay.time = `${timeva}`;
                userData.vay.sotien += parseInt(handleReaction.money);
                userData.vay.solan = parseInt(userData.vay.solan) + 1;
            } else {
                userData.vay.sotien += parseInt(handleReaction.money);
                userData.vay.solan = parseInt(userData.vay.solan) + 1;
            }
            dataJson[userDataIndex] = userData;
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            await Currencies.increaseMoney(event.userID, parseInt(handleReaction.money));
            api.sendMessage(`[ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ✅ ] » 𝗩𝗮𝘆 𝘁𝗶𝗲̂̀𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${replace(parseInt(userData.vay.sotien))}$`, event.threadID);
        } else if (handleReaction.type == "tra") {
            if ((parseInt(userData.vay.sotien) - parseInt(handleReaction.money)) == 0) {
                userData.vay.davay = false;
                userData.vay.time = "";
                userData.vay.sotien -= parseInt(handleReaction.money);
                userData.vay.solan = 0;
                userData.status = true;
            } else {
                userData.vay.sotien -= parseInt(handleReaction.money);
            }
            dataJson[userDataIndex] = userData;
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            await Currencies.decreaseMoney(event.userID, parseInt(handleReaction.money))
            api.sendMessage(`[ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ✅ ] » 𝗧𝗿𝗮̉ 𝘁𝗶𝗲̂̀𝗻 𝘃𝗮𝘆 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴\n𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝗼̀𝗻 𝗻𝗼̛̣: ${replace(parseInt(userData.vay.sotien))}$`, event.threadID)
        }
    } catch (e) {
        console.error(e);
        api.sendMessage("Đã có lỗi xảy ra...", event.threadID);
    }

    return;
    // DungUwU Note: Optimize done, maybe ~~
}