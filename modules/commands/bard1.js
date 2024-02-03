const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "bard1",
  version: "1",
  usePrefix: true,
  hasPermission: 0,
  credits: "Arjhil",
  description: "Bard ai",
  commandCategory: "Ai",
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
      api.sendMessage("Please provide a question or query", threadID, messageID);
      return;
    }
  }

  api.sendMessage("Searching for an answer, please wait...", threadID, messageID);

  try {
    const res = await axios.get(
      `https://niiozic.site/bard?ask=${encodeURIComponent(question)}`
    );

    const respond = res.data.message;
    const imageUrls = res.data.imageUrls;

    if (Array.isArray(imageUrls) && imageUrls.length > 0) {
      const attachments = [];

      if (!fs.existsSync("cache")) {
        fs.mkdirSync("cache");
      }

      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const imagePath = `cache/image${i + 1}.png`;

        try {
          const imageResponse = await axios.get(url, { responseType: "arraybuffer" });
          fs.writeFileSync(imagePath, imageResponse.data);

          attachments.push(fs.createReadStream(imagePath));
        } catch (error) {
          console.error("Error occurred while downloading and saving the image:", error);
        }
      }

      api.sendMessage(
        {
          attachment: attachments,
          body: respond,
        },
        threadID,
        messageID
      );
    } else {
      api.sendMessage(respond, threadID, messageID);
    }
  } catch (error) {
    console.error("Error occurred while fetching data from the Bard API:", error);
    api.sendMessage("An error occurred while fetching data. Please try again later.", threadID, messageID);
  }
};

async function convertImageToText(imageURL) {
  const response = await axios.get(
    `https://niiozic.site/bard?ask=${encodeURIComponent(imageURL)}`
  );
  return response.data.extractedText;
}