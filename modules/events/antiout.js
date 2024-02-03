module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "0.0.1",
    credits: "Mirai",
    description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!data.antiout) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đuổi";
    if (type == "tự rời") {
        api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
            if (error) {
                api.sendMessage(`» ${name} trốn nhanh quá nên BOT không lôi cổ nó vào lại được.`, event.threadID)
            } else api.sendMessage(`» ${name} muốn rời khỏi nhóm mà không xin phép.\n» ${name} hãy nhắn tin để báo với Quản Trị Viên bạn nhé.`, event.threadID);
        })
    }
}
