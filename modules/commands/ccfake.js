module.exports.config = {
  name: "ccfake",	
  version: "1.1.1", 
  hasPermssion: 0,
  credits: "DVB",
  description: "Tạo cccd Fake", 
  commandCategory: "Tạo ảnh",
  usages: "Tên|Ngày Sinh|Giới Tính|Nơi thường trú",
  cooldowns: 5,
  dependencies: {tinyurl: ""}
};

const//////////////////////////////////////////////////////////////////////
  capi     = "https://api-k.ngojchaan.repl.co/cccd?", // API
  apikey   = "",                                                      // API Key
  pathsave = __dirname + `/cache/banner.png`,                            // Lưu vào Cache
///////////// Hãy chỉnh msg theo ý bạn! ///////////////////////////////////
  msg1     = "====「𝗖𝗔̆𝗡 𝗖𝗨̛𝗢̛́𝗖 𝗖𝗢̂𝗡𝗚 𝗗𝗔̂𝗡 」====\n━━━━━━━━━━━━━━━━━━\n👉 𝗕𝗮̣𝗻 𝗽𝗵𝗮̉𝗶 𝗥𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵 đ𝗲̂̉ 𝗯𝗼𝘁 𝗹𝗮̂́𝘆 𝗮̉𝗻𝗵 𝘁𝗮̣𝗼 𝗰𝗰𝗰𝗱!",
  msg2     = "Sai định dạng ảnh!",
  msg3     = "====「𝗖𝗔̆𝗡 𝗖𝗨̛𝗢̛́𝗖 𝗖𝗢̂𝗡𝗚 𝗗𝗔̂𝗡 」====\n━━━━━━━━━━━━━━━━━━\n👉 Đ𝗮𝗻𝗴 𝗿𝗲𝗻𝗱𝗲𝗿 𝗮̉𝗻𝗵! 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗴𝗶𝗮̂𝘆 𝗹𝗮́𝘁!",
  msg4     = "====「𝗖𝗔̆𝗡 𝗖𝗨̛𝗢̛́𝗖 𝗖𝗢̂𝗡𝗚 𝗗𝗔̂𝗡 」====\n━━━━━━━━━━━━━━━━━━\n✔️ 𝗧𝗮̣𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗮̆𝗻 𝗰𝘂̛𝗼̛́𝗰 𝗰𝗼̂𝗻𝗴 𝗱𝗮̂𝗻\n${params1}💓 𝗧𝗲̂𝗻 𝗯𝗮̣𝗻 𝘁𝗮̣𝗼 𝗹𝗮̀: name\n📆 𝗡𝗴𝗮̀𝘆 𝘀𝗶𝗻𝗵: date\n👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: sex\n🏠 𝗡𝗼̛𝗶 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝘁𝗿𝘂́: location";

module.exports.run = async function ({api,event,args}) {
const axios = require('axios');
const fs = require("fs-extra");
const qs = require("querystring");
const { threadID, messageID } = event;
if ("message_reply" !== event.type) return api.sendMessage(msg1,threadID,messageID);
if (!event.messageReply.attachments || 0 == event.messageReply.attachments.length)
  return api.sendMessage(msg2,threadID,messageID);
var urlimg = await global.nodemodule.tinyurl.shorten(event.messageReply.attachments[0].url);
const content = args.join(" ").split("|").map(item => item = item.trim());
const text1 = content[0],text2 = content[1],text3 = content[2],text4 = content[3];
let params = {text1,text2,text3,text4,urlimg};
    params = qs.stringify(params);
  api.sendMessage(msg3,threadID,messageID);
var inimg = await axios.get(capi + params,{responseType:"stream"});
  return api.sendMessage({body: `====「𝗖𝗔̆𝗡 𝗖𝗨̛𝗢̛́𝗖 𝗖𝗢̂𝗡𝗚 𝗗𝗔̂𝗡 」====\n━━━━━━━━━━━━━━━━━━\n✔️ 𝗧𝗮̣𝗼 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗮̆𝗻 𝗰𝘂̛𝗼̛́𝗰 𝗰𝗼̂𝗻𝗴 𝗱𝗮̂𝗻\n💓 𝗧𝗲̂𝗻 𝗯𝗮̣𝗻 𝘁𝗮̣𝗼 𝗹𝗮̀: ${text1}\n📆 𝗡𝗴𝗮̀𝘆 𝘀𝗶𝗻𝗵: ${text2}\n👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: ${text3}\n🏠 𝗡𝗼̛𝗶 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝘁𝗿𝘂́: ${text4}`,attachment:inimg.data},threadID,messageID)};
module.exports.languages = {"vi": {}}                                   // Chống báo nỗi languages!