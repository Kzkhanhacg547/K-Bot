module.exports.config = {
  name: '!1auto',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'SơnKb',
  description: 'AutoMode',
  commandCategory: 'Tiện ích',
  usages: '',
  cooldowns: 5
}

const path = __dirname + '/cache/auto.json';
const { writeFileSync, createReadStream, existsSync, unlinkSync } = require('fs-extra');
const moment = (format) => require('moment-timezone').tz('Asia/Ho_Chi_Minh').format(format);
const axios = require('axios');

module.exports.onLoad = () => {
  let format = JSON.stringify({
    status: true, // auto or sleep
    schedule: [
      '06:00:00'
    ], // Ex: HH:mm:ss
    blockID: [], // threadID dont send
    urlAPI: 'https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdgirl' // API
  }, null, 2);
  if (!existsSync(path)) writeFileSync(path, format);
  return;
}

async function sendnoti() {
  const set = require(path);
  if (set.status == false) return;
  const time = moment('HH:mm:ss');
  if (!set.schedule.includes(time)) return;
  let msg = {};
  const { api } = global.client;
  const allID = global.data.allThreadID.filter(i => !set.blockID.includes(i));
  let poem = (await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh')).data.data;
  msg.body = `💓====『 𝗧𝗛𝗢̂𝗡𝗚 𝗕𝗔́𝗢 』====💓
━━━━━━━━━━━━━━━━━━
💸 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟮𝟬𝗸/𝘁𝗵
🌏 Đ𝘂̛𝗼̛̣𝗰 𝘁𝗮𝗴 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗯𝗼𝘅 𝗸𝗲̂̉ 𝗰𝗮̉ 𝗱𝘂̛𝗼̛́𝗶 𝟭𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶
🔰 𝗗𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗔𝗱𝗺𝗶𝗻
━━━━━━━━━━━━━━━━━━
↪️ 𝘃𝗼̛́𝗶 𝗺𝘂̛𝗼̛̣𝗻 𝗯𝗼𝘁:
🌸 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝟰𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻
🍄 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶
━━━━━━━━━━━━━━━━━━
💜 Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗮𝗱 𝘀𝗲𝘁 𝘁𝗵𝗲𝗼 𝗴𝗶𝗼̛̀ 𝗯𝗮̂́𝘁 𝗸𝗶̀`;
  if (set.urlAPI != 'https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdgirl') {
    let url = (await axios({
      method: 'GET',
      url: set.urlAPI,
      responseType: 'text'
    })).data.split('"').filter(i => i.indexOf('https://') == 0)[0];
    let stream = (await axios({
      method: 'GET',
      url,
      responseType: 'stream'
    })).data;
    msg.attachment = stream;
  }
  return allID.forEach((ID) => api.sendMessage(msg, ID));
}

setInterval(sendnoti, 1000);

module.exports.run = async function ({ api, event, args, Threads, permssion }) {
  const { threadID, messageID, senderID } = event;
  const set = require(path);
  const prefix = ((await Threads.getData(threadID)).PREFIX || global.config.PREFIX) + this.config.name;
  function out(text) {
    return api.sendMessage(text, threadID, messageID);
  }
  if (!args[0]) 
    return out(`🌸『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡 𝗛𝗘𝗟𝗣 』🌸
━━━━━━━━━━━━━━━━━━━━
❤️ .𝗮𝘂𝘁𝗼 𝗮𝗱𝗱 + 𝗵𝗵:𝗺𝗺:𝘀𝘀 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗮𝗱𝗱 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘁𝗯 𝗮𝘂𝘁𝗼𝘀𝗲𝗻𝗱
💙 .𝗮𝘂𝘁𝗼 𝗼𝗳𝗳 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̆́𝘁 𝘁𝗯 𝗮𝘂𝘁𝗼𝘀𝗲𝗻𝗱
💜 .𝗮𝘂𝘁𝗼 𝗼𝗻 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗯𝗮̣̂𝘁 𝘁𝗯 𝗮𝘂𝘁𝗼𝘀𝗲𝗻𝗱
💛 .𝗮𝘂𝘁𝗼 𝗹𝗶𝘀𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́𝗰 𝘁𝗶𝗺𝗲 
💚 .𝗮𝘂𝘁𝗼 𝗮𝗽𝗶 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗮𝘆 𝗮𝗽𝗶 𝗮̉𝗻𝗵`, threadID, messageID);
  switch (args[0]) {
    case 'add':
      if (permssion < 2) return out('→ lệnh này chỉ admin mới có thể sử dụng');
      let msg = '';
      let input = args.slice(1).join('').split(',');
      let fail = [];
      let ok = [];
      if (input.length == 0) 
        return out('→ Thiếu dữ liệu thực thi');
      if (input.length == 1) {
        var [H,M,S] = input[0].split(':');
        if (isNaN(H) || isNaN(M) || isNaN(S))
          return out('Dinh dang sai\nFormat: HH:mm:ss');
        if (H < 0 || H > 24 || M < 0 || M > 60 || S < 0 || S > 60)
          return out('Thoi Gian Sai');
        if (H.length < 2) H = '0' + H;
        if (H  == 24) H = '00';
        if (M.length < 2) M = '0' + M;
        if (S.length < 2) S = '0' + S;
        var newTime = `${H}:${M}:${S}`;
        if (set.schedule.includes(newTime)) 
          return out(`→ thời gian này đã tồn tại!!!`);
        set.schedule.push(newTime);
        writeFileSync(path, JSON.stringify(set, null, 2));
        return out(`🌸 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 𝗔𝗗𝗗 🌸
━━━━━━━━━━━━━━━━
☑️ 𝗧𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴:
⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${H}:${M}:${S}`);
      }
      for (let single of input) {
        var [H,M,S] = single.split(':');
        if (isNaN(H) || isNaN(M) || isNaN(S)) fail.push(single);
        else if (H < 0 || H > 24 || M < 0 || M > 60 || S < 0 || S > 60) fail.push(single);
        else {
          if (H.length < 2) H = '0' + H;
          if (H  == 24) H = '00';
          if (M.length < 2) M = '0' + M;
          if (S.length < 2) S = '0' + S;
          var newTime = `${H}:${M}:${S}`;
          if (!set.schedule.includes(newTime)) {
            set
              .schedule
              .push(newTime);
            ok.push(single);
          }
          else fail.push(single);
        }
      }
      out(`🌸 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 𝗔𝗗𝗗 🌸
━━━━━━━━━━━━━━━━
☑️ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀: ${ok.length}
❎ 𝗙𝗮𝗶𝗹𝘂𝗿𝗲: ${fail.length}`);
      break;
    case 'on': 
      if (!args[1]) {
        if (permssion < 2) return out(`→ bạn không phải là admin bot`);
        if (set.status) return out('→ Autosend đã được bật từ trước ');
        set.status = true;
        out('Da bat thanh cong autoSend');
      }
      else if (args[1] == 'thread') {
        if (!set.blockID.includes(threadID)) return out('→ nhóm của bạn đã được bật từ trước');
        set.blockID.splice(set.blockID.indexOf(threadID), 1);
        out('→ đã bật thành công autosend');
      } 
      else return out('→ Lenh khong ton tai');
      break;
    case 'off': 
      if (!args[1]) {
        if (permssion < 2) return out(`→  bạn không phải là admin bot nên khong thể sử dụng`);
        if (set.status == false) return out('AutoSend đã được tắt từ trước ');
        set.status = false;
        out('→ đã tắt thành công autosend');
      }
      else if (args[1] == 'thread') {
        if (set.blockID.includes(threadID)) return out('Nhom ban da duoc tat tu truoc');
        set.blockID.push(threadID);
        out('→ đã tắt thành công autosend');
      } 
      else return out('→ Lenh khong ton tai');
      break;
    case 'list': 
      if (permssion < 2) 
        return out('→ Ban khong phai la admin bot');
      if (set.schedule.length == 0) 
        return out('Ban chua them thoi gian nao het');
      let text = '';
      let tpk = `🔰 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 𝗟𝗜𝗦𝗧 🔰
━━━━━━━━━━━━━━━━━━━\n`;
      let num = 1;
      text += `🌸 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 𝗰𝗼́ ${set.schedule.length} 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻:\n\n`;
      for (let i of set.schedule) {
        text += `${num++}. ${i}\n`;
      }
      text += `\n👉 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗿𝗲𝗽𝗹𝘆 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝘅𝗼𝗮́ `;
      return api.sendMessage(tpk + text, threadID, (e, i) => {
        global
          .client
          .handleReply
          .push({
            name: this.config.name,
            type: 'delete',
            author: senderID, 
            messageID: i.messageID
          });
      }, messageID);
      break;
    case 'api': 
      if (permssion < 2) return out('→ Ban khong phai la adminBot');
      if (!args[1]) return out('→ Vui long them api');
      else if (args[1] == 'clear') {
        set.urlAPI = '';
        out('Clear success');
      }
      else if (args[1].indexOf('https://') == -1) return out('→ Co chac no la api khong vay?'); 
      else {
        set.urlAPI = args[1];
        out('→ Them api thanh cong');
      }
      break;
    default: 
      return out(`→ Dung ${prefix}${this.config.name} help để biet them thong tin`);
      break;
  }
  return writeFileSync(path, JSON.stringify(set, null, 2));
}

module.exports.handleReply = async function({ api, event, handleReply }) {
  const { threadID, messageID, senderID, body } = event;
  const { type, author, messageID: messID } = handleReply;
  const set = require(path);
  switch (type) {
    case 'delete': 
      api.unsendMessage(messID);
      for (let i of body.split(' ')) {
        set
          .schedule
          .splice(
            set.schedule.indexOf(set.schedule[i - 1]), 1);
      }
      api.sendMessage(`→ Da xoa thanh cong ${body.split(' ').length} thoi gian`, threadID, messageID);
      break;
  }
  return writeFileSync(path, JSON.stringify(set, null, 2));
}