module.exports.config = {
  name: "download2",
  version: "1.1.0",
  hasPermssion: 2,
  credits: "Kz Khánhh",
  description: "Tải về tệp tin từ link",
  commandCategory: "ADMIN",
  usages: "[đường dẫn lưu file] | [tên file]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "axios": "",
    "request": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];

  // Kiểm tra nếu có tin nhắn chứa file đính kèm
  if (event.attachments.length === 0) {
    return api.sendMessage("Không có file đính kèm trong tin nhắn.", event.threadID, event.messageID);
  }

  // Lấy đường dẫn và tên file từ tham số
  const [path, fileName] = args.join(" ").split(" | ");

  // Kiểm tra xem có đường dẫn và tên file không
  if (!path || !fileName) {
    return api.sendMessage("Vui lòng nhập đường dẫn lưu file và tên file.", event.threadID, event.messageID);
  }

  // Lấy đường dẫn file đính kèm
  const attachmentURL = event.attachments[0].url;

  try {
    const response = await axios.get(attachmentURL, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);
    const filePath = `${path}/${fileName}`;

    await fs.outputFile(filePath, buffer);

    api.sendMessage(`Đã tải về tệp tin "${fileName}" vào thư mục "${path}"`, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage(`Đã có lỗi xảy ra: ${error.message}`, event.threadID, event.messageID);
  }
};