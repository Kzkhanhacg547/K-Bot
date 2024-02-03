module.exports.config = {
    name: "fast",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Mirai Team",
    description: "Kiểm tra tốc độ mạng",
    commandCategory: "Hệ thống",
    cooldowns: 15,
    dependencies: {
		"fast-speedtest-api": ""
	}
};

module.exports.run = async function({ api, event }) {
	try {
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
		const resault = await speedTest.getSpeed();
		return api.sendMessage(
			"=== 𝐑𝐞𝐬𝐮𝐥𝐭 ===" + 
			"\n- 𝐒𝐩𝐞𝐞𝐝: " + resault + " 𝐌𝐛𝐩𝐬",
			event.threadID, event.messageID
		);
	}
	catch {
		return api.sendMessage("𝐾ℎ𝑜̂𝑛𝑔 𝑡ℎ𝑒̂̉ 𝑠𝑝𝑒𝑒𝑑𝑡𝑒𝑠𝑡 𝑛𝑔𝑎𝑦 𝑙𝑢́𝑐 𝑛𝑎̀𝑦, ℎ𝑎̃𝑦 𝑡ℎ𝑢̛̉ 𝑙𝑎̣𝑖 𝑠𝑎𝑢!", event.threadID, event.messageID);
	}
}