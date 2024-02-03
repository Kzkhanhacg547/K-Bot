const { join } = require("path");
const { existsSync, writeFileSync, readFileSync } = require("fs-extra");

module.exports.config = {
    name: "autosetname",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "D-Jukie",
    description: "Tự động setname cho thành viên mới",
    commandCategory: "Box",
    usages: "[add <name> /remove] ",
    cooldowns: 5
}

module.exports.onLoad = () => {
    console.log('')
    const pathData = join(__dirname, "cache", "autosetname.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = async function  ({ event, api, args, permssionm, Users })  {
    const { threadID, messageID } = event;
    const pathData = join(__dirname, "cache", "autosetname.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, nameUser: [] };
    switch (args[0]) {
        case "add": {
            if (content.length == 0) return api.sendMessage("[ 𝐌𝐎𝐃𝐄 ] ➝ Phần cấu hình tên thành viên mới không được bỏ trống!", threadID, messageID);
            if (thisThread.nameUser.length > 0) return api.sendMessage("[ 𝐌𝐎𝐃𝐄 ] ➝ Vui lòng xóa cấu hình tên cũ trước khi đặt tên mới!!!", threadID, messageID); 
            thisThread.nameUser.push(content);
            const name = (await Users.getData(event.senderID)).name
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage(`[ 𝐌𝐎𝐃𝐄 ] ➝ Đặt cấu hình tên thành viên mới thành công\n[ 𝐌𝐎𝐃𝐄 ] ➝ Preview: ${content} ${name}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "delete": {
                if (thisThread.nameUser.length == 0) return api.sendMessage("[ 𝐌𝐎𝐃𝐄 ] ➝ Nhóm bạn chưa đặt cấu hình tên thành viên mới!!", threadID, messageID);
                thisThread.nameUser = [];
                api.sendMessage(`[ 𝐌𝐎𝐃𝐄 ] ➝ Xóa thành công phần cấu hình tên thành viên mới`, threadID, messageID);
                break;
        }
        default: {
                return api.sendMessage(`[ 𝐌𝐎𝐃𝐄 ] ➝ Dùng: /autosetname add <name> để cấu hình biệt danh cho thành viên mới\n[ 𝐌𝐎𝐃𝐄 ] ➝ Dùng: autosetname remove để xóa cấu hình đặt biệt danh cho thành viên mới`, threadID, messageID);
        }
    }
    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}