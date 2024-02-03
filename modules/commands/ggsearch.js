module.exports.config = {
  name: "ggsearch",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ZeraKage",//convert by sen :))
  description: "Tìm kiếm kết quả trên google!",
  commandCategory: "Công cụ",
  usages: "search [Text]",
  cooldowns: 5,
  dependencies: {
    "google-it": ""
  }
};

  module.exports.run = async function({ api, event, args }) {
        let textNeedSearch = "";
        const regex = /(https?:\/\/.*?\.(?:png|jpe?g|gif)(?:\?(?:[\w_-]+=[\w_-]+)(?:&[\w_-]+=[\w_-]+)*)?(.*))($)/;
        (event.type == "message_reply") ? textNeedSearch = event.messageReply.attachments[0].url : textNeedSearch = event.args.join(" ");
        if (regex.test(textNeedSearch)) {
            api.sendMessage("[🌟]➜ 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦!", event.threadID, event.messageID);
        }
        else {
            api.sendMessage(`[🌟]➜ Đ𝐚𝐧𝐠 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐜𝐡𝐨 𝐭𝐮̛̀ 𝐤𝐡𝐨́𝐚: ${textNeedSearch}`, event.threadID, (err, info) =>
                setTimeout(() => {
                    api.unsendMessage(info.messageID)
                }, 3000));
            const google = require('google-it');
            (async () => {
                const results = await google({ query: textNeedSearch });
                let body = "[🌟]=== 『 𝐒𝐄𝐀𝐑𝐂𝐇 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』 ===[🌟]\n◆━━━━━━━━━━━━━━━━◆\n";
                for (var i = 0; i < 5; i++) {
                    body += `${i + 1}. ${results[i].title}\n${results[i].link}\n\n`;
                }
                api.sendMessage(body, event.threadID, event.messageID);
            })();
        }
    }
