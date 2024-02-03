var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
module.exports.config = {
  name: "bantx",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DuyVuongUwU",// Mod by Tuấn
  description: "Bàn tài xỉu nhiều người chơi",
  commandCategory: "Game",
  usages: "[new/leave/start/end]",
  cooldowns: 5
};

module.exports.handleEvent = async function({ api, event, Currencies }) {
const fs = require("fs-extra");
const { threadID, messageID, body, senderID } = event;
const folderimg = __dirname + "/trogiup/menu";
  if (!fs.existsSync(folderimg)) fs.mkdir(folderimg);
  const listImg = fs.readdirSync(folderimg);

  const typ = ['tài', 'xỉu', 'ba mặt đồng nhất và nhà cái thắng'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
  if (!body) return;
  if (body.toLowerCase() == 'tài' || body.toLowerCase() == 'xỉu' ||
body.toLowerCase() == 'ba mặt đồng nhất và nhà cái thắng') {
    const gameThread = global.taixiuS.get(threadID) || {};
    if (!gameThread) return;
    else {
      if (!gameThread.player.find(i => i.userID == senderID)) return;
      else {
        var s, q;
        var s = gameThread.player.findIndex(i => i.userID == senderID);
        var q = gameThread.player[s];
        if (q.choose.status == true) return api.sendMessage('𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐫𝐨̂̀𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐜𝐡𝐨̣𝐧 𝐥𝐚̣𝐢 💌', threadID, messageID);
        else {
          const fs = require('fs-extra');
          const axios = require('axios');
         if (body.toLowerCase() == 'tài') {
            gameThread.player.splice(s, 1);
          gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'tài' } });
            api.sendMessage({body:"「 👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐂𝐡𝐨̛𝐢 " + q.name + " 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̂́𝐭 𝐜𝐡𝐨̣𝐧 𝐓𝐀̀𝐈 🎲 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́ 😽",attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID);  
             }
       if (body.toLowerCase() == 'xỉu') {
            gameThread.player.splice(s, 1);
            gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'xỉu' } });
            api.sendMessage({body:"「 👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐂𝐡𝐨̛𝐢 " + q.name + " 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̂́𝐭 𝐜𝐡𝐨̣𝐧 𝐗𝐈̉𝐔 🎲 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́ 😽",attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID); 
        }                            
          var vv = 0,
              vvv = gameThread.player.length;
          for (var c of gameThread.player) {
            if (c.choose.status == true) vv++;
          }
          if (vv == vvv) {
            api.sendMessage({body: "𝐂𝐡𝐨̛̀ 𝐁𝐨𝐭 𝐍𝐚̆́𝐜 𝐀̀ 𝐊𝐡𝐨̂𝐧𝐠 𝐂𝐡𝐨̛̀ 𝐁𝐨𝐭 𝐋𝐚̆́𝐜 𝐍𝐡𝐞́ 🎲", attachment: createReadStream(__dirname + "/trogiup/taixiu.gif")},threadID,async  (err, data)  => { 
              if (err) return api.sendMessage(err, threadID, messageID);
              setTimeout(async function () {
                api.unsendMessage(data.messageID);
                  var ketqua = random
                  var win = [];
                  var lose = [];
                  if (ketqua.indexOf('tài') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'tài') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
                  }
             if (ketqua.indexOf('xỉu') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'xỉu') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
              }
             if (ketqua.indexOf('ba mặt đồng nhất và nhà cái thắng') == false) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'ba mặt đồng nhất và nhà cái thắng') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
  }
                  var msg = '\n👻── 𝐓𝐀𝐈 🎲 𝐗𝐈𝐔 ──👻\n💎 𝐊𝐄̂́𝐓 𝐐𝐔𝐀̉ 𝐋𝐀̀: ' + ketqua.toUpperCase() + ' 🎲\n\n➣ 𝐍𝐡𝐮̛̃𝐧𝐠 𝐜𝐨𝐧 𝐯𝐨̛̣ 𝐭𝐡𝐚̆́𝐧𝐠 𝐜𝐮̛𝐨̛̣𝐜 𝐭𝐫𝐨𝐧𝐠 𝐯𝐚́𝐧 𝐧𝐚̀𝐲 💸:\n';
                  var dem_win = 0;
                  var dem_lose = 0;
                  for (var w of win) {
                    await Currencies.increaseMoney(w.userID, parseInt(gameThread.money));
                    dem_win++;
                    msg += dem_win + '. ' + w.name + '\n𝗜𝗗: ' + w.userID + '\n';
                  }
                  for (var l of lose) {
                    await Currencies.decreaseMoney(l.userID, parseInt(gameThread.money));
                    if (dem_lose == 0) {
                      msg += '\n➣ 𝐍𝐡𝐮̛̃𝐧𝐠 𝐜𝐨𝐧 𝐯𝐨̛̣ 𝐭𝐡𝐮𝐚 𝐜𝐮̛𝐨̛̣𝐜 𝐭𝐫𝐨𝐧𝐠 𝐯𝐚́𝐧 𝐧𝐚̀𝐲 😿:\n';
                    }
                    dem_lose++;
                    msg += dem_lose + '. ' + l.name + '\n𝗜𝗗: ' + l.userID + '\n';
                  }
                  msg += '\n𝐂𝐨̣̂𝐧𝐠 𝐭𝐢𝐞̂̀𝐧 𝐯𝐚̀ 𝐭𝐫𝐮̛̀ 𝐭𝐢𝐞̂̀𝐧 💰:\n';
                  msg += '• 𝐍𝐡𝐮̛̃𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐚̆́𝐧𝐠 𝐧𝐡𝐚̣̂𝐧 𝐯𝐞̂̀ [ ' + gameThread.money + '𝐕𝐍𝐃 ] 💵\n';
                  msg += '• 𝐍𝐡𝐮̛̃𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐮𝐚 𝐛𝐢̣ 𝐭𝐫𝐮̛̀ [ ' + gameThread.money + '𝐕𝐍𝐃 ] 💵\n👻── 𝐓𝐀𝐈 🎲 𝐗𝐈𝐔 ──👻';
                  return api.sendMessage({body: msg + "\n", attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID);
              }, 5000);
            });
          }
          else return;
        }
      }
    }
  }
}
module.exports.run = async function({ api, event, args, Threads, Users, Currencies }) {
  try {
    if (!global.taixiuS) global.taixiuS = new Map();

    const { threadID, messageID, senderID } = event;
    var gameThread = global.taixiuS.get(threadID);

    if (args[0] == 'create' || args[0] == 'new' || args[0] == '-c') {
      if (!args[1] || isNaN(args[1])) return api.sendMessage('⚠ 𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐮̛𝐨̛̣𝐜 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐥𝐚̀ 𝐦𝐨̣̂𝐭 𝐜𝐨𝐧 𝐬𝐨̂́ 𝐡𝐨̛𝐩 𝐥𝐞̣̂ !', threadID, messageID);
      if (parseInt(args[1]) < 100) return api.sendMessage('⚠ 𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐮̛𝐨̛̣𝐜 𝐩𝐡𝐚̉𝐢 𝐥𝐨̛́𝐧 𝐡𝐨̛𝐧 𝐡𝐨𝐚̣̆𝐜 𝐛𝐚̆̀𝐧𝐠 𝟏𝟎𝟎$ !', threadID, messageID);
      var check = await checkMoney(senderID, args[1]);
      if (check == false) return api.sendMessage('⚠ 𝐁𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐭𝐡𝐢𝐞̂́𝐮 ' + args[1] + '$ 𝐜𝐡𝐨 𝐯𝐢𝐞̣̂𝐜 𝐭𝐚̣𝐨 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐦𝐨̛́𝐢, 𝐤𝐢𝐞̂́𝐦 𝐭𝐢𝐞̂̀𝐧 𝐭𝐡𝐞̂𝐦 𝐫𝐨̂̀𝐢 𝐭𝐚̣𝐨 𝐥𝐚̣𝐢 𝐧𝐡𝐞́', threadID, messageID);
      if (global.taixiuS.has(threadID)) return api.sendMessage('⚠ 𝐍𝐡𝐨́𝐦 𝐧𝐚̀𝐲 𝐯𝐮̛̀𝐚 𝐦𝐨̛̉ 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 !', threadID, messageID);
      var name = await Users.getNameUser(senderID);
      global.taixiuS.set(threadID, { box: threadID, start: false, author: senderID, player: [{ name, userID: senderID, choose: { status: false, msg: null } }], money: parseInt(args[1]) });
      return api.sendMessage('💎─── 𝐓𝐀𝐈 🎲 𝐗𝐈𝐔 ───💎\n\n𝐓𝐚̣𝐨 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐛𝐚̀𝐧 𝐜𝐡𝐨̛𝐢 𝐠𝐚𝐦𝐞 🌸\n=> 𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐮̛𝐨̛̣𝐜 💸: ' + parseInt(args[1]) + '$\n=> 𝐒𝐨̂́ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐨̛𝐢 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚 👤: 1 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐨̛𝐢\n=> 𝐍𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐤𝐞̂́𝐭 𝐭𝐡𝐮́𝐜 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐠𝐡𝐢 ' + global.config['PREFIX'] + this.config.name + ' 𝐞𝐧𝐝\n=> 𝐓𝐡𝐚𝐦 𝐠𝐢𝐚 𝐧𝐡𝐨́𝐦 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐲 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐠𝐡𝐢 ' + global.config['PREFIX'] + this.config.name + ' 𝐣𝐨𝐢𝐧\n\n💎─── 𝐓𝐀𝐈 🎲 𝐗𝐈𝐔 ───💎', threadID);
    }
    else if (args[0] == 'join' || args[0] == '-j') {
      if (!global.taixiuS.has(threadID)) return api.sendMessage('⚠ 𝐍𝐡𝐨́𝐦 𝐧𝐚̀𝐲 𝐡𝐢𝐞̣̂𝐧 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐨 !\n=> 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐡𝐚̃𝐲 𝐭𝐚̣𝐨 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐦𝐨̛́𝐢', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('⚠ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐲 𝐯𝐮̛̀𝐚 𝐬𝐭𝐚𝐫𝐭 𝐭𝐫𝐮̛𝐨̛́𝐜 𝐤𝐡𝐢 𝐛𝐚̣𝐧 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚 𝐧𝐞̂𝐧 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐲 𝐬𝐚𝐮 𝐤𝐡𝐢 𝐧𝐡𝐮̛̃𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜 𝐜𝐡𝐨̛𝐢 𝐱𝐨𝐧𝐠!', threadID, messageID);
      var check = await checkMoney(senderID, gameThread.money);
      if (check == false) return api.sendMessage('⚠ 𝐁𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐭𝐡𝐢𝐞̂́𝐮 ' + gameThread.money + '$ 𝐝𝐮̀𝐧𝐠 /𝐜𝐚𝐯𝐞𝐯𝐢𝐩 𝐤𝐢𝐞̂́𝐦 𝐭𝐡𝐞̂𝐦 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 😽', threadID, messageID);
      if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('⚠ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐚̣𝐧 𝐜𝐨́ 𝐦𝐚̣̆𝐭 𝐭𝐫𝐨𝐧𝐠 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐲 𝐫𝐨̂̀𝐢 !', threadID, messageID);
      var name = await Users.getNameUser(senderID);
      gameThread.player.push({ name, userID: senderID, choose: { stats: false, msg: null } });
      global.taixiuS.set(threadID, gameThread);
      return api.sendMessage('💎─── 𝐓𝐀𝐈 🎲 𝐗𝐈𝐔 ───💎\n🥳 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 !\n=> 𝐒𝐨̂́ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐨̛𝐢 𝐡𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐥𝐚̀ ' + gameThread.player.length + ' 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐨̛𝐢\n💎─── 𝐓𝐀𝐈 🎲 𝐗𝐈𝐔 ───💎', threadID, messageID);
    }
    else if (args[0] == 'leave' || args[0] == '-l') {
      if (!global.taixiuS.has(threadID)) return api.sendMessage('⚠ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐨 𝐜𝐡𝐨 𝐛𝐚̣𝐧 𝐫𝐨̛̀𝐢 !', threadID, messageID);
      if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('⚠ 𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐭𝐫𝐨𝐧𝐠 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 đ𝐞̂̉ 𝐫𝐨̛̀𝐢 !', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('⚠ 𝐁𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐯𝐮̛̀𝐚 𝐬𝐭𝐚𝐫𝐭 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐫𝐨̛̀𝐢 !', threadID, messageID);
      if (gameThread.author == senderID) {
        global.taixiuS.delete(threadID);
        var name = await Users.getNameUser(senderID);
        return api.sendMessage('➣ 𝐂𝐨𝐧 𝐠𝐡𝐞̣̂ ' + name + ' 𝐯𝐮̛̀𝐚 𝐫𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞, 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐬𝐞̃ 𝐠𝐢𝐚̉𝐢 𝐭𝐚́𝐧 !', threadID, messageID);
      }
      else {
        gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);
        global.taixiuS.set(threadID, gameThread);
        var name = await Users.getNameUser(senderID);
        api.sendMessage('𝐂𝐨𝐧 𝐠𝐡𝐞̣̂ 𝐫𝐨̛̀𝐢 𝐛𝐚̀𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠', threadID, messageID);
        return api.sendMessage('➣ 𝐂𝐨𝐧 𝐠𝐡𝐞̣̂ ' + name + '𝐯𝐮̛̀𝐚 𝐫𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 !\n=> 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐜𝐨̀𝐧 ' + gameThread.player.length + ' 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐨̛𝐢', threadID);
      }
    }
    else if (args[0] == 'start' || args[0] == '-s') {
      if (!gameThread) return api.sendMessage('⚠ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐚̀𝐲 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐨 !', threadID, messageID);
      if (gameThread.author != senderID) return api.sendMessage('⚠ 𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐥𝐚̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐚̣𝐨 𝐫𝐚 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐲 𝐧𝐞̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐬𝐭𝐚𝐫𝐭 𝐠𝐚𝐦𝐞', threadID, messageID);
      if (gameThread.player.length <= 1) return api.sendMessage('⚠ 𝐁𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐭𝐡𝐢𝐞̂́𝐮 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐨̛𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐬𝐭𝐚𝐫𝐭', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('⚠ 𝐁𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐭𝐫𝐨𝐧𝐠 𝐪𝐮𝐚́ 𝐭𝐫𝐢̀𝐧𝐡 𝐜𝐡𝐨̛𝐢 𝐭𝐮̛̀ 𝐭𝐫𝐮̛𝐨̛́𝐜', threadID, messageID);
      gameThread.start = true;
      global.taixiuS.set(threadID, gameThread);
      return api.sendMessage({body: "💎── 𝐓𝐀𝐈 🎲 𝐗𝐈𝐔 ──💎\n🔊 𝐆𝐀𝐌𝐄 𝐒𝐓𝐀𝐑𝐓: \n-> 𝐗𝐢𝐧 𝐦𝐨̛̀𝐢 " + gameThread.player.length + " 𝐜𝐨𝐧 𝐠𝐡𝐞̣̂ 𝐜𝐮̉𝐚 𝐦𝐢̣ 𝐧𝐡𝐚̆́𝐧 `𝐭𝐚̀𝐢` 𝐡𝐨𝐚̣̆𝐜 `𝐱𝐢̉𝐮`\n(𝐋𝐮̛𝐮 𝐲́: 𝐧𝐡𝐚̆́𝐧 𝐨̛̉ 𝐭𝐫𝐨𝐧𝐠 𝐠𝐫𝐨𝐮𝐩 𝐧𝐚̀𝐲 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐡𝐚̆́𝐧 𝐭𝐫𝐨𝐧𝐠 𝐠𝐫𝐨𝐮𝐩 𝐤𝐡𝐚́𝐜)\n💎── 𝐓𝐀𝐈 🎲 𝐗𝐈𝐔 ──💎",attachment: createReadStream(__dirname + "/trogiup/menu/tu-linh-hot-girl-nguc-khung-lo-anh-nong-vu-40gb-link-19.jpg")},threadID, messageID);
    }
    else if (args[0] == 'end' || args[0] == '-e') {
      if (!gameThread) return api.sendMessage('⚠ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐚̀𝐲 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐚̀𝐨 !', threadID, messageID);
      if (gameThread.author != senderID) return api.sendMessage('⚠ 𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐥𝐚̀ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐚̣𝐨 𝐫𝐚 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞 𝐧𝐞̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐱𝐨́𝐚 𝐛𝐚̀𝐧 𝐠𝐚𝐦𝐞', threadID, messageID);
      global.taixiuS.delete(threadID);
      return api.sendMessage('🎆 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐗𝐨𝐚́ 𝐁𝐚̀𝐧 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮', threadID, messageID);
    }
    else {
      return api.sendMessage({body: "💎───• 𝐇𝐃𝐒𝐃 •───💎\n\n❯ 𝗖𝗿𝗲𝗮𝘁𝗲/𝗻𝗲𝘄/-𝗰: 𝗧𝗮̣𝗼 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂\n❯ 𝗝𝗼𝗶𝗻/-𝗷: 𝗧𝗵𝗮𝗺 𝗴𝗶𝗮 𝘃𝗮̀𝗼 𝗯𝗮̀𝗻 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂\n❯ 𝐋𝐞𝐚𝐯𝐞/-𝐥: 𝐑𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 𝐛𝐚̀𝐧 𝐭𝐚̀𝐢 𝐱𝐢̉𝐮\n❯ 𝗦𝘁𝗮𝗿𝘁/-𝘀: 𝗕𝗮̆́𝘁 đ𝗮̂̀𝘂 𝗯𝗮̀𝗻 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂\n❯ 𝗘𝗻𝗱/-𝗲: 𝗞𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂\n\n💎───• 𝐇𝐃𝐒𝐃 •───💎", attachment: createReadStream(__dirname + "/trogiup/menu/iwin.gif")},threadID, messageID);
    }
  }
  catch (err) {
    return api.sendMessage('𝗖𝗢́ 𝗟𝗢̂̃𝗜 𝗫𝗔̉𝗬 𝗥𝗔 𝗞𝗛𝗜 𝗧𝗛𝗨̛̣𝗖 𝗛𝗜𝗘̣̂𝗡 𝗟𝗘̣̂𝗡𝗛 𝗩𝗨𝗜 𝗟𝗢̀𝗡𝗚 𝗧𝗛𝗨̛̉ 𝗟𝗔̣𝗜 𝗦𝗔𝗨: ' + err, event.threadID, event.messageID);
  }
  async function checkMoney(senderID, maxMoney) {
    var i, w;
    i = (await Currencies.getData(senderID)) || {};
    w = i.money || 0
    if (w < parseInt(maxMoney)) return false;
    else return true;
  }
                    }