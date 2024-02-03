module.exports.config = {
  name: "nhac3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "",
  commandCategory: "Noprefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({
  event,
  api,
  Users
}) => {
  const fs = global.nodemodule["fs-extra"];
  var {
    threadID,
    messageID,
    body,
    senderID
  } = event;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["music"] !== "undefined" && thread["music"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == api.getCurrentUserID()) return;

  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  //trả lời
  var msg = {
    body: `𝗙𝗶𝗹𝗲 𝗻𝗵𝗮̣𝗰 𝗺𝗽𝟯 𝗰𝘂̉𝗮 𝗰𝗮̣̂𝘂 đ𝗮̂𝘆\n->𝗖𝗵𝘂́𝗰 𝗰𝗮̣̂𝘂 𝗻𝗴𝗵𝗲 𝗻𝗵𝗮̣𝗰 𝘃𝘂𝗶 𝘃𝗲̉\n\n->𝗠𝗼𝗮 𝗺𝗼𝗮 𝗺𝗼𝗮`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://apirandom.ngojchaan.repl.co/mp3')).data.url,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["music"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "done",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "done",
  }
}

module.exports.run = async function({
  api,
  event,
  Threads,
  getText
}) {
  const {
    threadID,
    messageID
  } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["music"] == "undefined" || data["music"] == true) data["music"] = false;
  else data["music"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["music"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}