module.exports.config = {
    name: "listmdl",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Hướng dẫn cho người mới",
    commandCategory: "Tiện ích",
    usages: "all/số trang/tên lệnh",
    cooldowns: 5,
    envConfig: {
        autoUnsend: false,
        delayUnsend: 220

    }
};
module.exports.run = async function({ api, event, args }) {
    try {
      const fs = require("fs-extra");
const axios = require("axios");

    const { commands } = global.client;
    const { threadID, messageID } = event;
     const res = await axios.get("https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/phongcanh");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let hehe = (await axios.get(data, {
			responseType: "stream"
		})).data;
    const command = commands.get((args[0] || "").toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    if (args[0] == "all") {
        const command = commands.values();
        var group = [], msg = "";
        for (const commandConfig of command) {
            if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
            else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
        }
        group.forEach(commandGroup => msg += `→ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)}\n→ 𝗟𝗲̣̂𝗻𝗵 𝗴𝗼̂̀𝗺 𝗰𝗼́: ${commandGroup.cmds.join(', ')}\n\n`);
        return api.sendMessage({body: `== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗟𝗘̣̂𝗡𝗛 ] ==\n━━━━━━━━━━━━━━━━━━\n\n` + msg + `━━━━━━━━━━━━━━━━━━\n→ Hiện tại đang có ${commands.size} lệnh đang hoạt động\nThả cảm xúc"😠" để gỡ tin nhắn bot`, attachment: hehe}, threadID , async (error, info) => {
            if (autoUnsend) {
                await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
                return api.unsendMessage(info.messageID);
            } else return;
        });
    }
if (!command) {
    const commandsPush = [];
    const page = parseInt(args[0]) || 1;
    const pageView = 15;
    let i = 0;
    let msg = "== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗟𝗘̣̂𝗡𝗛 ] ==\n━━━━━━━━━━━━━━━━━━\n";
    for (var [name, value] of (commands)) {
        name += ` → ${value.config.description}`;
    commandsPush.push(name);
    }

    commandsPush.sort((a, b) => a.data - b.data);

    const first = pageView * page - pageView;
    i = first;
    const helpView = commandsPush.slice(first, first + pageView);

    for (let cmds of helpView)
      msg += `「 ${++i} 」${cmds}\n`;
    const cmdsView = `━━━━━━━━━━━━━━━━━━\n→ Trang「 ${page}/${Math.ceil(commandsPush.length/pageView)} 」\n→ Hiện tại đang có ${commandsPush.length} lệnh đang hoạt động\n→ Dùng ${prefix}listmdl <số trang> để xem lệnh từng trang\n→ Dùng ${prefix}listmdl <tên lệnh> để biết chi tiết về lệnh đó\n━━━━━━━━━━━━━━━━━━\n`;
  const gai = ["A có thể làm mọi thứ cho e, ngoại trừ việc yêu e lần nữa", "Hạnh phúc của a chính là vì e mà cố gắng, vì e mà thay đổi. E chính là động lực tuyệt vời nhất trong cuộc đời a", "Yêu chính là muốn ở cạnh người đó không rời dù chỉ một phút một giây", "Nhà e có bán rượu không mà sao nói chuyện với e a say quá"];
    return api.sendMessage({body: msg + cmdsView +`${gai[Math.floor(Math.random()*gai.length)]}`,  attachment: hehe}, threadID, 
        async (error, info) => {
            if(error) return console.log(error)
            if (autoUnsend) {
                await new Promise(resolve =>
                    setTimeout(resolve, delayUnsend * 1000));
                return api.unsendMessage(info.messageID);
            } else return;
        });
}
return api.sendMessage({body:`
→ Tên lệnh: ${command.config.name}
→ Mô tả: ${command.config.description}
→ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : "\n< chưa có cụ thể >"}
→ Thời gian chờ: ${command.config.cooldowns} giây
→ Quyền hạn: ${((command.config.hasPermssion == 0) ? `Người dùng` : (command.config.hasPermssion == 1) ? `Quản trị viên nhóm` :
(command.config.hasPermssion == 2) ? `Quản trị viên Bot` :
`Người điều hành Bot`)}`, attachment: hehe}, threadID, messageID); 
} catch(e) {
    console.log(e)
    }
};