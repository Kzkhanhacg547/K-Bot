module.exports.config = {
  name: "ff",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vthien",
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "api",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Free Fire")==0 || (event.body.indexOf("free fire")==0) || event.body.indexOf("ff")==0 ||
event.body.indexOf("Ff")==0 ||
event.body.indexOf("Lửa chùa")==0 ||
event.body.indexOf("Phi phai")==0 ||
event.body.indexOf("phi phai")==0 ||
event.body.indexOf("free fire")==0 ||
event.body.indexOf("lửa chùa")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/iBGk205.mp4",
      "https://i.imgur.com/TCGPLn9.mp4",
      "https://i.imgur.com/SXdWSIh.mp4",
      "https://i.imgur.com/CixoeiN.mp4",
      "https://i.imgur.com/5aJDdt3.mp4",
      "https://i.imgur.com/ovSuk4K.mp4",
      "https://i.imgur.com/Kb4xZht.mp4",
      "https://i.imgur.com/VBNOJNA.mp4",
      "https://i.imgur.com/nrYxztO.mp4",
      "https://i.imgur.com/iiI7S13.mp4",
      "https://i.imgur.com/NsmfTbj.mp4",
      "https://i.imgur.com/6NWD8Od.mp4",
      "https://i.imgur.com/Ir28xNf.mp4",
      "https://i.imgur.com/3Y9Cu7U.mp4",
      "https://i.imgur.com/SmCnk6p.mp4",
      "https://i.imgur.com/zJSZKlI.mp4",
      "https://i.imgur.com/3V1SH5K.mp4",
      "https://i.imgur.com/Fk9Wv6p.mp4",
      "https://i.imgur.com/POambj8.mp4",
      "https://i.imgur.com/404in8I.mp4",
      "https://i.imgur.com/Mswi6Rx.mp4",
      "https://i.imgur.com/Cj1VKBC.mp4",
      "https://i.imgur.com/m1TTDYF.mp4",
      "https://i.imgur.com/cHqTeUJ.mp4",
      "https://i.imgur.com/SppbT03.mp4",
      "https://i.imgur.com/9wgPlhr.mp4",
      "https://i.imgur.com/R49wSID.mp4",
      "https://i.imgur.com/9wgPlhr.mp4",
      "https://i.imgur.com/4ywjFhX.mp4",
      "https://i.imgur.com/4ywjFhX.mp4",
      "https://i.imgur.com/3P2oDLd.mp4",
      "https://i.imgur.com/hLrUXVW.mp4",
      "https://i.imgur.com/hg8t6KH.mp4",
      "https://i.imgur.com/8Bhpg0n.mp4",
      "https://i.imgur.com/AlkTYMe.mp4",
      "https://i.imgur.com/v2scTY4.mp4",
      "https://i.imgur.com/2iDcNxd.mp4",
      "https://i.imgur.com/xyVrR1u.mp4",
      "https://i.imgur.com/xPLlx7Q.mp4",
      "https://i.imgur.com/mIozDLd.mp4",
      "https://i.imgur.com/xV33rxv.mp4",
      "https://i.imgur.com/4m5zckD.mp4",
      "https://i.imgur.com/iQHDnpr.mp4",
      "https://i.imgur.com/74Wkug0.mp4",
      "https://i.imgur.com/Sq7OE40.mp4",
      "https://i.imgur.com/PXza6sj.mp4",
      "https://i.imgur.com/tD7CQws.mp4",
      "https://i.imgur.com/vmpUbKl.mp4",
      "https://i.imgur.com/FsxOFC0.mp4",
      "https://i.imgur.com/psIiadz.mp4",
      "https://i.imgur.com/o3XUkXw.mp4",
      "https://i.imgur.com/95e0u5U.mp4",
      "https://i.imgur.com/AnOMrV9.mp4",
      "https://i.imgur.com/ATgrGne.mp4",  
"https://i.imgur.com/GoTID6s.mp4",  
"https://i.imgur.com/kLml6VF.mp4",  
"https://i.imgur.com/5NgJtU0.mp4", 
"https://i.imgur.com/rVytp3q.mp4", 
"https://i.imgur.com/8G66odC.mp4", 
"https://i.imgur.com/bZy5Xgn.mp4", 
"https://i.imgur.com/XJuaQQC.mp4", 
"https://i.imgur.com/TRBOKwm.mp4", 
"https://i.imgur.com/9EXZ1EX.mp4", 
"https://i.imgur.com/mmm0JKF.mp4", 
"https://i.imgur.com/UrKIScA.mp4", 
"https://i.imgur.com/s5x1N3j.mp4", 
"https://i.imgur.com/kxB3GXk.mp4", 
"https://i.imgur.com/W3FPBBK.mp4", 
"https://i.imgur.com/nWSfH3j.mp4", 
"https://i.imgur.com/s7mC7VL.mp4", 
"https://i.imgur.com/Xk4I6Rq.mp4", 
"https://i.imgur.com/MRiPWRN.mp4", 
"https://i.imgur.com/nzHWU2j.mp4", 
"https://i.imgur.com/p0pe3cY.mp4", 
"https://i.imgur.com/A1uCeYW.mp4", 
"https://i.imgur.com/ZLZDhcB.mp4", 
"https://i.imgur.com/XdJHodp.mp4", 
"https://i.imgur.com/nXvTpEO.mp4", 
"https://i.imgur.com/HrUw3QA.mp4",
          ];
     var callback = () => api.sendMessage({body:`==== [ 𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘 ] ====\n━━━━━━━━━━━━━━━━━━\n→ [🧸] : 𝗙𝗿𝗲𝗲 𝗳𝗶𝗿𝗲 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗱𝗮̂𝘆\n→ [📺] : 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼: ${link.length}\n ━━━━━━━━━━━━━━━━━━\n→[💓] Đ𝘂̛𝗼̛̣𝗰 𝘂𝗽𝗱𝗮𝘁𝗲 𝗯𝗼̛̉𝗶 ${global.config.ADMIN}`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };