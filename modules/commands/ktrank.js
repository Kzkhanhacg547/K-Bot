module.exports.config = {
  name: "ktrank",
  version: "1.2",
  hasPermssion: 0,
  credits: "JRT",
  description: "Đếm kinh nghiệm cho việc check tương tác trong hệ thống dữ liệu bot/nhóm",
  commandCategory: "Box",
  cooldowns: 1
};

module.exports.handleEvent = async function({ api, event, Currencies, Users }) {
  var {threadID, senderID } = event;
  let exp = (await Currencies.getData(senderID)).exp;
  exp = exp += 1;
  if (isNaN(exp)) return;
  const lv1 = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
  const lv2 = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));
  if (lv2 > lv1 && lv2 != 1) {
    const name = await Users.getData(senderID).name;
    const namett = this.config.name;
  }
  await Currencies.setData(senderID, { exp });
  return;
}
module.exports.run = async function({ args, api, event, Currencies, Threads }) {
const { threadID, senderID, messageID, type, mentions } = event;
    var mention = Object.keys(event.mentions);
  const data = await api.getThreadInfo(event.threadID);
  const moment = require("moment-timezone");
  const timeStart = Date.now();
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
    const lock = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY");
  var rdname = [`🌼`,`🌸`,`🌺`,`🌻`,`🌷`,`🌹`];
  var rdratings = [`⭐`,`✨`,`⚡`,`🔥`,`💥`,`☄️`];
  var rdmessenger = [`✉️`,`📩`,`📨`,`💌`,`📧`,`💬`,`💭`,`📧`,`🗯`];
  var rdrank = [`🏆`,`🏅`,`🏆`,`🏅`,`🏆`,`🏅`];
  var rdinteractionrate = [`📉`,`📈`,`📊`,`📈`,`📉`,`📊`];
  var rdtime = [`⏰`,`🕰`,`⏰`,`🕰`,`⏰`,`🕰`];
  var rdupdate = [`📝`,`📝`,`☑️`,`☑️`,`✅`,`✅`];
     let storage = [], exp = [];
    for (const value of data.userInfo) storage.push({ "id": value.id, "name": value.name });
    for (const user of storage) {
      const countMess = await Currencies.getData(user.id);
      exp.push({ "name": user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id });
    }
    exp.sort((a, b) => {
      if (a.exp > b.exp) return -1;
      if (a.exp < b.exp) return 1;
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
    });
    let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
    let infoUser = exp[rank - 1];
  api.sendMessage(`🔎 Đang tìm kiếm thông tin của bạn vui lòng đợi trong giây lát.....`, event.threadID, (err, info) =>
        setTimeout(() => {
          api.unsendMessage(info.messageID)
        }, 666666), event.messageID);
return api.sendMessage({
    body: `[🏆]=== 『 CHECK RANK 』 ===[🏆]\n━━━━━━━━━━━━━━━━\n\n[${rdname[Math.floor(Math.random() * rdname.length)]}]➜ Tên: ${infoUser.name}\n[${rdratings[Math.floor(Math.random() * rdratings.length)]}]➜ Xếp hạng: ${rank} \n[${rdmessenger[Math.floor(Math.random() * rdmessenger.length)]}]➜ Tổng tin nhắn: ${infoUser.exp}\n[${rdrank[Math.floor(Math.random() * rdrank.length)]}]➜ Cấp: ${rank + 1}\n[${rdinteractionrate[Math.floor(Math.random() * rdinteractionrate.length)]}]➜ Tỉ lệ tương tác: ${(exp[rank].exp).toFixed(2)}%\n[${rdtime[Math.floor(Math.random() * rdtime.length)]}]➜ Thời gian: ${timeNow}\n[${rdupdate[Math.floor(Math.random() * rdupdate.length)]}]➜ Cập nhật: ${time}\n[${rdname[Math.floor(Math.random() * rdname.length)]}]➜ Tổng thời gian xử lí: ${Date.now() - timeStart}ms\n━━━━━━━━━━━━━━━━\n[ ${lock} ] `, attachment: (await axios.get((await axios.get(`hhttps://docs-api.jrtxtracy.repl.co/images/wallpaper?apikey=JRTvip_2200708248`)).data.data, {
                    responseType: 'stream'
                })).data
}, event.threadID);
};