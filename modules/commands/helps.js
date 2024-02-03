module.exports.config = {
  name: "helps",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Hướng dẫn cho người mới",
  commandCategory: "Danh sách lệnh",
  usages: "[Tên module]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.handleEvent = function ({ api, event }) {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const { commands } = global.client;
    const { threadID, messageID, body } = event;
    if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
    const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
    if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const command = commands.get(splitBody[1].toLowerCase());
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
        return axios.get('https://sex.accountkz.repl.co/girlv2').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {

          api.sendMessage({body:` » Lệnh: ${command.config.name}
» Thực thi: ${command.config.description}
» Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : "Chưa có hướng dẫn cụ thể"}
» Thời gian chờ: ${command.config.cooldowns}
» Quyền hạn: ${((command.config.hasPermssion == 0) ? `Người dùng` : (command.config.hasPermssion == 1) ? `Quản trị viên nhóm` : `Quản trị viên BOT`)}
» Credit: ${command.config.credits}`, 
            attachment: fs.createReadStream(__dirname + `/cache/4723.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/4723.${ext}`), event.messageID);
        }; request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/4723.${ext}`)).on("close", callback);
     });
}

module.exports.run = function({ api, event, args }) {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs-extra");
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const command = commands.get((args[0] || "").toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  var tl = ["𝐀𝐝𝐦𝐢𝐧 𝐜𝐮𝐭𝐞 𝐡𝐨̛𝐧 𝐛𝐚̣𝐧","𝐂𝐨𝐧 𝐛𝐨𝐭 𝐜𝐮𝐭𝐞 𝐡𝐨̛𝐧 𝐛𝐚̣𝐧","𝐒𝐩𝐚𝐦 𝐛𝐨𝐭 𝐥𝐚̀ 𝐚̆𝐧 𝐛𝐚𝐧 𝐯𝐢̃𝐧𝐡 𝐯𝐢𝐞̂̃𝐧","𝐁𝐨𝐭 𝐢𝐮 𝐛𝐚̣𝐧 𝐯𝐜𝐥 𝐥𝐮𝐨̂𝐧","𝐒𝐮̛̃𝐚 𝐯𝐢𝐧𝐚𝐦𝐢𝐥𝐤 𝐥𝐚̀𝐦 𝐭𝐮̛̀ 𝐬𝐮̛̃𝐚","𝐀𝐝𝐦𝐢𝐧 𝐫𝐚̂́𝐭 𝐯𝐮𝐢 𝐭𝐢́𝐧𝐡 𝐜𝐨́ 𝐥𝐮́𝐜 𝐤𝐡𝐨̂𝐧𝐠 𝐯𝐮𝐢","𝐓𝐢𝐞̂̀𝐧 𝐥𝐚̀ 𝐠𝐢𝐚̂́𝐲","𝐗𝐚̀𝐢 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐪𝐮𝐚́ 𝟏𝟖𝟎𝐩 𝐬𝐞̃ 𝐤𝐡𝐢𝐞̂́𝐧 𝐛𝐚̣𝐧 𝐞̂́","𝐋𝐮̛𝐨̛́𝐭 𝐭𝐢𝐤𝐭𝐨𝐤 𝐪𝐮𝐚́ 𝟏𝟖𝟎𝐩 𝐬𝐞̃ 𝐛𝐢̣ 𝐚̉𝐨","𝐂𝐨𝐧 𝐭𝐡𝐨̉ 𝐜𝐡𝐚̣𝐲 𝐫𝐚̂́𝐭 𝐧𝐡𝐚𝐧𝐡","𝐌𝐚̣̆𝐭 𝐭𝐫𝐚̆𝐧𝐠 𝐡𝐢̀𝐧𝐡 𝐯𝐮𝐨̂𝐧𝐠","𝐂𝐡𝐨̛𝐢 𝐠𝐚́𝐢 𝐝𝐮̛𝐨̛́𝐢 𝟏𝟖 𝐭𝐮𝐨̂̉𝐢 𝐫𝐚̂́𝐭 𝐥𝐚̂𝐮 𝐫𝐚","𝐁𝐚̣𝐧 𝐫𝐚̂́𝐭 𝐱𝐢𝐧𝐡 𝐠𝐚́𝐢","𝐌𝐢̀𝐧𝐡 𝐥𝐚̀ 𝐁𝐨𝐭 𝐑𝐚̆𝐦","𝐙𝐮́ 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐧𝐡𝐨̉ 𝐯𝐜𝐥","𝐂𝐮 𝐛𝐚̣𝐧 𝐪𝐮𝐚́ 𝐛𝐞́","𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐚̣𝐲 𝐛𝐨𝐭 𝐫𝐚̂́𝐭 𝐝𝐞̂̃ 𝐭𝐡𝐮̛𝐨̛𝐧𝐠","𝐂𝐡𝐨̛𝐢 𝐦𝐚𝐢 𝐭𝐡𝐮𝐲́ 𝐭𝐨̂́𝐭 𝐜𝐡𝐨 𝐬𝐮̛́𝐜 𝐤𝐡𝐨𝐞̉"];
  var tle = tl[Math.floor(Math.random() * tl.length)];
  if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `🌸 [ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} ] 🌸\n${commandGroup.cmds.join(' • ')}\n\n`);
    return axios.get('https://sex.accountkz.repl.co/girlv2').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({ body:`👑 𝐋𝐈𝐒𝐓 𝐓𝐎̂̉𝐍𝐆 𝐋𝐄̣̂𝐍𝐇 𝐁𝐎𝐓 👑\n\n` + msg + `🍄▬▬▬•❤️‍🔥•▬▬▬🍄\n🎓 𝐂𝐨́ 𝐭𝐡𝐞̂̉ 𝐛𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐛𝐢𝐞̂́𝐭:\n[ ${tle} ]\n💓 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐨́ ${commands.size} 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭 𝐧𝐚̀𝐲 💗\n🌟 𝐒𝐮̛̉ 𝐝𝐮̣𝐧𝐠: "${prefix}𝗵𝗲𝗹𝗽 + 𝘁𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵" 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵\n💝\n💘 𝐓𝐫𝐞̂𝐧 𝐋𝐚̀ 𝐓𝐨𝐚̀𝐧 𝐁𝐨̣̂ 𝐋𝐞̣̂𝐧𝐡 𝐂𝐨́ 𝐓𝐫𝐨𝐧𝐠 𝐅𝐢𝐥𝐞 𝐁𝐨𝐭\n🔰 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗞𝗵𝗼̂𝗻𝗴 𝗦𝗽𝗮𝗺 𝗕𝗼𝘁 𝗗𝘂̛𝗼̛́𝗶 𝗠𝗼̣𝗶 𝗛𝗶̀𝗻𝗵 𝗧𝗵𝘂̛́𝗰 [❗]`, 
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
};
if (!command) {
    const commandsPush = [];
    const page = parseInt(args[0]) || 1;
    const pageView = 20;
    let i = 0;
    let msg = " 🔱 𝐃𝐀𝐍𝐇 𝐒𝐀́𝐂𝐇 𝐋𝐄̣̂𝐍𝐇 🔱\n\n";
    for (var [name, value] of (commands)) {
        name += `
» ${value.config.description}
Thời gian chờ: ${value.config.cooldowns}s
Quyền hạn: ${((value.config.hasPermssion == 0) ? `Người dùng` : (value.config.hasPermssion == 1) ? `Quản trị viên nhóm` : `Quản trị viên BOT`)}\n`;
        commandsPush.push(name);
    }

    commandsPush.sort((a, b) => a.data - b.data);

    const first = pageView * page - pageView;
    i = first;
    const helpView = commandsPush.slice(first, first + pageView);

    for (let cmds of helpView)
        msg += `🌸 ${cmds}\n`;
    const cmdsView = `
🔱 𝐓𝐫𝐚𝐧𝐠 ${page}/${Math.ceil(commandsPush.length/pageView)}
🍄▬▬▬▬▬▬▬ •❤️‍🔥• ▬▬▬▬▬▬▬🍄
🎓 𝐂𝐨́ 𝐭𝐡𝐞̂̉ 𝐛𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐛𝐢𝐞̂́𝐭:\n[ ${tle} ]
💓 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐨́ ${commandsPush.length} 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭 𝐧𝐚̀𝐲 💗
🌟 𝐒𝐮̛̉ 𝐝𝐮̣𝐧𝐠: "${prefix}𝗵𝗲𝗹𝗽 + 𝘁𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵" 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵
🔰 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗞𝗵𝗼̂𝗻𝗴 𝗦𝗽𝗮𝗺 𝗕𝗼𝘁 𝗗𝘂̛𝗼̛́𝗶 𝗠𝗼̣𝗶 𝗛𝗶̀𝗻𝗵 𝗧𝗵𝘂̛́𝗰 [❗]`;
    return axios.get('https://sex.accountkz.repl.co/girlv2').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({body: msg + cmdsView, attachment: fs.createReadStream(__dirname + `/cache/478.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/478.${ext}`);
        if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return; 
        }, event.messageID);
    }
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/478.${ext}`)).on("close", callback);
     })
};
return axios.get('https://sex.accountkz.repl.co/girlv2').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({body:`
╭───╮\n   ${command.config.name}\n╰───╯ \n
» 📜 𝐌𝐨̂ 𝐭𝐚̉: ${command.config.description}
» 💓 𝐇𝐮̛𝐨̛́𝐧𝐠 𝐝𝐚̂̃𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : "Chưa có hướng dẫn cụ thể"}
» ⏱ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡𝐨̛̀: ${command.config.cooldowns}
» 🗂 𝐓𝐡𝐮𝐨̣̂𝐜 𝐧𝐡𝐨́𝐦: ${command.config.commandCategory}
» 👥 𝐐𝐮𝐲𝐞̂̀𝐧 𝐡𝐚̣𝐧: ${((command.config.hasPermssion == 0) ? `Người dùng` : (command.config.hasPermssion == 1) ? `Quản trị viên nhóm` : `Quản trị viên BOT`)}
» 👻 𝐂𝐫𝐞𝐝𝐢𝐭: ${command.config.credits}
✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`,
        attachment: fs.createReadStream(__dirname + `/cache/475.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/475.${ext}`), event.messageID);
        }; request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/475.${ext}`)).on("close", callback);
     })
};
