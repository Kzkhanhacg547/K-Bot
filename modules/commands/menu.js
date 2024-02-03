module.exports.config = {
  name: "menu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MDong",
  description: "Hướng dẫn cho người mới",
  usages: "[all/-a] [số trang]",
  commandCategory: "Dành cho người dùng",
  cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  let num = parseInt(event.body.split(" ")[0].trim());
  (handleReply.bonus) ? num -= handleReply.bonus : num;
  let msg = "";
  let data = handleReply.content;
  let check = false;
  if (isNaN(num)) msg = "𝗛𝗮̃𝘆 𝗻𝗵𝐚̣̂𝗽 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́ 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻";
  else if (num > data.length || num <= 0) msg = "𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶";
  else {
    const { commands } = global.client;
    let dataAfter = data[num-=1];
    if (handleReply.type == "cmd_info") {
      let command_config = commands.get(dataAfter).config;
      msg += ` 『  ${command_config.commandCategory.toUpperCase()}   』   \n`;
      msg += `\n〖🐧〗𝗧𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵: ${dataAfter}`;
      msg += `\n〖📃〗𝗠𝗼̂ 𝘁𝗮̉: ${command_config.description}`;
      msg += `\n〖📝〗𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: ${(command_config.usages) ? command_config.usages : ""}`;
      msg += `\n〖⏳〗𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: ${command_config.cooldowns || 5}s`;
      msg += `\n〖🔰〗𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Admin Bot"}`;
      msg += `\n━━━━━━━━━━━━━━━━━━`
      msg += `\n〖💓〗𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 ${global.config.NAMEBOT}`;
    } else {
      check = true;
      let count = 0;
      msg += `▭▭ [ ${dataAfter.group.toUpperCase()} ] ▭▭\n━━━━━━━━━━━━━━━━━\n`;

      dataAfter.cmds.forEach(item => {
        msg += `\n ${count+=1}. ${item}: ${commands.get(item).config.description}`;
      })
      msg += "\n━━━━━━━━━━━━━━━━━\n╭──────╮\n   𝗥𝗘𝗣𝗟𝗬 \n╰──────╯ 〖💓〗𝗧𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗹𝗲̣̂𝗻𝗵 𝘃𝗮̀ 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 ";
    }
  }
  const axios = require('axios');
  const fs = require('fs-extra');
var so = [
  "2","3","4","5","6"
];
const dongdev = so[Math.floor(Math.random()*so.length)];
  const imageUrls = await Promise.all(Array.from({ length: `${dongdev}` }, async () => {
    const res = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    return res.data.url;   
  }));
  const imgurl = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));

    var msgg = {body: msg, attachment: imgurl }
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

module.exports.run = async function({ api, event, Users, args }) {
  const { commands } = global.client;
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const axios = require('axios');
  const fs = require('fs-extra');
  const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const name = await Users.getNameUser(event.senderID)
let uid = event.senderID;
var so = [
  "2","3","4","5","6"
];
const dongdev = so[Math.floor(Math.random()*so.length)];
  const imageUrls = await Promise.all(Array.from({ length: `${dongdev}` }, async () => {
    const res = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    return res.data.url;   
  }));
  const imgurl = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));

  const command = commands.values();
  var group = [], msg = "▭▭▭▭▭ [ 𝗠𝗘𝗡𝗨 ] ▭▭▭▭▭\n━━━━━━━━━━━━━━━━━━━━";
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
      if (isNaN(page_num_input)) msg = "𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝘀𝗼̂́";
      else if (page_num_input > page_num_total || page_num_input <= 0) msg = "𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶";
      else check = true;
    }
    if (check) {
    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
      bonus = index_start;
      index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
      all_commands = all_commands.slice(index_start, index_end);
      all_commands.forEach(e => {
        msg += `\n${index_start+=1}. → ${e}: ${commands.get(e).config.description}`;
      })          
      msg += `\n━━━━━━━━━━━━━━━━━━━━\n〖📖〗𝗧𝗿𝗮𝗻𝗴 ${page_num_input || 1}/${page_num_total}`;
      msg += `\n━━━━━━━━━━━━━━━━━━━━\n〖🍒〗𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝟭 đ𝗲̂́𝗻 ${index_end} Đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻\n〖📝〗𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵: ${global.client.commands.size}\n〖⏰〗𝗧𝗶𝗺𝗲 𝗱𝘂̀𝗻𝗴: ${gio}\n〖👤〗𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${name}\n〖🌐〗𝗟𝗶𝗻𝗸 𝗳𝗯: https://www.facebook.com/profile.php?id=${uid}\n━━━━━━━━━━━━━━━━━━━━\n〖🔰〗𝗥𝗘𝗣𝗟𝗬 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗹𝗲̣̂𝗻𝗵 𝘃𝗮̀ 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵`;
    }
    var msgg = {body: msg, attachment: imgurl }
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
    if (isNaN(page_num_input)) msg = "𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̣𝗻 𝘀𝗼̂́";
    else if (page_num_input > page_num_total || page_num_input <= 0) msg = "𝗦𝗼̂́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗮̆̀𝗺 𝘁𝗿𝗼𝗻𝗴 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶";
    else check = true;
  }
  if (check) {
    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
    bonus = index_start;
    index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
    group = group.slice(index_start, index_end);
    group.forEach(commandGroup => msg += `\n${index_start+=1}. → ${commandGroup.group.toUpperCase()} `);

    msg += `\n━━━━━━━━━━━━━━━━━━━━\n〖📖〗𝗧𝗿𝗮𝗻𝗴 ${page_num_input || 1}/${page_num_total} `;
    msg += `\n〖🎀〗Đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝘁𝗿𝗮𝗻𝗴 𝗸𝗵𝗮́𝗰, 𝗱𝘂̀𝗻𝗴: ${prefix}𝗺𝗲𝗻𝘂 [𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴]`;
    msg += `\n〖🧸〗𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 ${prefix}𝗺𝗲𝗻𝘂 𝗮𝗹𝗹 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝐚̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵`
    msg += `\n━━━━━━━━━━━━━━━━━━━━\n〖🍒〗𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝟭 đ𝗲̂́𝗻 ${index_end} Đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻\n〖📝〗𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵: ${global.client.commands.size}\n〖⏰〗𝗧𝗶𝗺𝗲 𝗱𝘂̀𝗻𝗴: ${gio}\n〖👤〗𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${name}\n〖🌐〗𝗟𝗶𝗻𝗸 𝗳𝗯: https://www.facebook.com/profile.php?id=${uid}\n━━━━━━━━━━━━━━━━━━━━\n〖💓〗𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝗲𝗼 𝗽𝗵𝐚̂𝗻 𝗹𝗼𝗮̣𝗶, 𝗕𝗼𝘁 đ𝘂̛𝗼̛̣𝗰 đ𝗶𝗲̂̀𝘂 𝗵𝗮̀𝗻𝗵 𝗯𝗼̛̉𝗶 ${global.config.ADMIN}`;
  }
  var msgg = {body: msg, attachment: imgurl }
  return api.sendMessage(msgg, threadID, async (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      bonus: bonus,
      messageID: info.messageID,
      content: group
    })
  });
           }