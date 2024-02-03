module.exports.config = {
    name: "fbreel",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "DeepAI",
    description: "Tải video từ link Facebook Reel",
    commandCategory: "Box",
    usages: "",
    cooldowns: 3,
    dependencies: {
        "fs": "",
        "moment-timezone": ""
    }
};

module.exports.run = async function({ api, event, args }) {
    const axios = require('axios');
    const fs = require('fs');
    const moment = require('moment-timezone');
    const { threadID, messageID } = event;
    
    const url = args[0];
    if (!url || !url.includes('facebook.com/reel/')) return api.sendMessage(`Vui lòng nhập đúng định dạng link Facebook Reel.`, threadID, messageID);
    
    try {
        const res = await axios.get(url).catch(e => {});
        const rawHtml = res.data;
        var regex = /(?:VODEO_ID=[0-9]+;)/g;
        const match = regex.exec(rawHtml);
        const id = match[0].split('=')[1].replace(';','');
        const videoUrl = `https://api.reelcontent.com/wordpress/v1.0/export/asset/${id}`;
        
        const file = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const fileName = `fbreel_${moment.tz('Asia/Ho_Chi_Minh').format('DDMMYYYYHHmmss')}.mp4`;
        const path = __dirname + `/cache/${fileName}`;
        fs.writeFileSync(path, Buffer.from(file.data));

        api.sendMessage({attachment: fs.createReadStream(path), type: 'video'}, threadID, () => fs.unlinkSync(path), messageID);
    } catch (e) {
        console.log(JSON.stringify(e));
        return api.sendMessage("Không thể tải được video từ link này. Vui lòng thử lại sau.", threadID, messageID);
    }
}