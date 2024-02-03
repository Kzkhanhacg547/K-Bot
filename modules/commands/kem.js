const fs = require("fs");
module.exports.config = {
	name: "kém",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai", 
	description: "no prefix",
	commandCategory: "Noprefix",
	usages: "noprefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kém")==0 || (event.body.indexOf("kém")==0)) {
		var msg = {
				body: "Công nhận là kém thật.",
				attachment: fs.createReadStream(__dirname + `/noprefix/kem.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}