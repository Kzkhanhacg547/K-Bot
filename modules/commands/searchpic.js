const axios = require("axios");
const regExMatchPinterest = /(https:\/\/(www.)?(pinterest.com|pin.it)[^ \n]*)/g;

module.exports.config = {
  name: "searchpic",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Tải video hoặc tìm kiếm ảnh trên pinterest",
  commandCategory: "Công cụ",
  usages: "down {url}\n-pinterest search {keyword}",
  cooldowns: 0
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "pinterest.jpg")) request("https://i.imgur.com/KJ8ozPz.jpg").pipe(fs.createWriteStream(dirMaterial + "pinterest.jpg"));
}

async function getUrlDownloadImage(url) {
  try {
    const res = await axios.get(url);
    const responseData = res.data;

    if (responseData.status === 200) {
      const imageUrlArray = responseData.data.url_image;

      if (imageUrlArray && imageUrlArray.length > 0) {
        return imageUrlArray;
      } else {
        throw new Error("Không tìm thấy ảnh trong dữ liệu API");
      }
    } else {
      throw new Error(`Lỗi từ API: ${responseData.message}`);
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu ảnh từ API:", error);
    throw error;
  }
}

module.exports.run = async function ({ api, event, args }) {
  const p = global.config.PREFIX;
  const fs = require("fs");
  const short = require("tinyurl").shorten;
  const t = module.exports.config.name;
  const targetBody = event.messageReply ? event.messageReply.body : event.body;

  if (args[0] == "down") {
    var data = require("qs").stringify({
      'url': args[1]
    });

    const o = {
      method: 'POST',
      url: 'https://www.expertsphp.com/twitter-video-downloader.php',
      headers: {
        'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33'
      },
      data
    };

    const res = await axios(o);
    const newData = res.data;
    const link = newData.split('<td><a href="')[1].split('"')[0];
    const t = (await axios.get(link, {
      responseType: "stream"
    })).data;

    return api.sendMessage({
      body: "Url: " + await short(link),
      attachment: t
    }, event.threadID);
  }
  else if (args[0] == "search") {
    try {
      const keyword = event.messageReply ? event.messageReply.body : args.slice(1).join(" ");
      const limit = !isNaN(args[args.length - 1]) ? parseInt(args[args.length - 1]) : null;

      if (!keyword) {
        return api.sendMessage('Vui lòng nhập từ khóa tìm kiếm', event.threadID, event.messageID);
      }

      // Replace the following URL with the actual API endpoint
      const url = `https://thenamk3.net/api/googleimage.json?query=${encodeURIComponent(keyword)}&apikey=NemG_epBFvlaZ`;
      const { data } = await axios.get(url);

      const imageUrlArray = await getUrlDownloadImage(url);

      if (imageUrlArray.length === 0) {
        return api.sendMessage(`Không tìm thấy ảnh nào với từ khóa: ${keyword}`, event.threadID, event.messageID);
      }

      const limitedResults = limit ? imageUrlArray.slice(0, limit) : imageUrlArray;

      const attachments = await Promise.all(
        limitedResults.map(imageUrl =>
          axios.get(imageUrl, { responseType: "stream" })
            .then(({ data: imageStream }) => ({ imageUrl, imageStream }))
        )
      );

      return api.sendMessage({
        body: `🌸=== [ 𝐆𝐎𝐎𝐆𝐋𝐄 ] ===🌸\n━━━━━━━━━━━━━\n\n${limitedResults.length} kết quả tìm kiếm ảnh với từ khóa: ${keyword} 🌸\n` + (limit && limit < imageUrlArray.length ? `Đã xảy ra lỗi khi tải ${imageUrlArray.length - limit} ảnh` : ""),
        attachment: attachments
      }, event.threadID, event.messageID);
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error);
      return api.sendMessage("Đã có lỗi xảy ra", event.threadID, event.messageID);
    }
  }
  else {
    return api.sendMessage({ body: `🌸==『 𝐆𝐎𝐎𝐆𝐋𝐄 』==🌸\n\n→ 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝘂̛̃𝗻𝗴 𝗰𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝘀𝗮𝘂:\n🔎 ${p}𝐬𝐞𝐚𝐫𝐜𝐡𝐩𝐢𝐜 𝘀𝗲𝗮𝗿𝗰𝗵: 𝗧𝘂̛̀ 𝗸𝗵𝗼𝗮́ 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 - 𝘀𝗼̂́ `, attachment: fs.createReadStream(__dirname + `/noprefix/pinterest.jpg`) }, event.threadID, event.messageID);
  }
};
