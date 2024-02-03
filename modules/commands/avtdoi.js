module.exports.config = {
  name: "avtdoi",
  version: "1.0.0",
  hasPermission: 0,
  credits: "TDong", //mod thêm by tpk + data
  description: "",
  commandCategory: "THÀNH VIÊN",
  usages: "+ tên nhân vật",
  cooldowns: 5
};

module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "avtd.gif")) request("https://i.imgur.com/fFUKdcT.gif").pipe(fs.createWriteStream(dirMaterial + "avtd.gif"));
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const { threadID, messageID } = event;
    const axios = require('axios');
    const fs = require('fs-extra');
    const cLA = ['avtdoi', 'shikizum', 'houtarouchitanda', 'narutohinata', 'horimiyamura', 'sakutamai', 'nobitashizuka', 'shinichiran'];
    var count = 0;
    var cLS = '';
    for (let name of cLA) {
      var char = name.charAt(0).toUpperCase() + name.slice(1);
      cLS += `${++count}. ${char}\n`;
    };
    if (!args[0]) return api.sendMessage({ body: `💖====「 𝗔𝗩𝗔𝗧𝗔𝗥 𝗣𝗔𝗜𝗥 」====💖\n━━━━━━━━━━━━━━━━━━\n💓 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 !𝗮𝘃𝘁𝗱𝗼𝗶 + 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆\n
    1. Avtdoi randome 
    2. Shikizum × Izumi
    3. Houtarou × Chitanda
    4. Naruto × Hinata
    5. Horimiya × Miyamura
    6. Sakuta × Mai
    7. Nobita × Shizuka
    8. Shinichi × Ran
\n💝 𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝘂𝗽𝗱𝗮𝘁𝗲 𝘁𝗵𝗲̂𝗺 `, attachment: fs.createReadStream(__dirname + `/noprefix/avtd.gif`) }, event.threadID, event.messageID);
    if (!cLA.includes(args[0]) && isNaN(args[0])) return api.sendMessage(`💖====「 𝗔𝗩𝗔𝗧𝗔𝗥 𝗣𝗔𝗜𝗥 」====💖\n━━━━━━━━━━━━━━━━━━\n💓 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 !𝗮𝘃𝘁𝗱𝗼𝗶 + 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆\n
    1. Avtdoi randome 
    2. Shikizum × Izumi
    3. Houtarou × Chitanda
    4. Naruto × Hinata
    5. Horimiya × Miyamura
    6. Sakuta × Mai
    7. Nobita × Shizuka
    8. Shinichi × Ran
\n💝 𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝘂𝗽𝗱𝗮𝘁𝗲 𝘁𝗵𝗲̂𝗺 `, threadID, messageID);
    if (isNaN(args[0])) {
      var charName = args[0].toLowerCase();
    } else {
      if (parseInt(args[0]) < 1 || parseInt(args[0]) > cLA.length) return api.sendMessage(`Số tối thiểu là 1 và số tối đa là ${cLA.length}`, threadID, messageID);
      var charName = cLA[parseInt(args[0]) - 1];
    };
    const res = await axios.get(`https://TPKTAO.last-namename.repl.co/avtdois/${charName}`);
    const imageUrl = res.data.url;
    const imageUrl1 = imageUrl[0];
    var ext1 = imageUrl1.split('.');
    var ext1 = ext1[ext1.length - 1];
    const imageUrl2 = imageUrl[1];
    var ext2 = imageUrl2.split('.');
    var ext2 = ext2[ext2.length - 1];
    var img = [];
    var image1 = (await axios.get(imageUrl1, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + `/cache/avtdoi1.${ext1}`, Buffer.from(image1, "utf-8"));
    img.push(fs.createReadStream(__dirname + `/cache/avtdoi1.${ext1}`));
    var image2 = (await axios.get(imageUrl2, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + `/cache/avtdoi2.${ext2}`, Buffer.from(image2, "utf-8"));
    img.push(fs.createReadStream(__dirname + `/cache/avtdoi2.${ext2}`));
    var msg = {
      body: `==== [ 𝗔𝗩𝗔𝗧𝗔𝗥 𝗖𝗢𝗨𝗣𝗟𝗘 ] ====
━━━━━━━━━━━━━━━━━━
💖 𝗔̉𝗻𝗵 𝗮𝘃𝗮𝘁𝗮𝗿 đ𝗼̂𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆
⚙️ 𝗦𝗼̂́ 𝗮̉𝗻𝗵 𝗵𝗶𝗲̂𝗻 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼: ${res.data.count}
💞 𝗟𝗶𝗻𝗸 𝗮̉𝗻𝗵 𝟭: ${imageUrl1}
💗 𝗟𝗶𝗻𝗸 𝗮̉𝗻𝗵 𝟮: ${imageUrl2}
━━━━━━━━━━━━━━━━━━
🔗 𝗩𝗶̀ 𝗯𝗼𝘁 𝗴𝘂̛̉𝗶 𝗾𝘂𝗮 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 𝗻𝗲̂𝗻 𝗵𝗼̛𝗶 𝗺𝗼̛̀ 𝗯𝗮̣𝗻 𝗮̂́𝗻 𝘃𝗮̀𝗼 𝗹𝗶𝗻𝗸 𝗿𝗼̂̀𝗶 𝗹𝗲̂𝗻 𝗴𝗴 đ𝗲̂̉ 𝘁𝗮̉𝗶 𝘃𝗲̂̀ 𝗻𝗵𝗮`,
      attachment: img
    };
    api.sendMessage(msg, threadID, messageID);
  } catch (e) {
    api.sendMessage(`${e}`, event.threadID);
  }
};