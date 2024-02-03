module.exports.config = {
    name: "checkloc", 
    version: "1.0.1", 
    hasPermssion: 0, 
    credits: "Mod by vtuan", 
    description: "Check tương tác ngày/tuần/toàn bộ", 
    commandCategory: "Box", 
    usages: "< all/day >", 
    cooldowns: 5, 
    dependencies: {
        "fs": " ",
        "moment-timezone": " "
    }
};

const path = __dirname + '/tt/';
const { min } = require('moment-timezone');
const moment = require('moment-timezone');
const { format } = require('path');

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
  setInterval(() => {
    const today = moment.tz("Asia/Ho_Chi_Minh").day();
    const checkttData = fs.readdirSync(path);
    checkttData.forEach(file => {
      let fileData = JSON.parse(fs.readFileSync(path + file));
      if (fileData.time != today) {
        setTimeout(() => {
          fileData = JSON.parse(fs.readFileSync(path + file));
          if (fileData.time != today) {
            fileData.time = today;
            fs.writeFileSync(path + file, JSON.stringify(fileData, null, 4));
          }
        }, 60 * 1000);
      }
    })
  }, 60 * 1000);
}

module.exports.handleEvent = async function ({ api, args, Users, event, Threads, }) {
  const threadInfo = await api.getThreadInfo(event.threadID)
    if (global.client.sending_top == true) return;
    const fs = global.nodemodule['fs'];
    const { threadID, senderID } = event;
    const today = moment.tz("Asia/Ho_Chi_Minh").day();

    if (!fs.existsSync(path + threadID + '.json')) {
        const newObj = {
            total: [],
            week: [],
            day: [],
            time: today
        };
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
        const threadInfo = await Threads.getInfo(threadID) || {};
        if (threadInfo.hasOwnProperty('isGroup') && threadInfo.isGroup) {
            const UserIDs = threadInfo.participantIDs;
            for (user of UserIDs) {
                if (!newObj.total.find(item => item.id == user)) {
                    newObj.total.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.week.find(item => item.id == user)) {
                    newObj.week.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.day.find(item => item.id == user)) {
                    newObj.day.push({
                        id: user,
                        count: 0
                    });
                }
            }
        }
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
    }
    const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    if (threadData.time != today) {
      global.client.sending_top = true;
      setTimeout(() => global.client.sending_top = false, 5 * 60 * 1000);
    }
    const userData_week_index = threadData.week.findIndex(e => e.id == senderID);
    const userData_day_index = threadData.day.findIndex(e => e.id == senderID);
    const userData_total_index = threadData.total.findIndex(e => e.id == senderID);
    if (userData_total_index == -1) {
        threadData.total.push({
            id: senderID,
            count: 1,
        });
    } else threadData.total[userData_total_index].count++;
    if (userData_week_index == -1) {
        threadData.week.push({
            id: senderID,
            count: 1
        });
    } else threadData.week[userData_week_index].count++;
    if (userData_day_index == -1) {
        threadData.day.push({
            id: senderID,
            count: 1
        });
    } else threadData.day[userData_day_index].count++;


    fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
}
module.exports.run = async function ({ api, event, args, Users, Threads }) {
  let threadInfo = await api.getThreadInfo(event.threadID);
    await new Promise(resolve => setTimeout(resolve, 500));
    const fs = global.nodemodule['fs'];
    const { threadID, messageID, senderID, mentions } = event;
    if (!fs.existsSync(path + threadID + '.json')) {
        return api.sendMessage("Chưa có thống kê dữ liệu", threadID);
    }
    const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    const query = args[0] ? args[0].toLowerCase() : '';


    const axios = require('axios');
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
    const info = await api.getThreadInfo(event.threadID);

    var array = [];
    const res1 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/phongcanh`);
    var data1 = res1.data.data;
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    array.push(downloadfile1);

    if(query == 'lọc') {
        let threadInfo = await api.getThreadInfo(threadID);
        if(!threadInfo.adminIDs.some(e => e.id == senderID)) return api.sendMessage("Quyền hạn không đủ, vui lòng quay lại sau khi bạn có đủ quyền hạn để xử dụng<3", threadID);
        if(!threadInfo.isGroup) return api.sendMessage({body:"==== 『 𝐄𝐑𝐑𝐎𝐑 』 ==== \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝙱𝚊̣𝚗 𝚍𝚞̀𝚗𝚐 𝚜𝚊𝚒 𝚌𝚊́𝚌𝚑 𝚛𝚘̂̀𝚒, 𝚖𝚞𝚘̂́𝚗 𝚍𝚞̀𝚗𝚐 𝚕𝚎̣̂𝚗𝚑 𝚗𝚊̀𝚢 𝚋𝚊̣𝚗 𝚟𝚞𝚒 𝚕𝚘̀𝚗𝚐 𝚕𝚊̣̂𝚙 𝚗𝚑𝚘́𝚖 𝚖𝚘̛́𝚒 𝚑𝚘𝚊̣̆𝚌 𝚝𝚑𝚎̂𝚖 𝚋𝚘𝚝 𝚟𝚊̀𝚘 𝚗𝚑𝚘́𝚖 đ𝚎̂̉ 𝚍𝚞̀𝚗𝚐!!\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n=== 「"+ thu +"||"+ gio + "」 ===" ,attachment: array}, threadID);
        if(!threadInfo.adminIDs.some(e => e.id == api.getCurrentUserID())) return api.sendMessage({body:'==== 『 𝐄𝐑𝐑𝐎𝐑 』 ==== \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝙼𝚞𝚘̂́𝚗 𝚋𝚘𝚝 𝚝𝚑𝚞̛̣𝚌 𝚑𝚒𝚎̣̂𝚗 𝚕𝚎̣̂𝚗𝚑 𝚗𝚊̀𝚢, 𝚟𝚞𝚒 𝚕𝚘̀𝚗𝚐 𝚝𝚑𝚎̂𝚖 𝚋𝚘𝚝 𝚕𝚊̀𝚖 𝚚𝚝𝚟!!!\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n=== 「'+ thu +'||'+ gio + '」 ===' ,attachment: array}, threadID);
        if(!args[1] || isNaN(args[1])) return api.sendMessage("Error", threadID);
        let minCount = args[1],
            allUser = threadInfo.participantIDs;
        for(let user of allUser) {
            if(user == api.getCurrentUserID()) continue;
            if(!threadData.total.some(e => e.id == user) || threadData.total.find(e => e.id == user).count < minCount) {
                setTimeout(async () => {
                    await api.removeUserFromGroup(user, threadID);
                    for(let e in threadData) {
                        if(e == 'time') continue;
                        if(threadData[e].some(e => e.id == user)) {
                            threadData[e].splice(threadData[e].findIndex(e => e.id == user), 1);
                        }
                    }
                }, 1000);
            }
        }
        return api.sendMessage(`𝙱𝚘𝚝 𝚡𝚘́𝚊 𝚝𝚑𝚊̀𝚗𝚑 𝚌𝚘̂𝚗𝚐 ${allUser.length - threadData.total.filter(e => e.count >= minCount).length} 𝚝𝚑𝚊̀𝚗𝚑 𝚟𝚒𝚎̂𝚗 𝚝𝚞̛𝚘̛𝚗𝚐 𝚝𝚊́𝚌 𝚒́𝚝 𝚑𝚘̛𝚗 ${minCount} 𝚕𝚊̂̀𝚗\n\nSau khi lọc xong qtv vui lòng thông báo cho admin,để admin cập nhật lại data cũng như reset lại tương tác của nhóm nếu không muốn có sai xót!!!`, threadID);

    }
    var header = '',
        body = '',
        footer = '',
        msg = '',
        count = 1,
        storage = [],
        data = 0;
    if (query == 'day' || query == '-d') {
        header = '===𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗡𝗚𝗔̀𝗬===\n';
        data = threadData.day;
    } else {
        data = threadData.total;
    }
    for (const item of data) {
        const userName = await Users.getNameUser(item.id) || 'Tên không tồn tại';
        const itemToPush = item;
        itemToPush.name = userName;
        storage.push(itemToPush);
    };
    let check = ['all','-a','day', '-d'].some(e => e == query);
    if (!check && Object.keys(mentions).length > 0) {
        storage = storage.filter(e => mentions.hasOwnProperty(e.id));
    }
    //sort by count from high to low if equal sort by name
    storage.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        }
        else if (a.count < b.count) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });  
    if ((!check && Object.keys(mentions).length == 0) || (!check && Object.keys(mentions).length == 1) || (!check && event.type == 'message_reply')) {
        const UID = event.messageReply ? event.messageReply.senderID : Object.keys(mentions)[0] ? Object.keys(mentions)[0] : senderID;
        const userRank = storage.findIndex(e => e.id == UID);
        const userTotal = threadData.total.find(e => e.id == UID) ? threadData.total.find(e => e.id == UID).count : 0;        
        const userTotalDay = threadData.day.find(e => e.id == UID) ? threadData.day.find(e => e.id == UID).count : 0;
        const nameUID = storage[userRank].name || 'Tên không tồn tại';
        const target = UID == senderID ? 'Bạn' : nameUID;
      const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");      
      var permission;      
        if (global.config.ADMINBOT.includes(UID)) permission = `Admin Bot`;
else if
(global.config.NDH.includes(UID)) 
permission = `Người Hỗ Trợ`; else if (threadInfo.adminIDs.some(i => i.id == UID)) permission = `Quản Trị Viên`; else permission = `Thành Viên`;
        if (userRank == -1) {
            return api.sendMessage(`➜ ${target} chưa có thống kê dữ liệu`, threadID);
        }      
        body +=
          `\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n[👤] ➜𝙽𝚊𝚖𝚎: ${nameUID}\n[💓] ➜𝙲𝚑𝚞̛́𝚌 𝚅𝚞̣: ${permission}\n[💌]➜𝚃𝚒𝚗 𝙽𝚑𝚊̆́𝚗 𝚃𝚘𝚍𝚊𝚢: ${userTotalDay}\n[💓]➜𝙷𝚊̣𝚗𝚐 𝚃𝚛𝚘𝚗𝚐 𝙽𝚐𝚊̀𝚢: ${count++}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『📚』➜𝙱𝚊̣𝚗 𝚡𝚎̂́𝚙 𝚝𝚑𝚞̛́: ${userRank + 1} 𝚟𝚘̛́𝚒 ${userTotal} 𝚝𝚒𝚗 𝚗𝚑𝚊̆́𝚗\n━━━━━━━━━━━━━━━━━━\n『💮』➜𝚃𝚑𝚊̉ "❤️"  𝚟𝚊̀𝚘 𝚝𝚒𝚗 𝚗𝚑𝚊̆́𝚗 𝚋𝚘𝚝 𝚗𝚎̂́𝚞 𝚖𝚞𝚘̂́𝚗 𝚡𝚎𝚖 𝚝𝚑𝚘̂𝚗𝚐 𝚝𝚒𝚗 𝚗𝚑𝚘́𝚖`.replace(/^ +/gm, '');
    } else {
        body = storage.map(item => {
            return `${count++}. ${item.name} (${item.count})`;
        }).join('\n');
        footer = `➜ Tổng Tin Nhắn: ${storage.reduce((a, b) => a + b.count, 0)}`;
    }
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
    msg = `${header}\n${body}\n${footer}`;
    api.sendMessage({body: msg, attachment: [await streamURL(threadInfo.imageSrc), await streamURL(`
https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)]}, threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
                     }
//////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
  let sex = threadInfo.approvalMode;
  var pd = sex == false ? 'Tắt' : sex == true ? 'Bật' : '\n';
  let qtv = threadInfo.adminIDs.length;
let color = threadInfo.color;
  let icon = threadInfo.emoji;
  let threadMem = threadInfo.participantIDs.length;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n[🏘️] ➜ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n[⚙️] ➜ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${id}\n[👥] ➜ 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadMem}\n[💞] ➜ 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n[🌷] ➜ 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n[😻] ➜ 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n[💝] ➜ 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n[🍑] ➜ 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${threadInfo.messageCount}\n[🎀] ➜ 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝗯𝗼𝘅 𝗶𝗻𝗳𝗼 đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 `
        return api.sendMessage({body: msg, attachment: await streamURL(threadInfo.imageSrc)},event.threadID,event.messageID);
}