module.exports.config = {
  name: "allcarot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ProCoderCyrus",
  description: "Được ăn cả, ngã về không, còn thở là còn gỡ",
  commandCategory: "game",
  usages: "",
  cooldowns: 5
};

function getLucky() {
    var Lucky = ['5', '21', '34', '43', '55', '78', '87', '66', '98', '9', '11', '17', '26', '30', '48', '59', '66', '70', '82', '93']
    return Lucky[Math.floor(Math.random() * Lucky.length)];
}
function getLuckyNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports.handleReaction = async function({ api, event, Currencies, Users, handleReaction }) {
    var { threadID, messageID, userID } = event;
    if (userID != handleReaction.player || messageID != handleReaction.messageID) return;
    var luckyNumber = getLuckyNumber(1, 99);
    var lucky = getLucky();
    var name = (await Users.getData(handleReaction.player)).name;
    return api.sendMessage(`Đang chuẩn bị bắt đầu trò chơi...`, threadID, () => {
        var userInfo = handleReaction.playerInfo;
        if (luckyNumber == lucky) {
            userInfo.money = userInfo.money * 10;
            Currencies.setData(handleReaction.player, userInfo);
            api.sendMessage(`Số may mắn: ${lucky}\nSố của bạn: ${luckyNumber}\n\nChúc mừng ${name} đã thắng và nhận thưởng gấp 10 lần\nSố 🥕 hiện tại: ${userInfo.money}🥕`, threadID)
        } else {
            Currencies.setData(handleReaction.player, { money: 0 })
            api.sendMessage(`Số may mắn: ${lucky}\nSố của bạn: ${luckyNumber}\n\nChia buồn ${name} đã trắng tay.`, threadID)
        }
    })
}

module.exports.run = async function({ api, event, Currencies }) {
    var { threadID, senderID, messageID } = event;
    var listThreadBanned = ['2392402354140014', '4115747231847743', '6130616870282577', '3402498063192680', '5930840416989874'];
    if (listThreadBanned.includes(threadID)) return api.sendMessage('Bạn không được phép chơi MiniGame ở box chính, vui lòng gửi "#cobac" và chọn box cờ bạc muốn vào.', threadID, messageID);
    var userInfo = await Currencies.getData(senderID);
    if (userInfo.money < 50) return api.sendMessage("Số 🥕 của bạn không được dưới 50", threadID)
    return api.sendMessage(`Bạn đang có ${userInfo.money}🥕\nThả cảm xúc vào tin nhắn này để đồng ý chơi.`, threadID, (error, info) => {
        global.client.handleReaction.push({
            name: this.config.name,
            messageID: info.messageID,
            player: senderID,
            playerInfo: userInfo
        })
    }, messageID)
}