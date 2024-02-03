module.exports.config = {
  name: "mp3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo", 
  description: "no prefix",
  commandCategory: "Noprefix",
  usages: "đổi từ video thành âm thanh",
    cooldowns: 5
};
module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
const moment = require("moment-timezone"); 
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  if (!event.body) return;
  var { threadID, messageID } = event;
  const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
  if (event.body.toLowerCase().indexOf("mp3") == 0) {
    //getPrefix
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("Mp3")) ? threadSetting.PREFIX : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
  const admins = global.config.ADMINBOT;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
        var audioss = []
  var audio = args.join(" ") || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio ,{  method: 'GET',  responseType: 'arraybuffer' });
                fs.writeFileSync(__dirname + "/cache/vdtoau.m4a",Buffer.from(data, 'utf-8'));
  audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a")) ,(fs.unlinkSync(__dirname + "/cache/vdtoau.m4a")); 
  var i = 1;
  var msg = [];
  var msg = []
    for(var a of admins) {
    if (parseInt(a)) {
    var name = await Users.getNameUser(a);
      msg.push(`${i++}. ${name}`);
    }
    }    
        api.sendMessage({body:`𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼\n𝗕𝗮̣𝗻 đ𝗮𝗻𝗴 𝗱𝘂̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 đ𝗼̂̉𝗶 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝘁𝘂̛̀ 𝘃𝗶𝗱𝗲𝗼 𝘀𝗮𝗻𝗴 𝗺𝗽𝟯\n\n➩『🎶』𝗔̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗱𝗮̂𝘆`, attachment: audioss},event.threadID, event.messageID);
  }
};
module.exports.run = () => {};