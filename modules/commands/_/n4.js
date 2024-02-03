
module.exports.config = {
  name: "\n4",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TNT",
  description: "Dau lenh",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];

  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  
  const timeStart = Date.now();
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var link = [
"https://i.imgur.com/TRl17f7.mp4",
"https://i.imgur.com/yp9z5QN.mp4",
"https://i.imgur.com/qeIxxvn.mp4",
"https://i.imgur.com/LhINDGL.mp4",
"https://i.imgur.com/ygEYdzr.mp4",
"https://i.imgur.com/9thHnST.mp4",
"https://i.imgur.com/AMi9NiT.mp4",
"https://i.imgur.com/l8UisUZ.mp4",
"https://i.imgur.com/BZXJerW.mp4",
"https://i.imgur.com/xJpuVLs.mp4",
"https://i.imgur.com/MOQDCjg.mp4",
"https://i.imgur.com/kz7S5JO.mp4",
"https://i.imgur.com/K4pnAw0.mp4",
"https://i.imgur.com/WrPhJrH.mp4",
"https://i.imgur.com/fsol3MG.mp4",
"https://i.imgur.com/XT0d0a2.mp4",
"https://i.imgur.com/voxsCFv.mp4",
"https://i.imgur.com/QzyFnVK.mp4",
"https://i.imgur.com/BlI7Jbh.mp4",
"https://i.imgur.com/mK44Aod.mp4",
"https://i.imgur.com/UM95eCs.mp4",
"https://i.imgur.com/jDOLZYQ.mp4",
"https://i.imgur.com/xDfgeeD.mp4",
"https://i.imgur.com/iTUuWjl.mp4",
"https://i.imgur.com/WpnFSm5.mp4",
"https://i.imgur.com/nTw4lOF.mp4",
"https://i.imgur.com/5lrWddV.mp4",
"https://i.imgur.com/QRd4BCs.mp4",
"https://i.imgur.com/26ckWFR.mp4",
"https://i.imgur.com/Lzfz1kO.mp4",
"https://i.imgur.com/xVGLkGv.mp4",
"https://i.imgur.com/dXDJzCy.mp4",
"https://i.imgur.com/PPUGhmB.mp4",
"https://i.imgur.com/aZKx6VU.mp4",
"https://i.imgur.com/jG6uBjO.mp4",
"https://i.imgur.com/urLh5YY.mp4",
  ];
    var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage(" 0 ",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () =>
  api.sendMessage({body:`🌸=== [ 𝗦𝗔𝗜 𝗟𝗘̣̂𝗡𝗛 ] ===🌸
━━━━━━━━━━━━━━━━
✅ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗴𝗼̣𝗶 𝗹𝗲̣̂𝗻𝗵: ${name} 
⏰ 𝗧𝗶𝗺𝗲: ${gio} | ${thu}
📁 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms
━━━━━〔${hours}:${minutes}:${seconds}〕━━━━━
`,attachment: fs.createReadStream(__dirname + "/cache/5.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp3"));
let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })            
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp3")).on("close",() => callback());
   }
};