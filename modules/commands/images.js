module.exports.config = {
    name: "images",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "tpk",//tích hợp all api của tpk
    description: "Xem tất cả các ảnh trên bot",
    commandCategory: "Tiện ích",
    usages: "số thứ tự",
    cooldowns: 0,
    envConfig: {
    cooldownTime: 1200000
    }
  };
  module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ah.gif")) request("https://i.imgur.com/6u3KITx.gif").pipe(fs.createWriteStream(dirMaterial + "ah.gif"));
  }
  module.exports.run = async function ({ event, api , args, Users}){
    const fs = require("fs");
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["𝗔̉𝗻𝗵 𝗚𝗮́𝗶 😻", "𝗔̉𝗻𝗵 𝗧𝗿𝗮𝗶 👤", "𝗔̉𝗻𝗵 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 🦄", "𝗔̉𝗻𝗵 𝗖𝗼̂𝗻𝗴 𝗰𝗵𝘂́𝗮 👑", "𝗔̉𝗻𝗵 𝗶𝗴 🎃", "𝗔̉𝗻𝗵 𝗚𝗮́𝗶 𝗻𝗴𝗮 🇷🇺", "𝗔̉𝗻𝗵 𝗚𝗮́𝗶 𝗻𝗵𝗮̣̂𝘁 🇯🇵", "𝗔̉𝗻𝗵 𝗺𝗲𝗺𝗲 😹", "𝗔̉𝗻𝗵 𝗦𝗮́𝘂 𝗺𝘂́𝗶 🤤", "𝗔̉𝗻𝗵 𝗱𝘂́ 👙", "𝗔̉𝗻𝗵 𝗺𝗼̂𝗻𝗴 🍑", "𝗔̉𝗻𝗵 𝗻𝘂𝗱𝗲 🌚", "𝗔̉𝗻𝗵 𝗰𝘂 👀", "𝗔̉𝗻𝗵 𝗚𝗮́𝗶 𝗮́𝗼 𝗱𝗮̀𝗶 👗", "𝗔̉𝗻𝗵 𝗛𝗼̣𝗰 𝘀𝗶𝗻𝗵 🎒", "𝗔̉𝗻𝗵 𝘁𝘄 🌐", "𝗔̉𝗻𝗵 𝗟𝗮̂𝗺 𝘃𝗹𝗼𝗴 ✔️", "𝗔̉𝗻𝗵 Đ𝗼̣̂ 𝗺𝗶𝘅𝗶 🐰", "𝗔̉𝗻𝗵 𝗝𝗮𝗰𝗸 🐝", "𝗔̉𝗻𝗵 𝗦𝗼̛𝗻 𝘁𝘂̀𝗻𝗴 🎀", "𝗔𝗻𝗶𝗺𝗲 Đ𝘂̛́𝗮 𝗰𝗼𝗻 𝗰𝘂̉𝗮 𝘁𝗵𝗼̛̀𝗶 𝘁𝗶𝗲̂́𝘁 ⛅", "𝗔𝗻𝗶𝗺𝗲 𝗖𝗵𝗶𝘁𝗮𝗻𝗱𝗮 👹", "𝗔𝗻𝗶𝗺𝗲 𝗡𝗶𝗻𝗼 💗", "𝗔𝗻𝗶𝗺𝗲 𝗶𝘁𝘀𝘂𝗸𝗶 💕", "𝗔𝗻𝗶𝗺𝗲 𝗟𝗼𝗹𝗶 👼", "𝗔𝗻𝗶𝗺𝗲 𝗞𝗮𝗻𝗮 ❣️", "𝗔𝗻𝗶𝗺𝗲 𝗧𝗮𝗸𝘁𝗼𝗽𝘀𝘁𝗶𝗻𝘆 🌸", "𝗔𝗻𝗶𝗺𝗲 𝗔𝗻𝘆𝗮 💫", "𝗔𝗻𝗶𝗺𝗲 𝗠𝗶𝗿𝗮𝗶 ✨", "𝗔𝗻𝗶𝗺𝗲 𝗩𝗶𝗼𝗹𝗲𝘁 🔥", "𝗔𝗻𝗶𝗺𝗲 𝗥𝗲𝗺 🌀", "𝗔𝗻𝗶𝗺𝗲 𝗬𝘂𝘂𝗹𝘇𝘂𝗺𝗶 🦠", "𝗔𝗻𝗶𝗺𝗲 𝗠𝗶𝗰𝗰𝗵𝗼𝗻𝘀𝗵𝗶𝗸𝗶𝗺𝗼𝗿𝗶 🥀", "𝗔𝗻𝗶𝗺𝗲 𝗣𝗵𝗼𝗻𝗴 𝗰𝗮̉𝗻𝗵 🏞️", "𝗔𝗻𝗶𝗺𝗲 𝗚𝘂𝗿𝗮 🦈", "𝗔𝗻𝗶𝗺𝗲 𝗟𝘂𝗰𝘆 👼", "𝗔𝗻𝗶𝗺𝗲 𝗜𝘁𝗮𝗰𝗵𝗶 👁️", "𝗔𝗻𝗶𝗺𝗲 𝗗𝗼𝗿𝗮𝗲𝗺𝗼𝗻 🐯", "𝗔𝗻𝗶𝗺𝗲 𝗡𝗮𝗿𝘂𝘁𝗼 ⚔️", "𝗔𝗻𝗶𝗺𝗲 𝗹𝘂𝗳𝘆 👒", "𝗠𝘃 𝗴𝗮́𝗶 ❤️", "𝗠𝘃 𝘁𝗿𝗮𝗶 💓", "𝗠𝘃 𝘀𝗲𝘅 💚", "𝗠𝘃 𝘁𝗶𝗸𝘁𝗼𝗸 💜", "𝗠𝘃 𝗮𝗻𝗶𝗺𝗲 💞", "𝗠𝘃 𝗻𝘂̛̃ 𝗮́𝗼 𝗱𝗮̀𝗶 🍄", "𝗠𝘃 𝗺𝘂𝘀𝗶𝗰 💗", "𝗠𝘃 𝗯𝗮̂̀𝘂 𝘁𝗿𝗼̛̀𝗶 🌸", "𝗠𝘃 𝗱𝗼𝗿𝗮𝗲𝗺𝗼𝗻 🌺", "𝗠𝘃 𝗼𝗻𝗲 𝗽𝗶𝗲𝗰𝗲 🌷", "𝗠𝘃 𝗻𝗮𝗿𝘂𝘁𝗼 💝", "𝗠𝘃 𝘁𝗲̂́𝘁 🧧", "𝗠𝘃 𝗻𝗵𝗮̣𝗰 𝗰𝗵𝘂̛̃ 🎼", "𝗠𝘃 𝗰𝗵𝗶𝗹𝗹 💖", "𝗠𝘃 𝗮𝗻𝗶𝗺𝗲 𝘃𝟮 💙", "𝗠𝘃 𝗴𝗼𝗸𝘂 💘", "𝗠𝘃 𝘁𝗮̂𝗺 𝘁𝗿𝗮̣𝗻𝗴 🖤"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 20;
    var numPage = Math.ceil(b / limit);
    var msg = `====== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗜𝗠𝗔𝗚𝗘 ]  ======\n━━━━━━━━━━━━━━━━━━\n💞 𝗣𝗵𝗶́𝗮 𝗱𝘂̛𝗼̛́𝗶 𝗹𝗮̀ 𝗸𝗵𝗼 𝗮̉𝗻𝗵 𝗧𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗯𝗼𝘁\n⚜️ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼 𝗮̉𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗰𝗼́ ${name.length} 𝗹𝗼𝗮̣𝗶 𝗮̉𝗻𝗵\n\n`;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += `[ ${i+1} ] → ${name[i]}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━\n🌸 𝗕𝗮̣𝗻 ${name1} 𝗥𝗲𝗽𝗹𝘆 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝘃𝗮̀ 𝗰𝗵𝗼̣𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗮̉𝗻𝗵 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆\n🌐 𝗗𝘂̀𝗻𝗴 !𝗮̉𝗻𝗵 𝟮 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗹𝗶𝘀𝘁 𝗮̉𝗻𝗵 𝗮𝗻𝗶𝗺𝗲\n🎥 𝗗𝘂̀𝗻𝗴 !𝗮̉𝗻𝗵 𝟯 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝘃𝗶𝗱𝗲𝗼\n━━━━━━━━━━━━━━━━━━\n🎶 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗲𝗽𝗹𝘆 𝗰𝘂̀𝗻𝗴 𝗹𝘂́𝗰 𝗻𝗵𝗶𝗲̂̀𝘂 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝗹𝗮̂́𝘆 𝗻𝗵𝗶𝗲̂̀𝘂 𝗮̉𝗻𝗵,𝘃𝗱 𝗵𝗼̛𝗻`;
    return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/noprefix/ah.gif`)}, event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
    const { body , threadID , messageID } = event;
    const choiceList = body.split(' ');
    var urls = [];
    for ( const i of choiceList ) {
             if(i == "1"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/gai");
}
         else if(i == "2"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/trai");
}
         else if(i == "3"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/cosplay");
}
          else if(i == "4"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/congchua");
}
          else if(i == "5"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/ig");
}
         else if(i == "6"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/gainga");
}
         else if(i == "7"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/gainhat");
}
         else if(i == "8"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/meme");
}
         else if(i == "9"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/saumui");
}
         else if(i == "10"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/du");
}
         else if(i == "11"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/mong");
}
        else if(i == "12"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/nude");
        }
         else if(i == "13"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/cu");
}
         else if(i == "14"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/nuaodai");
}
         else if(i == "15"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/hocsinh");
}
         else if(i == "16"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/tw");
}
         else if(i == "17"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/lamvlog");
}
         else if(i == "18"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/domixi");
}
         else if(i == "19"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/jack");
}
         else if(i == "20"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/sontung");
}
        else if(i == "21"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/duaconcuatt");
}
       else if(i == "22"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/chitanda");
}
       else if(i == "23"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/nino");
}
       else if(i == "24"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/itsuki");
}
       else if(i == "25"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/loli");
}
       else if(i == "26"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/kana");
}
       else if(i == "27"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/taktopdestiny");
}
       else if(i == "28"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/anya");
}
       else if(i == "29"){
           urls.push("https://TPKTAO.last-namename.repl.co/image/mirai");
}
       else if(i == "30"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/violet");
}
       else if(i == "31"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/rem");
}
       else if(i == "32"){
          urls.push("https://TPKTAO.last-namename.repl.co/image/yuulzumi");
}
       else if(i == "33"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/micchonshikimori");
}
       else if(i == "34"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/phongcanh");
}
       else if(i == "35"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/gura");
}
       else if(i == "36"){
         urls.push("https://TPKTAO.last-namename.repl.co/image/lucy");
}
       else if(i == "37"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/itachi");
}
       else if(i == "38"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/doraemon");
}
        else if(i == "39"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/naruto");
}
        else if(i == "40"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/lufy");
}
        else if(i == "41"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdgai");
}
        else if(i == "42"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdtrai");
}
        else if(i == "43"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdsex");
}
        else if(i == "44"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdgai");
}
        else if(i == "45"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdanime");
}
        else if(i == "46"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdnuaodai");
}
        else if(i == "47"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdmschil");
}
        else if(i == "48"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdbautroi");
}
        else if(i == "49"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vddoraemon");
}
    else if(i == "50"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdlufy");
}
    else if(i == "51"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdnaruto");
}
    else if(i == "52"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdtet");
}
    else if(i == "53"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdnhacchu");
}
    else if(i == "54"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdchil");
}
    else if(i == "55"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdanimev2");
}
    else if(i == "56"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdgoku");
}
    else if(i == "57"){
        urls.push("https://TPKTAO.last-namename.repl.co/image/vdtamtrang");
  };
};  if (urls.length === 0) return api.sendMessage('→ Vui lòng nhập từ 1 đến 57 để get ảnh!', threadID, messageID);
    var image = [];
    for (const o of urls) {
        try {
            const res = await axios.get(o);
            if (o.includes('TPKTAO')) {
                var url = res.data.url;
            } else {
                var url = res.data.data;
            };
            const stream = (await axios.get(url,{
                responseType: "stream"
            })).data;
            image.push(stream);
        } catch (e) {
            console.error(e);
        }
    };
    const msg = {
        body: `🖼️=== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗔̉𝗡𝗛 ] ===🖼️
\n💓 𝗟𝗮̂́𝘆 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗮̉𝗻𝗵 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻\n💝 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗹𝗮̂́𝘆 𝗻𝗵𝗶𝗲̂̀𝘂 𝗮̉𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝗺𝗼̣̂𝘁 𝗹𝘂́𝗰 𝗿𝗲𝗽𝗹𝘆 𝗻𝗵𝗶𝗲̂̀𝘂 𝘀𝗼̂́ đ𝗲̂̉ 𝗹𝗮̂́𝘆 𝗻𝗵𝗶𝗲̂̀𝘂 𝗮̉𝗻𝗵`,
        attachment: image
    };
    api.sendMessage(msg, threadID, messageID);
};