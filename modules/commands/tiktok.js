const axios = require("axios")
const fs = require("fs-extra")
const request = require("request");

module.exports.config = {
  name: "tiktok",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vodanh", //mod
  description: "Thông tin từ nền tảng TikTok",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5,
};

const roof = n => +n != +Math.floor(n) ? +Math.floor(n) + 1 : +n;
const localeStr = n => ((+n).toLocaleString()).replace(/,/g, '.');
const {
    get
} = require('axios'),
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
    if($.case == 'runListUserPost') {
        if(['list'].includes(event.args[0])){
            if(event.args[1] > roof($.data.length/6) || event.args[1]<1 || isNaN(event.args[1])) return api.sendMessage(`𝗧𝗿𝗮𝗻𝗴 ${event.args[1]} 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵!`, event.threadID, event.messageID); else return runListUserPost(api, event, $.data, 6,+event.args[1],$.type ,$.author);
        } else return api.sendMessage({body: $.type?infoVideoUserPost($.data[event.args[0]-1]):infoMusicUserPost($.data[event.args[0]-1].music_info),attachment: await downStreamURL($.data[event.args[0]-1][$.type?'play':'music'],__dirname+`/cache/${event.messageID}.${$.type?'mp4':'mp3'}`)}, event.threadID, () => unlinkSync(__dirname+`/cache/${event.messageID}.${$.type?'mp4':'mp3'}`), event.messageID);
    };
  const { threadID, messageID, body } = event;
  if (handleReply.author != event.senderID || !body) return;
  let args = body.split(' ');
  switch (handleReply.type) {
    case 'trending':
      const lower1 = args[0].toLowerCase();
      const lower2 = !args[1] ? '' : args[1].toLowerCase();
      if (lower1 == 'trang') {
        if (isFinite(lower2) && lower2 <= roof(handleReply.data.data.length / 6)) return runInfoTrending(handleReply.data, api, event, this.config.name, 6, +lower2)
        else return api.sendMessage(`𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 𝘁𝗿𝗮𝗻𝗴 ${lower2} 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵`, threadID, messageID);
      }
      if (isFinite(lower1) && !!lower2 && !['wm'].includes(lower2)) return api.sendMessage(`𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘁𝗲𝗿 𝘁𝗵𝗲 𝗰𝗼𝗿𝗿𝗲𝗰𝘁 𝗳𝗼𝗿𝗺𝗮𝘁`, threadID, messageID);
      const data = handleReply.data.data[(+lower1) - 1];
      const info = { url: data[(!lower2 ? '' : lower2) + 'play'], msg: infoVideo(data) };
      axios.get(info.url, { responseType: 'stream' }).then(response => api.sendMessage({ body: info.msg, attachment: response.data }, threadID, messageID)).catch(e => api.sendMessage(e, threadID, messageID));
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
          api.sendMessage({ body: `====== [ 𝐓𝐈𝐊𝐓𝐎𝐊 ] ======\n━━━━━━━━━━━━━━\n\n🌎 𝗤𝘂𝗼̂́𝗰 𝗴𝗶𝗮: ${region}\n💬 𝗧𝗶𝘁𝗹𝗲: ${title}\n📱 𝗧𝗲̂𝗻 𝗞𝗲̂𝗻𝗵: ${nickname}\n🎐 𝗜𝗗 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${unique_id}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${digg_count}\n💭 𝗧𝗼̂̉𝗻𝗴 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${comment_count}\n👀 𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${play_count}\n🔗 𝗟𝘂̛𝗼̛̣𝘁 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${share_count}\n📥 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗮̉𝗶: ${download_count}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${duration} giây`, attachment: fs.createReadStream(__dirname + "/cache/tiktok.mp4") }, threadID, () => fs.unlinkSync(__dirname + "/cache/tiktok.mp4"), messageID);
        });
      }).catch(err => console.log(err));
      break;
  }
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require("axios")
  const fs = require('fs-extra');
  const ttt = (await axios.get(`https://i.imgur.com/V4egNi8.mp4`, { responseType: "stream"})).data
  if (!args[0]) return api.sendMessage("[== 𝐇𝐔̛𝐎̛́𝐍𝐆 𝐃𝐀̂̃𝐍 𝐒𝐔̛̉ 𝐃𝐔̣𝐍𝐆 ==]\n━━━━━━━━━━━━━━\n\n/𝘁𝗶𝗸 𝗶𝗻𝗳𝗼 (𝗶𝗱): Xem thông tin người dùng 👀\n\n/𝘁𝗶𝗸 𝘃𝗶𝗱𝗲𝗼 (𝗹𝗶𝗻𝗸): Tải video 🎞\n\n/𝘁𝗶𝗸 𝗺𝘂𝘀𝗶𝗰 (𝗹𝗶𝗻𝗸): Tải âm thanh của video 🎼\n\n/𝘁𝗶𝗸 𝘀𝗲𝗮𝗿𝗰𝗵 (𝘁𝘂̛̀ 𝗸𝗵𝗼́𝗮): Tìm kiếm video thông qua từ khoá 🔎\n\n/𝘁𝗶𝗸 𝘁𝗿𝗲𝗻𝗱𝗶𝗻𝗴: Random những video trending 💎\n\n/𝘁𝗶𝗸 𝗽𝗼𝘀𝘁 (𝗜𝗗): Xem những bài đăng của người dùng 📍", event.threadID);
  if (args[0] == 'post') return runListUserPost(api, event, (await get(`https://caochungdat.me/docs/tiktok/post?unique_id=${args[1]}`)).data.data.videos, 6, 1, true, event.senderID);
  const { threadID, messageID } = event;
  const type = args[0];
  const keyword = args[1];
  switch (type.toLowerCase()) {
    case "-i":
    case "info":
      if (!args[1]) return api.sendMessage("𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗻𝗵𝗮̣̂𝗽 𝘁𝗲̂𝗻 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗰𝘂̉𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗮̂̀𝗻 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻", threadID);
      try {
        axios.get(encodeURI(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/tiktok/infov2?username=${keyword}`)).then(async (res) => {
          if (res.data.erro == 1) return api.sendMessage("𝗧𝗲̂𝗻 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗼̂̀𝗻 𝘁𝗮̣𝗶", threadID);
          const { id, nickname, avatarLarger, followerCount, followingCount, videoCount, heartCount, signature, relation, bioLink, verified, privateAccount, isUnderAge18 } = res.data;
          await axios.get(encodeURI(avatarLarger), { responseType: 'arraybuffer' }).then((ress) => {
            const buffer = Buffer.from(ress.data, 'utf8');
            const tempDir = __dirname + "/cache/tikinfo" + id + ".png";
            fs.writeFileSync(tempDir, buffer);
            let msg = `
                        ====[ 𝐈𝐍𝐅𝐎 𝐓𝐈𝐊𝐓𝐎𝐊 ]====\n━━━━━━━━━━━━━━\n
                    📱 𝗧𝗲̂𝗻 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻: ${args[1]}
                    🎫 𝗜𝗗: ${id}
                    👤 𝗧𝗲̂𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${nickname}
                    🔗 𝗨𝗥𝗟: https://www.tiktok.com/@${args[1]}
                    📌 𝗟𝗶𝗲̂𝗻 𝗸𝗲̂́𝘁: ${bioLink ? bioLink.link : "Không có"}
                    💬 𝗠𝗼̂ 𝘁𝗮̉: ${signature}
                    ✅ 𝗧𝗶́𝗰𝗵 𝘅𝗮𝗻𝗵: ${verified ? "Có" : "Không"}
                    🔰 𝗧𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗿𝗶𝗲̂𝗻𝗴 𝘁𝘂̛: ${privateAccount ? "Bật" : "Tắt"}
                    🔞 𝗗𝘂̛𝗼̛́𝗶 𝟭𝟴 𝘁𝘂𝗼̂̉𝗶: ${isUnderAge18 ? "Có" : "Không"}
                    💕 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: ${relation}
                    👁️‍🗨️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗵𝗲𝗼 𝗱𝗼̃𝗶: ${followerCount}
                    👥 𝗛𝗶𝗲̣̂𝗻 𝘁𝗵𝗲𝗼 𝗱𝗼̃𝗶: ${followingCount}
                    🎞 𝗧𝗼̂̉𝗻𝗴 𝘃𝗶𝗱𝗲𝗼: ${videoCount}
                    ❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${heartCount}
                        `.replace(/^ +/gm, '')
            return api.sendMessage({
              body: msg,
              attachment: fs.createReadStream(tempDir),
            }, threadID, () => fs.unlinkSync(tempDir));
          })
        })
      } catch (error) { console.log(error) }
      break
    case 'search':
      args.shift();
      const search = args.join(" ");
      if (!search) return api.sendMessage("𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗻𝗵𝗮̣̂𝗽 𝘁𝘂̛̀ 𝗸𝗵𝗼́𝗮 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺", threadID);
      axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/tiktok/searchvideo?keywords=${encodeURI(search)}`).then(async res => {
        const { videos: result } = res.data.data;
        if (result.length == 0) return api.sendMessage("𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗻𝗮̀𝗼", threadID);

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

        api.sendMessage({body: msg, attachment}, threadID, (err, info) => {
          if (err) return console.log(err);
          nameATM.forEach(pa => fs.unlinkSync(pa));
          global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            videoInfo,
            type: "search"
          })
        })
      }).catch(err => console.log(err));
      break
    case "-v":
    case "video":
      try {   
        const res = await axios.get(`https://Api-Quangbao.quangbao04.repl.co/tiktok/video?url=${keyword}`);
        const { play, author, digg_count, comment_count, play_count, share_count, download_count, title, duration, region } = res.data.data;
        var callback = () => api.sendMessage({ body: `====[ 𝐕𝐈𝐃𝐄𝐎 𝐓𝐈𝐊𝐓𝐎𝐊 ]====\n━━━━━━━━━━━━━━\n\n🌎 𝗤𝘂𝗼̂́𝗰 𝗴𝗶𝗮: ${region}\n💬 𝗧𝗶𝘁𝗹𝗲: ${title}\n📱 𝗧𝗲̂𝗻 𝗞𝗲̂𝗻𝗵: ${author.nickname}\n🎐 𝗜𝗗 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${author.unique_id}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${digg_count}\n💭 𝗧𝗼̂̉𝗻𝗴 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${comment_count}\n👀 𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${play_count}\n🔗 𝗟𝘂̛𝗼̛̣𝘁 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${share_count}\n📥 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗮̉𝗶: ${download_count}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${duration} giây`, attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp4") }, threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp4"), messageID);
        request(encodeURI(`${play}`)).pipe(fs.createWriteStream(__dirname + '/cache/tkvd.mp4')).on('close', () => callback());
      }
      catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi...", event.threadID);
      }
      break;

    case "-m":
    case "music":
      try {
        const res = await axios.get(`https://Api-Quangbao.quangbao04.repl.co/tiktok/video?url=${keyword}`);
        const { music, music_info } = res.data.data;
        var callback = () => api.sendMessage({ body: `====[ 𝐌𝐔𝐒𝐈𝐂 𝐓𝐈𝐊𝐓𝐎𝐊 ]====\n━━━━━━━━━━━━━━\n\n💬 𝗧𝗶𝘁𝗹𝗲 𝗮𝘂𝗱𝗶𝗼: ${music_info.title}\n🗂 𝗔𝗹𝗯𝘂𝗺: ${music_info.album}\n✒ 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${music_info.author}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${music_info.duration} giây`, attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp3") }, threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp3"), messageID);
        request(encodeURI(`${music}`)).pipe(fs.createWriteStream(__dirname + '/cache/tkvd.mp3')).on('close', () => callback());
      }
      catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi...", event.threadID);
      }
      break;
    case "-tr":
    case "trending":
      axios.get(`https://caochungdat.me/docs/tiktok/trending`).then(response_api => {
        runInfoTrending(response_api.data, api, event, this.config.name, 6, args[1] && isNaN(args[1]) ? args[1] : 1)
      }).catch(e => api.sendMessage(e, event.threadID, event.messageID));
    default:
      break
  }
}
module.exports.handleReaction = function({
    handleReaction: $, api, event
}){
    if($.case == 'runListUserPost') return runListUserPost(api, event, $.data, 6,1,$.type?false:true,$.author);
};
async function runInfoTrending(res, api, event, name, length, limit) {
  let dirTD = `${__dirname}/cache/tiktok_trending_${event.senderID}`;
  if (!fs.existsSync(dirTD)) fs.mkdirSync(dirTD, { recursive: true });
  const attachment = [];
  var txt = `==[ 𝐓𝐑𝐄𝐍𝐃𝐈𝐍𝐆 𝐓𝐈𝐊𝐓𝐎𝐊 ]==\n━━━━━━━━━━━━━━\n\n`

  for (var i = (length * limit) - length; i < length * limit; i++) {
    if (!res.data || !res.data[i]) break;
    const { title, origin_cover, duration, video_id } = res.data[i];
    // const arrSp = origin_cover.split('/');
    const dest = `${dirTD}/${video_id}.jpg`
    txt += `${i + 1}. ${title.split(' ').filter(i => !i.startsWith('#')).join(' ')}\n#️⃣ 𝗛𝗮𝘀𝗵𝘁𝗮𝗴: ${title.split(' ').filter(i => i.startsWith('#')).join(', ')}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${duration} giây\n\n`;
    await DownloadImage(origin_cover, dest);
    attachment.push(fs.createReadStream(dest));
  };
  txt += `\n📜 𝗦𝗼̂́ 𝘁𝗿𝗮𝗻𝗴 [ ${limit}/${roof(res.data.length / length)} ]\n👉 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗸𝗵𝗼̂𝗻𝗴 𝗹𝗼𝗴𝗼 𝗵𝗼𝗮̣̆𝗰 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ + 𝘄𝗺 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗰𝗼́ 𝗹𝗼𝗴𝗼\n👉 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 < 𝘁𝗿𝗮𝗻𝗴 + 𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴 > 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗿𝗮𝗻𝗴`;

  api.sendMessage({ body: txt, attachment }, event.threadID, (err, info) => {
    if (err) return console.log(err);
    const obj = {
      name: name,
      messageID: info.messageID,
      author: event.senderID,
      data: res,
      type: 'trending'
    }
    global.client.handleReply.push(obj);
    fs.rmdirSync(dirTD, { recursive: true });
  });
};

function DownloadImage(url, path) {
  return new Promise((resolve, reject) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', () => resolve())
      .on('error', reject);
  });
}

function infoVideo(data) {
  return `=====[ 𝐈𝐍𝐅𝐎 𝐕𝐈𝐃𝐄𝐎 ]=====\n━━━━━━━━━━━━━━\n\n🌎 𝗤𝘂𝗼̂́𝗰 𝗴𝗶𝗮: ${data.region}\n💬 𝗧𝗶𝘁𝗹𝗲: ${data.title.split(' ').filter(i => !i.startsWith('#')).join(' ')}\n#️⃣ 𝗛𝗮𝘀𝗵𝘁𝗮𝗴: ${data.title.split(' ').filter(i => i.startsWith('#')).join(', ')}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${localeStr(data.digg_count)}\n💭 𝗧𝗼̂̉𝗻𝗴 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${localeStr(data.comment_count)}\n🔗 𝗟𝘂̛𝗼̛̣𝘁 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${localeStr(data.share_count)}\n📥 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗮̉𝗶: ${localeStr(data.download_count)}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${data.duration} giây\n🎐 𝗜𝗗 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${data.author.unique_id}\n😽 𝗧𝗲̂𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${data.author.nickname}`;
};
function infoAudio(data) {
  return `=====[ 𝐈𝐍𝐅𝐎 𝐀𝐔𝐃𝐈𝐎 ]=====\n━━━━━━━━━━━━━━\n\n💬 𝗧𝗶𝘁𝗹𝗲 𝗔𝘂𝗱𝗶𝗼: ${data.music_info.title}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${data.music_info.duration} giây\n😽 𝗧𝗲̂𝗻 𝘁𝗮́𝗰 𝗴𝗶𝗮̉: ${data.music_info.author}\n️🎼 𝗔̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝗴𝗼̂́𝗰: ${data.music_info.original == true ? 'Có' : 'Không'}`;
};




/* /// */
async function downStreamURL(a, b) {
    await image({
        url: a, dest: b
    });
    return createReadStream(b);
};
function infoMusicUserPost(a){
    return `=====[ 𝐈𝐍𝐅𝐎 𝐀𝐔𝐃𝐈𝐎 ]=====\n━━━━━━━━━━━━━━\n\n🎐 𝗜𝗗: ${a.id}\n💬 𝗧𝗶𝘁𝗹𝗲: ${a.title}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${a.duration}s\n🔊 𝗔̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝗴𝗼̂́𝗰: ${a.original}\n😽 𝗧𝗲̂𝗻 𝘁𝗮́𝗰 𝗴𝗶𝗮̉: ${a.author}\n🗂 𝗔𝗹𝗯𝘂𝗺: ${a.album}`;
};
 function infoVideoUserPost(a){
     return `=====[ 𝐈𝐍𝐅𝐎 𝐕𝐈𝐃𝐄𝐎 ]=====\n━━━━━━━━━━━━━━\n\n🎐 𝗜𝗗: ${a.video_id}\n💬 𝗧𝗶𝘁𝗹𝗲: ${a.title}\n❤️ 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗶𝗺: ${a.digg_count}\n💭 𝗟𝘂̛𝗼̛̣𝘁 𝗯𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${a.comment_count}\n🔗 𝗟𝘂̛𝗼̛̣𝘁 𝗰𝗵𝗶𝗮 𝘀𝗲̉: ${a.share_count}\n📥 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗮̉𝗶: ${a.download_count}\n⏱ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${a.duration}s\n📱 𝗧𝗲̂𝗻: ${a.author.nickname}\n💌 𝗜𝗗: ${a.author.unique_id}`;
 };
 async function runListUserPost(a, b, c, d, e,g,h) {
     const dir = __dirname + '/cache/downStreamURL_'+b.messageID;
    mkdirSync(dir);
    var txt = '',
    atm = [],
    i = (d*e)-d,
    l = c.length;
    for (;i<d*e;i++){
        const j = g?c[i]:c[i].music_info;
        if(!j)break;
        txt += `${i+1}. ${j.title} (${j.duration}s)\n`;
        atm.push(await downStreamURL(g?j.origin_cover:j.cover, `${dir}/${g?j.video_id:j.id}.jpg`));
        };
        txt+=`\n📜 𝗦𝗼̂́ 𝘁𝗿𝗮𝗻𝗴 [ ${e}/${roof(c.length/d)} ]\n\n👉 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 + < 𝗦𝗧𝗧 > 𝘃𝗮̀ 𝘁𝗮̉𝗶 ${g?'video':'music'}\n👉 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 + < 𝗹𝗶𝘀𝘁 > + < 𝗦𝗧𝗧 > 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗿𝗮𝗻𝗴\n👉 𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝗾𝘂𝗮 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 ${g?'music':'video'}`;
        a.sendMessage({body: txt, attachment: atm}, b.threadID, (err, data)=> {
            const opt = {
                name: 'tiktok', messageID: data.messageID, author: h, type: g, 'case': 'runListUserPost', data: c
            };
            global.client.handleReaction.push(opt), global.client.handleReply.push(opt);
        rmdirSync(dir, {
            recursive: true
        })
        });
        };