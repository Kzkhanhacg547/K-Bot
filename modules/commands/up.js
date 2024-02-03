module.exports.config = {
  name: "up",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "who is hakira",
  description: "",
  commandCategory: "Admin",
  usages: "",
  cooldowns: 3
};
const axios = require('axios')
const fs =require('fs')
function base64_encode(file) {
  try {
    var bitmap = fs.readFileSync(__dirname + file);
    var d = (bitmap).toString('base64')
    return d
  } catch (e) { console.log(e) }
}
module.exports.run = async ({ api, event, Currencies }) => {
 //event['messageReply']['attachments'][0]['type'] || photo || video || audio
  try{
  var oi = []
  if (event.type == "message_reply") {
  var type = event['messageReply']['attachments'][0]['type'];
  if(type == 'audio') var t = 'mp3', oix = 'mp3'
  if(type == 'video') var t = 'mp4', oix = 'mp4'
  if(type == 'photo') var t = 'jpg', oix = 'image'
    
  for(let i = 0; i < event['messageReply']['attachments'].length; i++){
    var o = event['messageReply']['attachments'][i]['url']
  //   const getImg = (await axios.get(o, { responseType: 'arraybuffer' })).data;
  // var img = `${event.senderID}`+ i + "." + t;
  // fs.writeFileSync(__dirname + '/cache/' + img, Buffer.from(getImg, 'utf-8'));
  // fs.createReadStream(__dirname + '/cache/' + img)
    oi.push(o)
  }
     var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var random = '';
    
  var number = 32;
  for (var i = 0; i < number; i++) {
    random += character.charAt(Math.floor(Math.random() * character.length));
  }
    var m = "";
    m += "Uk up up: " + '\n';
  for(let u = 0; u < event['messageReply']['attachments'].length; u++){
  const res = await axios.post('https://sex.accountkz.repl.co/up', {
  data: oi[u],
  type: oix,
  code: random + u
})
    console.log(u)
    m += `https://sex.accountkz.repl.co/up/view?type=${oix}&code=${random + u}.${t}`
  }
  api.sendMessage(m, event.threadID)
}
} catch(e){
  console.log(e)  
}}