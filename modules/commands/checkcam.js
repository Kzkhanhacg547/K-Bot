const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: "checkcam",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Kz Khánhh",
  description: "Tự động gửi file mới được thêm vào thư mục tới admin",
  commandCategory: "Hệ thống",
  usages: "",
  cooldowns: 5,
  dependencies: {
    request: "",
    "fs-extra": "",
  },
};

module.exports.run = async ({ api, event, args, permssion }) => {
  const folderPath = path.resolve(__dirname, '1checkcam'); // Đường dẫn đến thư mục
  console.log(`Đang theo dõi thư mục ${folderPath}...`);

  fs.watch(folderPath, async (eventType, filename) => {
    if (eventType === 'rename' || eventType === 'change') {
      // Xử lý sự kiện thay đổi trong thư mục
      console.log(`File ${filename} đã được thêm hoặc thay đổi.`);

      try {
        const filePath = path.join(folderPath, filename);

        // Gửi toàn bộ file đính kèm đến bạn
        api.sendMessage({
          body: `File ${filename} đã được thêm hoặc thay đổi.`,
          attachment: fs.createReadStream(filePath),
        }, event.threadID);
      } catch (error) {
        console.error('Error sending file to admin:', error);
      }
    }
  });

  if (args[0] == "clean") {
    // Kick người dùng fb
    if (permssion < 1) return api.sendMessage("[𝐅𝐁 𝐀𝐃𝐌𝐈𝐍]→ https://fb.me/kzkhanh547 !! ❤️", event.threadID);
    const threadID = event.threadID;

    try {
      // Corrected the method name to readdirSync
      const files = fs.readdirSync("modules/commands/1checkcam");
      const extensions = [".m4a", ".mp4", ".png", ".jpg", ".gif", ".mp3"];

      for (const file of files) {
        for (const extension of extensions) {
          if (file.endsWith(extension)) {
            // Corrected the path for unlinkSync
            fs.unlinkSync(path.join("modules/commands/1checkcam", file));
          }
        }
      }

      // Thông báo khi dữ liệu đã được xóa
      console.log("Dữ liệu đã được xóa.");
      api.sendMessage("Dữ liệu đã được xóa.", threadID);
    } catch (error) {
      console.error('Error cleaning cache:', error);
      api.sendMessage('Đã xảy ra lỗi khi xóa dữ liệu.', threadID);
    }
  }
};
