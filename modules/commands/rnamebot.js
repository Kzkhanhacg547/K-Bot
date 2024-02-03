module.exports.config = {
  name: "rnamebot",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "D-Jukie",
  description: "Đổi biệt danh của bot ở toàn bộ nhóm!",
  commandCategory: "Admin",
  usages: "[Tên mới của bot]",
  cooldowns: 20,
};

module.exports.run = async ({ event, api, args, Threads }) => {
  const customName = args.join(" ");
  const allThread = await Threads.getAll(["threadID"]);
  const idBot = api.getCurrentUserID();
  const threadError = [];
  let count = 0;

  for (const idThread of allThread) {
    const { threadID } = idThread; // Sử dụng idThread để lấy threadID
    const { PREFIX } = global.config;
    const threadSetting = global.data.threadData.get(threadID) || {};
    const customPrefix = threadSetting.PREFIX || PREFIX;
    const custom = customName ? `『${customPrefix} 』${customName}` : `『${customPrefix}』${global.config.NAMEBOT}`;

    api.changeNickname(custom, threadID, idBot, (err) => (err) ? threadError.push(threadID) : '');
    count += 1;
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm.`, event.threadID, () => {
    if (threadError.length !== 0) {
      api.sendMessage(`[!] Không thể đổi tên tại ${threadError.length} nhóm.`, event.threadID, event.messageID);
    }
  }, event.messageID);
};
