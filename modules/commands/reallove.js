module.exports.config = {
  name: "reallove",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MewMew fix get by Jukie",
  description: "Tìm Kiếm Nửa Kia Của Bạn ",
  commandCategory: "Tình yêu",
  usages: "[boy/girl]",
  cooldowns: 15
}
module.exports.run = async ({ api, event,args, Users }) => {
 const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  if (!args[0]) {
            var ThreadInfo = await api.getThreadInfo(event.threadID);
    var name = (await Users.getData(id)).name
            var all = ThreadInfo.userInfo
            let data = [];
            for (let u of all) {
                if (u.gender == "MALE") {
                 if ( u != event.senderID) data.push(u.id)   
                }
                if (u.gender == "FEMALE") {
                  if ( u != event.senderID) data.push(u.id)  
              }
            }
            console.log(data)
            if (data.length == 0) return api.sendMessage("❌Rất tiếc! Không tìm thấy nửa đời của bạn 😭", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);
         

            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `𝐓𝐢̀𝐦 𝐊𝐢𝐞̂́𝐦 𝐍𝐮̛̉𝐚 𝐊𝐢𝐚 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧\n💘 𝐓𝐞̂𝐧: ${n}\n💟 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: Đ𝐨̣̂𝐜 𝐓𝐡𝐚̂𝐧 (𝐜𝐨́ 𝐭𝐡𝐞̂̉)\n💞 Đ𝐨̣̂ 𝐏𝐡𝐮̀ 𝐇𝐨̛̣𝐩: ${a.toFixed(2)}%\n🌸 𝐈𝐃 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧: ${url}\n🌈 𝐋𝐢𝐧𝐤 𝐟𝐛: https://m.facebook.com/${e}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
  }
  else {            
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var all = ThreadInfo.userInfo
            let data = [];
      if(args[0] == "boy"){
            for (let u of all) {
        if (u.gender == "MALE") {
                if (u != event.senderID) data.push(u.id)   
                }
            }}  
     
      else if(args[0] == "girl"){
            for (let u of all) {
                if (u.gender == "FEMALE") {
                if (u != event.senderID) data.push(u.id)  
                }
            }}
            console.log(data)
                     
            if (data.length == 0) return api.sendMessage("❌Rất tiếc! Không tìm thấy nửa đời của bạn 😭", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);
            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `𝐓𝐢̀𝐦 𝐊𝐢𝐞̂́𝐦 𝐍𝐮̛̉𝐚 𝐊𝐢𝐚 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 \n💘 𝐓𝐞̂𝐧: ${n}\n💟 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: Đ𝐨̣̂𝐜 𝐓𝐡𝐚̂𝐧 (𝐜𝐨́ 𝐭𝐡𝐞̂̉)\n💞 Đ𝐨̣̂ 𝐏𝐡𝐮̀ 𝐇𝐨̛̣𝐩: ${a.toFixed(2)}%\n🌸 𝐈𝐃 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧: ${url}\n🌈 𝐋𝐢𝐧𝐤 𝐟𝐛: https://m.facebook.com/${e}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);}

};