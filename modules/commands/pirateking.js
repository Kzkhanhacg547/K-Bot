module.exports.config = {
    name: "pirateking",
    version: "1.0.4",
    hasPermssion: 0,
    credits: "MintDaL",
    description: "Game Pirate Kings nhưng mà chơi bằng bot",
    commandCategory: "Game",
    usages: "pirateking register/shop/spin/build/info",
    cooldowns: 0
};

const path = require("path");
const { mkdirSync, writeFileSync, existsSync, createReadStream, readdirSync } = require("fs-extra")
const axios = require("axios")

module.exports.onLoad = async () => {
    const dir = __dirname + `/pirateking/datauser/`;
    const _dir = __dirname + `/pirateking/datauser/`;
    const __dir = __dirname + `/pirateking/cache/`;
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    if (!existsSync(_dir)) mkdirSync(_dir, { recursive: true });
    if (!existsSync(__dir)) mkdirSync(__dir, { recursive: true });
    return;
}

module.exports.checkPath = function (type, senderID) {
    const pathGame = path.join(__dirname, 'pirateking', 'datauser', `${senderID}.json`);
    const pathGame_1 = require("./pirateking/datauser/" + senderID + '.json');
    if (type == 1) return pathGame
    if (type == 2) return pathGame_1
}

module.exports.image = async function(link) {
    var images = ["https://i.imgur.com/dYkW1FT.png"];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        writeFileSync( __dirname + `/pirateking/cache/pirateking.png`, Buffer.from(download, "utf-8"));
        images.push(createReadStream(__dirname + `/pirateking/cache/pirateking.png`));
    return images
}

module.exports.run = async function ({ api, event, args, Users, Currencies }) {
    const { threadID, messageID, senderID } = event;
    const pathData = path.join(__dirname, 'pirateking', 'datauser', `${senderID}.json`);
    switch (args[0]) {
        case 'register':
        case '-r': {
            const nDate = new Date().toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh'
            });
            if (!existsSync(pathData)) {
                var obj = {};
                obj.name = (await Users.getData(senderID)).name;
                obj.ID = senderID;
                obj.shield = 3
                obj.coins = 20000
                obj.Island = {};
                obj.Island.level = 1
                obj.Island.coinsLV = 200
                obj.Island.data = {};
                obj.Island.data.tower = 0
                obj.Island.data.tree = 0
                obj.Island.data.boat = 0
                obj.Island.data.pet = 0
                obj.Island.data.chest = 0
                obj.spin = 50
                obj.timeRegister = nDate
                writeFileSync(pathData, JSON.stringify(obj, null, 4));
                return api.sendMessage("Đăng kí thành công!", threadID, messageID);
            } else return api.sendMessage("Bạn đã có tài khoản rồi.", threadID, messageID);
        }
        case 'spin': {
            if (!existsSync(pathData)) {
                return api.sendMessage("[⚜️] ➜ Bạn chưa đăng kí game!", threadID, messageID);
            }
            if(this.checkPath(2, senderID).spin == 0) return api.sendMessage('[⚜️] ➜ Bạn đã hết lượt quay, vui lòng mua thêm.', threadID, messageID);
            this.checkPath(2, senderID).spin = parseInt(this.checkPath(2, senderID).spin) - 1;
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(this.checkPath(2, senderID), null, 4));
            var items = [`${this.checkPath(2, senderID).Island.level * 1000} coins`, `${this.checkPath(2, senderID).Island.level * 3000} coins`, `${this.checkPath(2, senderID).Island.level * 5000} coins`, 'trộm', 'khiên', 'tấn công', '1 lượt quay', '2 lượt quay', '5 lượt quay'];
            var getItem = items[Math.floor(Math.random() * items.length)];
            var i = this.getSpin(items, getItem, senderID);
            api.sendMessage(`[⚜️] ➜ Chúc mừng bạn quay trúng: ${getItem}`, threadID, messageID);
            await new Promise(resolve => setTimeout(resolve, 500));
            const data = readdirSync(__dirname + `/pirateking/datauser`);
            if(i == 3) {
                if(data.length < 4) return api.sendMessage(`[⚜️] ➜ Cần ít nhất có 3 người chơi trên server để trộm`, threadID, messageID);
                const dem = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        dem.push(require(`./pirateking/datauser/${i}`));
                    }
                }
                dem.sort((a, b) => a.coins + b.coins);
                var msg = `[⚜️] ➜ Số tiền cao nhất là: ${dem[0].coins / 2}\n`
                const randomIndex = dem.sort(function() { return .5 - Math.random() });
                for(var i = 0; i < 3; i ++) {
                    msg += `${i+1}. ${randomIndex[i].name} - Đảo level ${randomIndex[i].Island.level}\n`
                }
                msg += '[⚜️] ➜ Vui lòng reply với lựa chọn bạn muốn trộm'
                return api.sendMessage({body: `\n${msg}`, attachment: await this.image('https://i.imgur.com/EMjJAXT.jpg')}, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "steal",
                        dem,
                        randomIndex
                    })
                }, messageID);
            }
            else if(i == 5) {
                if(data.length < 4) return api.sendMessage(`[⚜️] ➜ Cần ít nhất có 3 người chơi trên server để tấn công`, threadID, messageID);
                var msgf = `==== [ ATTACK ] ====\n`, number = 1, p = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        var o = require(`./pirateking/datauser/${i}`);
                        p.push(o)
                        msgf += `${number++}. ${o.name} - Đảo lv${o.Island.level}\n`
                    }
                }
                return api.sendMessage({body: msgf, attachment: await this.image('https://i.imgur.com/sCXcUat.jpg')}, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "attack",
                        p
                    })
                }, messageID);
            }
            break;
        }
        case 'build':
        case '-b': 
        case 'xaydung': {
            if (!existsSync(pathData)) {
                return api.sendMessage("[⚜️] ➜ Bạn chưa đăng kí game!", threadID, messageID);
            }
            var a = require(`./pirateking/datauser/${senderID}.json`);
            return api.sendMessage(`[⚜️] ➜ Bạn muốn xây dựng ở khu vực nơi nào trên đảo?\n1. Tháp - ${a.Island.coinsLV * (a.Island.data.tower + 1)} coins (${a.Island.data.tower}/50)\n2. Cây xanh - ${a.Island.coinsLV * (a.Island.data.tree + 1)} coins (${a.Island.data.tree}/50)\n3. Thuyền - ${a.Island.coinsLV * (a.Island.data.boat + 1)} coins (${a.Island.data.boat}/50)\n4. Thú cưng trưng bày - ${a.Island.coinsLV * (a.Island.data.pet + 1)} coins (${a.Island.data.pet}/50)\n5. Rương kho báu - ${a.Island.coinsLV * (a.Island.data.chest + 1)} coins (${a.Island.data.chest}/50)`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "build"
                })
            }, messageID);
        }
        case 'shop':
        case '-s': {
            if (!existsSync(pathData)) {
                return api.sendMessage("[⚜️] ➜ Bạn chưa đăng kí game!", threadID, messageID);
            }
            return api.sendMessage(`[⚜️] ➜ Vui lòng nhập các lựa chọn.\n1. Đổi tiền qua coins game!\n2. Đổi coins game qua tiền\n3. Mua lượt quay!`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "shop"
                })
            }, messageID);
        }
        case 'me':
        case 'info':
        case '-i': {
            if (!existsSync(pathData)) {
                return api.sendMessage("[⚜️] ➜ Bạn chưa đăng kí game!", threadID, messageID);
            }
            var a = require(`./pirateking/datauser/${senderID}.json`);
            return api.sendMessage(`===== [ Pirate King ] =====\n★ Bạn đang ở đảo level ${a.Island.level}\n★ Số lượt quay còn lại: ${a.spin}\n★ Số khiên còn lại: ${a.shield}\n★ Coins: ${a.coins}\n★ Thông tin đảo:\n  ☆ Tháp: (${a.Island.data.tower}/50)\n  ☆ Cây xanh: (${a.Island.data.tree}/50)\n  ☆ Thuyền: (${a.Island.data.boat}/50)\n  ☆ Thú cưng: (${a.Island.data.pet}/50)\n  ☆ Rương kho báu: (${a.Island.data.chest}/50)`, threadID, messageID);
        }
        case 'top': {
            if (!existsSync(pathData)) {
                return api.sendMessage("[⚜️] ➜ Bạn chưa đăng kí game!", threadID, messageID);
            }
            const data = readdirSync(__dirname + `/pirateking/datauser`);
            if(data.length < 3) return api.sendMessage(`[⚜️] ➜ Cần ít nhất có 3 người chơi trên server để xem top`, threadID, messageID);
            var p = []
            for (let i of data) { 
                var o = require(`./pirateking/datauser/${i}`);
                p.push(o)
                msgf += `${number++}. ${o.name} - Đảo level ${o.Island.level}\n`
            }
            p.sort((a, b) => b.Island.level - a.Island.level);
            var msg = '==== [ TOP ] ====\n'
            for(var i = 0; i < 3; i++) {
                msg += `${i+1}. ${p[i].name} với đảo level ${p[i].Island.level}\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        default: {
            return api.sendMessage({body: `===== [ Pirate Kings ] =====\nPirate Kings là một game về chủ đề hải tặc vô cùng vui nhộn và mang tính giải trí cao. Mục tiêu của trò chơi này đó là bạn phải làm sao kiếm được nhiều vàng để xây dựng đảo của mình bằng cách tấn công, cướp bóc từ các đảo hải tặc khác.\n\nHướng dẫn chơi Pirate Kings:\n➜ register: Để đăng kí\n➜ spin: Vòng quay game\n➜ build: Xây dựng đảo\n➜ shop: Quy đổi tiền - coins, mua spin\n➜ info: Xem thông tin về bạn\n➜ top: Xem top level trên server`, attachment: await this.image('https://i.imgur.com/ImCPLP2.png')}, threadID, messageID);
        }
    }
}
module.exports.handleReply = async ({ event, api, Currencies, handleReply, Users }) => {
    const { body, threadID, messageID, senderID } = event;
    switch (handleReply.type) {
        case 'steal': {
            if(body != 1 && body != 2 && body != 3) return
            api.unsendMessage(handleReply.messageID)
            var dem = handleReply.dem
            var dataUser = require(`./pirateking/datauser/${senderID}`);
            var f = dem.findIndex(i => i.ID == (handleReply.randomIndex[parseInt(body) - 1]).ID)
            dataUser.coins = dataUser.coins + dem[parseInt(body) -1].coins / 2;
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(dataUser, null, 4));
            dem[parseInt(body) -1].coins = dem[parseInt(body) -1].coins / 2;
            writeFileSync(this.checkPath(1, (handleReply.randomIndex[parseInt(body) - 1]).ID), JSON.stringify(dem[parseInt(body) -1], null, 4));
            if(f == 0) return api.sendMessage(`[⚜️] ➜ Chúc mừng bạn đã chọn trúng người có số tiền cao nhất!\n[⚜️] ➜ Bạn được cộng ${dem[parseInt(body) -1].coins / 2} coins`, threadID, messageID);
            return api.sendMessage(`[⚜️] ➜ Bạn trộm của ${dem[parseInt(body) -1].name}!\n[⚜️] ➜ Bạn được cộng ${dem[parseInt(body) -1].coins / 2} coins`, threadID, messageID);
        }
        case 'attack': {
            api.unsendMessage(handleReply.messageID)
            var u = handleReply.p[parseInt(body) - 1]
            return api.sendMessage(`[⚜️] ➜ Bạn muốn tấn công vào nơi nào trên đảo?\n1. Tháp (${u.Island.data.tower}/50)\n2. Cây xanh (${u.Island.data.tree}/50)\n3. Thuyền (${u.Island.data.boat}/50)\n4. Thú cưng trưng bày (${u.Island.data.pet}/50)\n5. Rương kho báu (${u.Island.data.chest}`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "chosseAttack",
                    p: handleReply.p[parseInt(body) - 1]
                })
            }, messageID);
        }
        case 'build': {
            var a = require(`./pirateking/datauser/${senderID}.json`);
            var l = ['tower', 'tree', 'boat', 'pet', 'chest']
            if(a.coins < a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1)) return api.sendMessage(`[⚜️] ➜ Bạn không đủ số coins trong game để xây dựng!`, threadID, messageID);
            a.coins = a.coins - a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1);
            await Currencies.decreaseMoney(senderID, a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1));
            api.unsendMessage(handleReply.messageID)
            if(body == 1) {
                if(a.Island.data.tower == 50) return api.sendMessage('[⚜️] ➜ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.tower = a.Island.data.tower + 10;
                a.coins - a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1);
                api.sendMessage(`[⚜️] ➜ Xây dựng thành công: ${a.Island.data.tower}/50`, threadID, messageID);
            }
            if(body == 2) {
                if(a.Island.data.tree == 50) return api.sendMessage('[⚜️] ➜ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.tree = a.Island.data.tree + 10;
                api.sendMessage(`[⚜️] ➜ Xây dựng thành công: ${a.Island.data.tree}/50`, threadID, messageID);
            }
            if(body == 3) {
                if(a.Island.data.boat == 50) return api.sendMessage('[⚜️] ➜ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.boat = a.Island.data.boat + 10;
                api.sendMessage(`[⚜️] ➜ Xây dựng thành công: ${a.Island.data.boat}/50`, threadID, messageID);
            }
            if(body == 4) {
                if(a.Island.data.pet == 50) return api.sendMessage('[⚜️] ➜ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.pet = a.Island.data.pet + 10;
                api.sendMessage(`Xây dựng thành công: ${a.Island.data.pet}/50`, threadID, messageID);
            }
            if(body == 5) {
                if(a.Island.data.chest == 50) return api.sendMessage('[⚜️] ➜ Cấp bậc khu vực này đang ở mức tối đa nên không thể xây dựng', threadID, messageID);
                a.Island.data.chest = a.Island.data.chest + 10;
                api.sendMessage(`[⚜️] ➜ Xây dựng thành công: ${a.Island.data.chest}/50`, threadID, messageID);
            }
            if(a.Island.data.tower == 50 && a.Island.data.tree == 50 && a.Island.data.boat == 50 && a.Island.data.pet == 50 && a.Island.data.chest == 50) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                api.sendMessage(`[⚜️] ➜ Xây dựng trên đảo bạn đã đạt được cấp tối đa!\nBạn sẽ được nâng cấp lên đảo LV ${(a.Island.level) + 1}`, threadID, messageID);
                a.Island.level = a.Island.level + 1;
                a.Island.coinsLV = a.Island.coinsLV + 100;
                a.Island.data.tower = 0;
                a.Island.data.tree = 0;
                a.Island.data.boat = 0;
                a.Island.data.pet = 0;
                a.Island.data.chest = 0;
            }
            return writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
        }
        case 'chosseAttack': {
            var msg
            api.unsendMessage(handleReply.messageID)
            var j = ['tòa tháp', 'cây xanh', 'thuyền', 'thú cưng', 'rương']
            if(handleReply.p.shield != 0) {
                handleReply.p.shield = handleReply.p.shield - 1
                writeFileSync(this.checkPath(1, handleReply.p.ID), JSON.stringify(handleReply.p, null, 4));
                return api.sendMessage('[⚜️] ➜ Cuộc tấn công đã bị khiên ngăn chặn!', threadID, messageID);
            }
            if(body == 1) {
                if(handleReply.p.Island.data.tower == 0) return api.sendMessage('[⚜️] ➜ Tấn công thất bại. Chỉ số khu vực này bằng 0', threadID, messageID);
                handleReply.p.Island.data.tower = handleReply.p.Island.data.tower - 10
                msg = '[⚜️] ➜ Bạn đã tấn công tòa tháp trên hòn đảo của ' + `${handleReply.p.name} thành công!`
            }
            if(body == 2) {
                if(handleReply.p.Island.data.tree == 0) return api.sendMessage('[⚜️] ➜ Tấn công thất bại. Chỉ số khu vực này bằng 0', threadID, messageID);
                handleReply.p.Island.data.tree = handleReply.p.Island.data.tree - 10
                msg = '[⚜️] ➜ Bạn đã tấn công cây xanh trên hòn đảo của ' + `${handleReply.p.name} thành công!`
            }
            if(body == 3) {
                if(handleReply.p.Island.data.boat == 0) return api.sendMessage('[⚜️] ➜ Tấn công thất bại. Chỉ số khu vực này bằng 0', threadID, messageID);
                handleReply.p.Island.data.boat = handleReply.p.Island.data.boat - 10
                msg = '[⚜️] ➜ Bạn đã tấn công thuyền trên hòn đảo của ' + `${handleReply.p.name} thành công!`
            }
            if(body == 4) {
                if(handleReply.p.Island.data.pet == 0) return api.sendMessage('[⚜️] ➜ Tấn công thất bại. Chỉ số khu vực này bằng 0', threadID, messageID);
                handleReply.p.Island.data.pet = handleReply.p.Island.data.pet - 10
                msg = '[⚜️] ➜ Bạn đã tấn công thú cưng trên hòn đảo của ' + `${handleReply.p.name} thành công!`
            }
            if(body == 5) {
                if(handleReply.p.Island.data.chest == 0) return api.sendMessage('[⚜️] ➜ Tấn công thất bại. Chỉ số khu vực này bằng 0', threadID, messageID);
                handleReply.p.Island.data.chest = handleReply.p.Island.data.chest - 10
                msg = '[⚜️] ➜ Bạn đã tấn công rương kho báu trên hòn đảo của ' + `${handleReply.p.name} thành công!`
            }
            writeFileSync(this.checkPath(1, handleReply.p.ID), JSON.stringify(handleReply.p, null, 4));
            api.sendMessage(`[⚜️] ➜ Bạn đã bị ${(this.checkPath(2, senderID)).name} tấn công vào ${j[parseInt(body) - 1]}!`, handleReply.p.ID);
            return api.sendMessage(msg, threadID, messageID);
        }
        case 'shop': {
            if(body == 1) {
                return api.sendMessage('[⚜️] ➜ Vui lòng reply tin nhắn này với số tiền bạn muốn đổi!', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "botcoins"
                    })
                }, messageID);
            }
            else if(body == 2) {
                return api.sendMessage('[⚜️] ➜ Vui lòng reply tin nhắn này với số tiền bạn muốn đổi!', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "coinsbot"
                    })
                }, messageID);
            }
            else if(body == 3) {
                return api.sendMessage('[⚜️] ➜ Vui lòng reply tin nhắn này với số lượt quay bạn muốn mua! (10 lượt quay 2000$)', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "spinn"
                    })
                }, messageID);
            }
            else {
                return api.sendMessage('[⚜️] ➜ Lựa chọn không hợp lệ!', threadID, messageID);
            }
        }
        case 'spinn': {
            var a = require(`./pirateking/datauser/${senderID}.json`);
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.spin = a.spin + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`[⚜️] ➜ Mua thành công ${body} lượt quay (${parseInt(body) * 200}$`, threadID, messageID);
        }
        case 'botcoins': {
            var a = require(`./pirateking/datauser/${senderID}.json`);
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.coins = a.coins + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`[⚜️] ➜ Nạp thành công ${body} coins vào game!`, threadID, messageID);
        }
        case 'coinsbot': {
            var a = require(`./pirateking/datauser/${senderID}.json`);
            if(a.coins < parseInt(body)) return api.sendMessage('[⚜️] ➜ Bạn không đủ tiền để thực hiện giao dịch này!', threadID, messageID);
            api.unsendMessage(handleReply.messageID)
            await Currencies.increaseMoney(senderID, parseInt(body));
            a.coins = a.coins - parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`[⚜️] ➜ Rút thành công ${body} coins về tài khoản bot!`, threadID, messageID);
        }
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return api.sendMessage('[⚜️] ➜ Bạn không đủ tiền để thực hiện giao dịch này!', threadID, messageID);
    }
}
module.exports.getSpin = function (items, getItem, senderID) {
    const path = this.checkPath(1, senderID)
    var pathData = this.checkPath(2, senderID)
    var i = items.findIndex(index => index == getItem);
    if(i == 0) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 1000
    if(i == 1) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 3000
    if(i == 2) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 5000
    if(i == 4) {
        if(pathData.shield != 3) {
            pathData.spin = parseInt(pathData.spin) + 1
            pathData.shield = parseInt(pathData.shield) + 1;
        }
    }
    if(i == 6) pathData.spin = parseInt(pathData.spin) + 1
    if(i == 7) pathData.spin = parseInt(pathData.spin) + 2
    if(i == 8) pathData.spin = parseInt(pathData.spin) + 5
    writeFileSync(path, JSON.stringify(pathData, null, 4));
    return i
}