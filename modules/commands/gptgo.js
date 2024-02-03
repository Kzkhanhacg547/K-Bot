const axios = require("axios");
const fs = require("fs");
const gtts = require("gtts");

module.exports.config = {
  name: "gptgo",
  version: "1",
  usePrefix: true,
  hasPermission: 0,
  credits: "Arjhil",
  description: "Bard ai",
  usePrefix: false,
  commandCategory: "ai",
  usages: "<ask>",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID, type, messageReply, body } = event;

  let question = "";

  if (type === "message_reply" && messageReply.attachments[0]?.type === "photo") {
    const attachment = messageReply.attachments[0];
    const imageURL = attachment.url;
    question = await convertImageToText(imageURL);

    if (!question) {
      api.sendMessage(
        "❌ Failed to convert the photo to text. Please try again with a clearer photo.",
        threadID,
        messageID
      );
      return;
    }
  } else {
    question = body.slice(5).trim();

    if (!question) {
      api.sendMessage("𝑅ồ𝑖 𝐵ạ𝑛 ℎỏ𝑖 𝑐á𝑖 𝑔ì?", threadID, messageID);
      return;
    }
  }

  api.sendMessage("𝖡𝗈𝗍 đ𝖺𝗇𝗀 đ𝖺́𝗇𝗁 𝗆𝖺́𝗒, 𝖼𝗁𝗈̛̀ 𝗍𝖾̣𝗈 𝗇𝗁𝖺...", threadID, messageID);

  try {
    const res = await axios.get(
      `https://bard-ai.arjhilbard.repl.co/bard?ask=${encodeURIComponent(question)}`
    );

    const respond = res.data.message;
    const formattedAnswer = `📝  (𝗜𝗡𝗩𝗢𝗜𝗖𝗘) ${respond}`;

    const gttsPath = 'voice.mp3';
    const gttsInstance = new gtts(formattedAnswer, 'vi');
    gttsInstance.save(gttsPath, function (error, result) {
      if (error) {
        console.error("Error saving gTTS:", error);
        api.sendMessage("❌ 𝐿𝑜̂̃𝑖 𝑡𝑎̣𝑜 𝑝ℎ𝑎̉𝑛 ℎ𝑜̂̀𝑖 𝑏𝑎̆̀𝑛𝑔 𝑔𝑖𝑜̣𝑛𝑔 𝑛𝑜́𝑖.", threadID, messageID);
      } else {
        const textAnswer = `📝  (𝗔𝗜)\n\n📝: ${respond} `;
        const voiceAnswer = `𝖵𝗈𝗂𝖼𝖾 𝖺𝗇𝗌𝗐𝖾𝗋: ${respond}`;

        api.sendMessage(textAnswer, threadID, (error, messageInfo) => {
          if (!error) {
            api.sendMessage({
              body: voiceAnswer,
              attachment: fs.createReadStream(gttsPath)
            }, threadID);
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
    api.sendMessage("❌ Đ𝑎̃ 𝑥𝘢̉𝑦 𝑟𝘢 𝘭𝑜̂̃𝘪 𝘬ℎ𝘪 𝘵𝑖̀𝘮 𝘯𝑎̣𝘱 𝘥𝑢̛̃ 𝑙𝘪𝑒̣̂𝘶.", threadID, messageID);
  }
};

async function convertImageToText(imageURL) {
  const response = await axios.get(
    `https://bard-ai.arjhilbard.repl.co/api/other/img2text?input=${encodeURIComponent(imageURL)}`
  );
  return response.data.extractedText;
}
