const axios = require("axios");
const fs = require("fs-extra");
const endPointMyApi = '';
const emojiToSendMessage = "❤";
const emojiToPushApi = "👍";

module.exports.config = {
  name: "1",
  credits: "NTKhang",
  hasPermssion: 2,
  description: "import/crawl data from a api",
  usages: "< limit > < key1,key2... > < filename > < url endpoints >",
  commandCategory: "Hệ thống"
};


module.exports.run = async ({ api, event, args }) => {
  const {
    threadID,
    messageID,
    senderID
  } = event;
  try {
    // eslint-disable-next-line prefer-const
    let [limit, key, fileName, url] = args;
    if (!limit || !key || !fileName || !url)
      return api.sendMessage("[ 𝗖𝗥𝗔𝗪𝗟𝗦 ] - Sai cú pháp", threadID, messageID);
    const folderName = fileName.split("/").slice(0, -1).join("/");
    fileName = fileName.split("/").slice(-1)[0];
    if (isNaN(limit))
      return api.sendMessage("[ 𝗖𝗥𝗔𝗪𝗟𝗦 ] - Limit phải là số", threadID, messageID);
    url = url.replace(/,/g, ".");
    const pendings = [];
    for (let i = 0; i < limit; i++) {
      pendings.push(axios({
        url,
        method: "GET"
      }));
    }
    const data = await Promise.allSettled(pendings);
    let success = 0;
    let failed = 0;
    let newData = [];

    const keys = key.split(',');
    const firstKey = keys[0];

    for (const item of data) {
      if (item.status == "fulfilled") {
        const value = {};
        for (const key of keys)
          value[key] = item.value.data[key];
        if (newData.some(e => e[firstKey] == value[firstKey])) {
          success++;
          continue;
        }
        success++;
        newData.push(value);
      }
      else
        failed++;
    }

    if (keys.length == 1)
      newData = newData.map(e => e[firstKey]);

    const msg = `🖨=== [ 𝐂𝐀̀𝐎 𝐃𝐀𝐓𝐀 ] ===🖨\n━━━━━━━━━━━━━━\n\n✅ 𝗧𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 𝗰𝗮̀𝗼 𝗱𝗮𝘁𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴\n📌 𝗔𝗱𝗱: ${newData.length}\n🔥 𝗧𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴: ${success}\n❌ 𝗧𝗵𝗮̂́𝘁 𝗯𝗮̣𝗶: ${failed}\n📝 𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻 "${emojiToSendMessage}", 𝗴𝘂̛̉𝗶 𝗳𝗶𝗹𝗲 𝘃𝗲̂̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗿𝗶𝗲̂𝗻𝗴`;
    return api.sendMessage(msg, threadID, async (err, info) => {
      global.client.handleReaction.push({
        name: this.config.name,
        messageID: info.messageID,
        author: senderID,
        data: newData,
        fileName,
        folderName
      });
    }, messageID);
  }
  catch (e) {
    console.log(e);
    return api.sendMessage("Có lỗi xảy ra khi thực hiện lệnh", threadID, messageID);
  }
};

module.exports.handleReaction = async ({ api, event, handleReaction }) => {
  const { fileName, folderName, author, data } = handleReaction;
  if (event.userID != author)
    return;
  if (event.reaction == emojiToSendMessage) {
    const path = __dirname + `/cache/${fileName}`;
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
    return api.sendMessage({
      body: `📝 𝗙𝗶𝗹𝗲 ${fileName} 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀`,
      attachment: fs.createReadStream(path)
    }, event.userID, (err, info) => {
      if (err) {
        console.log(err);
        return api.sendMessage("[ 𝗖𝗥𝗔𝗪𝗟𝗦 ] - Có lỗi xảy ra", event.threadID, event.messageID);
      }
      api.sendMessage(`📝 𝗚𝘂̛̉𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗳𝗶𝗹𝗲 ${fileName} 𝘃𝗲̂̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗿𝗶𝗲̂𝗻𝗴`, event.threadID, event.messageID);
      fs.unlinkSync(path);
    });
  }
  else if (event.reaction == emojiToPushApi) {
    let res;
    try {
      await axios({
        url: endPointMyApi,
        method: "POST",
        data: {
          content: JSON.stringify(data, null, 2),
          folder: folderName,
          fileName
        }
      });
      res = "✅ 𝗣𝘂𝘀𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗱𝗮𝘁𝗮 𝘃𝗮̀𝗼 𝗔𝗣𝗜";
      return api.sendMessage(res, event.threadID, event.messageID);
    }
    catch (e) {
      console.log(e);
      res = "❌ 𝗫𝗮̉𝘆 𝗿𝗮 𝗹𝗼̂̃𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗺𝗼𝗻𝗴 𝗺𝘂𝗼̂́𝗻 𝗸𝗵𝗶 𝗽𝘂𝘀𝗵 𝗱𝗮𝘁𝗮 𝘃𝗮̀𝗼 𝗔𝗣𝗜";
      return api.sendMessage(res, event.threadID, event.messageID);
    }
  }
};