module.exports.config = {
    name: "2nhac",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Kz Khánh",
    description: "Phát nhạc tự động",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 3,
    denpendencies: {
        "axios": "",
        "fs-extra": ""
    }
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
    const { messageID, threadID, senderID, body } = event;
    if (body.toLowerCase() !== "nhạc") return;
    const data = (await Threads.getData(threadID)).data || {};
    //if (data["Nhạc"] === true) return api.sendMessage("Chức năng nhạc đã tắt trên nhóm này!", threadID);
    const axios = require("axios").create();
    const { url } = (await axios.get("https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/nhac")).data;
    const res = await axios.get(url, { responseType: "stream" });
    if (res.status !== 200) return api.sendMessage("Đã có lỗi xảy ra!", threadID, messageID);
    const stream = res.data;
    api.sendMessage({ attachment: stream, body: "Đây là bài nhạc yêu cầu của bạn:" }, threadID, () => stream.destroy());
};

module.exports.run = async ({ api, event, getText, Threads }) => {
    const { threadID, messageID } = event;
    const data = (await Threads.getData(threadID)).data || {};
    const currentState = data["Nhạc"];
    data["Nhạc"] = !currentState;
    await Threads.setData(threadID, { data });
    global.data.threadData.set(threadID, data);
    const successText = currentState ? getText("offSuccessText") : getText("onSuccessText");
    api.sendMessage(successText, threadID, messageID);
};
module.exports.config = {
    name: "2nhac",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Kz Khánh",
    description: "Phát nhạc tự động",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 3,
    denpendencies: {
        "axios": "",
        "fs-extra": ""
    }
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
    const { messageID, threadID, senderID, body } = event;
    if (body.toLowerCase() !== "Nhạc") return;
    const data = (await Threads.getData(threadID)).data || {};
    //if (data["Nhạc"] === false) return api.sendMessage("Chức năng nhạc đã tắt trên nhóm này!", threadID);
    const axios = require("axios");
    const { url } = (await axios.get("https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/nhac")).data;
    const res = await axios.get(url, { responseType: "stream" });
    if (res.status !== 200) return api.sendMessage("Đã có lỗi xảy ra!", threadID, messageID);
    const stream = res.data;
    api.sendMessage({ attachment: stream, body: "Đây là bài nhạc yêu cầu của bạn:" }, threadID, () => stream.destroy());
};

module.exports.run = async ({ api, event, getText, Threads }) => {
    const { threadID, messageID } = event;
    const data = (await Threads.getData(threadID)).data || {};
    const currentState = data["Nhạc"];
    data["Nhạc"] = !currentState;
    await Threads.setData(threadID, { data });
    global.data.threadData.set(threadID, data);
    const successText = currentState ? getText("offSuccessText") : getText("onSuccessText");
    api.sendMessage(successText, threadID, messageID);
};