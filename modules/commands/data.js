module.exports.config = {
	name: "data",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Tpk",//mod by Kz Khánhh
	description: "",
	commandCategory: "THÀNH VIÊN",
    cooldowns: 5
};
module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;        
var tpkk = [
  "https://i.imgur.com/fCwPS5E.jpeg",
  
];
let image = [];
 for(let i = 0; i < 1; i++) {
    const stream = (await axios.get(tpkk[i], {
        responseType: "stream"
    })).data;
    image.push(stream);
};

  const cu = {
    body: `👻=== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗗𝗔𝗧𝗔 ] ===👻
━━━━━━━━━━━━━━━
𝟭. 𝗥𝗲𝘀𝗲𝘁 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗺𝗼𝗻𝗲𝘆 𝗰𝘂̉𝗮 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅
𝟮. 𝗥𝗲𝘀𝗲𝘁 𝘃𝗲̂̀ 𝟬 𝗲𝘅𝗽, 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺
𝟯. 𝗖𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝗱𝗮𝘁𝗮 𝗰𝘂̉𝗮 𝘁𝘃 𝗺𝗼̛́𝗶 𝘃𝗮̀𝗼 𝘃𝗮̀ 𝘁𝘃 𝗰𝘂̃
𝟰. 𝗖𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂 𝗮𝗹𝗹 𝗯𝗼𝘅 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴

👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝗼̣𝗻 đ𝗲̂̉ 𝗱𝘂̀𝗻𝗴`,
    attachment: image
};
        return api.sendMessage(cu, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
    module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
      Threads,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
                money -= money;
                await Currencies.setData(user.id, { money });
            }
        }
    }
    return api.sendMessage("💵 𝗦𝗼̂́ 𝗺𝗼𝗻𝗲𝘆 𝗰𝘂̉𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺 đ𝗮̃ đ𝘂̛𝗼̛̣𝗰 𝗿𝗲𝘀𝗲𝘁 𝘃𝗲̂̀ 𝗺𝘂̛́𝗰 𝟬 !", event.threadID);
        }
        case "2": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var exp = currenciesData.exp;
            if (typeof exp != "undefined") {
                exp -= exp;
                await Currencies.setData(user.id, { exp });
            }
        }
    }
    return api.sendMessage("🍁 𝗦𝗼̂́ 𝗲𝘅𝗽/𝘁𝗶𝗻𝗻𝗵𝗮𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝘃𝘂̛̀𝗮 đ𝘂̛𝗼̛̣𝗰 𝗿𝗲𝘀𝗲𝘁 𝘃𝗲̂̀ 𝟬 !", event.threadID);
         }
            case "3": {
              const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var { participantIDs } = await Threads.getInfo(threadID) || await api.getThreadInfo(threadID);
    for (const id of participantIDs) {
    console.log(`→ Đã cập nhật dữ liệu của ID: ${id}`)
    let data = await api.getUserInfo(id);
    data.name
    let userName = data[id].name
    await Users.setData(id, { name: userName, data: {} });
}
    console.log(`→ Đã cập nhật data của ${participantIDs.length} người dùng trong nhóm`)
          api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`🌸 𝗩𝘂̛̀𝗮 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝗱𝗮𝘁𝗮 𝗰𝗮́𝗰 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 🌸`, threadID)
            }
            case "4": {         api.unsendMessage(handleReply.messageID);
                       const { threadID } = event;
const { setData, getData } = Threads;
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  const lengthGroup = list.length
  for (var groupInfo of list) {
    console.log(`👻 𝗩𝘂̛̀𝗮 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂 𝗰𝘂̉𝗮 𝗯𝗼𝘅 𝗜𝗗: ${groupInfo.threadID}`)
    var threadInfo = await api.getThreadInfo(groupInfo.threadID);
    threadInfo.threadName;
    await Threads.setData(groupInfo.threadID, { threadInfo });
  }
    console.log(`👉 𝗩𝘂̛̀𝗮 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂 𝗰𝘂̉𝗮  ${lengthGroup} 𝗻𝗵𝗼́𝗺`)
    return api.sendMessage(`👉 𝗩𝘂̛̀𝗮 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂 𝗰𝘂̉𝗮 ${lengthGroup} 𝗻𝗵𝗼́𝗺`, threadID)
                      }break;
            
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 10 || choose < 1) return api.sendMessage("𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
      }