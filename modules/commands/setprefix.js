module.exports.config = {
    "name": "setprefix",
    "version": "1.0.1",
    "hasPermssion": 1,
    "credits": "Haruna",
    "description": "Đặt lại prefix của nhóm",
    "commandCategory": "Tiện ích",
    "usages": "[prefix/reset]",
    "cooldowns": 5
};

module.exports.handleEvent=async({event:e,api:a,Threads:n})=>{
  var {threadID:o, messageID:r, body:s, senderID:t } = e;
  if ("Haruna" != this.config.credits)
    return a.sendMessage("Sai credits!", o, r);
  function i(e) {
    a.sendMessage(e,o,r)
  }
  var d = (await n.getData(o)).data;
  const p = global.data.threadData.get(parseInt(o)) || {};
  ["mpre","mprefix","prefix","dấu lệnh","prefix của bot là gì","daulenh","dùng sao","lệnh là gì"].forEach((e=>{let a=e[0].toUpperCase()+e.slice(1);if(s===e.toUpperCase()|s===e|a===s){const e=p.PREFIX||global.config.PREFIX;return null==d.PREFIX?i(`======『 𝗣𝗥𝗘𝗙𝗜𝗫 』======\n━━━━━━━━━━━━━━━━━━━━━━━━━\n[ ${e} ] 𝗡𝗵𝗼́𝗺 𝗰𝗵𝘂̛𝗮 𝘅𝗲́𝘁 𝗽𝗿𝗲𝗳𝗶𝘅 𝗺𝗼̛́𝗶 𝗰𝗵𝗼 𝗯𝗼𝘁`):i("======『 𝗣𝗥𝗘𝗙𝗜𝗫 』======\n━━━━━━━━━━━━━━━━━━\n→ Prefix của nhóm là: "+d.PREFIX)}}))},
  
module.exports.languages ={
	"vi": {
		"successChange": "[ 𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓 𝐍𝐇𝐎́𝐌 ]\n→ Đ𝐚̃ đ𝐨̂̉𝐢 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡: %1",
		"missingInput": "====『𝐃𝐀̂́𝐔 𝐋𝐄̣̂𝐍𝐇』====\n𝐁𝐚̣𝐧 𝐩𝐡𝐚̉𝐢 𝐧𝐡𝐚̣̂𝐩 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐚̂̀𝐧 𝐭𝐡𝐚𝐲 đ𝐨̂̉𝐢",
		"resetPrefix": "======『 𝗣𝗥𝗘𝗙𝗜𝗫 』======\nĐã reset prefix về mặc định [ %1 ]",
		"confirmChange": "====『𝐃𝐀̂́𝐔 𝐋𝐄̣̂𝐍𝐇』====\n→ 𝐁𝐚̣𝐧 𝐜𝐨́ 𝐜𝐡𝐚̆́𝐜 𝐦𝐮𝐨̂́𝐧 đ𝐨̂̉𝐢 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡: %1\n→ 𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐛𝐚̂́𝐭 𝐤𝐢̀ 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐱𝐚́𝐜 𝐧𝐡𝐚̣̂𝐧"
	},
	"en": {
		"successChange": "Changed prefix into: %1",
		"missingInput": "Prefix have not to be blank",
		"resetPrefix": "Reset prefix to: %1",
		"confirmChange": "Are you sure that you want to change prefix into: %1"
	}
}

module.exports.handleReaction = async function({ api, event, Threads, handleReaction, getText }) {
	try {
		if (event.userID != handleReaction.author) return;
		const { threadID, messageID } = event;
		var data = (await Threads.getData(String(threadID))).data || {};
		data["PREFIX"] = handleReaction.PREFIX;
		await Threads.setData(threadID, { data });
		await global.data.threadData.set(String(threadID), data);
		api.unsendMessage(handleReaction.messageID);
    
     api.changeNickname(`『 ${handleReaction.PREFIX} 』 • ${global.config.BOTNAME}`, event.threadID, event.senderID);
		return api.sendMessage(getText("successChange", handleReaction.PREFIX), threadID, messageID);
    
	} catch (e) { return console.log(e) }
}

module.exports.run = async ({ api, event, args, Threads , getText }) => {
	if (typeof args[0] == "undefined") return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
	let prefix = args[0].trim();
	if (!prefix) return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
	if (prefix == "reset") {
		var data = (await Threads.getData(event.threadID)).data || {};
		data["PREFIX"] = global.config.PREFIX;
		await Threads.setData(event.threadID, { data });
		await global.data.threadData.set(String(event.threadID), data);
    var uid = api.getCurrentUserID()
    api.changeNickname(`『 ${global.config.PREFIX} 』 ➺ ${global.config.BOTNAME}`,event.threadID, uid);
    
		return api.sendMessage(getText("resetPrefix", global.config.PREFIX), event.threadID, event.messageID);
	} else return api.sendMessage(getText("confirmChange", prefix), event.threadID, (error, info) => {
		global.client.handleReaction.push({
			name: "setprefix",
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	})
  }