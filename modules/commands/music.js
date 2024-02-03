const fs = require('fs-extra');
const ytdl = require('ytdl-core');
const Youtube = require('youtube-search-api');
const convertHMS = (value) => new Date(value * 1000).toISOString().slice(11, 19);

const downloadMusicFromYoutube = async (link, path, itag = 249) => {
  try {
    var timestart = Date.now();
    var data = await ytdl.getInfo(link)
    var result = {
      id: data.videoDetails.videoId,
      title: data.videoDetails.title,
      dur: Number(data.videoDetails.lengthSeconds),
      viewCount: data.videoDetails.viewCount,
      likes: data.videoDetails.likes,
      author: data.videoDetails.author.name,
      timestart: timestart,
      publishDate: data.videoDetails.publishDate
    }
    return new Promise((resolve, reject) => {
      ytdl(link, {
        filter: format => format.itag == itag
      }).pipe(fs.createWriteStream(path)).on('finish', () => {
        resolve({
          data: path,
          info: result
        })
      })
    })
  } catch (e) {
    return console.log(e)
  }
}

const handleReply = async ({ api, event, handleReply }) => {
  try {
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const path = `${__dirname}/cache/sing-${event.senderID}.mp3`;
    const { data, info } = await downloadMusicFromYoutube("https://www.youtube.com/watch?v=" + handleReply.link[event.body - 1], path, 18);

    if (fs.statSync(data).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
    api.unsendMessage(handleReply.messageID);
    const message = {
      body: `======「 𝗠𝗨𝗦𝗜𝗖 」======\n\n→ 𝐓𝐢𝐞̂𝐮 đ𝐞̂̀: ${info.title}\n→ 𝐓𝐞̂𝐧 𝐤𝐞̂𝐧𝐡: ${info.author}\n→ 𝐍𝐠𝐚̀𝐲 𝐭𝐚̉𝐢 𝐥𝐞̂𝐧: ${info.publishDate}\n→ 𝐓𝐡𝐨̛̀𝐢 𝐥𝐮̛𝐨̛̣𝐧𝐠: ${convertHMS(info.dur)}\n→ 𝐋𝐮̛𝐨̛̣𝐭 𝐱𝐞𝐦: ${info.viewCount}\n→ 𝐋𝐮̛𝐨̛̣𝐭 𝐭𝐡𝐢́𝐜𝐡: ${info.likes}\n→ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐱𝐮̛̉ 𝐥𝐢́: ${Math.floor((Date.now() - info.timestart) / 1000)} 𝐠𝐢𝐚̂𝐲\n→ 𝐋𝐢𝐧𝐤 𝐭𝐚̉𝐢: https://www.y2meta.com/vi/youtube/${handleReply.link[event.body - 1]}\n\n======= ${time} =======`,
      attachment: fs.createReadStream(data),
    };
    return api.sendMessage(message, event.threadID, async () => {
      fs.unlinkSync(path)
      //iphone
      // const { data, info } = await downloadMusicFromYoutube("https://www.youtube.com/watch?v=" + handleReply.link[event.body - 1], path, 18);
      // if(fs.statSync(data).size > 26214400) return
      // const message = {
      //     body: `🎵 Title: ${info.title}\n⏱️ Thời gian: ${convertHMS(info.dur)}\n⏱️Thời gian xử lý: ${Math.floor((Date.now() - info.timestart) / 1000)} giây\n💿====DISME PROJECT====💿`,
      //     attachment: fs.createReadStream(data),
      // };
      // return api.sendMessage(message, event.threadID, async() => fs.unlinkSync(path), event.messageID);
    }, event.messageID);
  } catch (error) {
    console.log(error);
  }
};

const run = async function({ api, event, args }) {
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  if (!args?.length) return api.sendMessage('Phần tìm kiếm không được để trống!', event.threadID, event.messageID);

  const keywordSearch = args.join(" ");
  const path = `${__dirname}/cache/sing-${event.senderID}.mp3`;

  if (args[0]?.startsWith("https://")) {
    try {
      const { data, info } = await downloadMusicFromYoutube(args[0], path);
      const body = `======「 𝗠𝗨𝗦𝗜𝗖 」======\n\n→ 𝐓𝐢𝐞̂𝐮 đ𝐞̂̀: ${info.title}\n→ 𝐓𝐞̂𝐧 𝐤𝐞̂𝐧𝐡: ${info.author}\n→ 𝐍𝐠𝐚̀𝐲 𝐭𝐚̉𝐢 𝐥𝐞̂𝐧: ${info.publishDate}\n→ 𝐓𝐡𝐨̛̀𝐢 𝐥𝐮̛𝐨̛̣𝐧𝐠: ${convertHMS(info.dur)}\n→ 𝐋𝐮̛𝐨̛̣𝐭 𝐱𝐞𝐦: ${info.viewCount}\n→ 𝐋𝐮̛𝐨̛̣𝐭 𝐭𝐡𝐢́𝐜𝐡: ${info.likes}\n→ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐱𝐮̛̉ 𝐥𝐢́: ${Math.floor((Date.now() - info.timestart) / 1000)} 𝐠𝐢𝐚̂𝐲\n→ 𝐋𝐢𝐧𝐤 𝐭𝐚̉𝐢: https://www.y2meta.com/vi/youtube/${handleReply.link[event.body - 1]}\n\n======= ${time} =======`;

      if (fs.statSync(data).size > 26214400) { return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(data), event.messageID); }

      return api.sendMessage({ body, attachment: fs.createReadStream(data) }, event.threadID, () => fs.unlinkSync(data), event.messageID);
    } catch (e) {
      return console.log(e);
    }
  } else {
    try {
      const data = (await Youtube.GetListByKeyword(keywordSearch, false, 7))?.items ?? [];
      console.log(data)
      const link = data.map(value => value?.id);
      const body = `𝐂𝐨́ ${link.length} 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐭𝐫𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐭𝐮̛̀ 𝐤𝐡𝐨𝐚́ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧:\n\n${data.map((value, index) => `${index + 1} - ${value?.title}\n👑 𝐓𝐞̂𝐧 𝐤𝐞̂𝐧𝐡: ${value?.channelTitle}\n⏰ 𝐓𝐡𝐨̛̀𝐢 𝐥𝐮̛𝐨̛̣𝐧𝐠: ${value?.length?.simpleText}\n📎 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: https://youtu.be/${value?.id}\n\n`).join('')}→ 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐜𝐡𝐨̣𝐧 𝐦𝐨̣̂𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐮̛̃𝐧𝐠 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐭𝐫𝐞̂𝐧`;

      return api.sendMessage(body, event.threadID, (error, info) => global.client.handleReply.push({
        type: 'reply',
        name: config.name,
        messageID: info.messageID,
        author: event.senderID,
        link
      }), event.messageID);
    } catch (e) {
      return api.sendMessage(`Đ𝐚̃ 𝐱𝐚̉𝐲 𝐫𝐚 𝐥𝐨̂̃𝐢, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛̉ 𝐥𝐚̣𝐢 𝐭𝐫𝐨𝐧𝐠 𝐠𝐢𝐚̂𝐲 𝐥𝐚́𝐭!!\n${e}`, event.threadID, event.messageID);
    }
  }
};

const config = {
  name: "music",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",// Mod by Q.Huy, Kz Khánhh
  description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
  commandCategory: "Tiện ích",
  usages: "[searchMusic]",
  cooldowns: 0
};

module.exports = { config, run, handleReply };