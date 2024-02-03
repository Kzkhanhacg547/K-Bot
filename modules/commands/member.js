module.exports.config = {
  name: 'member',
  version: '1.1.1',
  hasPermssion: 1,
  credits: 'NTKhang',
  description: 'Xem ai không chat trong thời gian đã định trước',
  commandCategory: 'Hệ thống quản trị viên',
  usages: '<số ngày>: Xem ai không chat trong <số ngày> gần đây',
  cooldowns: 2
};

const fs = require('fs-extra');
const dir = __dirname + '/checktt/notInteract';
if (!fs.existsSync(dir))
  fs.mkdirSync(dir, { recursive: true });
if (!global.notInteractInterval)
  global.notInteractInterval = {};
if (!global.notInteractSetTimeOut)
  global.notInteractSetTimeOut = {};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const defaultDelayKick = 5 * 1000; // 5s

const allThreads = fs.readdirSync(dir);
for (const fileName of allThreads) {
  const threadID = fileName.replace('.json', '');
  setUpInterval(threadID);
}

function filterData(fileName) {
  const readFile = fs.readFileSync(`${dir}/${fileName}`);
  const jsonData = JSON.parse(readFile);

  const dayNumber = jsonData.dayNumber;
  const currentDayInYear = getDayOfYear();
  const filter = jsonData.data.filter(item => item.day >= currentDayInYear - dayNumber);
  jsonData.data = filter;
  fs.writeFileSync(`${dir}/${fileName}`, JSON.stringify(jsonData));
}

function setUpInterval(threadID) {
  if (!global.notInteractSetTimeOut[threadID]) {
    if (!global.notInteractInterval[threadID]) {
      filterData(threadID + '.json');
      // settimeout to 24h in current day
      // get 24h in current day
      const currentDay = new Date().getDate();
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const nextDayInMs = new Date(currentYear, currentMonth, currentDay + 1).getTime();
      const delay = nextDayInMs - Date.now();

      global.notInteractSetTimeOut[threadID] = setTimeout(() => {
        global.notInteractInterval[threadID] = setInterval(() => {
          filterData(threadID);

        }, 1000 * 60 * 60 * 24);
      }, delay);
    }
  }
}

module.exports.handleEvent = async function ({ api, event }) {
  const pathData = `${dir}/${event.threadID}.json`;
  if (!fs.existsSync(pathData)) {
    fs.writeFileSync(pathData, JSON.stringify({
      dayNumber: 1,
      data: []
    }));
    setUpInterval(event.threadID);
  }

  const oldData = fs.readFileSync(pathData);
  const jsonData = JSON.parse(oldData);
  const data = jsonData.data;
  const currentDayInYear = getDayOfYear();

  if (!data.find(item => item.day == currentDayInYear))
    data.push({
      day: currentDayInYear,
      members: [event.senderID]
    });
  else {
    const index = data.findIndex(item => item.day == currentDayInYear);
    const members = data[index].members;
    if (!members.find(item => item == event.senderID))
      members.push(event.senderID);
  }

  fs.writeFileSync(pathData, JSON.stringify(jsonData));
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (handleReply.author != event.senderID)
    return;
  const args = event.body.split(/\s+/);
  if (args[0] == 'all') {
    const success = [];
    const fail = [];

    const threadInfo = await api.getThreadInfo(event.threadID);
    if (threadInfo.adminIDs.find(item => item.id == api.getCurrentUserID()) == undefined)
      return api.sendMessage('[⚜️] ➜ 𝗕𝗼𝘁 𝗰𝗮̂̀𝗻 𝗤𝗧𝗩 𝗰𝗵𝗼 𝘃𝗶𝗲̣̂𝗰 𝗹𝗼̣𝗰 𝗺𝗲𝗺, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗮̂́𝗽 𝗾𝘁𝘃 𝗿𝗼̂̀𝗶 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶 𝘀𝗮𝘂 𝗻𝗵𝗲́ 💕', event.threadID, event.messageID);

    for (const member of handleReply.data) {
      try {
        await api.removeUserFromGroup(member.id, event.threadID);
        success.push(member);
        await sleep(defaultDelayKick);
      }
      catch (e) {
        fail.push(member);
      }
    }
    return api.sendMessage(`[⚜️] ➜ 𝗧𝗵𝘂̛̣𝗰 𝘁𝗵𝗶 𝘅𝗼𝗮́ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${success.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n${fail.length > 0 ? `[⚜️] ➜ 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘅𝗼́𝗮 ${fail.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻: ${fail.map(item => item.name).join(', ')}` : ''}`, event.threadID, event.messageID);
  }
  else {
    const indexs = args.filter(item => !isNaN(item) && parseInt(item) >= 1 && parseInt(item) <= handleReply.data.length);
    if (indexs.length == 0)
      return api.sendMessage('[⚜️] ➜ 𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗮̀𝗼 𝗯𝗶̣ 𝗰𝗵𝗼̣𝗻', event.threadID, event.messageID);

    const threadInfo = await api.getThreadInfo(event.threadID);
    if (threadInfo.adminIDs.find(item => item.id == api.getCurrentUserID()) == undefined)
      return api.sendMessage('[⚜️] ➜ 𝗕𝗼𝘁 𝗰𝗮̂̀𝗻 𝗤𝗧𝗩 𝗰𝗵𝗼 𝘃𝗶𝗲̣̂𝗰 𝗹𝗼̣𝗰 𝗺𝗲𝗺, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗮̂́𝗽 𝗾𝘁𝘃 𝗿𝗼̂̀𝗶 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶 𝘀𝗮𝘂 𝗻𝗵𝗲́ 💕', event.threadID, event.messageID);

    const success = [];
    const fail = [];
    for (const ind of indexs) {
      const index = parseInt(ind) - 1;
      try {
        await api.removeUserFromGroup(handleReply.data[index].id, event.threadID);
        success.push(handleReply.data[index]);
        await sleep(defaultDelayKick);
      }
      catch (e) {
        fail.push(handleReply.data[index]);
      }
    }
    return api.sendMessage(`[⚜️] ➜ 𝗧𝗵𝘂̛̣𝗰 𝘁𝗵𝗶 𝘅𝗼𝗮́ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${success.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n${fail.length > 0 ? `[⚜️] ➜ 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘅𝗼́𝗮 ${fail.length} 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻: ${fail.map(item => item.name).join(', ')}` : ''}`, event.threadID, event.messageID);
  }
};

module.exports.run = async function ({
  api, event, args, permssion
}) {
  if (args[0] == 'set') {
    const day = parseInt(args[1]) || 1;
    if (isNaN(day))
      return api.sendMessage('[⚜️] ➜ 𝗦𝗼̂́ 𝗻𝗴𝗮̀𝘆 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂', event.threadID, event.messageID);
    const pathData = `${dir}/${event.threadID}.json`;
    if (!fs.existsSync(pathData))
      fs.writeFileSync(pathData, JSON.stringify({
        dayNumber: day,
        data: []
      }));
    else {
      const jsonData = JSON.parse(fs.readFileSync(pathData, 'utf-8'));
      jsonData.dayNumber = day;
      fs.writeFileSync(pathData, JSON.stringify(jsonData));
    }

    return api.sendMessage(`[⚜️] ➜ 𝗧𝗵𝗶𝗲̂́𝘁 𝗹𝗮̣̂𝗽 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴`, event.threadID, event.messageID);
  }
  else {
    const jsonData = JSON.parse(fs.readFileSync(`${dir}/${event.threadID}.json`, 'utf-8'));
    const dayNumber = jsonData.dayNumber;
    const data = jsonData.data;
    const currentDayInYear = getDayOfYear();

    const members = [];
    for (const item of data) {
      if (item.day >= currentDayInYear - dayNumber)
        for (const member of item.members)
          if (!members.find(item => item == member))
            members.push(member);
    }

    const threadInfo = await api.getThreadInfo(event.threadID);
    const threadMembers = threadInfo.userInfo;

    const notInteract = [];
    for (const member of threadMembers) {
      if (!members.find(item => item == member.id))
        notInteract.push({
          name: member.name,
          id: member.id
        });
    }

    let msg = `🌸 𝗖𝗮́𝗰 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝘁𝗿𝗼𝗻𝗴 ${dayNumber} 𝗻𝗴𝗮̀𝘆 𝘃𝘂̛̀𝗮 𝗾𝘂𝗮:\n\n`;
    // for (const member of notInteract)
    // 	msg += `• ${member.name} (${member.id})\n`;
    notInteract.forEach((member, index) => msg += `${index + 1}. ${member.name}\n𝗜𝗗:  ${member.id}\n`);

    return api.sendMessage(msg + (threadInfo.adminIDs.some(i => i.id == event.senderID) || permssion > 1 ? '\n[👉] ➜ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 `𝗮𝗹𝗹` 𝗵𝗼𝗮̣̆𝗰 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗻𝗲̂́𝘂 𝘅𝗼́𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 ( 𝘅𝗼́𝗮 𝗻𝗵𝗶𝗲̂̀𝘂 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗯𝗮̆̀𝗻𝗴 𝗱𝗮̂́𝘂 𝗰𝗮́𝗰𝗵 )' : ''), event.threadID, (error, info) => {
      if (error) return console.log(error);
      if (threadInfo.adminIDs.some(i => i.id == event.senderID) || permssion > 1)
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          data: notInteract,
          author: event.senderID,
        });
    }, event.messageID);
  }
};

function getDayOfYear(date = new Date()) {
  const timestamp1 = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const timestamp2 = Date.UTC(date.getFullYear(), 0, 0);
  const differenceInMilliseconds = timestamp1 - timestamp2;
  const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;
  return differenceInDays;
}
