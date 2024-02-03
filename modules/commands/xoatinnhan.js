module.exports.config = {
  name: "xoatinnhan",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "D-Jukie",
  description: "Xóa tất cả tin nhắn trên acc bot",
  commandCategory: "ADMIN",
  usages: "[thread/all]",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args, getText }) {
  if (args[0] == "all") {
    const list = await api.getThreadList(1000, null, ["INBOX"]);
    for (const item of list) {
      await api.deleteThread(item.threadID);
    }
    api.sendMessage("Xóa thành công tất cả tin nhắn", event.threadID);
  } else {
    const list = await api.getThreadList(1000, null, ["INBOX"]);
    for (const item of list) {
      if (item.isGroup && item.threadID != event.threadID) {
        await api.deleteThread(item.threadID);
      }
    }
    api.sendMessage("Xóa thành công tất cả tin nhắn nhóm", event.threadID);
  }
};
