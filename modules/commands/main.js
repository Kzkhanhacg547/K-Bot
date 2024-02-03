module.exports.config = {
  name: "main",
  version: "1.0.0",
  hasPermission: 1,
  permissionLevel: 1,
  credits: "Kz Khánhh",
  description: "Cài đặt hệ thống bot",
  commandCategory: "Hình ảnh",
  usages: "botsetting",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": ""
  }
};

const request = require('request');
const fs = require("fs");
const axios = require('axios');

module.exports.run = async ({ api, event }) => {
  const imageUrls = await Promise.all(Array.from({ length: 6 }, async () => {
    const res = await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl');
    return res.data.url;
  }));

  const attachments = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  const { threadID, messageID, userID } = event;

  api.sendMessage({
    body: `==「 𝗠𝗔𝗜𝗡 𝗛𝗘̣̂ 𝗧𝗛𝗢̂́𝗡𝗚 」==
━━━━━━━━━━━━━━
1: 𝙆𝒉𝙤̛̉𝒊 đ𝙤̣̂𝒏𝙜 𝙡𝒂̣𝙞 𝙗𝙤𝙩
2: 𝑻𝙖̆́𝒕 𝒃𝙤𝒕
3: 𝙓𝒆𝙢 𝙞𝙣𝙛𝙤 𝙗𝙤𝙩
4: 𝙍𝙚𝙨𝙚𝙩 𝙩𝙤𝙖̀𝙣 𝙗𝙤̣̂ 𝙢𝒐𝙣𝒆𝙮 𝙘𝙪̉𝙖 𝙩𝙫 𝙩𝙧𝙤𝙣𝙜 𝙗𝙤𝙭 𝙫𝙚̂̀ 0
5: 𝑹𝙚𝒔𝙚𝙩 𝒆𝙭𝙥 𝒗𝙚̂̀ 0, 𝒔𝙤̂́ 𝙩𝙞𝙣 𝙣𝙝𝙖̆́𝙣
6: 𝑪𝙖̣̂𝒑 𝒏𝙝𝒂̣̂𝙣 𝙙𝙖𝙩𝙖 𝒃𝙤𝒙
7: 𝘾𝙖̣̂𝗽 𝗻𝗵𝗮̣̂𝐭 𝐝𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂 𝗮𝗹𝗹 𝗯𝗼𝘅 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ thố𝙣𝙜
━━━━━━━━━━━━━━
Vui lòng gõ số để thực hiện tương ứng với lựa chọn của bạn.`,
           attachment: attachments }, event.threadID, (err, info) => {

            global.client.handleReply.push({
                type: "choose",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
}



module.exports.handleReply = async function({
  args, event, Users,Threads, api, handleReply, permssion, Currencies, __GLOBAL
}) {
  const { threadID, messageID, senderID } = event;
  const { setData, getData } = Users;
  const config = getData("config") || { ADMINBOT: [] };
  const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(event.senderID)).name;

  switch (handleReply.type) {
    case "choose": {
      switch (event.body) {
          case "1": {
            const permission = ["100081129610697",""];
            if (!permission.includes(event.senderID)) return api.sendMessage("Bạn không có quyền thực hiện lệnh này!", event.threadID, event.messageID);
            api.unsendMessage(handleReply.messageID);
            api.sendMessage("Ông chủ chờ em khởi động lại nhé.",event.threadID, () =>process.exit(1));
            break;
          }

        case "2": {
          const permission = ["100081129610697",""];
          if (!permission.includes(event.senderID)) return api.sendMessage("Bạn không có quyền thực hiện lệnh này!", event.threadID, event.messageID);
          api.unsendMessage(handleReply.messageID);
          api.sendMessage(`[🔔] 𝐊𝐳 𝐁𝐨𝐭 [🔔]\n[❗𝐎𝐅𝐅𝐁𝐎𝐓❗] 👋 Tạm biệt ${nameUser}, tôi đi ngủ đây:33`, event.threadID, () =>process.exit(0));
          break;
        }

        case "3": {
          const { commands } = global.client;
          const namebot = global.config.BOTNAME;
          const prefix = global.config.PREFIX;
          const admin = global.config.ADMINBOT
          const threadSetting = (await Threads.getData(String(event.threadID))).data || 
          {};
          const PREFIX = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
          : global.config.PREFIX;
          var ping = Date.now();

          var threadInfo = await api.getThreadInfo(event.threadID);
                    api.unsendMessage(handleReply.messageID);
                    api.sendMessage({
                      body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
          ━━━━━━━━━━━━━━━━━━
          🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖ó ${commands.size} lệnh
          📎 𝗣𝗿𝗲𝗳𝗶𝘅: Prefix hệ thống là [ ${prefix} ]
          💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}
          👑 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭: ${admin.length}
          📌 𝐏𝐢𝐧𝐠: ${Date.now() - ping}ms
        ━━━━━━━━━━━━━━━━━
          Hướng dẫn: Sử dụng lệnh "${PREFIX}help" để xem các lệnh có trên bot này`,
                      attachment: (await global.nodemodule["axios"]({
                        url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl')).data.url,
                        method: "GET",
                        responseType: "stream"
                      })).data
                    }, event.threadID);
                    break;
                  }
        case "4": {
          const data = await api.getThreadInfo(event.threadID);
          if (!data) return api.sendMessage("Không thể lấy thông tin nhóm!", threadID, event.messageID);
          const participantIDs = data.userInfo.map(value => value.id);
          participantIDs.forEach(async (id) => {
            var currenciesData = await Currencies.getData(id);
            if (!currenciesData) currenciesData = { money: 0 };
            currenciesData.money = 0;
            await Currencies.setData(id, currenciesData);
          });
          api.sendMessage("💵 Đã set tiền trong nhóm về 0!", threadID);
          break;
        }
        case "5": {
          const data = await api.getThreadInfo(event.threadID);
          if(!data) return api.sendMessage("Không thể lấy thông tin nhóm!", threadID, event.messageID);
          const participantIDs = data.userInfo.map(value => value.id);
          participantIDs.forEach(async (id) => {
            var currenciesData = await Currencies.getData(id);
            if (!currenciesData) currenciesData = { exp: 0 };
            currenciesData.exp = 0;
            await Currencies.setData(id, currenciesData);
          });
          api.sendMessage("🍁 Đã set exp/trình độ trong nhóm về 0!", threadID);
          break;
        }
        case "6": {
           const { participantIDs } = await Threads.getInfo(threadID) || await api.getThreadInfo(threadID);
          participantIDs.forEach(async (id) => {
            const data = await api.getUserInfo(id);
            const userName = data[id].name;
            await Users.setData(id, { name: userName, data: {} });
          });
          api.unsendMessage(handleReply.messageID);
          api.sendMessage("🌸 Đã reset lại thông tin những người dùng trong nhóm!", threadID);
          break;
        }
        case "7": {
          const inbox = await api.getThreadList(100, null, ['INBOX']);
          const groupList = inbox.filter(group => group.isSubscribed && group.isGroup);
          const lengthGroup = groupList.length;
          groupList.forEach(async (groupInfo) => {
            const threadInfo = await api.getThreadInfo(groupInfo.threadID);
            threadInfo.threadName;
            await setData(groupInfo.threadID, { threadInfo });
          });
          api.unsendMessage(handleReply.messageID);
          api.sendMessage(`👉 Đã lưu những thông tin liên quan tới nhóm đang tham gia vào database của bot (${lengthGroup} nhóm)!`, threadID);
          break;
        }

        default:
          const choose = parseInt(event.body);
          if (isNaN(event.body) || choose > 2 || choose < 1) {
            api.sendMessage("→ Lựa chọn không hợp lệ!", threadID, event.messageID);
            break;
          }
          break;
      }
      break;
    }
    default: {
      if (config.ADMINBOT.includes(event.senderID)) {
        // Code cho reply 1 và 2
      } else {
        api.sendMessage("Đây là lệnh của admin", event.threadID, event.messageID);
      } 
    }
  }
}