const axios = require('axios');

module.exports.config = {
    name: "cao",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "L.V. Bằng Mod By Dũngkon", 
    description: "Cào data api ảnh, video, gif, mp3",
    commandCategory: "Tiện ích",
    usages: " +url +số lượt + type(url hoặc data) +",
    cooldowns: 5
};

module.exports.run = async function ({ event, message, args, api }) {
  const { threadID, messageID, body} = event,{ PREFIX } = global.config;
   let threadSetting = global.data.threadData.get(threadID) || {};
let prefix = threadSetting.PREFIX || PREFIX;
 const push = []
            push.push(Date.now())
    const urlApi = args[0];
    const number = parseInt(args[1]);
    const type = args[2];
    if (!urlApi || !number || !type) {
        return api.sendMessage(`Vui lòng nhập đúng định dạng: <url> <số lượt> <type(là cái trỏ tới url data cần lấy)>`, event.threadID)
    }

    api.sendMessage(`Đang bắt đầu cào api: ${urlApi}\nSố lượng: ${number}\nType: ${type}\nLoading....`, event.threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 10000));

    let isAvailable = false;
    let dataUrls = [];

    while (!isAvailable) {
      try {
        const response = await axios.get(urlApi);
        if (response.status === 200) {
          if (!response.data[type]) {
           // message.reply('Bị chặn request, vui lòng chờ 2p....');
            await new Promise(resolve => setTimeout(resolve, 120000));
            continue;
          } else {
            isAvailable = true;
          }
        } else {
          api.sendMessage(`Trạng thái: ${response.status}`);
          return;
        }
      } catch (error) {
        api.sendMessage(`Lỗi: ${error.message}. Đang thử lại sau 10 phút...`, event.threadID);
        await new Promise(resolve => setTimeout(resolve, 600000));
      }
    }

    for (let i = 0; i < number; i++) {
      try {
        const response = await axios.get(urlApi);
        if (!response.data[type]) {
          //message.reply('Bị chặn request, vui lòng chờ 2p....');
          await new Promise(resolve => setTimeout(resolve, 120000));
          continue;
        }
        if (response.status === 404) {
          api.sendMessage('Api die ( mã lỗi 404 )', event.threadID);
          return;
        }
        if (response.status === 200) {
          const dataUrl = response.data[type];
          if (dataUrl && !dataUrls.includes(dataUrl)) {
            dataUrls.push(dataUrl);
          }
        } else {
          api.sendMessage(`Trạng thái: ${response.status}`, event.threadID);
        }
      } catch (error) {
        api.sendMessage(`Lỗi khi lấy đường dẫn số ${i}: ${error.message}`, event.threadID);
      }
    }

    try {
      const result = await axios.post("https://api.mocky.io/api/mock", {
        "status": 200,
        "content": `${JSON.stringify(dataUrls, null, 2)}`,
        "content_type": "application/json",
        "charset": "UTF-8",
        "secret": "AkihikoBot",
        "expiration": "never"
      });

      api.sendMessage(`🖨 ===  𝗖𝗔̀𝗢 𝗗𝗔𝗧𝗔  === 🖨\n━━━━━━━━━━━━━━━━━━\n✅ 𝗧𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 𝗰𝗮̀𝗼 𝗱𝗮𝘁𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴\n📌 𝗧𝗼̂̉𝗻𝗴: ${dataUrls.length}/${number}\n📝 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉: ${result.data.link}\n⏱️ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘅𝘂̛̉ 𝗹𝘆́: ${Math.floor((Date.now()- push[0])/1000)} 𝗴𝗶𝗮̂𝘆 `, event.threadID);
    } catch (error) {
     api.sendMessage(`Lỗi: ${error.message}`, event.threadID);
      console.error(`Đã xảy ra lỗi: ${error}`);
    }
};