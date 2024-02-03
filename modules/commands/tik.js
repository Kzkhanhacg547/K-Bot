module.exports.config = {
  name: "tik",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh", //mod by Kz Khánhh
  description: "Thông tin từ nền tảng TikTok",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5,
};

const axios = require("axios")
const fs = require("fs-extra")
const request = require("request");

module.exports.run = async ({ api, event, args }) => {
  const keyword = args[0].replace(/\s/g, "")
  if (!keyword) return api.sendMessage("Bạn chưa nhập tên tài khoản Tiktok.", event.threadID, event.messageID);

  try {
    const res = await axios.get(`https://sumiproject.space/tiktok?info=${keyword}`);
    const { user, stats } = res.data.data;
    const msg = `👤 Tên tài khoản: ${user.nickname}\n🆔 ID tài khoản: ${user.id}\n👥 Số người đang theo dõi: ${stats.followingCount}\n❤️ Số người theo dõi: ${stats.followerCount}\n🎬 Số video đã đăng: ${stats.videoCount}\n💕 Số lượt thích: ${stats.heartCount}`;
    api.sendMessage(msg, event.threadID, event.messageID);
  } catch (e) {
    console.log(e);
    api.sendMessage("Không tìm thấy thông tin tài khoản. Vui lòng kiểm tra lại tên tài khoản và thử lại sau.", event.threadID, event.messageID);
  }
}