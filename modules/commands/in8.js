module.exports.config = {
	name: "in8",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "Kz Khánhh",
	description: "xem thông tin nhóm chat của bạn",
	commandCategory: "Thông tin",
	usages: "in4",
	cooldowns: 5,
	
};
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) => {
const request = require("request");
        const fs = require("fs");
        const axios = require("axios");
  const res = await axios.get(`https://sex.accountkz.repl.co/thinh`);
var love = res.data.data;
  const req = await axios.get(`https://sex.accountkz.repl.co/cadao`);
var cadao = req.data.data;
if (args.join() == "") { 
  
 let data = await api.getUserInfo(event.senderID);			
		let name = data[event.senderID].name;
  
let isFriend = data[event.senderID].isFriend == false ? "Chưa kết bạn với BOT" : data[event.senderID].isFriend == true ? "Đã kết bạn với BOT" : "???";

				let token = data[event.senderID].searchTokens;
				let url = data[event.senderID].profileUrl;
       
  var callback = () => api.sendMessage({body:`[❇️] ━ [ 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ] ━ [❇️]\n📝 Tên: ${name} \n❇️ UID: ${event.senderID}\n🍀 Tình trạng: ${isFriend}\n🔗 Link FB: ${url}\n[❇️] ━ [ 𝐒𝐀𝐘𝐈𝐍𝐆𝐒 ] ━ [❇️]\n💓 Ngôn tình:\n${love}\n🍁 Ca dao:\n${cadao}`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());

	}
	else if (Object.keys(event.mentions).length == 1) {
   
		var mention = Object.keys(event.mentions)[0];
    const trai1 = ["Trai", "Gay", "Boy", "Man","Gái", "Les", "Woman", "Girl", "Nam", "Nữ"];
 let data1 = await api.getUserInfo(mention);	
		let name= data1[mention].name;
let isFriend = data1[mention].isFriend == false ? "Chưa kết bạn với BOT" : data[mention].isFriend == true ? "Đã kết bạn với BOT" : "???";
			
				let token = data1[mention].searchTokens;
				let url = data1[mention].profileUrl; 
    
   
  var callback = () => api.sendMessage({body:`[❇️] ━ [ 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ] ━ [❇️]\n📝 Tên: ${name} \n❇️ UID: ${event.senderID}\n🚀 Giới tính: ${trai1[Math.floor(Math.random()*trai1.length)]}\n🍀 Tình trạng: ${isFriend}.\n🔗 Link FB: ${url}\n[❇️] ━ [ 𝐒𝐀𝐘𝐈𝐍𝐆𝐒 ] ━ [❇️]\n💓 Ngôn tình:\n${love}\n🍁 Ca dao:\n${cadao}`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());

	}
}