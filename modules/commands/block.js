let messageCounts = {};
let spamDetectionEnabled = true;
const spamThreshold = 50;
const spamInterval = 100000;

module.exports.config = {
  name: "block",
  version: "1.1.0",
  hasPermission: 2,
  credits: "tên của bạn",
  description: "Tự động phát hiện và xử lý spam",
  usePrefix: false,
  commandCategory: "admin",
  usages: "[on/off]",
  cooldowns: 5,
};

module.exports.run = function ({ api, event, args }) {
  const mode = args[0]?.toLowerCase();

  if (mode === "on") {
    spamDetectionEnabled = true;
    api.sendMessage("🟢 | T𝑖́nℎ 𝑛ă𝑛g pℎá𝑡 ℎi𝑒̣̂n tℎư r𝑎́c h𝑖ệ𝑛 đã đ𝑢̛ợ𝑐 𝑏ậ𝑡.", event.threadID, event.messageID);
  } else if (mode === "off") {
    spamDetectionEnabled = false;
    api.sendMessage("🔴 | T𝑖́nℎ 𝑛ă𝑛g pℎá𝑡 ℎi𝑒̣̂n tℎư r𝑎́c h𝑖ệ𝑛 đã đ𝑢̛ợ𝑐 𝑡ắ𝑡.", event.threadID, event.messageID);
  } else {
    api.sendMessage("❎ | 𝘊𝘢́𝘤𝘩 𝘴𝘶̛̉ 𝘥𝘶̣𝘯𝘨 𝘬𝘩𝘰̂𝘯𝘨 𝘩𝘰̛̣𝘱 𝘭𝘦̣̂. 𝘊𝘩𝘪̉ 𝘴𝘶̛̉ 𝘥𝘶̣𝘯𝘨 'on' 𝘩𝘰𝘢̣̆𝘤 'off'.", event.threadID, event.messageID);
  }
};

module.exports.handleEvent = function ({ api, event }) {
  const { threadID, messageID, senderID, isAdmin } = event;

  if (!spamDetectionEnabled) {
    return;
  }

  if (!messageCounts[threadID]) {
    messageCounts[threadID] = {};
  }

  if (!messageCounts[threadID][senderID]) {
    messageCounts[threadID][senderID] = {
      count: 1,
      timer: setTimeout(() => {
        delete messageCounts[threadID][senderID];
      }, spamInterval),
    };
  } else {
    messageCounts[threadID][senderID].count++;
    if (messageCounts[threadID][senderID].count > spamThreshold) {
      if (isAdmin) {
        api.removeUserFromGroup(senderID, threadID); 
        
        api.sendMessage({
          body: "🛡️ | Đ𝘢̃ 𝘵𝘩𝘶̛̣𝘤 𝘩𝘪𝘦̣̂𝘯 𝘹𝘰́𝘢 𝘯𝘨𝘶̛𝘰̛̀𝘪 𝘥𝘶̀𝘯𝘨 𝘴𝘱𝘢𝘮 𝘬𝘩𝘰̉𝘪 𝘯𝘩𝘰́𝘮.",
          mentions: [{
            tag: senderID,
            id: senderID,
          }],
        }, threadID, messageID);
      } else {
        api.removeUserFromGroup(api.getCurrentUserID(), threadID); // Bot leaves when spam
        api.sendMessage("🛡️ | 𝘒𝘩𝘰̂𝘯𝘨 𝘵𝘩𝘦̂̉ 𝘵𝘩𝘶̛̣𝘤 𝘩𝘪𝘦̣̂𝘯 𝘹𝘰́𝘢 𝘯𝘨𝘶̛𝘰̛̀𝘪 𝘥𝘶̀𝘯𝘨 𝘴𝘱𝘢𝘮 𝘬𝘩𝘰̉𝘪 𝘯𝘩𝘰́𝘮. 𝘛𝘰̂𝘪 𝘴𝘦̃ 𝘵𝘩𝘰𝘢́𝘵, 𝘵𝘢̣𝘮 𝘣𝘪𝘦̣̂𝘵!", threadID, messageID);
      }
    }
  }
};
