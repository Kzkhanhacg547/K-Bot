module.exports.config = {
    name: 'autoxsmb',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Kiểm tra xổ số miền Bắc',
    commandCategory: 'Tiện ích',
    usages: '[... | ngày/tháng/năm]',
    cooldowns: 3
};
const {
    get
} = require('axios');
module.exports.onLoad = o => {
    if (!!global.xsmb_setinterval) clearInterval(global.xsmb_setinterval);
   global.xsmb_setinterval = setInterval(async() => {
    if ('5:30:00 PM' == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim()) {
        const {
            data
        } = (await get(`https://api-v2.jrtxtracy.repl.co/v2/tien-ich/check-xsmb.json`)).data;
        global.data.allThreadID.forEach(i => o.api.sendMessage(data[0].message, i));
    };
  }, 1000);
};
module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
  const moment = require('moment-timezone');
  const currentHour = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  const currentMinute = moment.tz("Asia/Ho_Chi_Minh").format("mm");

  let dayGetResult;
  if (currentHour > 18 || (currentHour == 18 && currentMinute >= 15))
    dayGetResult = moment.tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY");
  else
    dayGetResult = moment.tz("Asia/Ho_Chi_Minh").subtract(1, 'days').format("DD-MM-YYYY");
  if (args[0] && moment.tz(args[0], "DD-MM-YYYY", true, "Asia/Ho_Chi_Minh").isValid())
    dayGetResult = moment.tz(args[0], "DD-MM-YYYY", true, "Asia/Ho_Chi_Minh").format("DD-MM-YYYY");

  const response = await axios.get("https://apis-jrt.jrtxtracy.repl.co/xsmb?date=" + dayGetResult);
  const data = response.data;

  api.sendMessage(`=== [ 𝐊𝐞̂́𝐭 𝐪𝐮𝐚̉ 𝐱𝐨̂̉ 𝐬𝐨̂́ 𝐦𝐢𝐞̂̀𝐧 𝐁𝐚̆́𝐜 ] ===\n`
    + `\n[📅] ➜ 𝐍𝐠𝐚̀𝐲 ${data.date}`              
    + `\n\n➜ 𝐌𝐚̃ 𝐠𝐢𝐚̉𝐢 đ𝐚̣̆𝐜 𝐛𝐢𝐞̣̂𝐭: ${data.maDB.join('  -  ')}`
    + `\n➜ 𝐆𝐢𝐚̉𝐢 đ𝐚̣̆𝐜 𝐛𝐢𝐞̣̂𝐭: ${data.giaiDB[0]}`
    + `\n➜ 𝐆𝐢𝐚̉𝐢 𝐧𝐡𝐚̂́𝐭: ${data.giaiNhat[0]}`
    + `\n➜ 𝐆𝐢𝐚̉𝐢 𝐧𝐡𝐢̀: ${data.giaiNhi.join(" - ")}`
    + `\n➜ 𝐆𝐢𝐚̉𝐢 𝐛𝐚: ${data.giaiBa.join(" - ")}`
    + `\n➜ 𝐆𝐢𝐚̉𝐢 𝐭𝐮̛: ${data.giaiTu.join(" - ")}`
    + `\n➜ 𝐆𝐢𝐚̉𝐢 𝐧𝐚̆𝐦: ${data.giaiNam.join(" - ")}`
    + `\n➜ 𝐆𝐢𝐚̉𝐢 𝐬𝐚́𝐮: ${data.giaiSau.join(" - ")}`
    + `\n➜ 𝐆𝐢𝐚̉𝐢 𝐛𝐚̉𝐲: ${data.giaiBay.join(" - ")}`, event.threadID, event.messageID);
};