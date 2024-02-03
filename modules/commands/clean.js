module.exports.config = {
  name: "clean",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "Xóa j đó",
  commandCategory: "Hệ thống",
  usages: "clean",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": ""
  }
};

const request = require('request');
const fs = require("fs");

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const threadID = event.threadID;

  const files = await fs.readdirSync("modules/commands/cache");
  const extensions = [".m4a", ".mp4", ".png", ".jpg", ".gif", ".mp3"];

  for (const file of files) {
    for (const extension of extensions) {
      if (file.endsWith(extension)) {
        fs.unlinkSync(`modules/commands/cache/${file}`);
      }
    }
  }

  // Thông báo khi dữ liệu đã được xóa
  console.log("Dữ liệu đã được xóa.");
  api.sendMessage("Dữ liệu đã được xóa.", threadID)
};
