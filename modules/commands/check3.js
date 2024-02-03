const axios = require("axios");
module.exports.config = {
  name: "check3",
  version: "6.6.6",
  hasPermssion: 0,
  credits: "Yae Miko",
  description: "Tổng hợp công cụ",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": ""
    }
};

module.exports.run = async ({ args, api, event, Currencies, client }) => {
   const { threadID, senderID, messageID, type, mentions } = event;
   const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
   if (args.length == 0) return api.sendMessage(`     🔰===[ 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐂𝐡𝐞𝐜𝐤 ]===🔰 \n\n------------------------------\n[🌸] => 𝗖𝗵𝗲𝗰𝗸 𝗼𝗻𝗹 => 𝗫𝗲𝗺 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗼𝘁 𝗰𝗵𝗮̣𝘆\n------------------------------\n[🌸] => 𝗖𝗵𝗲𝗰𝗸 𝘁𝘁 => 𝗖𝗵𝗲𝗰𝗸 𝘁𝗶̉ 𝗹𝗲̣̂ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻\n------------------------------\n[🌸] => 𝗖𝗵𝗲𝗰𝗸 𝘁𝘁𝗮𝗹𝗹 => 𝗖𝗵𝗲𝗰𝗸 𝘁𝗶̉ 𝗹𝗲̣̂ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝘁 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗯𝗼𝘅\n------------------------------\n[🌸] => 𝗖𝗵𝗲𝗰𝗸 𝗯𝗼𝘅 => 𝗟𝗼̣𝗰 𝗻𝗵𝗼́𝗺 𝗱𝘂̛𝗼̛́𝗶 𝟰 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n------------------------------\n[🌸] => 𝗖𝗵𝗲𝗰𝗸 𝗰𝗼𝘃𝗶𝗱 => 𝗫𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝗼𝘃𝗶𝗱\n------------------------------\n[🌸] => 𝗖𝗵𝗲𝗰𝗸 𝗺𝗮𝘆𝗺𝗮𝗻 => 𝗫𝗲𝗺 𝘁𝗶̉ 𝗹𝗲̣̂ % 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 ?\n------------------------------\n[🌸] => 𝗖𝗵𝗲𝗰𝗸 𝗰𝗼𝗻𝘆 => 𝗫𝗲𝗺 𝘁𝗶̉ 𝗹𝗲̣̂ % 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘆𝗲̂𝘂\n------------------------------\n[🌸] => 𝗰𝗵𝗲𝗰𝗸 𝟮𝗳𝗮 => 𝗫𝗲𝗺 𝗺𝗮̃ 𝗯𝗮̉𝗼 𝗺𝗮̣̂𝘁 𝟮 𝗹𝗼̛́𝗽\n------------------------------\n[🌸] => 𝗰𝗵𝗲𝗰𝗸 𝘀𝗼𝗱𝗼𝘁𝘁 => 𝗫𝗲𝗺 𝗯𝗶𝗲𝘂𝗱𝗼𝘁𝘁\n        === 「${timeNow}」 ===`, event.threadID, event.messageID);
    var { userInfo, adminIDs } = await api.getThreadInfo(event.threadID);    
    var success = 0, fail = 0;
    var arr = [];
    const data = await api.getThreadInfo(event.threadID);
    if (args[0] == "ndfb") {// kick người dùng fb
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());

    if (!find) return api.sendMessage(`[💌] => 𝐁𝐚̣𝐧 𝐯𝐚̀ 𝐛𝐨𝐭 𝐜𝐚̂̀𝐧 𝐥𝐚̀ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 !`,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "gender": value.gender});
        for (const user of storage) {
            if (user.gender == undefined) api.removeUserFromGroup(user.id,event.threadID)
        }return;
    }  else if (args[0] == "del") {// lọc thành viên theo số tin nhắn bạn cần
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());
    if (!find) return api.sendMessage(` 𝐁𝐚̣𝐧 𝐯𝐚̀ 𝐛𝐨𝐭 𝐜𝐚̂̀𝐧 𝐥𝐚̀ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 !`,event.threadID);
    if (!args[1]) return api.sendMessage(`[💌] => 𝐇𝐃𝐒𝐃: 𝐜𝐡𝐞𝐜𝐤 𝐝𝐞𝐥 => 𝐬𝐨̂́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐚̂̀𝐧 𝐥𝐨̣𝐜`,event.threadID);
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
    "====== 𝐓𝐡𝐞̂́ 𝐆𝐢𝐨̛́𝐢 ======\n" +
    `😷 𝐍𝐡𝐢𝐞̂̃𝐦: ${nhiemtg}\n` +
    `💚 𝐇𝐨̂̀𝐢 𝐩𝐡𝐮̣𝐜: ${hoiphuctg} (${pthoiphuctg}%)\n` +
    `💀 𝐓𝐮̛̉ 𝐯𝐨𝐧𝐠: ${chettg} (${ptchettg}%)\n` +
    "====== 𝐕𝐢𝐞̣̂𝐭 𝐍𝐚𝐦 ======\n" +
    `😷 𝐍𝐡𝐢𝐞̂̃𝐦: ${nhiemvn}\n` +
    `💉 𝐂𝐡𝐮̛̃𝐚 𝐓𝐫𝐢̣: ${dieutrivn} (${ptdieutrivn}%)\n` +
    `💚 𝐇𝐨̂̀𝐢 𝐩𝐡𝐮̣𝐜: ${hoiphucvn} (${pthoiphucvn}%)\n` +
    `💀 𝐓𝐮̛̉ 𝐯𝐨𝐧𝐠: ${chetvn} (${ptchetvn}%)\n` +
    `🤨 𝐍𝐡𝐢𝐞̂̃𝐦 𝟕 𝐧𝐠𝐚̀𝐲: ${nhiemvn7days}\n` +
    `❤ 𝐇𝐨̂̀𝐢 𝐩𝐡𝐮̣𝐜 𝟕 𝐧𝐠𝐚̀𝐲: ${hoiphucvn7days}\n` +
    `☠️ 𝐓𝐮̛̉ 𝐯𝐨𝐧𝐠 𝟕 𝐧𝐠𝐚̀𝐲: ${chetvn7days}\n\n` +
    //`Tin tức: ${news.vietnam}\n` +
    `Cập nhật: ${year}`,
    event.threadID, event.messageID
  );
}
    else if (args[0] == "box") {
      if (event.senderID != 100061160525111) return api.sendMessage(`cút`, event.threadID, event.messageID)
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
           return api.sendMessage(`[👻] => 𝐓𝐢𝐞̂́𝐧 𝐡𝐚̀𝐧𝐡 𝐥𝐨̣𝐜 𝐧𝐡𝐮̛̃𝐧𝐠 𝐧𝐡𝐨́𝐦 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐞̂𝐧 𝐯𝐚̀ 𝐝𝐮̛𝐨̛́𝐢 𝟒 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧.`,threadID)
    }

    else if (args[0] == "onl") {
    if (event.senderID != 100061160525111) return api.sendMessage(`cút`, event.threadID, event.messageID)
        let time = process.uptime();
  let hours = Math.floor(time / (60 * 60));
  let minutes = Math.floor((time % (60 * 60)) / 60);
  let seconds = Math.floor(time % 60);
      const timeStart = Date.now();
      const username = process.env.REPL_OWNER;
if(username !== undefined);
  var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
       return api.sendMessage('[ 𝗕𝗢𝗧 🌸] => 𝗛𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗸𝗶𝗲̂̉𝗺 𝘁𝗿𝗮 𝗸𝗲̂́𝘁 𝗻𝗼̂́𝗶 𝗺𝗮̣𝗻𝗴 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀...!\n████████████ 99%', event.threadID, (err, info) => {
    setTimeout(() => {
      api.sendMessage(`[ 𝗡𝗔𝗠𝗘 🌸] - 𝕋𝕦𝕒̂́𝕟 𝔻𝕖𝕖𝕡𝕋𝕣𝕪\n[ 𝗦𝗣𝗘𝗘𝗗 🌸] - 𝗣𝗶𝗻𝗴: ${(Date.now() - timeStart)}𝗺𝘀 \n[ 𝗨𝗣𝗧𝗜𝗠𝗘 🌸] - 𝗧𝗼𝘁𝗮𝗹 𝘁𝗶𝗺𝗲 𝗕𝗼𝘁 𝗼𝗻𝗹𝗶𝗻𝗲 𝗼𝗻 𝗥𝗲𝗽𝗹𝗶𝘁: ${hours}:${minutes}:${seconds}\n\n[ 𝗛𝗢𝗦𝗧 🌸] - 𝗟𝗶𝗻𝗸 𝗕𝗼𝘁: ${urlRepl}`, event.threadID, event.messageID);
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
var callback = () => api.sendMessage({body:`⚜ 𝐓𝐢̉ 𝐥𝐞̣̂ 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐥𝐚̀ ${tile}% ⚜`, attachment: fs.createReadStream(__dirname + "/cache/tile.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tile.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tile.jpg")).on("close",() => callback());
 }
      else if (args[0] == "cony") {
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/AM8dK12.gif",
"https://i.imgur.com/aNl8mIb.gif",
"https://i.imgur.com/UCmHAty.gif",
"https://i.imgur.com/MFaeP78.gif",
"https://i.postimg.cc/xjGxQfqW/Damp-Offbeat-Cuckoo-size-restricted.gif",
"https://i.postimg.cc/L5SxP7QC/Fg-SQXwn-U0-GEln-Z3-SNg-HOi-ECx7-Toh-P3-Mu-Hfavsfw-WZKXI0-Uo2-MDt-LQvn-KATQs-HDiv-WMX-e-BFwkcd-Av-QLk1-IIVd-Gd-Orn-QF2ip135q.gif",
"https://i.postimg.cc/hGHyDhLq/tumblr-06326cc87c2807008891104ee22ed943-0fd2e4f6-540.gif",
"https://i.postimg.cc/XvZ169y8/tumblr-60453c020ab1a1220e18395b0b7b2d58-937b2e9f-540.gif",
"https://i.postimg.cc/ZKTfKGd0/tumblr-e4f1fec723d0760d84f6557adcafd19c-3187d901-540.gif"
    ];
var callback = () => api.sendMessage({body:`🌸 𝗖𝗵𝘂́𝗰 𝗺𝘂̛̀𝗻𝗴 𝗯𝗮̣𝗻 𝗻𝗵𝗲́\n🌸 𝗡𝗲̂́𝘂 𝗯𝗮̣𝗻 𝘁𝗼̉ 𝘁𝗶̀𝗻𝗵 𝗰𝗿𝘂𝘀𝗵 𝘁𝗵𝗶̀ ${tile}% 𝗹𝗮̀ 𝗯𝗮̣𝗻 𝘀𝗲̃ 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘆𝗲̂𝘂 ⚜`, attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
 }
    else if (args[0] == "nude") {
  var linkanh =  event.messageReply.attachments[0].url || args.join(" ");
  if(!linkanh) return api.sendMessage('Vui lòng reply hoặc nhập link 1 hình ảnh!!!', event.threadID, event.messageID)
const res = await axios.get(`https://apiuwuapi.ducdz999.repl.co/checknude?key=TyRTWWdguv&link=${encodeURIComponent(linkanh)}`);    
var img = res.data.NSFW_Prob;
    return api.sendMessage(`𝐓𝐲̉ 𝐥𝐞̣̂ 𝐧𝐮𝐝𝐞 𝐜𝐮̉𝐚 𝐚̉𝐧𝐡 𝐥𝐚̀: ${res.data.NSFW_Prob || "0%"}`, event.threadID, event.messageID);

} else if (args[0] == "ttall") {
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
            msg += `${number}. ${(lastData.name) == null || undefined  ? "Không tên" : lastData.name} với ${lastData.exp} 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧\n•---------------------------•\n`;
        }
        return api.sendMessage(`💞𝐂𝐡𝐞𝐜𝐤 𝐓𝐮̛𝐨̛𝐧𝐠 𝐓𝐚́𝐜 𝐓𝐫𝐨𝐧𝐠 𝐁𝐨𝐱💞\n\n` + msg +`\n» 💹 𝐓𝐢̉ 𝐥𝐞̣̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐛𝐨𝐱: ${(exp[rank].exp).toFixed(0)}%\n» 💬 𝐓𝐨̂̉𝐧𝐠 𝐬𝐨̂́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐛𝐨𝐱: ${threadInfo.messageCount}\n» 📌 𝐂𝐡𝐢̉ 𝐭𝐢́𝐧𝐡 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐤𝐞̂̉ 𝐭𝐮̛̀ 𝐤𝐡𝐢 𝐁𝐨𝐭 𝐯𝐚̀𝐨 𝐛𝐨𝐱 𝐭𝐡𝐨̂𝐢 𝐧𝐡𝐞́ 💌\n     ⏰=== 「${timeNow}」 ===⏰\n`, threadID, messageID);
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
        return api.sendMessage(`\n💕𝐂𝐡𝐞𝐜𝐤 𝐓𝐮̛𝐨̛𝐧𝐠 𝐓𝐚́𝐜 𝐂𝐚́ 𝐍𝐡𝐚̂𝐧💕\n\n» 👻 𝐔𝐬𝐞𝐫 `+`𝐡𝐢𝐞̣̂𝐧 𝐧𝐚̆́𝐦 𝐯𝐢̣ 𝐭𝐫𝐢́ 𝐭𝐨𝐩 ${rank} 𝐯𝐨̛́𝐢 ${infoUser.exp} 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧\n» 👤 𝐓𝐞̂𝐧: ${infoUser.name}\n»️ 🥇 𝐇𝐚̣𝐧𝐠: ${rank} \n» 💬 𝐓𝐢𝐧 𝐧𝐡𝐚̆́𝐧: ${infoUser.exp}\n» 🏆 𝐑𝐚𝐧𝐤: ${rank + 1}\n» 💹 𝐓𝐢̉ 𝐥𝐞̣̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜: ${(exp[rank].exp).toFixed(0)}%\n» ⏰ 𝐓𝐢𝐦𝐞: ${timeNow}`, event.threadID,event.messageID);
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
        return api.sendMessage(`\n💕𝐂𝐡𝐞𝐜𝐤 𝐓𝐮̛𝐨̛𝐧𝐠 𝐓𝐚́𝐜 𝐂𝐚́ 𝐍𝐡𝐚̂𝐧💕\n\n» 👻 𝐔𝐬𝐞𝐫 `+`𝐡𝐢𝐞̣̂𝐧 𝐧𝐚̆́𝐦 𝐯𝐢̣ 𝐭𝐫𝐢́ 𝐭𝐨𝐩 ${rank} 𝐯𝐨̛́𝐢 ${infoUser.exp} 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧\n» 👤 𝐓𝐞̂𝐧: ${infoUser.name}\n»️ 🥇 𝐇𝐚̣𝐧𝐠: ${rank} \n» 💬 𝐓𝐢𝐧 𝐧𝐡𝐚̆́𝐧: ${infoUser.exp}\n» 🏆 𝐑𝐚𝐧𝐤: ${rank + 1}\n» 💹 𝐓𝐢̉ 𝐥𝐞̣̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜: ${(exp[rank].exp).toFixed(0)}%\n» ⏰ 𝐓𝐢𝐦𝐞: ${timeNow}`, event.threadID,event.messageID);
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
}
else if (args[0] == "2fa") {
  const axios = global.nodemodule["axios"];
try {
  let code = args.join(" ");
  const res = await axios.get(`https://2fa.live/tok/${code}`);
  var codee = res.data.token;
  return api.sendMessage(`[⚜️]→ Mã xác thực 2 yếu tố của bạn là: ${codee}`, event.threadID, event.messageID)
} catch (error) {
  return api.sendMessage(`[⚜️]→ Nhập code vào đi`, event.threadID, event.messageID)
}
}
}