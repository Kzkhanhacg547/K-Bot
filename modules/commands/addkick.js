module.exports.config = {
    name: "addkick",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Kz Khánhh",
    description: "Quản lý người dùng trong nhóm bằng cách kick hoặc add",
    commandCategory: "Box Chat",
    usages: "[add/kick] [tag/reply/all]",
    cooldowns: 0
};

module.exports.run = async function ({ api, event, args, Threads }) {
    const botID = api.getCurrentUserID();

    const kickUser = async (userID) => {
        try {
            await api.removeUserFromGroup(userID, event.threadID);
        } catch (error) {
            return api.sendMessage("» Bot cần quyền quản trị viên để kick", event.threadID, event.messageID);
        }
    };

    const addUser = async (userID) => {
        const { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(event.threadID);

        if (participantIDs.includes(userID)) {
            return api.sendMessage('Người này đã ở trong nhóm', event.threadID, event.messageID);
        }

        if (approvalMode && !adminIDs.some(item => item.id == botID)) {
            return api.sendMessage('Bạn cần là quản trị viên để thêm người vào nhóm', event.threadID, event.messageID);
        }

        api.addUserToGroup(userID, event.threadID, (err) => {
            if (err) return api.sendMessage('Có lỗi xảy ra khi thêm người vào nhóm', event.threadID, event.messageID);
        });
    };

    if (!args[0] || !args[1]) {
        return api.sendMessage(`Vui lòng nhập đúng cú pháp lệnh. Ví dụ: ${global.config.PREFIX}manageuser kick @mention\n Xem help đi`, event.threadID, event.messageID);
    }

    const action = args[0].toLowerCase();
    const target = args.slice(1).join(" ");

    if (action === "add") {
        const res = await api.getUID(target);
        const uidUser = res;
        addUser(uidUser);
    } else if (action === "kick") {
        if (target === "all") {
            const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
            for (const idUser of listUserID) {
                setTimeout(() => {
                    kickUser(idUser);
                }, 1000);
            }
        } else {
            const mention = Object.keys(event.mentions);
            for (const idUser of mention) {
                setTimeout(() => {
                    kickUser(idUser);
                }, 1000);
            }
        }
    } else {
        return api.sendMessage(`Hành động ${action} không hợp lệ. Vui lòng chọn "add" hoặc "kick"`, event.threadID, event.messageID);
    }
};
