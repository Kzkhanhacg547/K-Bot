const fs = require("fs");
module.exports.config = {
	name: "Buồn",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "", 
	description: "no prefix",
	commandCategory: "Noprefix",
	usages: "Vĩnh Biệt Cụ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Buồn")==0 || (event.body.indexOf("buồn")==0 || (event.body.indexOf("chán")==0 || (event.body.indexOf("Chán")==0)))) {
		var msg = {
				body: "Cố lên bạn.\nBuồn chán thì giải quyết được gì.",
  				attachment: fs.createReadStream(__dirname + `/noprefix/buonchan.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}