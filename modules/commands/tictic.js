const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "tictic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "Tải video tictic",
  commandCategory: "tik tok",
  usages: "/tictic + cái bạn muốn tìm, ví dụ /tictic buồn",
  cooldowns: 5
};

module.exports.onLoad = function () {
  console.log("Đã tải lệnh thành công");
};

const roof = n => +n != +Math.floor(n) ? +Math.floor(n) + 1 : +n;
const localeStr = n => ((+n).toLocaleString()).replace(/,/g, '.');
const { get } = require('axios'),
{
    createReadStream,
    mkdirSync,
    rmdirSync,
    unlinkSync
} = require('fs-extra'),
{
    image
} = require('image-downloader');

module.exports.handleReply = async ({ api, event, handleReply }) => {
    const $ = handleReply;
    if ($.case == 'runListUserPost') {
        if (['list'].includes(event.args[0])) {
            if (event.args[1] > roof($.data.length / 6) || event.args[1] < 1 || isNaN(event.args[1])) return api.sendMessage(`𝗧𝗿𝗮𝗻𝗴 ${event.args[1]} 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵!`, event.threadID, event.messageID); else return runListUserPost(api, event, $.data, 6, +event.args[1], $.type, $.author);
        } else return api.sendMessage({ body: $.type ? infoVideoUserPost($.data[event.args[0] - 1]) : infoMusicUserPost($.data[event.args[0] - 1].music_info), attachment: await downStreamURL($.data[event.args[0] - 1][$.type ? 'play' : 'music'], __dirname + `/cache/${event.messageID}.${$.type ? 'mp4' : 'mp3'}`) }, event.threadID, () => unlinkSync(__dirname + `/cache/${event.messageID}.${$.type ? 'mp4' : 'mp3'}`), event.messageID);
    };
    const { threadID, messageID, body } = event;
    if (handleReply.author != event.senderID || !body) return;
    let args = body.split(' ');
    switch (handleReply.type) {
        case 'search':
            if (isNaN(body)) return;
            const { videoInfo } = handleReply;
            const index = parseInt(body) - 1;
            if (index < 0 || index >= videoInfo.length) return api.sendMessage("𝗦𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂", threadID, messageID);

            api.unsendMessage(handleReply.messageID);

            const { digg_count, comment_count, play_count, share_count, download_count, duration, region, title, nickname, unique_id } = videoInfo[index];
            axios.get(videoInfo[index].nowatermark, { responseType: "stream" }).then(res => {
                res.data.pipe(fs.createWriteStream(__dirname + "/cache/tiktok.mp4"));
                res.data.on("end", () => {
                    api.sendMessage({ body: `====== [ 𝐓𝐈𝐊𝐓𝐎𝐊 ] ======\n━━━━━━━━━━━━━━\n\n🌎 𝗤𝘂𝗼̂́𝗰 𝗴𝗶𝗮: ${region}\n💬 𝗧𝗶𝘁𝗹𝗲: ${title}\n📱 𝗧𝗲̂𝗻 𝗞𝗲̂𝗻𝗵: ${nickname}\n🎐 𝗜𝗗 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${unique_id}\n❤️ 𝗟𝘂̛𝗼̛̣t 𝘁𝗶𝗺: ${digg_count}\n💭 𝗧𝗼̂̉𝗻𝗴 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${comment_count}\n👀 𝗟𝘂̛𝗼̛̣t 𝘅𝗲𝗺: ${play_count}\n🔗 𝗟𝘂̛𝗼̛̣t 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${share_count}\n📥 𝗟𝘂̛𝗼̛̣t 𝘁𝗮̉𝗶: ${download_count}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${duration} giây`, attachment: fs.createReadStream(__dirname + "/cache/tiktok.mp4") }, threadID, () => fs.unlinkSync(__dirname + "/cache/tiktok.mp4"), messageID);
                });
            }).catch(err => console.log(err));
            break;
    }
};

module.exports.run = async ({ api, event, args }) => {
    args.shift();
    const search = args.join(" ");
    if (!search) return api.sendMessage("𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗻𝗵𝗮̣̂𝗽 𝘁𝘂̛̀ 𝗸𝗵𝗼́𝗮 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺", event.threadID);
    axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/tiktok/searchvideo?keywords=${encodeURI(search)}`).then(async res => {
        const { videos: result } = res.data.data;
        if (result.length == 0) return api.sendMessage("𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗻𝗮̀𝗼", event.threadID);

        const lengthResult = result.length > 9 ? 9 : result.length;
        let videoInfo = [];
        let msg = `🔎 𝗛𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 ${lengthResult} 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝘁𝘂̛̀ 𝗸𝗵𝗼́𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻:\n`;
        let nameATM = [], attachment = [];
        for (let i = 0; i < lengthResult; i++) {
            const { digg_count, comment_count, play_count, share_count, download_count, duration, region, title, play: nowatermark, origin_cover: cover } = result[i];
            const { nickname, unique_id } = result[i].author;
            let stream_ = await axios.get(encodeURI(cover), { responseType: 'arraybuffer' });
            const tempDir = __dirname + "/tikinfo" + Date.now() + ".png";
            fs.writeFileSync(tempDir, Buffer.from(stream_.data, 'utf8'));
            nameATM.push(tempDir);
            attachment.push(fs.createReadStream(tempDir));
            msg += `\n\n${i + 1}. [ ${nickname} ]\n${title}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${duration} giây`;
            videoInfo.push({ digg_count, comment_count, play_count, share_count, download_count, region, nickname, title, nowatermark, cover, unique_id, duration });
        }
        msg += '\n\n👉 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐜𝐮̉𝐚 𝐯𝐢𝐝𝐞𝐨 𝐜𝐚̂̀𝐧 𝐭𝐚̉𝐢';

        api.sendMessage({ body: msg, attachment }, event.threadID, (err, info) => {
            if (err) return console.log(err);
            nameATM.forEach(pa => fs.unlinkSync(pa));
            global.client.handleReply.push({
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID,
                videoInfo,
                type: "search"
            });
        });
    }).catch(err => console.log(err));
};
