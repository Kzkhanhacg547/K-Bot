const fs = require('fs-extra'); 
const moment = require('moment-timezone');

const config = {
  name: 'findsp',
  version: '1.1.0',
  hasPermission: 2, 
  credits: 'Kz Khánhh',
  description: 'Tự động ban người dùng chửi bot',
  commandCategory: 'Hệ Thống',
  usages: '',
  cooldowns: 0,
};

const cooldowns = {}; // Một đối tượng để theo dõi cooldown cho từng người dùng
const groupSettings = {}; // Đối tượng để lưu trữ cài đặt cho từng nhóm

module.exports.config = config;

module.exports.handleEvent = async function ({ api, event, args, Users, Threads }) {
  var { threadID, reason, senderID } = event,
      id = '' + senderID,
      idgr = '' + threadID,
      name = (await Users.getData(senderID)).name,
      idbox = threadID,
      datathread = (await Threads.getData(threadID)).threadInfo;

  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss DD/MM/YYYY');
  const time = moment.tz('Asia/Ho_Chi_minh').format('HH:mm:ss L');
  if (!event.body) {
    return;
  }

  if (!cooldowns[id]) {
    cooldowns[id] = 0;
  }

  const currentTime = Date.now();

  if (currentTime - cooldowns[id] < groupSettings[idgr].timeThreshold) { // Kiểm tra nếu người dùng gửi quá nhiều tin nhắn trong khoảng thời gian đã đặt
    // Xóa người dùng khỏi nhóm và ghi lại lý do
    let data = (await Users.getData(id)).data || {};
    var namethread = datathread.threadName;
    api.removeUserFromGroup(id, threadID);
    cooldowns[id] = currentTime; // Cập nhật thời gian cooldown
    data.banned = true;
    data.reason = 'spam' || null;
    data.dateAdded = time;
    await Users.setData(id, { data: data });
    global.data.userBanned.set(id, {
      reason: data.reason,
      dateAdded: data.dateAdded,
    });

    // Gửi thông báo
    api.sendMessage(
      '♡*♡∞:｡.｡ 𝑆𝑃𝐴𝑀 𝐵𝐴𝑁 ｡.｡:∞♡*♡' + '\n' +
        '| ➜ Bạn Đã Bị Ban' + ' | ' + 'Spam' + '\n' +
        '| ➜ Tên : ' + name + '\n' +
        '| ➜ Tid : ' + idgr + '\n' +
        '| ➜ Bot said you : Rảnh quá không có gì làm nên đi spam à nhóc?' + '\n' +
        '| ➜ Xin Gỡ Ban Qua : ' + 'fb.me/100081129610697' + '\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      threadID,
      () => {
        var idd = global.config.ADMINBOT;
        for (let idad of idd) {
          api.sendMessage(
            '♡*♡∞:｡.｡ 𝑆𝑃𝐴𝑀 𝐵𝐴𝑁 ｡.｡:∞♡*♡' + '\n' +
            '| ➜ ' + name + ' nhóm ' + namethread + '\n' +
            '| ➜ Chửi Bot hoặc Spam : ' + event.body + '\n' +
            '| ➜ Lúc : ' + gio + '\n' +
            '| ➜ Id Nhóm : ' + idgr + '\n' +
            '| ➜ Facebook.com/' + id + '\n' +
            '━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 
            idad
          );
        }
      }
    );
  } else {
    // Cập nhật thời gian cooldown
    cooldowns[id] = currentTime;
  }
}

module.exports.run = async function ({ api, event, args, Users, Threads, __GLOBAL }) {
  const groupId = event.threadID;
  const timeThreshold = parseInt(args[0]); // Thời gian giữa các tin nhắn
  const messageThreshold = parseInt(args[1]); // Số lượng tin nhắn cần gửi để coi là spam

  if (isNaN(timeThreshold) || isNaN(messageThreshold) || timeThreshold <= 0 || messageThreshold <= 0) {
    return api.sendMessage('Sai cú pháp. Vui lòng nhập lại.', event.threadID);
  }

  // Cập nhật cài đặt cho nhóm
  groupSettings[groupId] = { timeThreshold, messageThreshold };

  api.sendMessage(`Cài đặt cho nhóm ${groupId} đã được cập nhật:\nThời gian: ${timeThreshold} giây\nSố lượng tin nhắn: ${messageThreshold}`, event.threadID);
}