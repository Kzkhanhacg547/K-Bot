const fs = require('fs-extra');
const axios = require('axios');
const moment = require('moment-timezone');

module.exports.config = {
  name: 'uidnopre',
  version: '1.0.1',
  hasPermssion: 2,
  credits: 'Kz Khánhh',
  description: '',
  commandCategory: 'Công cụ',
  usages: '',
  cooldowns: 0,
  dependencies: {
    'fs-extra': '',
    'request': ''
  }
};

function byteToMegabyte(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  const { threadID, messageID, body, senderID } = event;
  if (body != `uid`) return;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread.uid !== 'undefined' && thread.uid === false) return;

  const name = await Users.getNameUser(event.senderID);
  if (senderID === api.getCurrentUserID()) return;

  const namebot = global.config.BOTNAME;
  const timeNow = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY');
  const thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  const days = {
    'Monday': 'Thứ Hai',
    'Tuesday': 'Thứ Ba',
    'Wednesday': 'Thứ Tư',
    'Thursday': 'Thứ Năm',
    'Friday': 'Thứ Sáu',
    'Saturday': 'Thứ Bảy',
    'Sunday': 'Chủ Nhật'
  };
  const weekday = days[thu] ? days[thu] : thu;
  const res = await axios.get('https://5e827527-8776-4999-b9ae-84079106cc5c-00-3q69g2ypot0am.worf.replit.dev/thinh');
  const thinh = res.data.data;

  const downloadFileFromUrl = (url, path) =>
    axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    }).then(response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(path))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
      })
    );

  const filePath = __dirname + '/cache/userProfilePicture.png';
  const uid = senderID;
  const profilePictureUrl = `https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
  await downloadFileFromUrl(profilePictureUrl, filePath);

  const msg1 = {
    body: `🌐==== [𝗨𝗜𝗗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞] ====🌐
◑ ━━━━━━ ▣ ━━━━━━ ◐
「🍄」➜ Tên: ${name}
「📌」➜ ID Facebook: ${senderID}
「💓」→ Code by: ${global.config.ADMIN}
◑ ━━━━━━ ▣ ━━━━━━ ◐
「💖」: ${thinh}
「🗓️」𝐃𝐚𝐭𝐞: 
     → ${weekday} | ${timeNow}
✎﹏﹏﹏﹏${namebot}﹏﹏﹏﹏`,
    attachment: fs.createReadStream(filePath)
  };
  const msg2 = {
      body: `${senderID}`
    };

api.sendMessage(msg1, threadID, () => {
  fs.unlinkSync(filePath);
  api.sendMessage(msg2, threadID);
});
};

module.exports.languages = {
  'vi': {
    'on': 'Đã bật',
    'off': 'Đã tắt',
    'successText': 'Thiết lập uid thành công',
  },
  'en': {
    'on': 'Turned on',
    'off': 'Turned off',
    'successText': 'Set uid successful!',
  }
};

module.exports.run = async function({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  const data = (await Threads.getData(threadID)).data;

  if (typeof data.uid === 'undefined' || data.uid === true) data.uid = false;
  else data.uid = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);

  api.sendMessage(`${(data.uid === false) ? getText('off') : getText('on')} ${getText('successText')}`, threadID, messageID);
};