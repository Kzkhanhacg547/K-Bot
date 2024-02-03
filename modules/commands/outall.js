module.exports.config = {
  name: "outall",
  version: "1.0.0", 
  hasPermssion: 2,
  credits: "Mirai được mod lại bởi Lý Hảii", /* vui lòng k sửa credit :) */
  description: "out all box",
  commandCategory: "Admin",
  usages: "outall [Text]",
  cooldowns: 5,
};
module.exports.run = async ({ api, event, args }) => {

 const permission = ["100081129610697"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Mày Có Phải Admin Chính Đâu 🙂 Quê Vcl", event.threadID, event.messageID);
 return api.getThreadList(100, null, ["INBOX"], (err, list) => {
    if (err) throw err;
    list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ?
      api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
    api.sendMessage('Đã Nhận Lệnh Out All Từ Admin 📢 Đã Out All', event.threadID);
  });
}
