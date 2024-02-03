module.exports.config = {
  name: "pingall",
  version: "1.0.5",
  hasPermssion: 1,
  credits: "Mirai Team",
  description: "tag toàn bộ thành viên",
  commandCategory: "QTV",
  usages: "[Text]",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args,permssion }) {
 const { messageReply } = event;
  const fs = require('fs');
  const request = require('request')
  try {
    const botID = api.getCurrentUserID();
    var listAFK, listUserID;
    global.moduleData["afk"] && global.moduleData["afk"].afkList ? listAFK = Object.keys(global.moduleData["afk"].afkList || []) : listAFK = []; 
    listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
    listUserID = listUserID.filter(item => !listAFK.includes(item));
    var body = (args.length != 0) ? args.join(" ") : "💥Cháy nhà r...", mentions = [], index = 0;
    for(const idUser of listUserID) {
      body = "📣====『 𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 』====📣\n━━━━━━━━━━━━━━━━\n\n[💓] ➜ 𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘁𝘂̛̀ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻\n[💬] ➜ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: " + body;
      mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
      index -= 1;
    }

if (event.type == "message_reply") { 
  const link = messageReply.attachments
  for(var i=0; i< link.length; i++){
 var namefile = link[i].url;
    const audio = namefile.match("audioclip")
   var format = ''
    console.log(link[i].url)
    var imageData = [];
   var num = 0;
   if(audio != null){
     format = `.mp3`

   }else{
     format = namefile.split(".")[5].split("?")[0]

   }
    let path = __dirname + `/cache/${num+=1}.${format}`;
    let getDown = (await axios.get(`${link[i].url}`, { responseType: 'arraybuffer' })).data;
   fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imageData.push(fs.createReadStream(__dirname + '/cache/' + `${num}.${format}`));
  }

 api.sendMessage({
   attachment: imageData,
   body,
    mentions
 },event.threadID,event.messageID);

}
  else{
    return api.sendMessage({ body, mentions }, event.threadID, event.messageID);
  }
  }
  catch (e) { return console.log(e); }
}