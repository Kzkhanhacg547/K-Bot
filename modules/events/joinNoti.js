module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "Mirai Team",
  description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};
let _0 = x=>x<10?'0'+x:x;
let time_str = time=>(d=>`${_0(d.getHours())}:${_0(d.getMinutes())}:${_0(d.getSeconds())} - ${_0(d.getDate())}/${_0(d.getMonth()+1)}/${d.getFullYear()} (Thứ ${d.getDay()==0?'Chủ Nhật':d.getDay()+1})`)(new Date(time));
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users  , Threads}) {

  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  ////////////////////////////////////////////////////////
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;
  ///////////////////////////////////////////////////////
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by Duy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("✅ 𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚 với bot!", event.threadID, () =>		api.sendMessage(`► 𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚 ◄\n━━━━━━━━━━━━━━━━━━\n→『🐧』𝗛𝗶 𝗠𝗼̣𝗶 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗠𝗶̀𝗻𝗵 𝗟𝗮̀ 𝐊𝐳 𝐁𝐨𝐭\n→『❌』𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝗸 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁 𝘀𝗲̃ 𝗮𝘂𝘁𝗼 𝗯𝗮𝗻!\n→『📝』𝗗𝘂̀𝗻𝗴 /𝗠𝗲𝗻𝘂 𝗮𝗹𝗹 Đ𝗲̂̉ 𝗫𝗲𝗺 𝗧𝗮̂́𝘁 𝗖𝗮̉ 𝗟𝗲̣̂𝗻𝗵 Đ𝗮𝗻𝗴 𝗖𝗼́ 𝗧𝗿𝗲̂𝗻 𝗕𝗼𝘁\n→『🌸』𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 /𝗱𝘂𝘆𝗲𝘁𝗯𝗼𝘅 Đ𝗲̂̉ Đ𝘂̛𝗼̛̣𝗰 𝗔𝗱𝗺𝗶𝗻 𝗗𝘂𝘆𝗲̣̂𝘁\n→『💕』𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭 𝐕𝐮𝐢 𝐕𝐞̉\n━━━━━━━━━━━━━━━━━━\n→『☎』𝐌𝐨̣𝐢 𝐓𝐡𝐚̆́𝐜 𝐌𝐚̆́𝐜 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐢𝐧𝐛𝐨𝐱 𝐓𝐫𝐮̛̣𝐜 𝐓𝐢𝐞̂́𝐩 𝐂𝐡𝐨 𝐀𝐝𝐦𝐢𝐧!\n→『🌐』𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗠𝘂̛𝗼̛̣𝗻 𝗕𝗼𝘁 𝗖𝗵𝗼 𝗖𝗮́𝗰 𝗕𝗼𝘅 𝗞𝗵𝗮́𝗰 𝗧𝗵𝗶̀ 𝗟𝗶𝗲̂𝗻 𝗛𝗲̣̂ 𝗖𝗵𝗼 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁:https://www.facebook.com/1000811229610697\n━━━━━━━━━━━━━━━━━━\n→ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗯𝗼𝘁 💓`,threadID));
  }
  else {
    try {
      let thread_data = await Threads.getData(threadID);

      if (!!thread_data) {
        let send = msg=>api.sendMessage(msg, threadID);
        let asnn = thread_data.data.auto_set_nickname;

    if (!!asnn && !!asnn.all) {
      let time_join = time_str(Date.now()+25200000);
      for (let {
          fullName,
          firstName,
          userFbId: id,
        } of event.logMessageData.addedParticipants)try {
          let name_set = asnn.all.replace(/\${full_name}/g, fullName).replace(/\${short_name}/g, firstName).replace(/\${time_join}/g, time_join);//eval(`(()=>\`${asnn.all}\`)()`);

          await new Promise(resolve=>api.changeNickname(name_set, threadID, id, (err, res)=>resolve()));
      } catch {};

      send(`⚡ Đã đặc biệt danh cho thành viên mới!`);
    };
      };

      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const time = moment.tz("Asia/Ho_Chi_Minh").format(" HH:mm:ss - DD/MM/YYYY");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      /*const path = join(__dirname, "cache", "joinGif");
      const pathGif = join(path, `join.mp4`);
*/
        var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
    const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "‎[ 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐌𝐨̛́𝐢 𝐕𝐚̀𝐨 𝐍𝐡𝐨́𝐦 ]\n──────────────────\n❤️ 𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨: {name}\n🔰 𝐍𝐡𝐨́𝐦: {threadName}\n🌐 𝐋𝐢𝐧𝐤 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/{iduser}\n👥 {type} 𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐡𝐮̛́: {soThanhVien} 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦\n👤 {type} đ𝐮̛𝐨̛̣𝐜 𝐭𝐡𝐞̂𝐦 𝐛𝐨̛̉𝐢: {author}\n🖇️ 𝐋𝐢𝐧𝐤 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/{idauthor}\n⏰ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: {time} - ( {thu} ) 𝐛𝐮𝐨̂̉𝐢 {session}\n📝 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐠𝐢𝐨̛́𝐢 𝐭𝐡𝐢𝐞̣̂𝐮 𝐯𝐞̂̀ 𝐛𝐚̉𝐧 𝐭𝐡𝐚̂𝐧 𝐜𝐮̉𝐚 𝐦𝐢̀𝐧𝐡 𝐧𝐡𝐞́ ( 𝐓𝐞̂𝐧 - 𝐍𝐚̆𝐦 𝐬𝐢𝐧𝐡 - 𝐍𝐨̛𝐢 𝐨̛̉ - Đ𝐚̣̆𝐭 𝐛𝐢𝐞̣̂𝐭 𝐝𝐚𝐧𝐡 )\n\𝐧✏️𝐆𝐨̃: ,𝐬𝐞𝐭𝐧𝐚𝐦𝐞 + 𝐭𝐞̂𝐧 đ𝐞̂̉ đ𝐚̣̆𝐭 𝐛𝐢𝐞̣̂𝐭 𝐝𝐚𝐧𝐡 𝐧𝐡𝐞́\𝐧❤️ 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐜𝐨́ 𝐦𝐨̣̂𝐭 𝐛𝐮𝐨̂̉𝐢 {session} 𝐯𝐮𝐢 𝐯𝐞̉ 𝐧𝐡𝐞́!\n\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻" : msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
      msg = msg
         .replace(/\{iduser}/g, iduser.join(', '))
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'Các bạn': 'Bạn')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
         .replace(/\{author}/g, nameAuthor)
         .replace(/\{idauthor}/g, event.author)
      .replace(/\{threadName}/g, threadName)
      .replace(/\{thu}/g, thu)
      .replace(/\{session}/g, hours <= 10 ? "sáng" : 
    hours > 10 && hours <= 12 ? "trưa" :
    hours > 12 && hours <= 18 ? "chiều" : "tối")
    .replace(/\{time}/g, time);

      /*if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));*/
      let voicehat = (await require('axios').get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/nhac')).data.data;
      if (/^http(s|):\/\//.test(voicehat))formPush = {body: msg, attachment: (x=>(x.data.path='tmp.mp3',x.data))(await require('axios').get(voicehat,{responseType:'stream'})),mentions,};
      /*else if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions };
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }*/
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
}