const lunar = require('vn-lunar');

module.exports.config = {
  name: "lịch", 
  version: "1.0.0", 
  hasPermssion: 0, 
  credits: "BerVer",
  description: "Kiểm tra lịch", 
  commandCategory: "Tiện ích", 
  usages: "lịch", 
  cooldowns: 5, 
  dependencies: { } 
}

module.exports.run = function ({ api, event }) {
  try {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth() + 1;
    const yyyy = now.getFullYear();
    const day = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'][now.getDay()];

    const lunarDate = lunar.convertSolar2Lunar(dd, mm, yyyy);

    const rd = [lunarDate.lunarDay, lunarDate.lunarMonth, lunarDate.lunarYear];
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const message = `Âm lịch: ${rd[0]} ${rd[1]} ${rd[2]}`;

    api.sendMessage(message, event.threadID);
  } catch (error) {
    console.error('Error converting date:', error);
    api.sendMessage('Đã xảy ra lỗi khi chuyển đổi ngày.', event.threadID);
  }
}
