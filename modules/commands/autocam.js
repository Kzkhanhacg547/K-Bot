module.exports.config = {
  name: "autocam",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ManhG",
  description: "Người chửi bot sẽ tự động bị ban khỏi hệ thống <3",
  commandCategory: "Hệ thống",
  usages: "",
  cooldowns: 0,
  denpendencies: {}
};

module.exports.handleReply = async function ({ api, args, Users, event, handleReply }) {
  const { threadID, messageID } = event;
  const { reason } = handleReply;
  var name = await Users.getNameUser(event.senderID);
  //const moment = require("moment-timezone");
  //const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var arg = event.body.split(" ");
  var uidUser = handleReply.author;
  var nameU = handleReply.nameU;
  //console.log(uidUser, nameU)
  switch (handleReply.type) {
    case "reply":
      {
        var idad = global.config.ADMINBOT;
        for (let ad of idad) {
          api.sendMessage({
            body: "‎➝ 𝐋𝐨̛̀𝐢 𝐜𝐡𝐚̆𝐧𝐠 𝐜𝐡𝐨̂́𝐢 𝐭𝐮̛̀ 𝐭𝐡𝐚̆̀𝐧𝐠 𝐤𝐡𝐨̂́𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭: " + name + ":\n " + event.body,
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
            nameU: name,
            type: "banU"
          }))
        }
        break;
      }

    case "banU":
      {
        if (arg[0] == "unban" || arg[0] == "Unban") {

          let data = (await Users.getData(uidUser)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Users.setData(uidUser, { data });
          global.data.userBanned.delete(uidUser, 1);

          api.sendMessage(`‎➝ 𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧  ${name}\n\n ${nameU}\n‎➝ 𝐁𝐚̣𝐧 Đ𝐚̃ Đ𝐮̛𝐨̛̣𝐜 𝐆𝐨̛̃ 𝐁𝐚𝐧\n‎➝ 𝐂𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐧𝐠𝐚𝐲 𝐛𝐚̂𝐲 𝐠𝐢𝐨̛̀🥳`, uidUser, () =>
            api.sendMessage(`${global.data.botID}`, () =>
              api.sendMessage(`★★UnBanSuccess★★\n\n🔷${nameU} \n✅TID:${uidUser} `, threadID)));
        } else {
          api.sendMessage({ body: `‎➝ 𝐥𝐨̛̀𝐢 𝐜𝐮̛́𝐮 𝐯𝐨̛́𝐭 𝐭𝐮̛̀ 𝐚𝐝𝐦𝐢𝐧 đ𝐞̂́𝐧 𝐛𝐚̣𝐧:\n\n${event.body}\n\n‎➝ 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐠𝐮̛̉𝐢 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: data.messageID,
            type: "reply"
          }), handleReply.messID);
          break;
          
        }
      }

    case "chuibot":
      {
        api.sendMessage({ body: `‎➝ 𝐀𝐝𝐦𝐢𝐧 𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐛𝐚̣𝐧:\n\n${event.body}\n\n➝ 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐧𝐨́𝐢 𝐥𝐨̛̀𝐢 𝐜𝐡𝐚̆𝐧𝐠 𝐜𝐡𝐨̂́𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐭𝐨̛́𝐢 𝐚𝐝𝐦𝐢𝐧`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
          name: this.config.name,
          author: event.senderID,
          messageID: data.messageID,
          type: "reply"
        }), handleReply.messID);
        break;
      }
  }
};

module.exports.handleEvent = async ({ event, api, Users, Threads }) => {
  var { threadID, messageID, body, senderID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss D/MM/YYYY");
  
    var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["fixspam"] !== "undefined" && thread["fixspam"] == false) return;

  if (senderID == global.data.botID) return;
  let name = await Users.getNameUser(event.senderID);
  var idbox = event.threadID;
  var threadInfo = (await Threads.getData(threadID)).threadInfo;
  //trả lời
  var msg = {
    body: `━━━━━━━━━━━━━━━━━━\n➝  𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧 \n━━━━━━━━━━━━━━━━━━\n➝ ${name}, 𝐁𝐚̣𝐧 𝐭𝐡𝐚̣̂𝐭 𝐧𝐠𝐮 𝐥𝐨̂̀𝐧 𝐤𝐡𝐢 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐯𝐢̀ 𝐯𝐚̣̂𝐲 𝐛𝐨𝐭 𝐯𝐮̛̀𝐚 𝐚𝐮𝐭𝐨 𝐛𝐚𝐧 𝐛𝐚̣𝐧 𝐤𝐡𝐨̉𝐢 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠\n━━━━━━━━━━━━━━━━━━\n➝  𝐋𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 𝐛𝐨𝐭: https://www.facebook.com/kzkhanh547 đ𝐞̂̉ đ𝐮̛𝐨̛̣𝐜 𝐠𝐨̛̃ 𝐛𝐚𝐧𝐬 𝐧𝐡𝐞́ 𝐠𝐨̛̃ 𝐛𝐚𝐧 𝐧𝐡𝐞́ ><\n➝ 𝐋𝐨̛̀𝐢 𝐜𝐮𝐨̂́𝐢: 𝐧𝐞̂́𝐮 𝐛𝐨𝐱 𝐜𝐚̉𝐦 𝐭𝐡𝐚̂́𝐲 𝐦𝐮̛𝐨̛̣𝐧 𝐛𝐨𝐭 đ𝐮̛𝐨̛̣𝐜 𝐭𝐡𝐢̀ 𝐦𝐮̛𝐨̛̣𝐧 𝐧𝐡𝐚̀ 𝐜𝐡𝐮̛́ đ𝐮̛̀𝐧𝐠 𝐤𝐢𝐞̂̉𝐮 𝐦𝐮̛𝐨̛̣𝐧 𝐬𝐨𝐧𝐠 𝐜𝐡𝐮̛̉𝐢`
  }
  // Gọi bot
  const arr = ["botngu", "bot ngu", "bot gà", "con bot lol", "bot ngu lol", "bot chó", "dm bot", "đm bot", "dmm bot", "dmm bot", "đmm bot", "đb bot", "bot điên", "bot dở", "bot khùng", "đĩ bot", "bot paylac rồi", "con bot lòn", "cmm bot", "clap bot", "bot ncc", "bot oc", "bot óc", "bot óc chó", "cc bot", "bot tiki", "lozz bottt", "lol bot", "loz bot", "lồn bot", "bot lồn", "bot lon", "bot cac", "bot nhu lon", "bot như cc", "bot như bìu", "Bot sida", "bot sida", "bot fake", "bằng ngu", "bot shoppee","bot đểu", "bot dỡm"];

  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
      const uidUser = event.senderID;
      modules = "chui bot:"
      console.log(name, modules, i);
      const data = Users.getData(uidUser).data || {};
      Users.setData(uidUser, { data });
      data.banned = 1;
      data.reason = i || null;
      data.dateAdded = time;
      global.data.userBanned.set(uidUser, { reason: data.reason, dateAdded: data.dateAdded });

      api.sendMessage(msg, threadID, () => {
        var listAdmin = global.config.ADMINBOT;
        for (var idad of listAdmin) {
          let namethread = threadInfo.threadName;
          api.sendMessage(`➝ 𝐓𝐡𝐚̆̀𝐧𝐠 𝐤𝐡𝐨̂́𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭: ${name}\n➝ 𝐔𝐢𝐝 𝐜𝐮̉𝐚 𝐧𝐨́ : ${uidUser}\n➝ 𝐁𝐨𝐱: ${namethread}\n➝ 𝐋𝐨̛̀𝐢 𝐬𝐮́𝐜 𝐩𝐡𝐚̣𝐦 𝐛𝐨𝐭: ${i}\n\n➝  𝐓𝐡𝐚̆̀𝐧𝐠 𝐤𝐡𝐨̂́𝐧 ${name} đ𝐚̃ 𝐛𝐢̣ 𝐛𝐚𝐧𝐬 𝐤𝐡𝐨̉𝐢 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 𝐯𝐢̀ 𝐛𝐨𝐭 đ𝐚̃ đ𝐮̛𝐨̛̣𝐜 𝐛𝐚̣̂𝐭 𝐚𝐮𝐭𝐨 𝐛𝐚𝐧 𝐤𝐡𝐢 𝐩𝐡𝐚́𝐭 𝐡𝐢𝐞̣̂𝐧 𝐭𝐡𝐚̆̀𝐧𝐠 𝐤𝐡𝐨̂́𝐧 𝐱𝐮́𝐜 𝐩𝐡𝐚̣𝐦 𝐛𝐨𝐭\n➝ 𝐂𝐚́𝐜 𝐀𝐝𝐦𝐢𝐧 𝐲𝐞̂𝐧 𝐭𝐚̂𝐦 đ𝐢 𝐚̣`, idad, (error, info) =>
              global.client.handleReply.push({
                name: this.config.name,
                author: senderID,
                messageID: info.messageID,
                messID: messageID,
                id: idbox,
                type: "chuibot"
              })
          );
        }
      });
    }
  });

};

module.exports.languages = {
  "vi": {"on": "Bật","off": "Tắt","successText": "autoban nhóm này thành công",},
  "en": {"on": "on","off": "off","successText": "autoban success!",}
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["autoban"] == "undefined" || data["autoban"] == true) data["autoban"] = false;
  else data["autoban"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["autoban"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
    }