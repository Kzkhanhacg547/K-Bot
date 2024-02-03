module.exports.config = {
	name: "vdtamtrang",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Kz Khánh",
	description: "",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.handleEvent = async ({
  args,
  event,
	api,
	Users
}) => {
  const fs = global.nodemodule["fs-extra"];
  const moment = require('moment-timezone');
  const timeStart = Date.now();
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["vdtamtrang"] !== "undefined" && thread["chill"] == false) return;
const axios = require('axios')
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;
const namebot = global.config.BOTNAME;
  const PREFIX = config.PREFIX;
  const { commands } = global.client; 
	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
const res = await axios.get(`https://5e827527-8776-4999-b9ae-84079106cc5c-00-3q69g2ypot0am.worf.replit.dev/thinh`);
var thinh = res.data.data;
	//trả lời
	var msg = {
		body: `=「 𝐕𝐢𝐝𝐞𝐨_𝐓â𝐦_𝐓𝐫ạ𝐧𝐠 ✨ 」=\n━━━━━━━━━━━━━\n❤️‍🩹 𝐓𝐡í𝐧𝐡: ${thinh}\n━━━━━━━━━━━━━\n🛸 𝗣𝗿𝗲𝗳𝗶𝘅: ${PREFIX}\n⚙️ 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms\n👩‍💻 Hiện tại ${namebot} đã online được\n➠  ${hours} giờ ${minutes} phút ${seconds} giây\n➠ ⏰ Bây giờ là:  ${thu}\n      ${gio}\n━━━━━━━━━━━━━`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://5e827527-8776-4999-b9ae-84079106cc5c-00-3q69g2ypot0am.worf.replit.dev/tamtrang')).data.url,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["vdtamtrang"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "vdtamtrang thành công",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "hi success!",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["vdtamtrang"] == "undefined" || data["vdtamtrang"] == true) data["vdtamtrang"] = false;
	else data["vdtamtrang"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["vdtamtrang"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}
