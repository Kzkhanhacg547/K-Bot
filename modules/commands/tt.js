module.exports.config = {
    name: "tt",
    version: "1.1.12",
    hasPermssion: 0,
    credits: "Dũngkon",
    description: "",
    commandCategory: "Công cụ",
    usages: "",
    cooldowns: 5,
    dependencies: {"axios": ""}
};
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const request = global.nodemodule["request"];
const downloader = require('image-downloader')
  // khai báo trên đầu đi mấy cái dưới đỡ phải khái báo lại
module.exports.run = async function ({ event, api, args, Users, Threads }) {
try {
    const { threadID, messageID, senderID, body } = event;
    switch (!args[0] ?'':args[0].toLowerCase()) {
  case "video":
    case "v":{
       const link = args[1];
      if (!link) return api.sendMessage("cần link video tiktok", threadID);
const res = await axios.get(`https://apidungkonuser.dungkonuwu.repl.co/tiktok?video=${link}`);
const url = res.data.data.play;
  const str = res.data.data.title;
const hastag = str.split(' ').filter(i => i.startsWith('#')).join(', ');
       var callback = () => api.sendMessage({body:`Tên kênh: ${res.data.data.author.nickname}\nID: ${res.data.data.author.unique_id}\nLượt Tim: ${res.data.data.digg_count}\nhastag: ${hastag}\nLượt Bình Luận:${res.data.data.comment_count}\nLượt Chia Sẻ:${res.data.data.share_count}\nLượt Tải Xuống:${res.data.data.download_count}`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp4"),event.messageID);
   return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.mp4')).on('close',() => callback());  
    }  
      break;
  case "music":
   case "m":
   case "audio":
   case "a":{
    const link = args[1];
          if (!link) return api.sendMessage("Thiếu Link", threadID);
const res = await axios.get(`https://apidungkonuser.dungkonuwu.repl.co/tiktok?video=${link}`);
var url = res.data.data.music;
       var callback = () => api.sendMessage({body:`Nhạc dùng từ:\nID: ${res.data.data.music_info.id}=>${res.data.data.music_info.author}\n=>${res.data.data.music_info.title}`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp3"),event.messageID);
   return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.mp3')).on('close',() => callback());  
    }
      break;
    
    case "info":
    case "i":{
      const username = args[1];
      if (!username) return api.sendMessage("Thiếu ID TikTok", threadID);
       const res = await axios.get(`https://apidungkonuser.dungkonuwu.repl.co/tiktok?info=${username}`);
      var url1 = res.data.data.user.avatarLarger;
  var callback = () => api.sendMessage({body:`=== [ 𝗧𝗜𝗞𝗧𝗢𝗞 𝗜𝗡𝗙𝗢 ] ====\n━━━━━━━━━━━━━━━━━━\n\n🧸 𝗡𝗮𝗺𝗲:${res.data.data.user.nickname}\n🌐 𝗜𝗱: ${res.data.data.user.id}\n💬 𝗧𝗶𝗲̂̉𝘂 𝘀𝘂̛̉: ${res.data.data.user.signature}\n🔒 𝗧𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗿𝗶𝗲̂𝗻𝗴 𝘁𝘂̛: ${res.data.data.user.privateAccount}\n🌟 𝗙𝗼𝗹𝗹𝗼𝘄:${res.data.data.stats.followerCount}\n🌸 Đ𝗮𝗻𝗴 𝗳𝗼𝗹𝗹𝗼𝘄:${res.data.data.stats.followingCount}\n💓 𝗧𝗵𝗶́𝗰𝗵:${res.data.data.stats.heart}\n📥 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼:${res.data.data.stats.videoCount}\n✅ 𝗧𝗶́𝗰𝗵 𝘅𝗮𝗻𝗵:${res.data.data.user.verified}\n📎 𝗨𝗿𝗹 𝗽𝗿𝗼𝗳𝗶𝗹𝗲: https://tiktok.com/@${res.data.data.user.uniqueId}`,attachment: fs.createReadStream(__dirname + "/cache/tkinfo.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkinfo.png"),event.messageID);
   return request(encodeURI(`${url1}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkinfo.png')).on('close',() => callback());  
   }
  break; 

  case "search":
  case "s":{
      const search = args[1];
      if (!search) return api.sendMessage("Bạn chưa nhập từ khóa", threadID);
  const res = await axios.get(`https://apidungkonuser.dungkonuwu.repl.co/tiktok?search=${search}`);
   const Dungkon = res.data.data.videos;
    var text = '';
    for ( let i = 0; i < 10; i++) {
      text += `\n${i+1}. ${Dungkon[i].music_info.author}\nVới:\n+ ${Dungkon[i].play_count} Lượt Xem\n+ ${Dungkon[i].download_count} Lượt Tải\n`;
    };
    text += `\nreply 1 - 10 để chọn`;
    api.sendMessage(text, event.threadID, (error, msg) => global.client.handleReply.push({
       name: this.config.name,
       messageID: msg.messageID,
       author: senderID, Dungkon
    }));
}; break;
default: api.sendMessage(`==> vd ( video/v)
==> music (music/audio/a/m)
==> info ( i/info)
==> search ( search/s)`, threadID)
}
}catch(e){
    api.sendMessage(`${e}`,threadID);
}
}
        
module.exports.handleReply = async function({ handleReply, api, event }){
  const { threadID, messageID, senderID, body } = event;
  if (senderID != handleReply.author) return api.sendMessage(`Phá cái lol ne`, threadID);
   const {
       play, title, region
   } = handleReply.Dungkon[event.args[0]-1];
   const dest = __dirname + '/cache/search_vd.mp4'; 
   api.sendMessage({body:`tải video\n ờ: ${title}\nQuốc gia: ${region}`, attachment: await download(play, dest)}, threadID);
};
async function download(url, dest){
    await downloader.image({url, dest});
    return fs.createReadStream(dest);
};