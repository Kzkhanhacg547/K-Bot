module.exports.config = {
  name: "duckgo",
  version: "1.2.1",
  hasPermssion: 0,
  credits: "@Hazeyy",
  description: "( 𝘼𝙄 )",
  commandCategory: "utilities",
  usages: "Ask ( Duckgo )",
  cooldowns: 3,
  dependencies: {}
};

const axios = require("axios");
const cheerio = require("cheerio");

module.exports.run = async function({ api, event, args }) {
  let message = args.join(" ");

  if (message.length < 1) {
    api.sendMessage("𝖨𝗇𝗏𝖺𝗅𝗂𝖽 𝖢𝗈𝗆𝗆𝖺𝗇𝖽\n 𝖴𝗌𝖺𝗀𝖾: 𝖽𝗎𝖼𝗄𝗀𝗈 <𝖺𝗌𝗄> )", event.threadID);
  } else {
    try {
      const response = await axios.get(`https://duckduckgo.com/html/?q=${encodeURIComponent(message)}`);
      const $ = cheerio.load(response.data);
      const answer = $(".result__snippet").first().text();

      if (answer) {
        api.sendMessage(answer, event.threadID, event.messageID);
      } else {
        api.sendMessage("𝖲𝗈𝗋𝗋𝗒 𝖨 𝖼𝗈𝗎𝗅𝖽𝗇'𝗍 𝖿𝗂𝗇𝖽 𝗍𝗁𝖾 𝖺𝗇𝗌𝗐𝖾𝗋..")
            (event.threadID);
       }
    } catch (error) {
      console.error(error);
      api.sendMessage("‼️𝖤𝗋𝗋𝗈𝗋 𝗐𝗁𝗂𝗅𝖾 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀 𝗍𝗁𝖾 𝖺𝗇𝗌𝗐𝖾𝗋..", event.threadID);
    }
  }
};