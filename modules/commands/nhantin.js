const axios = require('axios');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const moment = require('moment-timezone');

module.exports.config = {
  name: "nhantin",
  version: "1.1.0",
  hasPermssion: 1,
  credits: "Vtuan", // mod by Kz Khánhh
  description: "Gửi tin nhắn tới một người dùng qua ID Facebook",
  commandCategory: "Thành Viên",
  usages: "[userID] [noidung]\nBạn có thể reply file (ảnh, video, âm thanh, tài liệu, vv.) hoặc nhập nội dung trực tiếp",
  cooldowns: 10
};

function getAttachmentPath(attachmentType) {
  const extensions = {
    audio: 'm4a',
    photo: 'jpg',
    video: 'mp4',
    animated_image: 'gif'
  };

  return extensions[attachmentType] ? `attachment_${Date.now()}.${extensions[attachmentType]}` : null;
}

async function downloadAndSendFile(api, url, content, targetID, isReply) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const fileExtension = mime.extension(response.headers['content-type']);
    const fileName = `attachment_${Date.now()}.${fileExtension || 'txt'}`;
    const filePath = path.join(__dirname, 'cache', fileName);

    fs.writeFileSync(filePath, Buffer.from(response.data));

    api.sendMessage({ attachment: fs.createReadStream(filePath), body: content }, targetID, (e, info) => {
      if (isReply) {
        global.client.handleReply.push({
          type: "callad",
          name: "sendmsg",
          author: targetID,
          ID: info.messageID,
          messageID: info.messageID
        });
      }
    });

    fs.unlinkSync(filePath);
  } catch (error) {
    console.error('Error downloading or sending file:', error);
  }
}

module.exports.run = async ({ api, event, handleReply, Users, args }) => {
  const { threadID, messageID, senderID, type, messageReply } = event;
  const name = await Users.getNameUser(senderID);
  const threadInfo = await api.getThreadInfo(args[0]);
  const NameText = threadInfo.threadName || await Users.getNameUser(args[0]);
  const contentArgs = args.slice(1);
  const content = contentArgs.length !== 0 ? contentArgs.join(" ") : "Hi chao cau";

  if (threadInfo.isGroup) {
    if (threadInfo.adminIDs.includes(senderID)) {
      // Quản trị viên nhóm
    } else {
      if (args[0] === senderID || args[0] === threadID) {
        api.sendMessage("Tính ra mày đang ở thread này luôn đấy Em", threadID);
        return;
      }
    }
  } else {
    if (args[0] === senderID || args[0] === threadID) {
      api.sendMessage("Tự kỷ à Em!\nSao lại tự nhắn tin cho bản thân thế?", threadID);
      return;
    }
  }

  // Tiếp tục thực hiện các hành động khác nếu không có trùng lặp ID

  if (type === "message_reply" && messageReply.attachments.length > 0) {
    const attachmentType = messageReply.attachments[0].type;
    const attachmentPath = getAttachmentPath(attachmentType);

    if (attachmentPath) {
      const abc = messageReply.attachments[0].url;
      const getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

      fs.writeFileSync(path.join(__dirname, 'cache', attachmentPath), Buffer.from(getdata, 'utf-8'));

      api.sendMessage({ body: `${content}`, attachment: fs.createReadStream(path.join(__dirname, 'cache', attachmentPath)) }, args[0], (e, info) => {
        global.client.handleReply.push({
          type: "callad",
          name: this.config.name,
          author: threadID,
          ID: messageID,
          messageID: info.messageID
        });
      });
    }
  } else {
    api.sendMessage({ body: `${content}` }, args[0], (e, info) => {
      global.client.handleReply.push({
        type: "callad",
        name: this.config.name,
        author: threadID,
        ID: messageID,
        messageID: info.messageID
      });
    });
  }
};

module.exports.handleReply = async ({ api, event, handleReply, Users }) => {
  const { body, threadID, senderID, messageID, attachments } = event;
  const index = body.split(" ");

  switch (handleReply.type) {
    case "callad": {
      const name = await Users.getNameUser(senderID);
      let filePath = '';

      if (attachments.length !== 0) {
        const attachmentType = attachments[0].type;
        const attachmentPath = getAttachmentPath(attachmentType);

        if (attachmentPath) {
          const abc = attachments[0].url;
          const getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;
          filePath = path.join(__dirname, 'cache', attachmentPath);
          fs.writeFileSync(filePath, Buffer.from(getdata, 'utf-8'));
        }
      }

      const params = {
        body: `${index.join(" ")}`,
        attachment: filePath ? fs.createReadStream(filePath) : null
      };

      api.sendMessage(params, handleReply.author, (e, info) => {
        global.client.handleReply.push({
          type: "callad",
          name: this.config.name,
          author: threadID,
          ID: messageID,
          messageID: info.messageID
        });
      }, handleReply.ID);

      if (filePath) {
        fs.unlinkSync(filePath);
      }
    }
  }
};
