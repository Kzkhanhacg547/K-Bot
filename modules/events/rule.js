module.exports.config = {
    name: "rule",
    eventType: ["log:subscribe"],
    version: "",
    credits: "Mr.Ben", 
    description: "",
};
module.exports.run = async function ({ api, event }) {
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
      const { threadID } = event;
      const pathData = join("modules", "commands", "cache", "rules.json");
  const thread = global.data.threadData.get(threadID) || {};
if (typeof thread["rule"] != "undefined" && thread["rule"] == false) return;
       var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, listRule: [] };
      if (thisThread.listRule.length != 0) {
                var msg = "", index = 0;
                for (const item of thisThread.listRule) msg += `${index+=1}. ${item}\n`;
    return api.sendMessage({body:`===== [ 𝗤𝗨𝗬 𝗟𝗨𝗔̣̂𝗧 𝗡𝗛𝗢́𝗠 ] =====\n━━━━━━━━━━━━━━━━━━\n→ 𝗕𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶 𝗹𝗮̀ 𝗾𝘂𝘆 đ𝗶̣𝗻𝗵 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝗺𝗮̀ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶𝗻 𝘃𝗶𝗲̂𝗻 đ𝗮̃ đ𝗮̣̆𝘁 𝗿𝗮 💞\n\n${msg}\n🌸 𝗩𝗶𝗲̣̂𝗰 𝘁𝘂𝗮̂𝗻 𝘁𝗵𝘂̉ 𝗾𝘂𝘆 𝗹𝘂𝗮̣̂𝘁 𝗻𝗵𝗼́𝗺 𝘀𝗲̃ đ𝗼́𝗻𝗴 𝗴𝗼́𝗽 𝘁𝗶́𝗰𝗵 𝗰𝘂̛̣𝗰 đ𝗲̂́𝗻 𝗰𝗼̣̂𝗻𝗴 đ𝗼̂̀𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://30b9492f-fca2-4927-831d-7842633f725f-00-2wzbmchi3z60l.pike.replit.dev/images/loli')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID)
      }
}