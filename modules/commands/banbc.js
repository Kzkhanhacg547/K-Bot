var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
module.exports.config = {
  name: "banbc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DuyVuongUwU",// Mod by Tuấn
  description: "Bàn bầu cua nhiều người chơi",
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

  const typ = ['bầu', 'cua', 'tôm', 'cá', 'nai', 'gà'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
  if (!body) return;
  if (body.toLowerCase() == 'bầu' || body.toLowerCase() == 'cua' ||
body.toLowerCase() == 'tôm' || 
body.toLowerCase() == 'cá' || body.toLowerCase() == 'nai' ||
body.toLowerCase() == 'gà' ) {
    const gameThread = global.baucuaS.get(threadID) || {};
    if (!gameThread) return;
    else {
      if (!gameThread.player.find(i => i.userID == senderID)) return;
      else {
        var s, q;
        var s = gameThread.player.findIndex(i => i.userID == senderID);
        var q = gameThread.player[s];
        if (q.choose.status == true) return api.sendMessage('𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐫𝐨̂̀𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐜𝐡𝐨̣𝐧 𝐥𝐚̣𝐢 🦀', threadID, messageID);
        else {
          const fs = require('fs-extra');
          const axios = require('axios');
         if (body.toLowerCase() == 'bầu') {
            gameThread.player.splice(s, 1);
          gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'bầu' } });
            api.sendMessage({body:"「 👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐂𝐡𝐨̛𝐢 " + q.name + " 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐁𝐀̂̀𝐔 🍐 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́",attachment: createReadStream(__dirname + "/cache/ảnh/bau.jpg")},threadID, messageID);  
             }
       if (body.toLowerCase() == 'cua') {
            gameThread.player.splice(s, 1);
          gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'cua' } });
            api.sendMessage({body:"「 👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐂𝐡𝐨̛𝐢 " + q.name + " 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐂𝐔𝐀 🦀 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́",attachment: createReadStream(__dirname + "/cache/ảnh/cua.jpg")},threadID, messageID);  
       }
          if (body.toLowerCase() == 'tôm') {
            gameThread.player.splice(s, 1);
          gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'tôm' } });
            api.sendMessage({body:"「 👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐂𝐡𝐨̛𝐢 " + q.name + " 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐓𝐎̂𝐌 🦐 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́",attachment: createReadStream(__dirname + "/cache/ảnh/tom.jpg")},threadID, messageID);  
          }
if (body.toLowerCase() == 'cá') {
            gameThread.player.splice(s, 1);
          gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'cá' } });
            api.sendMessage({body:"「 👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐂𝐡𝐨̛𝐢 " + q.name + " 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐂𝐀́ 🦈 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́",attachment: createReadStream(__dirname + "/cache/ảnh/ca.jpg")},threadID, messageID);  
}
if (body.toLowerCase() == 'nai') {
            gameThread.player.splice(s, 1);
          gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'nai' } });
            api.sendMessage({body:"「 👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐂𝐡𝐨̛𝐢 " + q.name + " 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐍𝐀𝐈 🦌 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́",attachment: createReadStream(__dirname + "/cache/ảnh/nai.jpg")},threadID, messageID);  
}
          if (body.toLowerCase() == 'gà') {
            gameThread.player.splice(s, 1);
          gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'gà' } });
            api.sendMessage({body:"「 👤 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐂𝐡𝐨̛𝐢 " + q.name + " 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̣𝐧 𝐆𝐀̀ 🐓 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́",attachment: createReadStream(__dirname + "/cache/ảnh/ga.jpg")},threadID, messageID);  
          }
          var vv = 0,
              vvv = gameThread.player.length;
          for (var c of gameThread.player) {
            if (c.choose.status == true) vv++;
          }
          if (vv == vvv) {
            api.sendMessage({body: "𝐂𝐡𝐨̛̀ 𝐁𝐨𝐭 𝐐𝐮𝐚̂̉𝐲 𝐂𝐚́𝐢 𝐍𝐡𝐞́ 𝐌𝐨𝐚𝐳\n 🍐 🦀 🦐 🦈 🦌", attachment: createReadStream(__dirname + "/cache/ảnh/baucua.gif")},threadID,async  (err, data)  => { 
              if (err) return api.sendMessage(err, threadID, messageID);
              setTimeout(async function () {
                api.unsendMessage(data.messageID);
                  var ketqua = random
                  var win = [];
                  var lose = [];
                  if (ketqua.indexOf('bầu') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'bầu') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
                  }
             if (ketqua.indexOf('cua') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'cua') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
             }
                 if (ketqua.indexOf('tôm') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'tôm') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
                 }
 if (ketqua.indexOf('cá') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'cá') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
 }
                 if (ketqua.indexOf('nai') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'nai') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
                 }
                 if (ketqua.indexOf('gà') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'gà') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
                 }          
                  var msg = '\n🦐── 𝐁𝐀̂̀𝐔🦀𝐂𝐔𝐀 ──🦈\n🎰 𝐊𝐄̂́𝐓 𝐐𝐔𝐀̉ 𝐋𝐀̆́𝐂 𝐑𝐀 𝐂𝐎𝐍: ' + ketqua.toUpperCase() + ' 🐳\n\n➣ 𝐍𝐡𝐮̛̃𝐧𝐠 𝐜𝐨𝐧 𝐯𝐨̛̣ 𝐭𝐡𝐚̆́𝐧𝐠 𝐜𝐮̛𝐨̛̣𝐜 𝐭𝐫𝐨𝐧𝐠 𝐯𝐚́𝐧 𝐧𝐚̀𝐲 💸:\n';
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
                  msg += '\n𝐂𝐡𝐮𝐧𝐠 𝐓𝐢𝐞̂̀𝐧 𝐕𝐚̀ 𝐋𝐚̂́𝐲 𝐓𝐢𝐞̂̀𝐧 💵\n';
                  msg += '• 𝐍𝐡𝐮̛̃𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐚̆́𝐧𝐠 𝐧𝐡𝐚̣̂𝐧 𝐯𝐞̂̀ [ ' + gameThread.money + '𝐕𝐍𝐃 ] 💵';
                  msg += '• 𝐍𝐡𝐮̛̃𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐮𝐚 𝐛𝐢̣ 𝐭𝐫𝐮̛̀ [ ' + gameThread.money + '𝐕𝐍𝐃 ] 💵\n➣ 𝗛𝗮̃𝘆 𝗸𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗺𝗼̛́𝗶 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝗻𝗴𝗵𝗶𝗲̣̂𝗻 𝗻𝗴𝗮̣̂𝗽 𝗻𝗵𝗲́...𝗖𝗵𝘂́𝗰 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 !\n\n◆━𝗧𝗵𝗮𝗻𝗸𝘀 𝗔𝗹𝗹 𝗨𝘄𝗨━◆\n🦐── 𝐁𝐀̂̀𝐔🦀𝐂𝐔𝐀 ──🦈';
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
    if (!global.baucuaS) global.baucuaS = new Map();

    const { threadID, messageID, senderID } = event;
    var gameThread = global.baucuaS.get(threadID);

    if (args[0] == 'create' || args[0] == 'new' || args[0] == '-c') {
      if (!args[1] || isNaN(args[1])) return api.sendMessage('𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂!', threadID, messageID);
      if (parseInt(args[1]) < 100) return api.sendMessage('𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗽𝗵𝗮̉𝗶 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝗵𝗼𝗮̣̆𝗰 𝗯𝗮̆̀𝗻𝗴 100$!', threadID, messageID);
      var check = await checkMoney(senderID, args[1]);
      if (check == false) return api.sendMessage('𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗱𝘂̉ ' + args[1] + '$ 𝗱𝗲̂̉ 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗺𝗼̛́𝗶!\n𝗛𝗮̃𝘆 𝗸𝗶𝗲̂́𝗺 𝘁𝗵𝗲̂𝗺 𝘁𝗶𝗲̂̀𝗻 𝗱𝗲̂̉ 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝗰𝘂𝗼̣̂𝗰 𝘇𝘂𝗶 𝗰𝗵𝘂́𝗰 𝗺𝗮𝘆 𝗺𝗮̆́𝗻!', threadID, messageID);
      if (global.baucuaS.has(threadID)) return api.sendMessage('𝗡𝗵𝗼́𝗺 𝗻𝗮̀𝘆 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗺𝗼̛̉ 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲!', threadID, messageID);
      var name = await Users.getNameUser(senderID);
      global.baucuaS.set(threadID, { box: threadID, start: false, author: senderID, player: [{ name, userID: senderID, choose: { status: false, msg: null } }], money: parseInt(args[1]) });
      return api.sendMessage('➣ 𝗧𝗮̣𝗼 𝗯𝗮̀𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘃𝗼̛́𝗶 𝗺𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰 𝗹𝗮̀ ' + parseInt(args[1]) + '$\n• 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝘀𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮: 1\n• 𝗠𝘂𝗼̂́𝗻 𝗸𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗵𝗮̃𝘆 𝗱𝘂̀𝗻𝗴 ' + global.config['PREFIX'] + this.config.name + ' end\n• 𝗧𝗵𝗮𝗺 𝗴𝗶𝗮 𝘃𝗮̀𝗼 𝗯𝗮̀𝗻 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 ' + global.config['PREFIX'] + this.config.name + ' join', threadID);
    }
    else if (args[0] == 'join' || args[0] == '-j') {
      if (!global.baucuaS.has(threadID)) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗻𝗮̀𝗼 𝗼̛̉ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆!\n𝗛𝗮̃𝘆 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗺𝗼̛́𝗶 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 /banbaucua new + tiền 𝗱𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗰𝗵𝗼̛𝗶 𝗻𝗵𝗲́!', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝘆 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗸𝗵𝗶 𝗯𝗮̣𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗻𝗲̂𝗻 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝘆 𝘀𝗮𝘂 𝗸𝗵𝗶 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗵𝗮́𝗰 𝗰𝗵𝗼̛𝗶 𝘅𝗼𝗻𝗴!', threadID, messageID);
      var check = await checkMoney(senderID, gameThread.money);
      if (check == false) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝘂̉ ' + gameThread.money + '$ 𝗱𝗲̂̉ 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮!\n𝗛𝗮̃𝘆 𝗸𝗶𝗲̂́𝗺 𝘁𝗵𝗲̂𝗺 𝘁𝗶𝗲̂̀𝗻 𝗿𝗼̂̀𝗶 𝗾𝘂𝗮𝘆 𝗹𝗮̣𝗶 𝗰𝗵𝘂́𝗰 𝗺𝗮𝘆 𝗺𝗮̆́𝗻', threadID, messageID);
      if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 𝗱𝗮̃ 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝘆!', threadID, messageID);
      var name = await Users.getNameUser(senderID);
      gameThread.player.push({ name, userID: senderID, choose: { stats: false, msg: null } });
      global.baucuaS.set(threadID, gameThread);
      return api.sendMessage('➣ 𝗧𝗵𝗮𝗺 𝗴𝗶𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!\n• 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝘀𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗹𝗮̀ ' + gameThread.player.length + ' \n• 𝗧𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗮́𝗰 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗵𝗮̃𝘆 𝗯𝗮̂́𝗺 /banbaucua join', threadID, messageID);
    }
    else if (args[0] == 'leave' || args[0] == '-l') {
      if (!global.baucuaS.has(threadID)) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝗼 𝗱𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗼̛̀𝗶!', threadID, messageID);
      if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗯𝗮̀𝗻 𝗱𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗼̛̀𝗶!', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('𝗕𝗮̀𝗻 𝗱𝗮̃ 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝗰𝗵𝗼̛𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗿𝗼̛̀𝗶!', threadID, messageID);
      if (gameThread.author == senderID) {
        global.baucuaS.delete(threadID);
        var name = await Users.getNameUser(senderID);
        return api.sendMessage('➣ 𝗖𝗼𝗻 𝘇𝗼̛̣ ' + name + ' 𝗱𝗮̃ 𝗿𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗯𝗮̀𝗻\n• 𝗕𝗮̀𝗻 𝗻𝗮̀𝘆 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗴𝗶𝗮̉𝗶 𝘁𝗮́𝗻!', threadID, messageID);
      }
      else {
        gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);
        global.baucuaS.set(threadID, gameThread);
        var name = await Users.getNameUser(senderID);
        api.sendMessage('𝗖𝗼𝗻 𝘇𝗼̛̣ 𝗿𝗼̛̀𝗶 𝗯𝗮̀𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!', threadID, messageID);
        return api.sendMessage('➣ 𝗖𝗼𝗻 𝘇𝗼̛̣ ' + name + ' 𝗱𝗮̃ 𝗿𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗯𝗮̀𝗻!\n• 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̀𝗶 𝗯𝗮̀𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 𝗹𝗮̀ ' + gameThread.player.length + ' 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻', threadID);
      }
    }
    else if (args[0] == 'start' || args[0] == '-s') {
      if (!gameThread) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗻𝗮̀𝗼 𝗼̛̉ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆!', threadID, messageID);
      if (gameThread.author != senderID) return api.sendMessage('𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗻𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂', threadID, messageID);
      if (gameThread.player.length <= 1) return api.sendMessage('𝗕𝗮̀𝗻 𝗰𝗵𝘂̛𝗮 𝗱𝘂̉ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗱𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂!!!', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('𝗕𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝘁𝘂̛̀ 𝘁𝗿𝘂̛𝗼̛́𝗰', threadID, messageID);
      gameThread.start = true;
      global.baucuaS.set(threadID, gameThread);
      return api.sendMessage({body: "◆𝗧𝗥𝗢̀ 𝗖𝗛𝗢̛𝗜 𝗕𝗔̆́𝗧 𝗗𝗔̂̀𝗨◆\n\n「 𝗫𝗶𝗻 𝗺𝗼̛̀𝗶 " + gameThread.player.length + " 𝗰𝗼𝗻 𝘇𝗼̛̣ 𝗻𝗴𝗵𝗶𝗲̣̂𝗻 𝗻𝗴𝗮̣̂𝗽 𝗰𝘂̉𝗮 𝗺𝗶̣ 𝗱𝗮̣̆𝘁 𝗰𝘂̛̉𝗮 𝗕𝗔̂̀𝗨,𝗖𝗨𝗔,𝗧𝗢̂𝗠,𝗖𝗔́,𝗡𝗔𝗜 𝗵𝗼𝗮̣̆𝗰 𝗚𝗔̀ 」",attachment: createReadStream(__dirname + "/trogiup/menu/rgrehh_20200619154222.jpg")},threadID, messageID);
    }
    else if (args[0] == 'end' || args[0] == '-e') {
      if (!gameThread) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝗼 𝗱𝘂̛𝗼̛̣𝗰 𝘁𝗮̣𝗼!', threadID, messageID);
      if (gameThread.author != senderID) return api.sendMessage('𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗻𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘅𝗼́𝗮', threadID, messageID);
      global.baucuaS.delete(threadID);
      return api.sendMessage('𝗞𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!', threadID, messageID);
    }
    else {
      return api.sendMessage({body: "◆━𝗕𝗔̀𝗡 𝗕𝗔̂̀𝗨 𝗖𝗨𝗔━◆\n\n「 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 」\n\n➣ /banbaucua new + tiền • 𝗧𝗮̣𝗼 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶\n➣ /banbaucua join • 𝗧𝗵𝗮𝗺 𝗴𝗶𝗮 𝘃𝗮̀𝗼 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶\n➣ /banbaucua leave • 𝗥𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶\n➣ /banbaucua start • 𝗕𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝘃𝗮́𝗻 𝗰𝗵𝗼̛𝗶\n➣ /banbaucua end • 𝗞𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶\n\n「 𝗟𝘂𝗮̣̂𝘁 𝗰𝗵𝗼̛𝗶 」\n\n• 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝘀𝗲̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗰𝗵𝗼̣𝗻 𝗯𝗮̂̀𝘂,𝗰𝘂𝗮,𝘁𝗼̂𝗺,𝗰𝗮́,𝗻𝗮𝗶 𝗵𝗼𝗮̣̆𝗰 𝗴𝗮̀ 𝗸𝗵𝗶 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗹𝗮̆́𝗰 𝗰𝗵𝗼 𝗿𝗮 𝗰𝗼𝗻 𝘃𝗮̣̂𝘁 𝗻𝗮̀𝗼 𝘁𝗵𝗶̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̣𝗻 𝗰𝗼𝗻 𝘃𝗮̣̂𝘁 𝗱𝗼́ 𝘀𝗲̃ 𝗱𝗮̀𝗻𝗵 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴", attachment: createReadStream(__dirname + "/trogiup/menu/tu-linh-hot-girl-nguc-khung-lo-anh-nong-vu-40gb-link-19.jpg")},threadID, messageID);
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