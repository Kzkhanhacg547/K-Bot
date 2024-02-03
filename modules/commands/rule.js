const axios = require('axios');
const moment = require('moment-timezone');
module.exports.config = {
  name: "rule",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "CatalizCS & mod by DongDev",
  description: "Tùy biến luật cho từng group",
  commandCategory: "Box",
  usages: "[ add/remove/all ] [ content/ID ]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": "",
        "path": ""
    }
};

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = require("fs-extra");
    const { join } = require("path");
    const pathData = join(__dirname, "cache", "rules.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}
module.exports.run = async function({ event, api, args, permssion, Users }) {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = require("fs-extra");
    const { join } = require("path");

    const pathData = join(__dirname, "cache", "rules.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, listRule: [] };

    switch (args[0]) {
        case "add": {
            if (permssion == 0) return api.sendMessage("[ RULE ] - Bạn không đủ quyền hạn để có thể sử dụng thêm luật!", threadID, messageID);
            if (content.length == 0) return api.sendMessage("[ RULE ] - Phần nhập thông tin không được để trống", threadID, messageID);
            if (content.indexOf("\n") != -1) {
                const contentSplit = content.split("\n");
                for (const item of contentSplit) thisThread.listRule.push(item);
            }
            else {
                thisThread.listRule.push(content);
            }
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage('[ RULE ] - Đã thêm luật mới cho nhóm thành công!', threadID, messageID);
            break;
        }
        case "list":
        case"all": {
            var msg = "", index = 0;
            for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
            if (msg.length == 0) return api.sendMessage("[ RULE ] - Nhóm của bạn hiện tại chưa có danh sách luật để hiển thị!", threadID, messageID);
            api.sendMessage(`=== Luật của nhóm ===\n\n${msg}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "delete": {
            if (!isNaN(content) && content > 0) {
                if (permssion == 0) return api.sendMessage("[ RULE ] - Bạn không đủ quyền hạn để có thể sử dụng xóa luật!", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[ RULE ] - Nhóm của bạn chưa có danh sách luật để có thể xóa!", threadID, messageID);
                thisThread.listRule.splice(content - 1, 1);
                api.sendMessage(`[ RULE ] - Đã xóa thành công luật có số thứ tự thứ ${content}`, threadID, messageID);
                break;
            }
            else if (content == "all") {
                if (permssion == 0) return api.sendMessage("[Rule] Bạn không đủ quyền hạn để có thể sử dụng xóa luật!", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[Rule] Nhóm của bạn chưa có danh sách luật để có thể xóa!", threadID, messageID);
                thisThread.listRule = [];
                api.sendMessage(`[ RULE ] - Đã xóa thành công toàn bộ luật của nhóm!`, threadID, messageID);
                break;
            }
        }
   default: {
            if (thisThread.listRule.length != 0) {
                var msg = "", index = 0;
                for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
                const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
                 var tinhtrang = xuly < 10 ? "Mượt":
                 xuly > 10 && xuly < 100 ? "Ổn Định" :
                 "Deplay";
  const aa = await axios.get(`https://apivip.nvt20011.repl.co/thinh`); 
   var thinh = aa.data.url;
        const name = await Users.getNameUser(event.senderID)
                 let uid = event.senderID;
              const time = process.uptime(),
                anh = Math.floor(time / (60 * 60)),
                la = Math.floor((time % (60 * 60)) / 60),
                mdonq = Math.floor(time % 60);
                 var image = [], stt = ["1","2","3","4","5","6"], srd = stt[Math.floor(Math.random() * stt.length)]
                 for (i = 0; i < srd; i++) {
                 var stream = (await axios.get((await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`)).data.url,  {
                 responseType: 'stream' })).data
                 image.push(stream)
              }
  return api.sendMessage({body: `======= [ RULE ] =======\n━━━━━━━━━━━━━━━━━━\n[🍍] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${name}\n\n[💕] → ${msg}\n\n[🕰] → 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")}\n━━━━━━━━━━━━━━━━━━\n[⏳] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹: ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${mdonq} 𝗴𝗶𝗮̂𝘆\n[🍒] → 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${xuly} 𝗴𝗶𝗮̂𝘆\n[☁️] → 𝗧𝗵𝗶́𝗻𝗵 : ${thinh}\n➩ Việc tuân thủ luật của nhóm sẽ đóng góp tích cực đến cộng đồng của bạn!`, attachment: image}, threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
      }