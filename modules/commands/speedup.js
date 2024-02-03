module.exports.config = {
  name: "speedup",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "nhật nguyên",
  description: "",
  commandCategory: "Noprefix",
  usages: "không cần dùng dấu lệnh, chỉ cần ghi nhạc thì nhạc sẽ tự phát nhé",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["speedup"] !== "undefined" && thread["speedup"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  //trả lời
  var msg = {
    body: `Chào ${name}, cùng nghe nhạc nhé ❤️`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://image-random-api.ngojchaan.repl.co/123/?apikey=kzkhanh554477')).data.url,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["speedup", "nhạc", "nhac"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "speedup thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "speedup success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["speedup"] == "undefined" || data["speedup"] == true) data["speedup"] = false;
  else data["speedup"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["speedup"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
  }