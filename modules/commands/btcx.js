module.exports.config = {
	name: "btcx",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Đổi Emoji nhóm của bạn",
	commandCategory: "Box", 
	usages: "boxemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("Bạn chưa nhập BTCX.", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`🔨 Bot đã đổi thành công BTCX thành: ${emoji}.`, event.threadID, event.messageID));
}