const { get } = require('axios');
const moment = require('moment-timezone');

const getRandomMessage = (gio, thinh) => `====「 𝐀𝐔𝐓𝐎 𝐂𝐀̂𝐔 𝐓𝐇𝐈́𝐍𝐇 」 ====\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n⏰𝗧𝗶𝗺𝗲: ${gio}\n————————————————————\n💞𝐂𝐚̂𝐮 𝐭𝐡𝐢́𝐧𝐡: ${thinh}\n————————————————————\n❤️𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐭𝐚́𝐧 𝐝𝐨̂̉ 𝐜𝐫𝐮𝐬𝐡 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱`;

const getImage = async () => {
  const response = await get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/images/girl', { responseType: 'stream' });
  return response.data;
};

const config = [
  { timer: '12:40:00 AM' },
  { timer: '11:40:00 AM' },
  { timer: '10:40:00 AM' },
  { timer: '9:40:00 AM' },
  { timer: '8:40:00 AM' },
  { timer: '7:40:00 AM' },
  { timer: '6:40:00 AM' },
  { timer: '5:40:00 AM' },
  { timer: '4:40:00 AM' },
];

module.exports.config = {
  name: 'autothinh',
  version: '2.0.4',
  hasPermssion: 2,
  credits: 'Kz Khánhh',
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'Hệ thống',
  usages: '[]',
  cooldowns: 3,
};

module.exports.onLoad = (o) => {
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);

  global.autosendmessage_setinterval = setInterval(async function () {
    const currentTime = moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss (D/MM/YYYY) (dddd)');

    for (const { timer } of config) {
      if (timer === currentTime) {
        const thinh = (await get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh')).data.data;
        const msg = getRandomMessage(currentTime, thinh);
        const image1 = await getImage();
        const image2 = await getImage();

        const messageObject = { body: msg, attachment: [image1, image2] };
        global.data.allThreadID.forEach((i) => o.api.sendMessage(messageObject, i));
        break;
      }
    }
  }, 1000);
};

module.exports.run = () => {};
