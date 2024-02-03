module.exports.config = {
  name: "listcmd",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Hướng dẫn cho người mới",
  usages: "[all/-a] [số trang]",
  commandCategory: "Box",
  cooldowns: 5,

  };
module.exports.handleReply = async function ({ api, event, handleReply }) {
  let num = parseInt(event.body.split(" ")[0].trim());
  (handleReply.bonus) ? num -= handleReply.bonus : num;
  let msg = "";
  let data = handleReply.content;
  let check = false;
  if (isNaN(num)) msg = "𝗛𝗮̃𝘆 𝗻𝗵𝗮̣̂𝗽 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́ 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻";
  else if (num > data.length || num <= 0) msg = "𝘀𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶";
  else {
    const { commands } = global.client;
    let dataAfter = data[num-=1];
    if (handleReply.type == "cmd_info") {
      let command_config = commands.get(dataAfter).config;
      msg += ` 『  ${command_config.commandCategory.toUpperCase()}   』   \n`;
      msg += `\nTên lệnh: ${dataAfter}`;
      msg += `\nMô tả: ${command_config.description}`;
      msg += `\nCách sử dụng: ${(command_config.usages) ? command_config.usages : ""}`;
      msg += `\nThời gian chờ: ${command_config.cooldowns || 5}s`;
      msg += `\nQuyền hạn: ${(command_config.hasPermssion == 0) ? "𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴" : (command_config.hasPermssion == 1) ? "𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺" : "𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗯𝗼𝘁"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
      msg += `\n\n» 𝗠𝗼𝗱𝘂𝗹𝗲 𝗰𝗼𝗱𝗲 𝗯𝘆 ${command_config.credits} «`;
    } else {
      check = true;
      let count = 0;
      msg += `» ${dataAfter.group.toUpperCase()} «\n`;

      dataAfter.cmds.forEach(item => {
        msg += `\n ${count+=1}. » ${item}: ${commands.get(item).config.description}`;
      })
      msg += "\n\n╭──────╮\n    𝗥𝗲𝗽𝗹𝘆 \n╰──────╯ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗹𝗲̣̂𝗻𝗵 𝘃𝗮̀ 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵";
    }
  }
  const axios = require('axios');
  const fs = require('fs-extra');
  const img = ["https://i.imgur.com/qaOoVxI.mp4",
"https://i.imgur.com/kuaBs5Z.mp4",
"https://i.imgur.com/CwCLfou.mp4",
"https://i.imgur.com/BfdBM2S.mp4",
"https://i.imgur.com/FV1RjyB.mp4",
"https://i.imgur.com/rY2Tr7a.mp4",
"https://i.imgur.com/U3mZJ2p.mp4",
"https://i.imgur.com/mQisbXH.mp4",
"https://i.imgur.com/05XBSF1.mp4",
"https://i.imgur.com/akEe75p.mp4",
"https://i.imgur.com/4ypzEAU.mp4",
"https://i.imgur.com/d6oyuMn.mp4",
"https://i.imgur.com/iR41m8T.mp4",
"https://i.imgur.com/LZBn8F1.mp4",
"https://i.imgur.com/cHwEm6b.mp4",
"https://i.imgur.com/gA0DZwQ.mp4",
"https://i.imgur.com/jBP8tRI.mp4",
"https://i.imgur.com/hTOQPoA.mp4",
"https://i.imgur.com/fj0BEDj.mp4",
"https://i.imgur.com/mntmWgg.mp4",
"https://i.imgur.com/RARWGZM.mp4",
"https://i.imgur.com/KaGKdps.mp4",
"https://i.imgur.com/RARWGZM.mp4",
"https://i.imgur.com/1DxwsNT.mp4",
"https://i.imgur.com/UBPAtqo.mp4",
"https://i.imgur.com/e4z5TA3.mp4",
"https://i.imgur.com/2Zmvc7c.mp4",
"https://i.imgur.com/t71RMqb.mp4",
"https://i.imgur.com/OEvivBi.mp4",
"https://i.imgur.com/Wq0yfRS.mp4",
"https://i.imgur.com/Wq0yfRS.mp4",
"https://i.imgur.com/3hCdCMk.mp4",]
  var path = __dirname + "/cache/menu.mp4"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 
  const imgP = []
  let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
  fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
  imgP.push(fs.createReadStream(path))
  var msgg = {body: msg, attachment: imgP}
  api.unsendMessage(handleReply.messageID);
  return api.sendMessage(msgg, event.threadID, (error, info) => {
    if (error) console.log(error);
    if (check) {
      global.client.handleReply.push({
        type: "cmd_info",
        name: this.config.name,
        messageID: info.messageID,
        content: data[num].cmds
      })
    }
  }, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  const axios = require('axios');
  const fs = require('fs-extra');
  const imgP = []
  const img = ["https://i.imgur.com/qaOoVxI.mp4",
"https://i.imgur.com/kuaBs5Z.mp4",
"https://i.imgur.com/CwCLfou.mp4",
"https://i.imgur.com/BfdBM2S.mp4",
"https://i.imgur.com/FV1RjyB.mp4",
"https://i.imgur.com/rY2Tr7a.mp4",
"https://i.imgur.com/U3mZJ2p.mp4",
"https://i.imgur.com/mQisbXH.mp4",
"https://i.imgur.com/05XBSF1.mp4",
"https://i.imgur.com/akEe75p.mp4",
"https://i.imgur.com/4ypzEAU.mp4",
"https://i.imgur.com/d6oyuMn.mp4",
"https://i.imgur.com/iR41m8T.mp4",
"https://i.imgur.com/LZBn8F1.mp4",
"https://i.imgur.com/cHwEm6b.mp4",
"https://i.imgur.com/gA0DZwQ.mp4",
"https://i.imgur.com/jBP8tRI.mp4",
"https://i.imgur.com/hTOQPoA.mp4",
"https://i.imgur.com/fj0BEDj.mp4",
"https://i.imgur.com/mntmWgg.mp4",
"https://i.imgur.com/RARWGZM.mp4",
"https://i.imgur.com/KaGKdps.mp4",
"https://i.imgur.com/RARWGZM.mp4",
"https://i.imgur.com/1DxwsNT.mp4",
"https://i.imgur.com/UBPAtqo.mp4",
"https://i.imgur.com/e4z5TA3.mp4",
"https://i.imgur.com/2Zmvc7c.mp4",
"https://i.imgur.com/t71RMqb.mp4",
"https://i.imgur.com/OEvivBi.mp4",
"https://i.imgur.com/Wq0yfRS.mp4",
"https://i.imgur.com/Wq0yfRS.mp4",
"https://i.imgur.com/3hCdCMk.mp4",]
  var path = __dirname + "/cache/menu.mp4"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 

    let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
  const command = commands.values();
  var group = [], msg = "=== [ 𝗠𝗘𝗡𝗨 ] ===\n━━━━━━━━━━━━━━━━━━\n";
  let check = true, page_num_input = "";
  let bonus = 0;

  for (const commandConfig of command) {
    if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
    else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
  }

  if (args[0] && ["all", "-a"].includes(args[0].trim())) {
    let all_commands = [];
    group.forEach(commandGroup => {
      commandGroup.cmds.forEach(item => all_commands.push(item));
    });
    let page_num_total = Math.ceil(all_commands.length / 2222222222);
    if (args[1]) {
      check = false;
      page_num_input = parseInt(args[1]);
      if (isNaN(page_num_input)) msg = "=== [ 𝗠𝗢𝗗𝗘 ] ===\n━━━━━━━━━━━━━━━━━━\n\n - 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝘀𝗼̂́ 🎀";
      else if (page_num_input > page_num_total || page_num_input <= 0) msg = "=== [ 𝗠𝗢𝗗𝗘 ] ====\n━━━━━━━━━━━━━━━━━━\n\n𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶 🎀";
      else check = true;
    }
    if (check) {
    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
      bonus = index_start;
      index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
      all_commands = all_commands.slice(index_start, index_end);
      all_commands.forEach(e => {
        msg += `\n${index_start+=1}. » ${e}: ${commands.get(e).config.description}`;
      })
      msg += `\n\n[💬] 𝗦𝗼̂́ 𝗧𝗿𝗮𝗻𝗴: ${page_num_input || 1}/${page_num_total}`;
      msg += `\n[🌸] Đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝘁𝗿𝗮𝗻𝗴 𝗸𝗵𝗮́𝗰, 𝗱𝘂̀𝗻𝗴: ${prefix}𝗺𝗲𝗻𝘂 [𝗮𝗹𝗹/-𝗮] [𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴]`;
      msg += `\n[✨️] 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 ${prefix}𝐥𝐢𝐬𝐭𝐜𝐦𝐝 𝗮𝗹𝗹 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵`
      msg += "\n╭──────╮\n     𝗥𝗲𝗽𝗹𝘆 \n╰──────╯𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗹𝗲̣̂𝗻𝗵 𝘃𝗮̀ 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵";
    }
    var msgg = {body: msg, attachment: imgP}
    return api.sendMessage(msgg, threadID, (error, info) => {
      if (check) {
        global.client.handleReply.push({
          type: "cmd_info",
          bonus: bonus,
          name: this.config.name,
          messageID: info.messageID,
          content: all_commands
        })
      }
    }, messageID)
  }

  let page_num_total = Math.ceil(group.length / 2222222222);
  if (args[0]) {
    check = false;
    page_num_input = parseInt(args[0]);
    if (isNaN(page_num_input)) msg = "Vui lòng chọn số";
    else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Số bạn chọn không nằm trong danh sách, vui lòng thử lại";
    else check = true;
  }
  if (check) {
    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
    bonus = index_start;
    index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
    group = group.slice(index_start, index_end);
    group.forEach(commandGroup => msg += `\n🎀 ${index_start+=1}. ➺ ${commandGroup.group.toUpperCase()} 💦`);
    msg += `\n🌸💞🌸  𝐊𝐳 𝐁𝐎𝐓 🌸💞🌸
💟 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐨́ ${client.commands.size} 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭 𝐧𝐚̀𝐲
🦋𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲(𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐒𝐓𝐓
📩 𝐌𝐨̣𝐢 𝐭𝐡𝐚̆́𝐜 𝐦𝐚̆́𝐜 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭
🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/kzkhanh547
🔰 𝐃𝐮̀𝐧𝐠 ${prefix}𝐥𝐢𝐬𝐭𝐜𝐦𝐝 đ𝐞̂̉ 𝐱𝐞𝐦 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡
🐳 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐯𝐮𝐢 𝐯𝐞̉ 🔥`;
  }
  var msgg = {body: msg, attachment: imgP}
  return api.sendMessage(msgg, threadID, async (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      bonus: bonus,
      messageID: info.messageID,
      content: group
    })
  });
}

