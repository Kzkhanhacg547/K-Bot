const imgur = require("imgur");
const fs = require("fs");
const axios = require("axios");
const { downloadFile } = require("../../utils/index");

module.exports.config = {
  name: "catbox",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mod",
  description: "Imgur",
  commandCategory: "Tiện ích",
  usages: "[reply]",
  cooldowns: 0,
};

module.exports.run = async ({ api, event }) => {
  const { threadID, type, messageReply, messageID } = event;
  const ClientID = "771631e18e73452";
  if (type !== "message_reply" || messageReply.attachments.length === 0) {
    return api.sendMessage(
      "Bạn phải reply một video hoặc ảnh nào đó",
      threadID,
      messageID
    );
  }

  imgur.setClientId(ClientID);
  const attachmentSend = [];

  async function getAttachments(attachments) {
    let startFile = 0;
    for (const data of attachments) {
      const ext =
        data.type === "photo"
          ? "jpg"
          : data.type === "video"
          ? "mp4"
          : data.type === "audio"
          ? "m4a"
          : data.type === "animated_image"
          ? "gif"
          : "txt";
      const pathSave = __dirname + `/cache/${startFile}.${ext}`;
      ++startFile;
      const url = data.url;
      await downloadFile(url, pathSave);
      attachmentSend.push(pathSave);
    }
  }

  await getAttachments(messageReply.attachments);
  let msg = "";

  for (const getImage of attachmentSend) {
    try {
      const getLink = await imgur.uploadFile(getImage);
      console.log(getLink);
      fs.unlinkSync(getImage);

      // Upload to catbox
      const catboxResponse = await axios.get(
        `https://catbox-mnib.onrender.com/upload?url=${getLink.link}`
      );

      // Add both Imgur and Catbox URLs to the message
      msg += `Imgur: ${getLink.link}\nCatbox: ${catboxResponse.data.url}\n`;
    } catch (error) {
      console.error(error);
      fs.unlinkSync(getImage);
    }
  }

  return api.sendMessage(`${msg}`, threadID);
};
