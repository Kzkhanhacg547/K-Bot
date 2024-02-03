module.exports.config = {
  name: "luotdung",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nam",
  description: "Tùy chỉnh lượt dùng Bot",
  usages: "add/del/set || người dùng pay/mua",
  commandCategory: "Box",
  cooldowns: 5
};

const fs = require("fs");
const path = __dirname + '/../../includes/handle/usages.json';
module.exports.onLoad = () => {
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
}

module.exports.run = async ({ event, api, args, Users, permssion }) => {
  const { threadID, messageID, senderID } = event;
  var usages = JSON.parse(require("fs").readFileSync(__dirname + `/../../includes/handle/usages.json`));
if(event.type == "message_reply") { id = event.messageReply.senderID }
  else id = senderID;
  let name = await Users.getNameUser(id)
  var num = parseInt(args[1]);
  let ld = JSON.parse(fs.readFileSync(path));
  const nmdl = this.config.name
  const cre = this.config.credits
  const prefix = config.PREFIX
   if (args.length == 0) {
    return api.sendMessage(`---[ 𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 ]---\n\n${prefix}𝗹𝘂𝗼𝘁𝗱𝘂𝗻𝗴 𝘀𝗲𝘁 + 𝘀𝗼̂́ => Thay đổi số lượt dùng Bot của bản thân hoặc người được phản hồi tin nhắn\n${prefix}𝗹𝘂𝗼𝘁𝗱𝘂𝗻𝗴 𝗮𝗱𝗱 + 𝘀𝗼̂́ => Add lượt dùng Bot cho bản thân hoặc người được phản hồi tin nhắn\n${prefix}𝗹𝘂𝗼𝘁𝗱𝘂𝗻𝗴 𝗱𝗲𝗹 + 𝘀𝗼̂́ => Xóa lượt dùng Bot của bản thân hoặc người được phản hồi tin nhắn\n${prefix}𝗹𝘂𝗼𝘁𝗱𝘂𝗻𝗴 𝗽𝗮𝘆 + 𝘀𝗼̂́ => Chuyển lượt dùng Bot của mình cho người được phản hồi tin nhắn\n${prefix}𝗹𝘂𝗼𝘁𝗱𝘂𝗻𝗴 𝗺𝘂𝗮 => Mua lượt dùng Bot`, threadID, messageID);
  }if("Nam"!=cre)return;
   if (args[0] == "set") {
    if (permssion < 3) {
      return api.sendMessage("𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Cần quyền Admin Premium trở lên để thực hiện", threadID, messageID);
                       }
    if (isNaN(args[1])) {
      return api.sendMessage("𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Phải là con số", threadID, messageID);
    }
return api.sendMessage(`𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Đã thay đổi số lượt dùng Bot của ${name} thành ${num}`, threadID, async (error, info) => {
         ld[id] = { usages: num }
fs.writeFileSync(path, JSON.stringify(ld));
    }, messageID);
  }
  if (args[0] == "add") {
    if (permssion < 3) {
      return api.sendMessage("𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Cần quyền Admin Premium trở lên để thực hiện lệnh", threadID, messageID);
    }
    if (isNaN(args[1])) {
      return api.sendMessage("𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Phải là con số", threadID, messageID);
    }
    else if (num < 0) {
      return api.sendMessage("𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Số lượt cần cộng phải lớn hơn 0", threadID, messageID);
    }
return api.sendMessage(`𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Đã cộng thêm ${num} lượt dùng Bot cho ${name}`, threadID, async (error, info) => {
         ld[id] = { usages: parseInt(usages[id].usages) + parseInt(num) }
fs.writeFileSync(path, JSON.stringify(ld));
                }, messageID);
  }
  if (args[0] == "del") {
    if (permssion < 2) {
      return api.sendMessage("𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Cần quyền Người hỗ trợ trở lên để thực hiện lệnh", threadID, messageID);
    }
    if (isNaN(args[1])) {
      return api.sendMessage("𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Phải là con số", threadID, messageID);
    }
    else if (num < 0) {
      return api.sendMessage("𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Số lượt cần trừ phải lớn hơn 0", threadID, messageID);
    }
return api.sendMessage(`𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Đã trừ ${num} lượt dùng Bot của ${name}`, threadID, async (error, info) => {
         ld[id] = { usages: parseInt(usages[id].usages) - parseInt(num) }
fs.writeFileSync(path, JSON.stringify(ld));
                }, messageID);
  }
  if (args[0] == "pay") {
    if (event.type == "message_reply") { id = event.messageReply.senderID }
    if (num > usages[senderID].usages || isNaN(args[1])) {
     return api.sendMessage(`𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Số lượt cần chuyển phải là 1 con số và không được lớn hơn ${usages[senderID].usages}`, threadID, messageID);
    }
    else if (senderID == id) {
      return api.sendMessage(`𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Bạn phải phản hồi tin nhắn của người cần chuyển`, threadID, messageID);
    }
    let name = await Users.getNameUser(id)
    ld[id] = { usages: parseInt(usages[id].usages) + parseInt(num) }
fs.writeFileSync(path, JSON.stringify(ld));
 api.sendMessage(`𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Đã chuyển cho ${name} ${num} lượt dùng Bot`, threadID, async () => {
  ld[senderID] = { usages: parseInt(usages[senderID].usages) - parseInt(num) }
fs.writeFileSync(path, JSON.stringify(ld));
    }, messageID);
  }
  if (args[0] == "mua") {
    return api.sendMessage(`𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Phản hồi tin nhắn này bằng số lượt cần mua ( 100 000$ = 100 lượt ) `,threadID, (error, info) => {
        global.client.handleReply.push({
            name: nmdl,
            messageID: info.messageID,
            author: senderID,
            type: "a",
        })
    }, messageID);
  }
}


module.exports.handleReply = async function ({ event, api, Currencies, handleReply }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
  var usages = JSON.parse(require("fs").readFileSync(__dirname + `/../../includes/handle/usages.json`));
    const userMoney = (await Currencies.getData(senderID)).money;
    const input = parseInt(body);
    const money = parseInt(body) * 1000;
    let ld = JSON.parse(fs.readFileSync(path));
  switch (type) {
        case "a": {
            switch (body) {
                case body: { // tính làm thêm case mua bằng xp nữa :D
                  if (input > userMoney || isNaN(body) || userMoney < money) {
     return api.sendMessage(
       `𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Bạn không đủ money để giao dịch hoặc số lượt không phải là con số`, threadID, messageID);
      }
                  else if (input <= 0) {
     return api.sendMessage(
       `𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Số lượt cần mua phải lớn hơn 0`, threadID, messageID);
      }
                 else { await Currencies.decreaseMoney(senderID, parseInt(money));
ld[senderID] = { usages: parseInt(usages[senderID].usages) + parseInt(input) }
fs.writeFileSync(path, JSON.stringify(ld));
                    return api.sendMessage(
                        `𝗟𝗨̛𝗢̛̣𝗧 𝗗𝗨̀𝗡𝗚 - Mua thành công ${(input.toLocaleString(`en-US`))} lượt dùng\n - ${(money.toLocaleString(`en-US`))} $`
                  , threadID, messageID);
                }}
            }
        }
  }
}