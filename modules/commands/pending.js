module.exports.config = {
    name: "pending",
    version: "1.0.7",
    credits: "CatalizCS mod by Kadeer",
    hasPermssion: 2,
    description: "Quản lý tin nhắn chờ của bot",
    commandCategory: "Admin",
    usages: "[u] [t] [a]",
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
        }
        return api.sendMessage(`Đã từ chối thành công!`, threadID, messageID);
    }
    else {

        const index = body.split(/\s+/);
        const fs = require("fs");
        const prefix = config.PREFIX;
        const { commands } = global.client; 
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            const groupName = handleReply.pending[singleIndex - 1].name;
            api.changeNickname(`» ${global.config.PREFIX} « ${(!global.config.BOTNAME) ? "𝐊𝐳 𝐁𝐨𝐭" : global.config.BOTNAME}`, handleReply.pending[singleIndex - 1].threadID, api.getCurrentUserID());
            api.sendMessage(`[ ${groupName} ] Đã được phê duyệt bởi admin!`, handleReply.pending[singleIndex - 1].threadID);
            count+=1;

        }
        return api.sendMessage(`➝ Đã phê duyệt thành công ${count} nhóm!`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, args, permission, handleReply }) {
    if (args.join() == "") {
        api.sendMessage("Bạn có thể dùng pending:\n━━━━━━━━━━━━━━━━━━\n➝ Pending user: Hàng chờ người dùng\n➝ Pending thread: Hàng chờ nhóm\n➝ Pending all:Tất cả hàng chờ ",event.threadID, event.messageID);
    }
    const content = args.slice(1, args.length);   
    switch (args[0]) {
        case "user":
        case "u":
        case "-u":
        case "User": {
            const permission = ["100081129610697"];
            if (!permission.includes(event.senderID)) return api.sendMessage("Quyền biên giới?", event.threadID, event.messageID);
            const { threadID, messageID } = event;
            const commandName = this.config.name;
            var msg = "", index = 1;

            try {
                var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
                var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
            } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

            const list = [...spam, ...pending].filter(group => group.isGroup == false);

            for (const single of list) msg += `${index++} ➝ ${single.name}(${single.threadID})\n`;

            if (list.length != 0) return api.sendMessage(`=== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗖𝗛𝗢̛̀ ] ===\n➝ Tổng: ${list.length}\n━━━━━━━━━━━━━━━━━━\n${msg}`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: commandName,
                    messageID: info.messageID,
                    author: event.senderID,
                    pending: list
                })
            }, messageID);
            else return api.sendMessage("❯ Hiện tại không có người dùng nào trong hàng chờ", threadID, messageID);
        }
        case "thread":
        case "-t":
        case "t":
        case "Thread": {
            const permission = ["100081129610697"];
            if (!permission.includes(event.senderID)) return api.sendMessage("Quyền biên giới?", event.threadID, event.messageID);
            const { threadID, messageID } = event;
            const commandName = this.config.name;
            var msg = "", index = 1;

            try {
                var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
                var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
            } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

            const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

            for (const single of list) msg += `${index++} ➝ ${single.name}(${single.threadID})\n`;

            if (list.length != 0) return api.sendMessage(`=== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗖𝗛𝗢̛̀ ] ===\nTổng: ${list.length}\n━━━━━━━━━━━━━━━━━━\n${msg}`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: commandName,
                    messageID: info.messageID,
                    author: event.senderID,
                    pending: list
                })
            }, messageID);
            else return api.sendMessage("❯ Hiện tại không có nhóm nào trong hàng chờ", threadID, messageID);
        }
        case "all":
        case "a":
        case "-a":
        case "al": {
            const permission = ["100081129610697"];
            if (!permission.includes(event.senderID)) return api.sendMessage("Quyền biên giới?", event.threadID, event.messageID);
            const { threadID, messageID } = event;
            const commandName = this.config.name;
            var msg = "", index = 1;

            try {
                var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
                var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
            } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

            const list = [...spam, ...pending].filter(group => group.isSubscribed);

            for (const single of list) msg += `${index++} ➝ ${single.name}(${single.threadID})\n`;

            if (list.length != 0) return api.sendMessage(`=== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗖𝗛𝗢̛̀ ] ===\nTổng: ${list.length}\n━━━━━━━━━━━━━━━━━━\n${msg}`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: commandName,
                    messageID: info.messageID,
                    author: event.senderID,
                    pending: list
                })
            }, messageID);
            else return api.sendMessage("❯ Hiện tại không có User & Thread nào trong hàng chờ ", threadID, messageID);
        }
    }       
}