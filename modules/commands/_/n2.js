module.exports.config = {
    name: "\n2",
    version: "1.0.0", 
    hasPermssion: 0,
    credits: "Who is Hakira",
    description: "cmm beo",
    commandCategory: "Hình ảnh",
    usages: "",
    cooldowns: 5,
    depndencies: {
        "axios": ""
    }
};
 
module.exports.run = async function ({ api, event,args,client,Users,Threads,__GLOBAL,Currencies }) {
   const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
    const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
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
       const dateNow = Date.now();
    const time = process.uptime(),
	      	anh = Math.floor(time / (60 * 60)),
		      la = Math.floor((time % (60 * 60)) / 60),
		      dtai = Math.floor(time % 60);
    const threadInfo = await api.getThreadInfo(event.threadID)
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
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
        var getlink = (await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)).data;
        var day = getlink.data.date;
    var name = await Users.getNameUser(event.senderID);
    var tai = event.senderID;
 api.sendMessage({
      body:  `======「 𝐒𝐀𝐈 𝐋𝐄̣̂𝐍𝐇 」======\n⏰𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${gio}\n🗓𝐓𝐡𝐮̛́: ${thu}\n🗂𝐃𝐮̀𝐧𝐠 𝐡𝐞𝐥𝐩 𝐡𝐨𝐚̣̆𝐜 𝐦𝐞𝐧𝐮 𝐚𝐥𝐥 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐥𝐞̣̂𝐧𝐡\n𝐓𝐇𝐎̂𝐍𝐆 𝐓𝐈𝐍 𝐍𝐆𝐔̛𝐎̛̀𝐈 𝐃𝐔̀𝐍𝐆 𝐋𝐄̣̂𝐍𝐇\n📇𝐓𝐞̂𝐧:\n${name}\n💾𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://wwww.facebook.com/${tai}\n🪪𝐔𝐢𝐝: ${tai}\n𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 👍 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐧𝐡𝐨́𝐦\n⏰𝐁𝐨𝐭 𝐡𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐝𝐚̃ 𝐨𝐧𝐥 𝐝𝐮̛𝐨̛̣𝐜
${anh} 𝐆𝐢𝐨̛̀,${la} 𝐏𝐡𝐮́𝐭,${dtai} 𝐆𝐢𝐚̂𝐲
`,attachment: [await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`), await streamURL(threadInfo.imageSrc)]
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
    const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
 var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
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
let color = threadInfo.color;
  let icon = threadInfo.emoji;
  let threadMem = threadInfo.participantIDs.length;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.sendMessage({
      body: `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${id}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadMem}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${threadInfo.messageCount}\n🎀 𝟭: 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n📑 𝟮: 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n📝𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘅𝗲𝗺 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡 𝗻𝗵𝗼́𝗺 𝘃𝗮̀ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 `,
           attachment: await streamURL(threadInfo.imageSrc)
},event.threadID, (err, info) => {
   
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    permssion,
    getText,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`vui lòng chờ 1 xíu`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
          case "1": {
         var threadInfo = await api.getThreadInfo(event.threadID);
    let qtv = threadInfo.adminIDs.length;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
        const info = (await api.getUserInfo(qtv2[i].id));
        const name = info[qtv2[i].id].name;
        listad += '' + `${dem++}` + '. ' + name + '\n';
    }

    api.sendMessage(
        `𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 ${qtv} 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡:\n ${listad}`,event.threadID,event.messageID)
}break;
        case "2": {
          const { ADMINBOT } = global.config;
           listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`»  ${name}\nLink: fb.me/${idAdmin}`);              
                }
            }
           return api.sendMessage(`『 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 』\n${msg.join("\n")}\n`, event.threadID, event.messageID);
}break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 2 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
       }
    }
}
}