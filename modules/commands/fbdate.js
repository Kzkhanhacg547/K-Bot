module.exports.config = {
  name: "fbdate",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "sailenh",
  commandCategory: "Hệ Thống",
  usages: "Công cụ",
  cooldowns: 0
};

module.exports.run = async ({ api, models, Users, Threads, Currencies, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const moment = require("moment-timezone");
    const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    const timeStart = Date.now();
    const admin = config.ADMINBOT;
    var { threadID, messageID, body } = event,{ PREFIX } = global.config;
    let threadSetting = global.data.threadData.get(threadID) || {};
    let prefix = threadSetting.PREFIX || PREFIX;  

    const res1 = await axios.get(`https://webapi.chaocacbannhe.repl.co/mui`);
    const res2 = await axios.get(`https://webapi.chaocacbannhe.repl.co/mui`);
    var array = [];
    var data1 = res1.data.data;
    var data2 = res2.data.data;
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    array.push(downloadfile2);


  const ntfb = await axios.get(
    `https://api.quangbao.dev/facebook/finduid?uid=${event.senderID}`
  );
  if (ntfb.status == 200) {
    const finddate = ntfb.data.day;
    const findtime = ntfb.data.time;
    const findname = ntfb.data.name;
        api.sendMessage({
                        body: `====『 ${global.config.BOTNAME} 』====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ${gio} 』\n➜𝑇𝑖𝑚𝑒 𝑜𝑛𝑙: ${hours} : ${minutes} : ${seconds}\n➜𝑃𝑟𝑒𝑓𝑖𝑥: ${global.config.PREFIX}\n➜𝑃𝑖𝑛𝑔: ${Date.now() - timeStart}ms\n➜𝐴𝑑𝑚𝑖𝑛𝑏𝑜𝑡: ${admin.length}\n➜𝐵𝑜𝑡 𝑐𝑜́: ${client.commands.size} 𝑙𝑒̣̂𝑛ℎ\n🍄 𝗧𝗲̂𝗻: ${findname}\n📆 𝗡𝗴𝗮̀𝘆 𝗧𝗮̣𝗼: ${finddate}\n⏰ 𝗚𝗶𝗼̛̀ 𝗧𝗮̣𝗼: ${findtime}\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ 𝑇ℎ𝑎̉ "❤️" 𝑣𝑎̀𝑜 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑏𝑜𝑡 đ𝑒̂̉ 𝑥𝑒𝑚 𝑐𝑎́𝑐 𝑙𝑒̣̂𝑛ℎ 𝑡ℎ𝑢̛𝑜̛̀𝑛𝑔 𝑑𝑢̀𝑛𝑔 𝑐𝑜́ 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡!!!`, attachment: array},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
   }
}

module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, userID } = event;
    const res1 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/gaicute`);
    const res2 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/gaicute`);
    const res3 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/gaicute`);
    var array = [];
    var data1 = res1.data.data;
    var data2 = res2.data.data;
    var data3 = res3.data.data;
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
    var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    array.push(downloadfile2);    
    array.push(downloadfile3); 
    if (event.userID != handleReaction.author) return;
    if (event.reaction != "❤") return; 
    api.unsendMessage(handleReaction.messageID);
        var msg = `『 ${global.config.ICON} 』=== 『 𝐂𝐀́𝐂 𝐋𝐄̣̂𝐍𝐇 𝐓𝐇𝐔̛𝐎̛̀𝐍𝐆 𝐃𝐔̀𝐍𝐆 』 ===『 ${global.config.ICON} 』
◆━━━━━━━━━━━━━━◆
${global.config.PREFIX}𝐡𝐞𝐥𝐩 => 𝐗𝐞𝐦 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐦𝐞𝐧𝐮 => 𝐗𝐞𝐦 𝐜𝐚́𝐜 𝐦𝐞𝐧𝐮 đ𝐚̃ 𝐩𝐡𝐚̂𝐧 𝐜𝐡𝐢𝐚 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐭𝐭 => 𝐗𝐞𝐦 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐫𝐚𝐧𝐤 => 𝐗𝐞𝐦 𝐜𝐡𝐢̉ 𝐬𝐨̂́ 𝐱𝐞̂́𝐩 𝐡𝐚̣𝐧𝐠 𝐫𝐚𝐧𝐤 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜
${global.config.PREFIX}𝐛𝐨𝐱 𝐢𝐧𝐟𝐨 => Đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐛𝐨𝐱
${global.config.PREFIX}𝐢𝐧𝟒 => 𝐗𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠
${global.config.PREFIX}𝐥𝐨̣𝐜 => 𝐋𝐨̣𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 = 𝟎 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧
${global.config.PREFIX}𝐠𝐡𝐞́𝐩 => 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 𝐯𝐨̛́𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧
${global.config.PREFIX}𝐠𝐡𝐞𝐩𝐥𝐨𝐯𝐞 => 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 đ𝐮̛𝐨̛̣𝐜 𝐜𝐡𝐨̣𝐧 𝐧𝐚𝐦/𝐧𝐮̛̃ 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧
${global.config.PREFIX}𝐬𝐞𝐭𝐧𝐚𝐦𝐞 => 𝐓𝐡𝐚𝐲 đ𝐨̂̉𝐢 𝐛𝐢𝐞̣̂𝐭 𝐝𝐚𝐧𝐡 𝐜𝐮̉𝐚 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧
${global.config.PREFIX}𝐢𝐦𝐠𝐮𝐫 => 𝐋𝐚̂́𝐲 𝐥𝐢𝐧𝐤 𝐚̉𝐧𝐡 𝐢𝐦𝐠𝐮𝐫
${global.config.PREFIX}𝐬𝐢𝐧𝐠 => 𝐍𝐠𝐡𝐞 𝐧𝐡𝐚̣𝐜 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐯𝐢𝐝𝐞𝐨 => 𝐗𝐞𝐦 𝐯𝐢𝐝𝐞𝐨 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐲𝐭𝐛 => 𝐑𝐞𝐩𝐥𝐲 𝐯𝐢𝐝𝐞𝐨/𝐦𝐮𝐬𝐢𝐜 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐮̀𝐲 𝐜𝐡𝐨̣𝐧 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
[🎀]➜ 𝗟𝘂̛𝘂 𝘆́ 𝗽𝗵𝗮̉𝗶 𝘃𝗶𝗲̂́𝘁 đ𝘂́𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘁𝗮̉ 
━━━━━━━━━━━━━━━
===『 ĐIỀU HÀNH BỞI ${global.config.AMDIN_NAME} 』===`
        return api.sendMessage({body: msg, attachment: array},event.threadID); 
  }



