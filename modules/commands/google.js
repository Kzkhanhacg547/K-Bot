module.exports.config = {
  "name": "google",
  "version": "1.0.1",
  "hasPermssion": 0,
  "credits": "nnl",
  "description": "Tìm kiếm kết quả trên google!",
  "commandCategory": "Công cụ",
  "usages": "google [Text]",
  "cooldowns": 5,
  "dependencies": {
      "request": "",
      "fs": ""
  }
};

module.exports.run = function({ api, event, args }) {
  let textNeedSearch = "";
  const regex = /(https?:\/\/.*?\.(?:png|jpe?g|gif)(?:\?(?:[\w_-]+=[\w_-]+)(?:&[\w_-]+=[\w_-]+)*)?(.*))($)/;

  if (event.type == "message_reply") {
    textNeedSearch = event.messageReply.attachments[0].url;
  } else {
    textNeedSearch = args.join(" ");
  }

  if (regex.test(textNeedSearch)) {
    api.sendMessage(`[📊]=== 『 𝗚𝗢𝗢𝗚𝗟𝗘 𝗦𝗘𝗔𝗥𝗖𝗛 』 ===[📊]\n◆━━━━━━━━━━━━━━━━◆\n\n[🔍]➜ 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻, 𝗮̂́𝗻 𝘃𝗮̀𝗼 𝗹𝗶𝗻𝗸 𝗯𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶 đ𝗲̂̉ 𝘅𝗲𝗺!\n https://www.google.com/searchbyimage?&image_url=${textNeedSearch}`, event.threadID, event.messageID);
  } else {
    api.sendMessage(`[📊]=== 『 G𝐎O𝐆L𝐄 𝐒E𝐀R𝐂H 』 ===[📊]\n◆━━━━━━━━━━━━━━━━◆\n\n[🔍]➜ 𝗞ế𝘁 𝐪u𝐚̉ 𝐭ì𝐦 𝗸i𝐞̂́𝗺 c𝐮̉a b𝐚̣n, 𝗮̂́𝐧 v𝐚̀𝗼 l𝐢n𝐤 𝗯ê𝗻 𝗱ư𝐨̛́i đ𝗲̂̉ 𝘅e𝗺!\n https://www.google.com.vn/search?q=${encodeURIComponent(textNeedSearch)}`, event.threadID, event.messageID);
  }
};
