module. exports. config = {
    name: "autoreset",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thời gian",
    commandCategory: "Hệ thống",
    cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m','\x1b[31m','\x1b[1m'];
  var more = color[Math.floor(Math.random() * color.length)];
  var idad = global.config.ADMINBOT;    
  console.log('\x1b[36m'+ '🕓 TIME 🕓: '+ more + timeNow + '\x1b[31m' + ' ➣ ' + '\x1b[0m' +  thu)
  var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var timeRestart_1 = `::${seconds}`
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1) && seconds < 5 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`[ 𝐊𝐳 𝐁𝐎𝐓 ] - 𝗔𝗿𝗮 𝗔𝗿𝗮 😖, b𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀ 🕓: ${timeNow}\n𝗩𝗼̛̣ 𝘀𝗲̃ 𝘁𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗿𝗲𝘀𝗲𝘁 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̣𝗶 𝗻𝗵𝗲𝗮𝗮 𝗰𝗵𝗼̂̀𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝗵𝗼̛̀ 𝘁𝗶́ 𝗻𝗵𝗲́ ☢️`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
        api.sendMessage(`${timeNow}`, event.threadID)
}