module.exports.config = {
    name: "gheplove",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MewMew fix get by Jukie",
    description: "Ghép đôi ❗NGẪU NHIÊN❗",
    commandCategory: "Tình yêu",
    usages: "gheplove",
    cooldowns: 5
  }
  module.exports.run = async ({ api, event,args, Users }) => {
   const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    let mung = [
    "Trách phận vô duyên...",
  "Hơi thấp nhưng không sao. Hãy cố gắng lên!",
  "3 phần duyên nợ, 7 phần cố gắng",
  "Tỷ lệ mà mối quan hệ này có thể nên duyên cũng khá là nhỏ đấy! Phải cố gắng hơn nữa",
  "Date với nhau đi. Để mối quan hệ này có thể tiến xa hơn",
  "Hãy chủ động bắt chuyện hơn nữa. Hai bạn khá là hợp đôi",
  "Hãy tin vào duyên số đi, vì nó có thật đấy!",
  "Hợp đôi lắm đấy. Quan tâm chăm sóc cho mối quan hệ này nhiều hơn nữa nhé!",
  "Lưu số nhau đi, bao giờ cưới thì gọi nhau lên lễ đường!",
  "Cưới đi chờ chi!"
  ]
  let chuc = mung[Math.floor(Math.random() * mung.length)]
    if (!args[0]) {
              var ThreadInfo = await api.getThreadInfo(event.threadID);
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
              if (data.length == 0) return api.sendMessage("『𝐊𝐳 𝐁𝐨𝐭』→ 𝐑𝐚̂́𝐭 𝐭𝐢𝐞̂́𝐜! 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲 𝐧𝐮̛̉𝐚 đ𝐨̛̀𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 😥", event.threadID, event.messageID);
              let e = data[Math.floor(Math.random() * data.length)]
              let a = (Math.random() * 50)+50;
              var n = (await Users.getData(e)).name
              const url = api.getCurrentUserID(e);
           
  
              let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662
  `, { responseType: "arraybuffer" } )).data; 
              fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
              api.sendMessage({ body: `‎[💗]→ 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n[❤️]→ 𝐓𝐞̂𝐧: ${n}\n[🥰]→ 𝐓𝐢̉ 𝐥𝐞̣̂ 𝐡𝐨̛̣𝐩 đ𝐨̂𝐢: ${a.toFixed(2)}%\n[✨]→ 𝐈𝐃: ${e}\n👉]→ 𝐋𝐨̛̀𝐢 𝐜𝐡𝐮́𝐜:\n${chuc}\n[🐳]→ 𝐀̉𝐧𝐡 𝐜𝐮̉𝐚 𝐧𝐠𝐮̛𝐨̛̀𝐢 đ𝐨́:`,
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
                       
              if (data.length == 0) return api.sendMessage("『𝐊𝐳 𝐁𝐨𝐭』→ 𝐑𝐚̂́𝐭 𝐭𝐢𝐞̂́𝐜! 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲 𝐧𝐮̛̉𝐚 đ𝐨̛̀𝐢 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 😥", event.threadID, event.messageID);
              let e = data[Math.floor(Math.random() * data.length)]
              let a = (Math.random() * 50)+50;
              var n = (await Users.getData(e)).name
              const url = api.getCurrentUserID(e);
              let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662
  `, { responseType: "arraybuffer" } )).data; 
              fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
              api.sendMessage({ body: `‎[💗]→ 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n[❤️]→ 𝐓𝐞̂𝐧: ${n}\n[🥰]→ 𝐓𝐢̉ 𝐥𝐞̣̂ 𝐡𝐨̛̣𝐩 đ𝐨̂𝐢: ${a.toFixed(2)}%\n[✨]→ 𝐈𝐃: ${e}\n👉]→ 𝐋𝐨̛̀𝐢 𝐜𝐡𝐮́𝐜:\n${chuc}\n[🐳]→ 𝐀̉𝐧𝐡 𝐜𝐮̉𝐚 𝐧𝐠𝐮̛𝐨̛̀𝐢 đ𝐨́:`,
                    attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
              }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);}
  
  };