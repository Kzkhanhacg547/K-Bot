const fs = require('fs');
const axios = require('axios')
module.exports.config = {
    name: "all",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Mirai Team",
    description: "tag toàn bộ thành viên",
    commandCategory: "Box",
    usages: "[Text]",
    cooldowns: 0
};

const emptyChar = '\u200B';
module.exports.run = async ({ api, event, args, Threads }) => {
    const { threadID, messageID, senderID, type, messageReply } = event;

    const botID = api.getCurrentUserID();
    let text = '';
  if(args[0]){
     text = args.join(" ")
  }else {
    text = "💥Cháy nhà r!"
  }
    let listAFK = global.moduleData["afk"] && global.moduleData["afk"].afkList ? Object.keys(global.moduleData["afk"].afkList || []) : [];
    const mentions = event.participantIDs.filter(e => e != botID && e != senderID && !listAFK.includes(e)).map((e, i) => ({ tag: text[i] || emptyChar, id: e }))
   // console.log(mentions)

    if (type != "message_reply") return api.sendMessage({ body: text, mentions }, threadID, messageID);

    const link = messageReply.attachments;
    let imageData = [], num = 0, cache = [];
    for (const e of link) {
        let fileName = e.url, ext;
        const audio = fileName.match("audioclip");
        if (audio != null) ext = ".mp3"
        else ext = fileName.split(".")[5].split("?")[0]

        let path = __dirname + `/cache/${num += 1}.${ext}`;
        cache.push(path)
        let data = (await axios.get(`${e.url}`, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(path, Buffer.from(data, 'utf-8'));
        imageData.push(fs.createReadStream(__dirname + '/cache/' + `${num}.${ext}`));
    }

    api.sendMessage({
        body: text,
        attachment: imageData,
        mentions
    }, threadID, () => { cache.forEach(e => fs.unlinkSync(e)) }, messageID)
}