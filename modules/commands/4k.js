module.exports.config = {
  name: "4k",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NLam182",
  description: "",
  commandCategory: "Nhóm",
  usages: "[reply]",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args }) {
  const fs = global.nodemodule["fs-extra"];
  const axios = require('axios').default;
  const isLink = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(args[0]);
  var linkUp = event.messageReply.attachments[0].url || (isLink ? args[0] : '');

  if (!linkUp) return api.sendMessage('Vui lòng reply 1 ảnh hoặc nhập link ảnh!', event.threadID, event.messageID);

  try {
    let response;
    if (isLink) {
      response = await axios.get(linkUp, { responseType: "arraybuffer" });
      api.sendMessage("Đang load, chờ tí nhé....!", event.threadID);
    } else {
      const res = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/imgurupload?link=${encodeURIComponent(linkUp)}`);
      const link = res.data.uploaded.image;
      response = await axios.get(`${link}`, { responseType: "arraybuffer" });
      api.sendMessage("Đang load, chờ tí nhé....!", event.threadID);
    }

    if (!response || !response.data) {
      return api.sendMessage('Không thể lấy được dữ liệu hình ảnh!', event.threadID, event.messageID);
    }

    fs.writeFileSync(__dirname + `/cache/netanh.png`, Buffer.from(response.data, "binary"));
    console.log('API Response:', response.data);

    return api.sendMessage({
      body: `Ảnh của bạn đây`,
      attachment: fs.createReadStream(__dirname + `/cache/netanh.png`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/netanh.png`), event.messageID);
  } catch (e) {
    console.error(e.toString());
    return api.sendMessage('Có lỗi xảy ra trong quá trình xử lý ảnh!', event.threadID, event.messageID);
  }
};
