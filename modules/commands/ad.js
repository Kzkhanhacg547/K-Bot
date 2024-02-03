module.exports.config = {
  name: "ad",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Kz",
  description: "xem thông tin ",
  commandCategory: "Admin",
    cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ad.gif")) request("https://i.imgur.com/h03Z8AY.gif").pipe(fs.createWriteStream(dirMaterial + "ad.gif"));
}
module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;

    if (!args[0]) {
     var msg = `==== [ 𝗠𝗘𝗡𝗨 𝗔𝗗𝗠𝗜𝗡 ] ====
━━━━━━━━━━━━━━━━━━\n\n𝟭. 𝐊𝐳_𝐊𝐡á𝐧𝐡 ( 𝗮𝗱𝗺𝗶𝗻 𝗰𝗵𝗶́𝗻𝗵 )\n𝟮. 𝐘𝐞̂́𝐧 𝐍𝐡𝐢👾\n𝟯. 𝐋𝐞̂ 𝐒𝐨̛𝐧 🦨\n𝟰. 𝐍𝐠ọ𝐜 𝐇â𝐧 🐢\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`

        return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/noprefix/ad.gif`)}, event.threadID, (error, info) => {

            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
}
    module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`𝗫𝗶𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 đ𝗼̛̣𝗶 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘅𝘂̛̉ 𝗹𝘆́ !`, event.threadID, (err, info) =>
  setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;


    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "Kz" :
          case "admin 1":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `梁ADMIN BOT梁\n[🕊] 𝗧𝗲̂𝗻: 🎀 𝐊𝐳_𝐊𝐡á𝐧𝐡 (𝙖𝙙𝙢𝙞𝙣 𝘾𝙝𝙞́𝙣𝙝)\n[🌐] 𝗨𝗜𝗗:100081129610697\n[👤] 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: Nam\n[🎊] 𝗦𝗶𝗻𝗵 𝗻𝗵𝗮̣̂𝘁: 10-11-27\n[🏠] Đ𝗲̂́𝗻 𝘁𝘂̛̀: Hải Dương\n[🌸] 𝗟𝗶𝗻𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:https://fb.me/kzkhanh547\n • Cảm ơn vì đã sử dụng 🫧 𝐊𝐳_𝑩𝑶𝑻 🎀 ≧▽≦\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n
[📝] Bot được điều hành bởi 𝐊𝐳_𝐊𝐡á𝐧𝐡\n█░▄▀░▀▀▀█
█▀▄░░░▄▀░
▀░▀▀░▀▀▀▀
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdgirlvdgirl')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "" :
            case "" :
          case "admin 2":
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻: 𝐓𝐫𝐚̂̀𝐧 𝐓𝐡𝐢̣ 𝐘𝐞̂́𝐧 𝐍𝐡𝐢
🎟️  𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: 𝐂𝐡𝐢𝐁𝐢
🌹 𝐍𝐚̆𝐦 𝐬𝐢𝐧𝐡: 𝟐𝟎𝟎𝟕
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍𝐮̛̃
📅 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟏𝟎 - 𝟑
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟏𝐦𝟔𝟓 
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐍𝐢𝐧𝐡 𝐁𝐢̀𝐧𝐡
🏠 𝗡𝗼̛𝗶 𝗼̛̉: 𝐓𝐡𝐚̀𝐧𝐡 𝐩𝐡𝐨̂́ 𝐇𝐨̂̀ 𝐂𝐡𝐢́ 𝐌𝐢𝐧𝐡
💞 𝗖𝘂𝗻𝗴: 𝐒𝐨𝐧𝐠 𝐍𝐠𝐮̛
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: ...
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/yennhy27.chibi
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 ❤ 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ ❤`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdnhacv2')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "" :
            case "" :
          case "admin 3":
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻: Lê Đình Sơn
🎟️  𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: Hotboyasanh
🌹 𝐍𝐚̆𝐦 𝐬𝐢𝐧𝐡: 2007
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: Nam
📅 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 4/5
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: k nhớ 🥵
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: Hưng Yên
🏠 𝗡𝗼̛𝗶 𝗼̛̉: Gia Lai
💞 𝗖𝘂𝗻𝗴: Kim Ngưu
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: Hãm
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/sondeptraihotboiso1thegioi2007?mibextid=ZbWKwL
━━━━━━━━━━━━━━━`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/tamtrangv2')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "" :
            case "" :
          case "admin 4":
        case "4": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻: 𝐓𝐫ầ𝐧 𝐓𝐡ị 𝐍𝐠ọ𝐜 𝐇â𝐧
🎟️ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: 𝐓𝐢𝐧𝐲
🌹 𝐍ă𝐦 𝐬𝐢𝐧𝐡: 𝟐𝟎𝟎𝟕 
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝐍ữ
📅 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 𝟐𝟒/𝟔
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟏𝐦𝟔𝟑
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: 𝐍𝐢𝐧𝐡 𝐁ì𝐧𝐡
🏠 𝗡𝗼̛𝗶 𝗼̛̉: 𝐇𝐨̂̀ 𝐂𝐡𝐢́ 𝐌𝐢𝐧𝐡 𝐂𝐢𝐭𝐲
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: ...
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/100085279261059
◆━━ 𝐍𝐠ọ𝐜 𝐇â𝐧 ━━◆`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/chill')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
          default:
           const choose = parseInt(event.body);
              if (isNaN(event.body)) return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
              if (choose > 3 || choose < 1) return api.sendMessage("𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
    }