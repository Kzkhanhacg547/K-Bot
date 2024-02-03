let moment = require('moment-timezone');
let tkb = require('./tkb.json');

let is_time_in_ranges = (time = moment.tz("Asia/Ho_Chi_Minh").format('HH:mm:ss'), range, format = 'HH:mm:ss') => moment(time, format).isBetween(moment(range.start, format), moment(range.end, format));

module.exports.config = {
  name: "tiethoc",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "Quất",
  description: "Thời khóa biểu",
  commandCategory: "Admin",
  usages: "/tkb",
  usePrefix: false,
  cooldowns: 3,
};

module.exports.run = async function({api, event, args}) {
  const axios = require("axios");
  const link = (url) => axios.get(url, { responseType: "stream" }).then((r) => r.data);
  if (args[0] == 'chính') {
    return api.sendMessage({ body: 'Thời Khóa Biểu', attachment: await link('https://i.imgur.com/x1UgEUs.png') }, event.threadID);
  }
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var dddd = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  var thu;
  if (dddd == 'Sunday') thu = 'Chủ Nhật';
  if (dddd == 'Monday') thu = 'Thứ Hai';
  if (dddd == 'Tuesday') thu = 'Thứ Ba';
  if (dddd == 'Wednesday') thu = 'Thứ Tư';
  if (dddd == 'Thursday') thu = 'Thứ Năm';
  if (dddd == 'Friday') thu = 'Thứ Sáu';
  if (dddd == 'Saturday') thu = 'Thứ Bảy';
  const time = moment.tz("Asia/Ho_Chi_Minh").format('HH:mm:ss');
  for (const range of tkb) {
    if (range.day.includes(dddd) && is_time_in_ranges(gio, range)) {
      api.sendMessage({
        body: `
➩ Hiện tại là ${thu} lúc ${gio}
➩ Thời khóa biểu : ${range.text}
➩ Trong khoảng : ${thu}, ${range.start} đến ${range.end.replace('23:59:59','00:00:00')}`,
        attachment: await link(
          range.text == 'Vật Lý' ? 'https://i.imgur.com/niKxegp.jpg'
          : range.text == 'Toán' ? 'https://i.imgur.com/4l8lqqI.jpg'
          : range.text == 'Chào Cờ' ? 'https://i.imgur.com/UpgDqPO.jpg'
          : range.text == 'Ra Chơi' ? 'https://i.imgur.com/aoAC4oU.jpg'
          : range.text == 'Giải Lao' ? 'https://i.imgur.com/4t3Dgdb.jpg'
          : range.text == '15p đầu giờ' ? 'https://i.imgur.com/DYBcvCQ.jpg'
          : range.text == 'Ngữ Văn' ? 'https://i.imgur.com/fOAzlaN.jpg'
          : range.text == 'Sinh Hoạt' ? 'https://i.imgur.com/wH6v7Bz.jpg'
          : range.text == 'Hóa Học' ? 'https://i.imgur.com/MsXBuE0.jpg'
          : range.text == 'Công Nghệ' ? 'https://i.imgur.com/kniutfc.jpg'
          : range.text == 'Hướng Nghiệp' ? 'https://i.imgur.com/FPdxR0D.jpg'
          : range.text == 'Quốc Phòng' ? 'https://i.imgur.com/FYaoC6T.jpg'
          : range.text == 'Lịch Sử' ? 'https://i.imgur.com/6Hpavyw.jpg'
          : range.text == 'Tiếng Anh' ? 'https://i.imgur.com/fvhyo8v.jpg'
          : range.text == 'Công Dân' ? 'https://i.imgur.com/KFGNMfz.jpg'
          : range.text == 'Địa Lý' ? 'https://i.imgur.com/LEDFoB5.jpg'
          : range.text == 'Thể Dục' ? 'https://i.imgur.com/tJd6RjC.jpg'
          : range.text == 'Tin Học' ? 'https://i.imgur.com/5QR1aYj.jpg'
          : range.text == 'Sinh Học' ? 'https://i.imgur.com/8Pj5sfY.jpg'
          : 'https://i.imgur.com/KSfXQgm.jpg'
        )
      }, event.threadID);
      break; // Dừng lại sau khi tìm thấy kết quả đầu tiên
    }
  }
};