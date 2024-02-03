module.exports.config = {
	name: "gỡ",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Gỡ tin nhắn của Bot bằng thả cảm xúc 😠",
	commandCategory: "Tiện ích",
	usages: "gỡ",
	cooldowns: 0,
	dependencies: []
};

module.exports.run = async function({ api, event, args, Users }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText('unsendErr1'), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText('unsendErr2'), event.threadID, event.messageID);

	return api.react("😠", event.messageReply.messageID);
}
