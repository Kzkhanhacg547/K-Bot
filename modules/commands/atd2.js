var configCommand = {
    name: 'atd2',
    version: '1.1.1',
    hasPermssion: 1,
    credits: 'Rainerin',
    description: 'Tự động tải xuống khi phát hiện liên kết',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
},
axios = require('axios'),
downloader = require('image-downloader'),
fse = require('fs-extra'),
toolsFb = {
    getVideoUrl: async (url) => {
      const res = await axios.get('https://apidocs-thanhali.thanhali.repl.co/fbdownload?apikey=ThanhAliVip_1234567890&url=' + encodeURIComponent(url));
      return res.data.data.medias[res.data.data.medias.length - 1].url;
    }
  },
path = __dirname+'/cache/statusAuto.json';

const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});

async function streamURL(url, mime) {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};

function onLoad() {
    if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
};

async function noprefix(arg) {
    const s = JSON.parse(fse.readFileSync(path));
    if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
    if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

    const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d ? d : arg.event.messageID),
    arr = arg.event.args || [],
    regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
    regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
    regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/\w+\/\w?(\/)?/,
    regEx_instagram = /http(s|):\/\/(www\.)?instagram\.com\/(reel|p)\/\w+/,
    regEx_SC = /^(https?:\/\/)?(www.)?(m\.)?soundcloud\.com\/[\w\-\.]+(\/)+[\w\-\.]+/,
    regEx_ZingMp3 = /^(https?:\/\/)?(www.)?(m\.)?(mp3|zing)mp3\.vn\/bai-hat\/[\w\-\.]+\/\w+/;

    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
            const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;
            out({
                body: `====== [ 𝐓𝐈𝐊𝐓𝐎𝐊 ] ======\n━━━━━━━━━━━━━━\n\n💬 𝗧𝗶𝘁𝗹𝗲: ${data.title}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${data.digg_count}\n💭 𝗧𝗼̂̉𝗻𝗴 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${data.comment_count}\n🔗 𝗟𝘂̛𝗼̛̣𝘁 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${data.share_count}\n📥 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗮̉𝗶: ${data.download_count}\n\n🌸 𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻 𝗸𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝗹𝗶𝗻𝗸 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺\n\n👉 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👌" 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝗻𝗵𝗮̣𝗰`, attachment: await streamURL(data.play, 'mp4')}, '', (err, dataMsg) => global.client.handleReaction.push({
                    name: 'autodownurl', messageID: dataMsg.messageID, url_audio: data.music
                })); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */
  }
}

async function reactionMsg(arg) {
  if(arg.event.reaction == '👌') // code
  {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d),
    _ = arg.handleReaction;
    if ('url_audio'in _) out({
        body: `====== [ 𝐌𝐔𝐒𝐈𝐂 ] ======\n━━━━━━━━━━━━━━\n\n👉 𝗟𝗮̂́𝘆 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝘁𝘂̛̀ 𝘃𝗶𝗱𝗲𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴`, attachment: await streamURL(_.url_audio, 'mp3')}, '', '', _.messageID);
  }
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    const data = JSON.parse(fse.readFileSync(path));
    s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean'||!!data[arg.event.threadID]?false: true;
    fse.writeFileSync(path, JSON.stringify(data, 0, 4));
    out((s?'[ 𝗔𝗨𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ] - 𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 𝗯𝗮̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴': '[ 𝗔𝗨𝗧𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ] - 𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴')+' '+configCommand.name+' ✅');
};

module.exports = {
    config: configCommand,
    onLoad,
    run: runCommand,
    handleEvent: noprefix,
    handleReaction: reactionMsg
};