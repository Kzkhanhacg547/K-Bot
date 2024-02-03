module.exports.config = {
  name: "download",
  version: "1.1.0",
  hasPermssion: 2,
  credits: "Kz Khánhh",
  description: "Tải về tệp tin từ link",
  commandCategory: "ADMIN",
  usages: "[tên thư mục] <link tải>/<tên file>",
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
  const rq = global.nodemodule["request"];
  
  let path, link;
  if(args.length === 1) {
    path = __dirname;
    link = args[0];
  } else {
    path = `${__dirname}/${args[0]}`;
    link = args.slice(1).join(" ");
  }
  
  try {
    const response = await axios.get(link, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);
    const fileName = link.split("/").pop();
    const filePath = `${path}/${fileName}`;
    
    await fs.outputFile(filePath, buffer);
    
    api.sendMessage(`Đã tải về tệp tin "${fileName}" vào thư mục "${path}"`, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage(`Đã có lỗi xảy ra: ${error.message}`, event.threadID, event.messageID);
  }
};