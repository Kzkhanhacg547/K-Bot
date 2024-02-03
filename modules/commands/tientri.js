module.exports.config = {
  name: "tientri",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "",
  description: "Là tiên tri đó.", 
  commandCategory: "Box",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const axios = require("axios");
  const moment = require("moment-timezone");
  const { threadID, messageID, body } = event;
  const { PREFIX } = global.config;

  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    const downloader = require('image-downloader');
    const fse = require('fs-extra');
    await downloader.image({ url, dest });
    setTimeout(() => fse.unlinkSync(dest), 60 * 1000);
    return fse.createReadStream(dest);
  }

  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);

  if (res.status == 200 && (body.toLowerCase() == "tientrii" || body.toLowerCase() == "tiên đoán" || body.toLowerCase() == "tientri" || body.toLowerCase() == "ttientri" || body.toLowerCase() == "tiên đoán" || body.toLowerCase() == "tiên tri")) {
    const nn = [
      "Kế toán","Ca sĩ","Thợ sửa ổ khóa","Bán ve chai","Đào mỏ","Bác sĩ","Bác sĩ thú ý","diễn viên","Nghệ sĩ","Công nhân","Làm đĩ","Bán vé số","Tiếp viên hàng không","Quản lí ngân hàng","Chủ cửa hàng thú cưng","Ăn hàng ở không","Vô gia cư","Thất nghiệp","Bán chè","Kinh doanh ma túy","Chế tạo máy tính","Hacker","Tricker","Ăn bám gia đình","Phụ hồ","Staker chuyên nghiệp","Công tác viên Facebook","Bán hàng sida","Bán hàng online","Thợ may","Làm móng/nail","Thợ điện","Thu tiền nước","Dọn vệ sing","Lao công","Bảo vệ ở Bách Hóa Xanh","Bảo vệ ở Điện máy xanh","Streamer","Cầu thủ bóng đá","Họa sĩ","Thạc sĩ","Tổng thống","Chủ tịch xã","Chủ tịch huyện","Chủ tịch tỉnh","Chủ tịch nước","Cận vệ của tổng thống","Osin","Nhân viên bán hàng","Giang hồ","Giang Hồ mõm","Tiktoker","Youtuber","Giao dịch","Quản trị khách sạn","Lắp đặt camera","Giao hàng online","Bán xe đạp","Bán xe máy","Bán xe máy","Bán xe oto","Bán nhà","Bán đất","Nông dân","làm ruộng","lồng tiến phim hoạt hình","lồng tiến phim sex","Đóng phim sex","Người hầu","Kế ngôi Thầy ông nội","Lau kính","Chà bồn cầu","Nhà tiên tri","Chế tạo máy móc","Xưởng gỗ","Hải tặc","Mhà phép thuật","Tài xế","Xe ôm","Bán bánh mì","Thợ câu cá"
    ];

    const tile = Math.floor(Math.random() * 101);
    const tm = Math.floor(Math.random() * 101);
    const sm = Math.floor(Math.random() * 101);
    const st = Math.floor(Math.random() * 101);
    const sl = Math.floor(Math.random() * 101);
    const giau = Math.floor(Math.random() * 101);
    const chet = Math.floor(Math.random() * 150);

    api.sendMessage({ body: `💈──── •🍄• ────💈\n🧠 𝐓𝐡𝐨̂𝐧𝐠 𝐌𝐢𝐧𝐡: 【${tm}%】\n🎀 𝐍𝐠𝐡𝐞̂̀ 𝐧𝐠𝐡𝐢𝐞̣̂𝐩: ${nn[Math.floor(Math.random() * nn.length)]}\n💪 𝐒𝐮̛́𝐜 𝐌𝐚̣𝐧𝐡: 【${sm}%】\n🧛‍♂️ 𝐒𝐢𝐧𝐡 𝐓𝐨̂̀𝐧: 【${st}%】\n🧟‍♀️ 𝐓𝐫𝐢̀𝐧𝐡 𝐗𝐚̣𝐨 𝐋𝐨̂̀𝐧: 【${sl}%】\n💸  𝐒𝐮̛̣ 𝐆𝐢𝐚̀𝐮 𝐂𝐨́:  【${giau}%】\n⏳ 𝐓𝐮𝐨̂̉𝐢 𝐓𝐡𝐨̣: 【${chet}】\n💈──── •🍄• ────💈`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`) }, event.threadID, (err, info) => {
      if (err) console.error(err);
      global.client.handleReaction.push({
        name: this.config.name, 
        messageID: info.messageID,
        author: event.senderID,
      });
    });
  }
};

module.exports.run = async ({ api, event, args, Threads, Users }) => {};

module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users, client }) => {
  const { threadID, messageID, userID, reaction } = event;

  if (userID != handleReaction.author || reaction != "👍") return;

  api.unsendMessage(handleReaction.messageID);

  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const axios = global.nodemodule['axios'];

  api.sendMessage(userID, threadID, messageID);
};