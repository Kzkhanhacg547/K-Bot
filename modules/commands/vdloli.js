module.exports.config = {
  name: "vdloli",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "nhhoang",
  description: "xem video vidgaitiktok",
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
  var link = [
"https://i.imgur.com/XTDdouu.mp4", "https://i.imgur.com/eafIOOH.mp4", "https://i.imgur.com/XaSGT0H.mp4", "https://i.imgur.com/ph6W9Mh.mp4", "https://i.imgur.com/ErNPDIC.mp4", "https://i.imgur.com/c8s6LC7.mp4", "https://i.imgur.com/LFq7XZW.mp4", "https://i.imgur.com/dPQYsml.mp4", "https://i.imgur.com/trSQgDZ.mp4", "https://i.imgur.com/np1PoXi.mp4", "https://i.imgur.com/djyvNUW.mp4", "https://i.imgur.com/LtCMmDc.mp4", "https://i.imgur.com/QWqiLhK.mp4", "https://i.imgur.com/kmuuG09.mp4", "https://i.imgur.com/rsBJYWi.mp4", "https://i.imgur.com/804GLtx.mp4", "https://i.imgur.com/w733uiF.mp4", "https://i.imgur.com/lA4Q3lG.mp4", "https://i.imgur.com/ylakNov.mp4", "https://i.imgur.com/mViqqft.mp4", "https://i.imgur.com/lSwUFvL.mp4", "https://i.imgur.com/Km6C2Lu.mp4", "https://i.imgur.com/sZiWWQt.mp4", "https://i.imgur.com/yJbod3F.mp4", "https://i.imgur.com/CnFZzBi.mp4", "https://i.imgur.com/dT3bgHk.mp4", "https://i.imgur.com/I15gYiO.mp4", "https://i.imgur.com/iuxqAcV.mp4", "https://i.imgur.com/7Jao2eq.mp4", "https://i.imgur.com/hlmdurF.mp4", "https://i.imgur.com/8W08ejM.mp4", "https://i.imgur.com/AORAVB6.mp4", "https://i.imgur.com/w84ltps.mp4", "https://i.imgur.com/p2GttWC.mp4", "https://i.imgur.com/cXjgLbq.mp4", "https://i.imgur.com/KMI99xV.mp4", "https://i.imgur.com/M5xqDR3.mp4", "https://i.imgur.com/Mf0UEup.mp4", "https://i.imgur.com/YTLRU7y.mp4", "https://i.imgur.com/cVLiMd3.mp4", "https://i.imgur.com/LL6JHMA.mp4", "https://i.imgur.com/F6Icrxt.mp4", "https://i.imgur.com/EWmvYGf.mp4", "https://i.imgur.com/lcLztO2.mp4", "https://i.imgur.com/DbDwOF8.mp4", "https://i.imgur.com/FfXgKGE.mp4", "https://i.imgur.com/UMin4HK.mp4", "https://i.imgur.com/ENiTOZ1.mp4", "https://i.imgur.com/IbmvTDo.mp4", "https://i.imgur.com/amzxJel.mp4", "https://i.imgur.com/Zqg9VC6.mp4", "https://i.imgur.com/xVCWulb.mp4", "https://i.imgur.com/oasBcMy.mp4", "https://i.imgur.com/wxiegpi.mp4", "https://i.imgur.com/CVunSDv.mp4", "https://i.imgur.com/9UhrsBl.mp4", "https://i.imgur.com/7pP1req.mp4", "https://i.imgur.com/qSmCq9D.mp4", "https://i.imgur.com/6bQOm4J.mp4", "https://i.imgur.com/dvjWTyz.mp4", "https://i.imgur.com/02PKZT7.mp4", "https://i.imgur.com/feIoOVt.mp4", "https://i.imgur.com/n77MVgO.mp4", "https://i.imgur.com/77bb7rk.mp4", "https://i.imgur.com/6yVXyLV.mp4", "https://i.imgur.com/2rlgXhm.mp4", "https://i.imgur.com/NnTWc6a.mp4",
  "https://i.imgur.com/XTDdouu.mp4", "https://i.imgur.com/eafIOOH.mp4", "https://i.imgur.com/XaSGT0H.mp4", "https://i.imgur.com/ph6W9Mh.mp4", "https://i.imgur.com/ErNPDIC.mp4", "https://i.imgur.com/c8s6LC7.mp4", "https://i.imgur.com/LFq7XZW.mp4", "https://i.imgur.com/dPQYsml.mp4", "https://i.imgur.com/trSQgDZ.mp4", "https://i.imgur.com/np1PoXi.mp4", "https://i.imgur.com/djyvNUW.mp4", "https://i.imgur.com/LtCMmDc.mp4", "https://i.imgur.com/QWqiLhK.mp4", "https://i.imgur.com/kmuuG09.mp4", "https://i.imgur.com/rsBJYWi.mp4", "https://i.imgur.com/804GLtx.mp4", "https://i.imgur.com/w733uiF.mp4", "https://i.imgur.com/lA4Q3lG.mp4", "https://i.imgur.com/ylakNov.mp4", "https://i.imgur.com/mViqqft.mp4", "https://i.imgur.com/lSwUFvL.mp4", "https://i.imgur.com/Km6C2Lu.mp4",];
  var callback = () => api.sendMessage({body:`=== [ 𝗩𝗜𝗗𝗘𝗢 𝗟𝗼𝗹𝗶 ] ===\n━━━━━━━━━━━━━━━━━━\n\n→ [🧸] 𝗩𝗶𝗱𝗲𝝾 𝗟𝝾𝗹𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆\n→ [📺] 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼: ${link.length}\n━━━━━━━━━━━━━━━━━━\n\n[💓] Đ𝘂̛𝗼̛̣𝗰 𝘂𝗽𝗱𝗮𝘁𝗲 𝗯𝗼̛̉𝗶 ${global.config.ADMIN}`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
