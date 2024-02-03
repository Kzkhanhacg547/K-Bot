module.exports.config = {
    name: "kick",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Mirai",
    description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag hoặc reply",
    commandCategory: "Box",
    usages: "[tag/reply/all]",
    cooldowns: 0
};
//Lưu ý: Bot phải có quyền điều hành box
module.exports.run = async function ({
    args,
    api,
    event,
    Threads
}) {
    var {
        participantIDs
    } = (await Threads.getData(event.threadID)).threadInfo;
    const botID = api.getCurrentUserID();
    try {
        if (args.join().indexOf('@') !== -1) {
            var mention = Object.keys(event.mentions);
            for (let o in mention) {
                setTimeout(() => {
                    return api.removeUserFromGroup(mention[o], event.threadID)
                }, 1000)
            }
        } else {
        if (event.type == "message_reply") {
                uid = event.messageReply.senderID
                return api.removeUserFromGroup(uid, event.threadID)
            } else {
                if (!args[0]) return api.sendMessage(`» Kick ai.?`, event.threadID, event.messageID)
                else {
                    if (args[0] == "all") {
                        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
                        for (let idUser in listUserID) {
                            setTimeout(() => {
                                return api.removeUserFromGroup(idUser, event.threadID)
                            }, 1000)
                        }
                    }
                }
            }
        }
    } catch {
        return api.sendMessage('» Vĩnh biệt các bạn.', event.threadID, event.messageID);
    }
}