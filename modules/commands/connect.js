module.exports.config = {
	name: "connect",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Kz Khánhh",
	description: "duyệt box dùng bot,vv",
	commandCategory: "Admin",
    cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const dataPending = __dirname + "/cache/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
  if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "biaadmin.mp4")) request("https://i.imgur.com/xeHu6Pn.mp4").pipe(fs.createWriteStream(dirMaterial + "biaadmin.mp4"));
  if (!fs.existsSync(dirMaterial + "delbox.mp4")) request("https://i.imgur.com/caSu0A3.mp4").pipe(fs.createWriteStream(dirMaterial + "delbox.mp4"));
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`===[ 𝐃𝐔𝐘𝐄̣̂𝐓 𝐁𝐎𝐗 ]===\n→ 𝐏𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐛𝐨𝐱:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
        }
      }
    }
  }
module.exports.run = async function ({ event, api, args, Threads, Users, handleReply  }) {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
    	msg = `=====「 𝐃𝐀𝐍𝐇 𝐒𝐀́𝐂𝐇 𝐂𝐀́𝐂 𝐁𝐎𝐗 Đ𝐀̃ 𝐃𝐔𝐘𝐄̣̂𝐓: ${data.length} 」 ====`;
    	let count = 0;
    	for (e of data) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
    	msg = `=====「 𝐃𝐀𝐍𝐇 𝐒𝐀́𝐂𝐇 𝐂𝐀́𝐂 𝐁𝐎𝐗 𝐂𝐇𝐔̛𝐀 𝐃𝐔𝐘𝐄̣̂𝐓: ${dataP.length} 」 ====`;
    	let count = 0;
    	for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`=====「 DUYỆT 」=====\n\n${pb}${nmdl} l/list => xem danh sách box được duyệt\n\n${pb}${nmdl} p/pending => xem danh sách box chưa duyệt\n\n${pb}${nmdl} d/del => kèm theo ID để xóa khỏi danh sách được dùng bot\n\n${pb}${nmdl} => kèm theo ID để duyệt box đó\n\n⇒ ${cre} ⇐`, threadID, messageID);
       }
      
    else if (args[0] == "del" || args[0] == "d") {
    	idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage("===[ 𝐃𝐔𝐘𝐄̣̂𝐓 𝐁𝐎𝐗 ]===\n→ 𝐊𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐦𝐨̣̂𝐭 𝐜𝐨𝐧 𝐬𝐨̂́", threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage("===[ 𝐃𝐔𝐘𝐄̣̂𝐓 𝐁𝐎𝐗 ]===\n→ 𝐁𝐨𝐱 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐝𝐮𝐲𝐞̣̂𝐭 𝐭𝐮̛̀ 𝐭𝐫𝐮̛𝐨̛́𝐜!", threadID, messageID);
      api.sendMessage({body: `𝐁𝐨𝐱 đ𝐚̃ 𝐛𝐢̣ 𝐠𝐨̛̃ 𝐤𝐡𝐨̉𝐢 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 đ𝐮̛𝐨̛̣𝐜 𝐩𝐡𝐞́𝐩 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭\n𝐓𝐈𝐃 𝐁𝐎𝐗: ${idBox}\n𝐇𝐮̉𝐲 𝐝𝐮𝐲𝐞̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐛𝐨𝐱\n◆━━━━━━━━━━━━━◆\n📲𝑴𝒐̣𝒊 𝒕𝒉𝒂̆́𝒄 𝒎𝒂̆́𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒂𝒅𝒎𝒊𝒏\n→ [🌐] 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: fb.me/kzkhanh547\n→ [🎀] 𝐙𝐚𝐥𝐨: 𝟎𝟑𝟗𝟐𝟐𝟔𝟓xxx\n◆━━━━━━━━━━━━━◆\n𝐓𝐡𝐢𝐬 𝐢𝐬 ${global.config.BOTNAME}. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠\n© 𝙰𝚍𝚖𝚒𝚗: 𝐊𝐳 𝐊𝐡á𝐧𝐡`,attachment: fs.createReadStream(__dirname + "/cache/delbox.mp4")}, idBox);
    	api.sendMessage(`Box đã bị gỡ khỏi danh sách được phép dùng bot`, threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("===[ 𝐃𝐔𝐘𝐄̣̂𝐓 𝐁𝐎𝐗 ]===\n→ 𝐈𝐃 𝐛𝐚̣𝐧 𝐧𝐡𝐚̣̂𝐩 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`===[ 𝐃𝐔𝐘𝐄̣̂𝐓 𝐁𝐎𝐗 ]===\n→ 𝐈𝐃 ${idBox} đ𝐚̃ đ𝐮̛𝐨̛̣𝐜 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭 𝐭𝐮̛̀ 𝐭𝐫𝐮̛𝐨̛́𝐜!`, threadID, messageID);
   	else api.sendMessage("► 𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚 ◄\n                      ━━━━━━━━━━━━━━━━━━\n→『🐧』𝗛𝗶 𝗠𝗼̣𝗶 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗠𝗶̀𝗻𝗵 𝗟𝗮̀ 𝐊𝐳 𝐁𝐨𝘁\n→『🌟』𝐁𝐨𝐱 đ𝐚̃ đ𝐮̛𝐨̛̣𝐜 𝐒𝐔𝐏𝐄𝐑 𝐀𝐃𝐌𝐈𝐍 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭\n→『🌸』\n→『📝』𝐍𝐡𝐚̆́𝐧 '𝐊𝐳' đ𝐞̂̉ 𝐱𝐞𝐦 𝐝𝐚̂́𝐮 𝐥𝐞̣̂𝐧𝐡 đ𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭\n→『❌』𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁, 𝗸 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁!\n→『💕』𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭 𝐕𝐮𝐢 𝐕𝐞̉\n ━━━━━━━━━━━━━━━━━━\n→『☎』𝐌𝐨̣𝐢 𝐓𝐡𝐚̆́𝐜 𝐌𝐚̆́𝐜 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐢𝐧𝐛𝐨𝐱 𝐓𝐫𝐮̛̣𝐜 𝐓𝐢𝐞̂́𝐩 𝐂𝐡𝐨 𝐀𝐝𝐦𝐢𝐧!\n→『🌐』𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗠𝘂̛𝗼̛̣𝗻 𝗕𝗼𝘁 𝗖𝗵𝗼 𝗖𝗮́𝗰 𝗕𝗼𝘅 𝗞𝗵𝗮́𝗰 𝗧𝗵𝗶̀ 𝗟𝗶𝗲̂𝗻 𝗛𝗲̣̂ 𝗖𝗵𝗼 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁: m.me/kzkhanh547\n ━━━━━━━━━━━━━━━━━━\n→ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗯𝗼𝘁 💓\n© 𝙰𝚍𝚖𝚒𝚗: 𝐊𝐳 𝐊𝐡á𝐧𝐡", idBox, (error, info) => {
   		api.changeNickname(` [》 ${global.config.PREFIX} 《]➺ ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
      api.sendMessage({body: `► 𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚 ◄
━━━━━━━━━━━━━━━━━━
→『🐧』𝗛𝗶 𝗠𝗼̣𝗶 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗠𝗶̀𝗻𝗵 𝗟𝗮̀ 𝐊𝐳 𝐁𝐨𝐭
→『🌟』𝐁𝐨𝐱 đ𝐚̃ đ𝐮̛𝐨̛̣𝐜 𝐒𝐔𝐏𝐄𝐑 𝐀𝐃𝐌𝐈𝐍 𝐩𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭
→『🌸』
→『📝』𝐍𝐡𝐚̆́𝐧 "𝐊𝐳" đ𝐞̂̉ 𝐱𝐞𝐦 𝐝𝐚̂́𝐮 𝐥𝐞̣̂𝐧𝐡 đ𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭
→『❌』𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁, 𝗸 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁!
→『💕』𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭 𝐕𝐮𝐢 𝐕𝐞̉
━━━━━━━━━━━━━━━━━━
→『☎』𝐌𝐨̣𝐢 𝐓𝐡𝐚̆́𝐜 𝐌𝐚̆́𝐜 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐢𝐧𝐛𝐨𝐱 𝐓𝐫𝐮̛̣𝐜 𝐓𝐢𝐞̂́𝐩 𝐂𝐡𝐨 𝐀𝐝𝐦𝐢𝐧!
→『🌐』𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗠𝘂̛𝗼̛̣𝗻 𝗕𝗼𝘁 𝗖𝗵𝗼 𝗖𝗮́𝗰 𝗕𝗼𝘅 𝗞𝗵𝗮́𝗰 𝗧𝗵𝗶̀ 𝗟𝗶𝗲̂𝗻 𝗛𝗲̣̂ 𝗖𝗵𝗼 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁: m.me/kzkhanh547
━━━━━━━━━━━━━━━━━━
→ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗯𝗼𝘁 💓\n© 𝙰𝚍𝚖𝚒𝚗: 𝐊𝐳 𝐊𝐡á𝐧𝐡`, messageID, threadID }, idBox);
      api.changeNickname(` [》 ${global.config.PREFIX} 《]➺ ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
   		if (error) return api.sendMessage("Đã có lỗi xảy ra, đảm bảo rằng id bạn nhập hợp lệ và bot đang ở trong box!", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`===[ 𝐃𝐔𝐘𝐄̣̂𝐓 𝐁𝐎𝐗 ]===\n→ 𝐏𝐡𝐞̂ 𝐝𝐮𝐲𝐞̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐛𝐨𝐱:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
   	});
      }