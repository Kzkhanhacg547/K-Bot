module.exports.config = {
  name: "adminUpdate",
  eventType: ["log:thread-admins", "log:thread-name", "log:user-nickname", "log:thread-icon", "change_thread_image", "log:thread-call", "log:thread-color"],
  version: "1.0.0",
  credits: "Mirai-Team",//inspire by presel
  description: "GROUP UPDATE NOTIFICATION",
  envConfig: {
    autoUnsend: false,
    sendNoti: true,
    timeToUnsend: 10
  }
};

module.exports.run = async function({ event, api, Threads, Users }) {
  const { author, threadID, logMessageType, logMessageData } = event;
  const { setData, getData } = Threads;
  const axios = require('axios');
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Ho_Chi_Minh").format('HH:mm:ss');
  var ngay = moment.tz("Asia/Ho_Chi_Minh").format('D/MM/YYYY');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗻𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗵𝗮𝗶'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗯𝗮'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝘁𝘂̛'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗻𝗮̆𝗺'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗯𝗮̉𝘆'

  if (author == threadID) return;

  try {
    let dataThread = (await getData(threadID)).threadInfo;
    console.log(logMessageData)
    switch (logMessageType) {
      case "log:thread-admins": {
        if (logMessageData.ADMIN_EVENT == "add_admin") {
          dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
          var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n\n Đ𝐀̃ 𝐓𝐇𝐄̂𝐌 𝐍𝐆𝐔̛𝐎̛̀𝐈 𝐃𝐔̀𝐍𝐆 ${logMessageData.TARGET_ID} 𝐋𝐀̀𝐌 𝐐𝐔𝐀̉𝐍 𝐓𝐑𝐈̣ 𝐕𝐈𝐄̂𝐍 𝐍𝐇𝐎́𝐌.𝐋𝐀̀𝐌 𝐐𝐔𝐀̉𝐍 𝐓𝐑𝐈̣ 𝐕𝐈𝐄̂𝐍 𝐍𝐇𝐎́𝐌.\n\n『📖』→𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀:${thu} 🌍\n『📆』→𝐍𝐠𝐚̀𝐲: ${ngay} 🌆\n『⏰』→𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}⌚.`
        }
        else if (logMessageData.ADMIN_EVENT == "remove_admin") {
          dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
          var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n\nĐ𝐀̃ 𝐆𝐎̛̃ 𝐐𝐔𝐘𝐄̂̀𝐍 𝐐𝐔𝐀̉𝐍 𝐓𝐑𝐈̣ 𝐕𝐈𝐄̂𝐍 𝐂𝐔̉𝐀 ${logMessageData.TARGET_ID}.\n\n『📖』→𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀:${thu} 🌍\n『📆』→𝐍𝐠𝐚̀𝐲: ${ngay} 🌆\n『⏰』→𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}⌚.`
        }
        break;
      }

      case "log:user-nickname": {
        dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
        var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n\n ${(logMessageData.nickname.length == 0) ? `Đ𝐀̃ 𝐗𝐎́𝐀 𝐁𝐈𝐄̣̂𝐓 𝐃𝐀𝐍𝐇 𝐂𝐔̉𝐀 ${logMessageData.participant_id}` : `𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓 𝐁𝐈𝐄̣̂𝐓 𝐃𝐀𝐍𝐇 𝐂𝐔̉𝐀 ${logMessageData.participant_id} 𝐓𝐇𝐀̀𝐍𝐇: ${logMessageData.nickname}`}.\n\n『📖』→𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀:${thu} 🌍\n『📆』→𝐍𝐠𝐚̀𝐲: ${ngay} 🌆\n『⏰』→𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}⌚`
        break;
      }

      case "log:thread-name": {
        dataThread.threadName = event.logMessageData.name || null;
        var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n\n ${(dataThread.threadName) ? `𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓 𝐓𝐄̂𝐍 𝐍𝐇𝐎́𝐌 𝐓𝐇𝐀̀𝐍𝐇 ${dataThread.threadName}` : '𝐓𝐄̂𝐍 𝐍𝐇𝐎́𝐌 Đ𝐀̃ 𝐗𝐎́𝐀'}.\n\n『📖』→𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀:${thu} 🌍\n『📆』→𝐍𝐠𝐚̀𝐲: ${ngay} 🌆\n『⏰』→𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}⌚.`
        break;
      }

      case "log:thread-icon": {
        dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
        var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n\n 𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓 𝐁𝐈𝐄̂̉𝐔 𝐓𝐔̛𝐎̛̣𝐍𝐆 𝐂𝐀̉𝐌 𝐗𝐔́𝐂 𝐍𝐇𝐎́𝐌 𝐓𝐇𝐀̀𝐍𝐇 ${dataThread.threadIcon},\n\n『📖』→𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀:${thu} 🌍\n『📆』→𝐍𝐠𝐚̀𝐲: ${ngay} 🌆\n『⏰』→𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}⌚.`
        break;
      }

      case "log:thread-color": {
        dataThread.threadColor = event.logMessageData.thread_color || "🌤";
        if (global.configModule[this.config.name].sendNoti) api.sendMessage(`THÔNG BÁO:\n»  ${event.logMessageBody.replace("Chủ đề", "color")}`, threadID, async (error, info) => {
          if (global.configModule[this.config.name].autoUnsend) {
            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
            return api.unsendMessage(info.messageID);
          } else return;
        });
        break;
      }

      case "change_thread_image": {
        console.log(logMessageData)
        var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n\n ${author} 𝐇𝐈̀𝐍𝐇 𝐀̉𝐍𝐇 𝐍𝐇𝐎́𝐌 Đ𝐔̛𝐎̛̣𝐂 𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓.\n\n『📖』→𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀:${thu} 🌍\n『📆』→𝐍𝐠𝐚̀𝐲: ${ngay} 🌆\n『⏰』→𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}⌚.`
        break;
      }

      case "log:thread-call": {
        if (logMessageData.event == "group_call_started") {
          const name = await Users.getNameUser(logMessageData.caller_id);
          var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n ${name} 𝐁𝐀̆́𝐓 Đ𝐀̂̀𝐔 𝐌𝐎̣̂𝐓 ${(logMessageData.video) ? '𝐕𝐈𝐃𝐄𝐎 ' : ''}𝐂𝐀𝐋𝐋.`
        }
        else if (logMessageData.event == "group_call_ended") {
          const callDuration = logMessageData.call_duration;

          //Transform seconds to hours, minutes and seconds
          let hours = Math.floor(callDuration / 3600);
          let minutes = Math.floor((callDuration - (hours * 3600)) / 60);
          let seconds = callDuration - (hours * 3600) - (minutes * 60);

          //Add 0 if less than 10
          if (hours < 10) hours = "0" + hours;
          if (minutes < 10) minutes = "0" + minutes;
          if (seconds < 10) seconds = "0" + seconds;

          const timeFormat = `${hours}:${minutes}:${seconds}`;

          var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n\n ${(logMessageData.video) ? '𝐕𝐈𝐃𝐄𝐎 ' : ''}𝐂𝐔𝐎̣̂𝐂 𝐆𝐎̣𝐈 Đ𝐀̃ 𝐊𝐄̂́𝐓 𝐓𝐇𝐔́𝐂.\n\n 𝐓𝐇𝐎̛̀𝐈 𝐋𝐔̛𝐎̛̣𝐍𝐆 𝐂𝐔𝐎̣̂𝐂 𝐆𝐎̣𝐈: ${timeFormat}.\n\n『📖』→𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀:${thu} 🌍\n『📆』→𝐍𝐠𝐚̀𝐲: ${ngay} 🌆\n『⏰』→𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}⌚.`

        }
        else if (logMessageData.joining_user) {
          const name = await Users.getNameUser(logMessageData.joining_user);
          var msg = `===🎬𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐔𝐏𝐃𝐀𝐓𝐄🎥===\n\n ${name} Đ𝐀̃ 𝐓𝐇𝐀𝐌 𝐆𝐈𝐀 ${(logMessageData.group_call_type == '1') ? '𝐕𝐈𝐃𝐄𝐎  ' : ''}𝐂𝐀𝐋𝐋.\n『📖』→𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀:${thu} 🌍\n『📆』→𝐍𝐠𝐚̀𝐲: ${ngay} 🌆\n『⏰』→𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${time}⌚.`
        }
        break;
      }
    }
    //        const res = (await axios.get('https://vnhhoang206-16.vnhoang06.repl.co/api/gif/gifchill')).data.data
    //      const t = (await axios.get(`${res}`, {
    //                  responseType: "stream"
    //            }))
    //          .data;


    const imageUrls = await Promise.all(Array.from({ length: 3 }, async () => {
      const res = await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/loli');
      return res.data.url;
    }));

    const t = await Promise.all(imageUrls.map(async (url) => {
      return (await axios({
        url,
        method: "GET",
        responseType: "stream"
      })).data
    }));

    await setData(threadID, { threadInfo: dataThread });
    api.sendMessage({
      body: msg,
      attachment: t
    }, threadID)
  } catch (e) { console.log(e); };
}