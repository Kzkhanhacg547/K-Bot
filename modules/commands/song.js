const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
const axios = require('axios')
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 48 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.config = {
    name: "song",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "Box",
    usages: "[searchMusic]",
    cooldowns: 0,
     envConfig: {
    "YOUTUBE_API": "AIzaSyAwzbcb-6QAzgZtl4qf3Z2GhQ3mqrbbMR8"
  }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
            body: `🎶=====「 𝐌𝐔𝐒𝐈𝐂 」=====️🎶\n\n[📌] → 𝗧𝗶𝘁𝗹𝗲: ${data.title}\n[📻] → 𝗖𝗵𝗮𝗻𝗻𝗲𝗹: ${data.author}\n[⏱️] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${this.convertHMS(data.dur)}\n[👁️‍🗨️] → 𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${data.viewCount} 𝘃𝗶𝗲𝘄\n[❤️] → 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗵𝗶́𝗰𝗵: ${data.likes} 𝗹𝗶𝗸𝗲\n[⏱️] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘅𝘂̛̉ 𝗹𝘆́: ${Math.floor((Date.now()- data.timestart)/1000)} 𝗴𝗶𝗮̂𝘆\n\n[ 𝐊𝐳 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]\n⇆ㅤㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤㅤ↻`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)

    }
    catch (e) { return console.log(e) }
}
module.exports.run = async function ({ api, event, args }) {
  const YouTubeAPI = global.nodemodule["simple-youtube-api"];
  const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
    if (args.length == 0 || !args) return api.sendMessage('» Phần tìm kiếm không được để trống!', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `🎶=====「 𝐌𝐔𝐒𝐈𝐂 」=====️🎶\n\n[📌] → 𝗧𝗶𝘁𝗹𝗲: ${data.title}\n[📻] → 𝗖𝗵𝗮𝗻𝗻𝗲𝗹: ${data.author}\n[⏱️] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${this.convertHMS(data.dur)}\n[👁️‍🗨️] → 𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${data.viewCount} 𝘃𝗶𝗲𝘄\n[❤️] → 𝗟𝘂̛𝗼̛̣𝘁 𝘁𝗵𝗶́𝗰𝗵: ${data.likes} 𝗹𝗶𝗸𝗲\n[⏱️] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘅𝘂̛̉ 𝗹𝘆́: ${Math.floor((Date.now()- data.timestart)/1000)} 𝗴𝗶𝗮̂𝘆\n\n[ 𝐊𝐳 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]\n⇆ㅤㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤㅤ↻`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)

        }
        catch (e) { return console.log(e) }
    } else {
          try {
           var link = [], msg = "", num = 1, l = [];
      let results = await youtube.searchVideos(keywordSearch, 10);
      for (const value of results) {
        if (typeof value.id !== 'undefined') {;
          link.push(value.id);
          msg += (`${num++}. ${value.title}\n`);
          const t = (await axios.get(`${value.thumbnails.high.url}`, {
        responseType: "stream"
      })).data;
    l.push(t)
        }
      }
            var body = `»🔎 𝐂𝐨́ ${link.length} 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐭𝐫𝐮̀𝐧𝐠 𝐯𝐨̛́𝐢 𝐭𝐮̛̀ 𝐤𝐡𝐨𝐚́ 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧:\n\n${msg}\n» 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐜𝐡𝐨̣𝐧 𝐦𝐨̣̂𝐭 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐮̛̃𝐧𝐠 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐭𝐫𝐞̂𝐧`
            return api.sendMessage({
              body: body,
              attachment: l
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('Đã xảy ra lỗi, vui lòng thử lại trong giây lát!!\n' + e, event.threadID, event.messageID);
        }
    }
      }