module.exports.config = {
	name: "uptime",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai - JRT",///mod by Kz Khánhh
	description: "Kiểm tra thời gian bot dã online",
	commandCategory: "Hệ thống",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
  const request = require('request');
	const res = await axios.get(`https://sex.accountkz.repl.co/thinh`);
  var love = res.data.data
	const fs = require("fs");
  const namebot = global.config.BOTNAME;
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
	const timeStart = Date.now();
	let today = new Date();
  axios.get('https://sex.accountkz.repl.co/girlv2').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({body: `├┬┴┬┴ 𝐔𝐏𝐓𝐈𝐌𝐄 ┬┴┬┴┤\n『🤖』↦ 𝐇𝐨̂𝐦 𝐧𝐚̀𝐲 𝐥𝐚̀: ${gio}\n『🌀』↦ ${namebot} đ𝐚̃ 𝐡𝐨̣𝐚𝐭 đ𝐨̣̂𝐧𝐠: \n               → ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲\n『📣』↦ 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n『🏅』↦ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.2.14\n『📲』↦ 𝐓𝐨̂̉𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: ${global.data.allUserID.length}\n『💬』↦ 𝐓𝐨̂̉𝐧𝐠 𝐍𝐡𝐨́𝐦: ${global.data.allThreadID.length}\n『🎮』↦ 𝐂𝐩𝐮 𝐝𝐚𝐧𝐠 𝐝𝐮̀𝐧𝐠: ${pidusage.cpu.toFixed(1)}\n『🔰』↦ 𝐑𝐚𝐦 đ𝐚𝐧𝐠 𝐝𝐮̀𝐧𝐠: ${byte2mb(pidusage.memory)}\n『⚡』↦ 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}ms\n『💓』↦ 𝐓𝐡𝐢́𝐧𝐡:\n『 ${love} 』\nˏ⸉ˋ‿̩͙‿̩̩̽‿̩͙‿̩̥̩‿̩̩̽‿̩͙‿̩͙‿̩̩̽‿̩͙‿̩͙‿̩̩̽‿̩͙‿̩̥̩‿̩̩̽‿̩͙‘⸊ˎ`, attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}



