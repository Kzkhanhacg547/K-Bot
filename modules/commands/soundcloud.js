module.exports.config = {
	name: "soundcloud",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "",
	description: "Tự động tải file âm thanh khi phát hiện link âm thanh soundcloud",
	commandCategory: "Noprefix",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
  }
};

const fs = require("fs-extra");
const request = require("request");

module.exports.run = async function({ api, event, args }) {
	const url = event.body;
	if (!url.includes("soundcloud.com")) return;

	// Tải xuống file âm thanh
	const stream = await request(url, {
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
		}
	});

	// Lưu file âm thanh
	const filename = `${event.senderID}.mp3`;
	await fs.writeFile(filename, stream);

	// Gửi file âm thanh cho người dùng
	api.sendMessage({ attachment: fs.createReadStream(filename) }, event.threadID);

	// Xóa file âm thanh đã tải xuống
	await fs.unlink(filename);
};
