const axios = require("axios");
module.exports.config = {
	name: "kiemtra",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "Adonis",
	description: "Kiểm tra thông tin",
	commandCategory: "Tiện ích",
	usages: "kiemtra",
	cooldowns: 5,
    ddependencies: {
   "request": "",
   "fs-extra":"",
   "axios":""
}};
module.exports.run = async ({ args, api, event, Currencies, client }) => {
   const { threadID, senderID, messageID, type, mentions } = event;
  const namebot = global.config.BOTNAME;
   const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
   if (args.length == 0) return api.sendMessage(
     `=== 『 kiemtra 』 ===\n` + 
     `--------\n => ${global.config.PREFIX}${this.config.name} luotdung => kiemtra số lượt dùng còn lại của bạn` +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} ndfb => Lọc thành viên bị bay acc khỏi nhóm` +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} onl => Xem thời gian hoạt động bot onl`  +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} box => Lọc nhóm dưới 4 thành viên`  +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} covid => Xem thông tin covid` +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} mayman => Xem Tỉ lệ % may mắn của bạn?` +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} sodott => kiemtra sơ đồ tương tác của các box` +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} 2fa => kiemtra mã 2fa` +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} age => kiemtra age (tuổi) của bạn` +
     `\n--------\n => ${global.config.PREFIX}${this.config.name} image => kiemtra link ảnh mà bạn reply` +
     `\n\n━━━━━━━━━━━━━━━\n=== 『 ${namebot}  』 ===[]\n\n===「${timeNow}」===`, event.threadID, event.messageID);
    var arr = [];
    var mention = Object.keys(event.mentions);
    const data = await api.getThreadInfo(event.threadID);
    if (args[0] == "ndfb") {// kick người dùng fb
    if (permssion < 1) return api.sendMessage("[DONATE]→ Momo/Mbbank: 0396049649. Xin cám ơn ạ!! ❤️", threadID, messageID);
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());

    if (!find) return api.sendMessage(`[] => Bạn và bot cần là quản trị viên!`,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "gender": value.gender});
        for (const user of storage) {
            if (user.gender == undefined) api.removeUserFromGroup(user.id,event.threadID)
        }return;
    }  else if (args[0] == "del") {// lọc thành viên theo số tin nhắn bạn cần
      if (permssion != 3) return api.sendMessage("Thanks for using ❤️", threadID, messageID);
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());
    if (!find) return api.sendMessage(`[] => Bạn và bot cần là quản trị viên!`,event.threadID);
    if (!args[1]) return api.sendMessage(`[] => HDSD: kiemtra del => số tin nhắn cần lọc `,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = (await Currencies.getData(user.id)).exp;
            if (typeof countMess == "undefined") await Currencies.setEXP(mention, parseInt(0))
           // if (countMess ==  undefined) api.removeUserFromGroup(user.id,event.threadID)
            if (countMess <= args[1]) setTimeout(function() { api.removeUserFromGroup(user.id,event.threadID) }, 2000);
        } return;
    }else if (args[0] == "covid") {
      const axios_1 = require("axios");
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
   let fetchdata = await axios_1.get("https://static.pipezero.com/covid/data.json");
  var jsondata = (await fetchdata.data).total;
  var vn = (await fetchdata.data).overview[6];
  var year = vn.date + '-' + time;
  var world = jsondata.world,
    nhiemtg = world.cases,
    chettg = world.death,
    hoiphuctg = world.recovered,
    //////////////////////////////
    nhiemvn = vn.cases,
    chetvn = vn.death,
    hoiphucvn = vn.recovered,
    dieutrivn = vn.treating,
    //////////////////////////////
    nhiemvn7days = vn.avgCases7day,
    hoiphucvn7days = vn.avgRecovered7day,
    chetvn7days = vn.avgDeath7day,
    //////////////////////////////
    ptchetvn = Math.round((chetvn * 100) / nhiemvn),
    pthoiphucvn = Math.round((hoiphucvn * 100) / nhiemvn),
    ptchettg = Math.round((chettg * 100) / nhiemtg),
    pthoiphuctg = Math.round((hoiphuctg * 100) / nhiemtg),
    pthoiphucvn = pthoiphucvn.toString().split(".")[0],
    ptdieutrivn = (100 - pthoiphucvn - ptchetvn).toString().split(".")[0];
  /////////////////////////////////
  ptchetvn = ptchetvn.toString().split(".")[0];
  pthoiphuctg = pthoiphuctg.toString().split(".")[0];
  ptchettg = ptchettg.toString().split(".")[0];
  return api.sendMessage(
    "====== Thế Giới ======\n" +
    `😷 Nhiễm: ${nhiemtg}\n` +
    `💚 Hồi phục: ${hoiphuctg} (${pthoiphuctg}%)\n` +
    `💀 Tử vong: ${chettg} (${ptchettg}%)\n` +
    "====== Việt Nam ======\n" +
    `😷 Nhiễm: ${nhiemvn}\n` +
    `💉 Đang điều trị: ${dieutrivn} (${ptdieutrivn}%)\n` +
    `💚 Hồi phục: ${hoiphucvn} (${pthoiphucvn}%)\n` +
    `💀 Tử vong: ${chetvn} (${ptchetvn}%)\n` +
    `🤨 Nhiễm 7 ngày: ${nhiemvn7days}\n` +
    `❤ Hồi phục 7 ngày: ${hoiphucvn7days}\n` +
    `☠️ Tử vong 7 ngày: ${chetvn7days}\n\n` +
    //`Tin tức: ${news.vietnam}\n` +
    `Cập nhật: ${year}`,
    event.threadID, event.messageID
  );
}
    else if (args[0] == "box") {
      if (event.senderID != 100081129610697) return api.sendMessage(`Thanks for using ❤️`, event.threadID, event.messageID)
            let number = [];
            api.getThreadList(50, null, ["INBOX"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["OTHER"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["PENDING"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["unread"], (err, list) => getInfo({ list }))
            var getInfo = ({ list }) => {
              list.forEach(info => {
                if (info.name == "" || info.participants < 8 || info.imageSrc == null) { 
                  number.push(info);
                  api.removeUserFromGroup(api.getCurrentUserID(),info.threadID);
                  api.deleteThread(info.threadID, (err) => {
                    Threads.delData(info.threadID)
                    if(err) return console.error(err);
                    });
                }
              })
            }
           return api.sendMessage(`[] => Đang tiến hành lọc những nhóm không tên và dưới 4 thành viên.`,threadID)
    }
else if (args[0] == "image") {
  const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
	if(!linkanh) return api.sendMessage('[]→ Vui lòng reply hoặc nhập link 1 hình ảnh!!!', event.threadID, event.messageID)
const res = await axios.get(`https://docs-api.nguyenhaidang.ml/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
    return api.sendMessage(`${img}`, event.threadID, event.messageID);
	
}
    else if (args[0] == "onl") {
      	let time = process.uptime();
	let hours = Math.floor(time / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);
      const timeStart = Date.now();
       return api.sendMessage('[] => Đang kiểm tra kết nối vui lòng chờ⏳... !████████████ 99%', event.threadID, (err, info) => {
    setTimeout(() => {
      api.sendMessage(`[] => Ping: ${(Date.now() - timeStart)}ms \n[] => TimeOn: ${hours} Giờ ${minutes} Phút ${seconds} Giây`, event.threadID, event.messageID);
    }, 200);
  }, event.messageID);
} else if (args[0] == "mayman") {
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/gWACvcO.jpg",
    "https://i.imgur.com/mpHit7i.jpg",
    "https://i.imgur.com/glHFetf.jpg",
    "https://i.imgur.com/CxwzNMv.png",
    "https://i.imgur.com/RVerKnc.jpg"
    ];
var callback = () => api.sendMessage({body:`[] Tỉ lệ may mắn của bạn là ${tile}%`, attachment: fs.createReadStream(__dirname + "/cache/tile.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tile.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tile.jpg")).on("close",() => callback());
 }
    else if (args[0] == "sodott") {
  var KMath = (data) => data.reduce((a, b) => a + b, 0);
    var inbox = await api.getThreadList(100, null, ['INBOX']);
    let xx = [...inbox].filter(group => group.isSubscribed && group.isGroup);
         var kho = [],search=[],count = [];
             for (let n of xx) {
          var threadInfo = n.name;
                     var threadye = n.messageCount;
             kho.push({"name" : threadInfo, "exp": (typeof await threadye == "undefined") ? 0 : await threadye});
     }
     kho.sort(function (a, b) { return b.exp - a.exp; });
        for(let num = 0; num < 5; num++) {
             search.push("'" + kho[num].name + "'");
         count.push(kho[num].exp);
     }
     const { createReadStream, unlinkSync, writeFileSync,statSync } = require("fs-extra");
         var axios = require('axios');
             var path = __dirname + `/cache/chart.png`;
                 var full = await KMath(count);
                 var url = `https://quickchart.io/chart?c={type:'doughnut',data:{labels:[${encodeURIComponent(search)}],datasets:[{label:'${encodeURIComponent('Tương Tác')}',data:[${encodeURIComponent(count)}]}]},options:{plugins:{doughnutlabel:{labels:[{text:'${full}',font:{size:26}},{text:'${encodeURIComponent('Tổng')}'}]}}}}`;
             const { data: stream } = await axios.get(url, {  method: 'GET',  responseType: 'arraybuffer' });
         writeFileSync(path, Buffer.from(stream, 'utf-8'));
     return api.sendMessage({ body: '',attachment: createReadStream(path)},event.threadID,event.messageID);
}  else if (args[0] == "all") {
      //if (event.senderID != 100033478361032) return api.sendMessage(`[DONATE]→ Momo/Mbbank: 0396049649. Xin cám ơn ạ!! ❤️`, event.threadID, event.messageID)
      let threadInfo = await api.getThreadInfo(event.threadID);
        let number = 0, msg = "", storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            if (user.name != null) exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
        });
         let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        for (const lastData of exp) {
            number++;
            msg += `『${number}』: ${(lastData.name) == null || undefined  ? "Không tên" : lastData.name} với ${lastData.exp} tin nhắn \n`;
        }
        return api.sendMessage(`==「KIỂM TRA TƯƠNG TÁC」==\n\n` + msg +`\n[💹] Tỉ lệ tương tác: ${(exp[rank].exp).toFixed(0)}%\n[💬] Tổng số tin nhắn: ${threadInfo.messageCount}\n    === 「${timeNow}」 ===`, threadID, messageID);
    }
    
    else if (args[0] == "tt") {
        let storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        return api.sendMessage(`\n[] Bạn`+` đứng hạng ${rank} với ${infoUser.exp} tin nhắn\n[👤] Tên: ${infoUser.name}\n[🔰] Hạng: ${rank} \n[💬] Tin nhắn: ${infoUser.exp}\n[🏆] Rank: ${rank + 1}\n[💹] Tỉ lệ tương tác: ${(exp[rank].exp).toFixed(0)}%\n[⏰] Time: ${timeNow}`, event.threadID,event.messageID);
    }
  else if (args[0] == "()") {
        let storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        return api.sendMessage(`\n[] Bạn`+` đứng hạng ${rank} với ${infoUser.exp} tin nhắn\n[👤] Tên: ${infoUser.name}\n[🔰] Hạng: ${rank} \n[💬] Tin nhắn: ${infoUser.exp}\n[🏆] Rank: ${rank + 1}\n[💹] Tỉ lệ tương tác: ${(exp[rank].exp).toFixed(0)}%\n[⏰] Time: ${timeNow}`, event.threadID,event.messageID);
    }
     else if (args[0] == "2fa") {
    const axios = global.nodemodule["axios"];
  try {
    let code = args.join(" ");
    const res = await axios.get(`https://2fa.live/tok/${code}`);
    var codee = res.data.token;
    return api.sendMessage(`[]→ Mã xác thực 2 yếu tố của bạn là: ${codee}`, event.threadID, event.messageID)
  } catch (error) {
    return api.sendMessage(`[]→ Nhập code vào đi`, event.threadID, event.messageID)
  }
}
 else if (args[0] == "age") {
      const moment = require("moment-timezone");
  var date = new Date();
  var yearin = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
  var dayin = moment.tz("Asia/Ho_Chi_Minh").format("DD");
  var monthin = moment.tz("Asia/Ho_Chi_Minh").format("MM");
  var input = args[0];
  if (!input) return api.sendMessage("[]→ Sai định dạng", event.threadID);
  var content = input.split("-");
  var dayout = parseInt(content[0]);
  if (!dayout || isNaN(dayout) || dayout > 31 || dayout < 1) { return api.sendMessage("[]→ Ngày sinh không hợp lệ!", event.threadID)}
  var monthout = parseInt(content[1]);
  if (!monthout || isNaN(monthout) || monthout > 12 || monthout < 1) { return api.sendMessage("[]→ Tháng sinh không hợp lệ!", event.threadID)}
  var yearout = parseInt(content[2]);
  if (!yearout || isNaN(yearout) || yearout > yearin || yearout < 1) { return api.sendMessage("[]→ Năm sinh không hợp lệ!", event.threadID)}
  var tuoi = yearin - yearout
  var msg = `[]→ Năm nay bạn ${tuoi} tuổi.`
  if (monthout > monthin) {var tuoi = tuoi - 1; var aftermonth = monthout - monthin; var msg = `[]→ Năm nay bạn ${tuoi} tuổi. Còn ${aftermonth} tháng nữa là bạn sẽ tròn ${tuoi + 1} tuổi.`};
  if (monthin == monthout && dayin < dayout) {var tuoi = tuoi - 1; var afterday = dayout - dayin; var msg = `[]→ Năm nay bạn ${tuoi} tuổi. Còn ${afterday} ngày nữa là bạn sẽ tròn ${tuoi + 1} tuổi.`};
  return api.sendMessage(msg, event.threadID)
}
  else if (args[0] == "luotdung") {
  var usages = JSON.parse(require("fs").readFileSync(__dirname + '/../../includes/handle/usages.json'));
  if (args[1] == "all") {
    let storage = [], sl = [];
    for (const value of data.userInfo) storage.push({ "id": value.id, "name": value.name });
    let getDay = require("moment-timezone").tz("Asia/Ho_Chi_Minh").day();
    for (const user of storage) {
      if (!(user.id in usages)) usages[user.id] = {
        day: getDay,
        usages: 20
      }
      sl.push({ "name": user.name, "sl": (typeof usages[user.id].usages == "undefined") ? 0 : usages[user.id].usages, "uid": user.id });
    }
    sl.sort((a, b) => {
      if (a.sl > b.sl) return -1;
      if (a.sl < b.sl) return 1;
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      a.name.localeCompare(b.name, undefined, { numeric: true });
    });
    msg = "==「KIỂM TRA LƯỢT DÙNG」==\n";
    let countsl = 0
    for (let e of sl) {
      msg += `\n${countsl += 1}. ${e.name} - ${e.sl} lượt.`
    }
    msg += `\n=== 「${timeNow}」 ===`;
    require("fs").writeFileSync(__dirname + '/../../includes/handle/usages.json', JSON.stringify(usages, null, 4));
    return api.sendMessage(msg, threadID);
  }
  api.sendMessage(`[]→ Bạn còn ${usages[senderID].usages} lượt dùng bot.`, threadID, messageID);
     }
}