module.exports.config = {
	name: "upt2",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai - JRT",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Hệ thống",
	cooldowns: 5,
	dependencies: {
		"pidusage": "",
		"fast-speedtest-api": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event,arg, Users }) => {
	const axios = global.nodemodule["axios"];
	const fast = global.nodemodule["fast-speedtest-api"];
	const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
	const ketqua = await speedTest.getSpeed();
  const request = require('request');
	const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`);
  var love = res.data.data
	const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const namebot = global.config.BOTNAME;
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
	const timeStart = Date.now();
	let today = new Date();
 return api.sendMessage("", event.threadID, () => api.sendMessage(`»»—————> 𝑈𝑃𝑇𝐼𝑀𝐸 <—————««\n>𝐂𝐡𝐚̀𝐨 𝐜𝐚̣̂𝐮: ${name}\n>𝐁𝐨𝐭 đ𝐚̃ 𝐡𝐨𝐚̣𝐭 đ𝐨̣̂𝐧𝐠: ${hours} : ${minutes} : ${seconds} giây.\n>𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n>𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.2.15\n>Tổng người dùng: ${global.data.allUserID.length}\n>Tổng Nhóm: ${global.data.allThreadID.length}\n>𝐂𝐩𝐮 đ𝐚𝐧𝐠 𝐝𝐮̀𝐧𝐠: ${pidusage.cpu.toFixed(1)}\n>𝐑𝐚𝐦 đ𝐚𝐧𝐠 𝐝𝐮̀𝐧𝐠: ${byte2mb(pidusage.memory)}\n>𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}ms\n>𝐓𝐨̂́𝐜 đ𝐨̣̂ 𝐦𝐚̣𝐧𝐠: ${ketqua} 𝐌𝐛𝐬 \n≻──── •${namebot}• ────≺\n>𝐓𝐡𝐢́𝐧𝐡:\n  『${love}』\n═══════════════\n      ${gio}`, event.threadID, event.messageID));
}
