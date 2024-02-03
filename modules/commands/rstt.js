module.exports.config = {
  name: 'rstt',
  version: '1.0.0',
  hasPermssion: 3,
  credits: 'Kz Khánhh',
  description: 'Gửi tin nhắn tự động vào cuối tuần',
  commandCategory: 'Hệ thống',
  usages: '',
  cooldowns: 3
};
const weekendMessages = [
    {
    timer: '9:00:00 AM',
    saturdayMessage: [
      'Chào buổi sáng, đã đến cuối tuần rồi! Bot gửi lời chúc tốt đẹp nhất đến tất cả mọi người trong box. Chúc các bạn có một ngày cuối tuần tràn đầy niềm vui! Dù bận rộn suốt cả tuần, nhưng giờ đây là thời điểm để thư giãn và tận hưởng ngày nghỉ. Bot muốn chúc các bạn có một ngày nghỉ hạnh phúc, tràn đầy niềm vui bên gia đình và người thân<3. Hãy để Bot gửi đến tất cả mọi người lời chúc ấm áp nhất cho một ngày nghỉ trọn vẹn, đầy ắp niềm vui. Hãy xóa tan mọi lo lắng, để mỗi ngày mới bắt đầu tràn ngập năng lượng tích cực<3. Dành thời gian cho những điều bạn yêu thích nhất và giải toả stress để có một ngày mới đầy sức sống. Bot hy vọng bạn sẽ có một cuối tuần thật trọn vẹn!<3 🌞💐',
    ],

    sundayMessage: ['Chủ Nhật rồi, chuẩn bị tâm lý để bắt đầu tuần mới thôi nào! 🌟 Bot gửi lời chúc tốt đẹp nhất đến tất cả mọi người trong box. Chúc mọi người một Chủ Nhật tràn đầy năng lượng và tích cực! 💪']
  },
  {
    timer: '7:00:00 PM',
    saturdayMessage: [
      '🌟 Thời khắc để thả lỏng và giải tỏa căng thẳng đã đến! Hãy tận hưởng cuối tuần đầy sức sống vào tối thứ Bảy này.',
      '✨ Đêm thứ Bảy, là lúc chúng ta thưởng thức niềm vui riêng sau một tuần làm việc vất vả!'],


    sundayMessage: ['Vào lúc 00:01 ngày đầu tuần, Hệ thống bot Maris sẽ tự động reset data checktt của tất cả các nhóm, các bạn quản trị viên chú ý lọc thành viên nhé\n!check - để xem tất cả tương tác cuối tuần\n!check del= <số tin nhắn muốn lọc> - để bot tự lọc thành viên nhé']
  }
];


function getCurrentMessages() {
  const currentTimer = moment().format('HH:mm:ss');
  return weekendMessages.find(({ timer }) => timer === currentTimer);
}

function getMillisecondsUntilMonday002() {
  const now = moment();
  const daysUntilMonday = (7 - now.day()) % 7;
  const nextMonday002 = moment().add(daysUntilMonday, 'days').set({ hour: 0, minute: 2, second: 0, millisecond: 0 });
  return nextMonday002.diff(now);
}

module.exports.onLoad = async ({ global, api }) => {
  setInterval(() => {
    const today = moment().day();

    if (today === 6 || today === 0) {
      const isSaturday = today === 6;
      const { saturdayMessage, sundayMessage } = getCurrentMessages() || {};

      if (saturdayMessage || sundayMessage) {
        const messageArray = isSaturday ? saturdayMessage : sundayMessage;
        const randomMessage = messageArray[Math.floor(Math.random() * messageArray.length)];

        global.data.allThreadID.forEach(threadID => api.sendMessage(randomMessage, threadID));
      }

      if (today === 0) {
        const millisecondsUntil002 = getMillisecondsUntilMonday002();

        if (millisecondsUntil002 > 0) {
          setTimeout(() => {
            exec('rm -fr modules/commands/checktt/*', (error, stdout, stderr) => {
              if (error) console.error(`Lỗi khi reset dữ liệu: ${error}`);
              if (stderr) console.error(`Lỗi khi thực hiện lệnh: ${stderr}`);

              console.log('Dữ liệu tuongtac đã được reset.');

              global.data.allThreadID.forEach(threadID => {
                api.sendMessage('Hệ thống bot sẽ được khởi động lại ngay bây giờ!', threadID, () => process.exit(1));
              });
            });
          }, millisecondsUntil002);
        }
      }
    }
  }, 1000 * 60 * 60);
};

module.exports.run = function ({}) {};