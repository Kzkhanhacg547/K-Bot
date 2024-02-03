const fs = require("fs");
module.exports.config = {
	name: "dua",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "D-Jukie", 
	description: "no prefix",
	commandCategory: "Noprefix",
	usages: "noprefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đùa")==0 || (event.body.indexOf("Đùa")==0)) {
		var msg = {
				body: "Mày đùa bố mày đấy à.",
				attachment: fs.createReadStream(__dirname + `/noprefix/dua.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}