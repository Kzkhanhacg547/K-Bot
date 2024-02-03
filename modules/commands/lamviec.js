module.exports.config = {
	name: "lamviec",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Quốc Tuấn",
	description: "Có làm thì mới có ăn!",
	commandCategory: "Kiếm tiền",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "Bạn đã làm việc trong hôm nay, để tránh kiệt sức hãy quay lại sau: %1 phút %2 giây.",
        "rewarded": "Bạn đã làm công việc %1 và kiếm ra được %2$",
        "job1": "bán vé số",
        "job2": "sửa xe",
        "job3": "lập trình",
        "job4": "hack facebook",
        "job5": "đầu bếp",
        "job6": "thợ hồ",
        "job7": "fake taxi",
        "job8": "gangbang người nào đó",
        "job9": "thợ sửa ống nước may mắn  ( ͡° ͜ʖ ͡°)",
        "job10": "streamer",
        "job11": "bán hàng trực tuyến",
        "job12": "nội trợ",
        "job13": 'bán "hoa"',
        "job14": "tìm jav/hentai code cho SpermLord",
        "job15": "chơi Yasuo và gánh đội của bạn"
    },
    "en": {
        "cooldown": "You have worked today, to avoid exhaustion please come back after: %1 minute(s) %2 second(s).",
        "rewarded": "You did the job: %1 and received: %2$.",
        "job1": "sell lottery tickets",
        "job2": "repair car",
        "job3": "programming",
        "job4": "hack Facebook",
        "job5": "chef",
        "job6": "mason",
        "job7": "fake taxi",
        "job8": "gangbang someone",
        "job9": "plumber ( ͡° ͜ʖ ͡°)",
        "job10": "streamer",
        "job11": "online seller",
        "job12": "housewife",
        "job13": 'sell "flower"',
        "job14": "find jav/hentai code for SpermLord",
        "job15": "play Yasuo and carry your team"
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 20000),
            seconds = ((time % 20000) / 500).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
  const job = [ 
    "bán vé số ",
    "sửa xe",
    "lập trình",
    "hack facebook",
    "đầu bếp",
    "thợ hồ",
    "fake taxi",
    "gangbang người nào đó",
    "thợ sửa ống nước may mắn  ( ͡° ͜ʖ ͡°)",
    "streamer",
    "bán hàng trực tuyến",
    "nội trợ",
    "tìm jav/hentai code cho SpermLord",
    "chơi Yasuo và gánh đội của bạn"
  ];
  const text = `${job[Math.floor(Math.random()*job.length)]}`;
        const coin = Math.floor(Math.random() * 10000);
        return api.sendMessage(getText("rewarded", text, coin), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(coin));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    } 