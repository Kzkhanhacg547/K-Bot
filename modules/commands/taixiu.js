module.exports.config = {
    name: "taixiu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Chơi tài xỉu",
    commandCategory: "Game",
    usages: "< tài/xỉu + số tiền >",
    cooldowns: 15
};
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
    const { senderID, messageID, threadID } = event;
    const axios = require('axios');
    const fs = require("fs-extra");
    const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
    if (!args[0]) return api.sendMessage("Bạn phải cược TÀI hoặc XỈU...", threadID, messageID);
    const choose = args[0]
    if (choose.toLowerCase() != 'tài' && choose.toLowerCase() != 'xỉu') return api.sendMessage("Chỉ đặt cược TÀI hoặc XỈU", threadID, messageID)
    const money = args[1]
    if (money < 50 || isNaN(money)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(`Số dư của bạn hiện tại không đủ ${money}$ để có thể chơi`, threadID, messageID);
    try {
        const res = (await axios.get(`https://api-k.ngojchaan.repl.co/game/taixiu`)).data
        const image = [];
        const result = res.result;
        if(result == false) result = '3 mặt cùng loại';
        for (let i in res.images) {
            var path = __dirname + `/cache/${i}.png`;
            var img = (await axios.get(`${res.images[i]}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(path, Buffer.from(img, "utf-8"));
            image.push(fs.createReadStream(path));
        }
        if (choose.toLowerCase() == result) {
            await Currencies.increaseMoney(senderID, parseInt(money * 1));
            api.sendMessage({ body: `→ Kết quả: ${result}\n→ Bạn đã thắng và nhận được: ${money*1}$\n→ Số dư hiện tại: ${[moneyUser + money*1]}$`, attachment: image }, threadID, messageID);
        } else {
            await Currencies.decreaseMoney(senderID, parseInt(money));
            api.sendMessage({ body: `→ Kết quả: ${result}\n→ Bạn đã thua và mất đi: ${money*1}$\n→ Số dư hiện tại: ${[moneyUser - money*1]}$`, attachment: image}, threadID, messageID);
        }
        for(var i = 0; i < image.length; i++) {
            fs.unlinkSync(__dirname + `/cache/${i}.png`);
        }
    } catch(e) {
        console.log(e);
        return api.sendMessage('Đã xảy ra lỗi khi thực hiện lệnh, vui lòng thử lại sau...', threadID, messageID);
    }
}