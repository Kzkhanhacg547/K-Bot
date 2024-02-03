  module.exports.config = {
      name: "log",
      eventType: ["log:unsubscribe", "log:subscribe", "log:thread-name"],
      version: "1.0.0",
      credits: "Mirai Team",
      description: "Ghi lại thông báo các hoạt động của bot!",
      envConfig: {
          enable: true
      }
  };

  module.exports.run = async function ({ api, event, Threads }) {
      const logger = require("../../utils/log");
      if (!global.configModule[this.config.name].enable) return;
      var formReport = "=== 『 𝗕𝗼𝘁 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 』 ===\n━━━━━━━━━━━━━━━━━━\n" +
          "\n\n→ [🧸] 𝗧𝗵𝗿𝗲𝗮𝗱 𝗺𝗮𝗻𝗴 𝗜𝗗: " + event.threadID +
          "\n→ [🌸] 𝗛𝗮̀𝗻𝗵 đ𝗼̣̂𝗻𝗴: {task}" +
          "\n→ [👤] 𝗛𝗮̀𝗻𝗵 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝘁𝗮̣𝗼 𝗯𝗼̛̉𝗶 𝘂𝘀𝗲𝗿𝗜𝗗: " + event.author +
          "\n→ [🐸] " + Date.now() + "",
          task = "";
      switch (event.logMessageType) {
          case "log:thread-name": {
              const oldName = (await Threads.getData(event.threadID)).name || "𝗧𝗲̂𝗻 𝗞𝗵𝗼̂𝗻𝗴 𝗧𝗼̂̀𝗻 𝗧𝗮̣𝗶",
                  newName = event.logMessageData.name || "𝗧𝗲̂𝗻 𝗞𝗵𝗼̂𝗻𝗴 𝗧𝗼̂̀𝗻 𝗧𝗮̣𝗶";
              task = "⚔️𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝗵𝗮𝘆 đ𝗼̂̉𝗶 𝘁𝗲̂𝗻 𝗻𝗵𝗼́𝗺 𝘁𝘂̛̀: '" + oldName + "' 𝘁𝗵𝗮̀𝗻𝗵 '" + newName + "'";
              await Threads.setData(event.threadID, { name: newName });
              break;
          }
          case "log:subscribe": {
              if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "⚔️𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗮̃ 𝘁𝗵𝗲̂𝗺 𝗯𝗼𝘁 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗶 𝗺𝗼̛́𝗶!";
              break;
          }
          case "log:unsubscribe": {
              if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) task = "⚔️𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗮̃ 𝘁𝗵𝗲̂𝗺 𝗸𝗶𝗰𝗸 𝗯𝗼𝘁 𝗸𝗵𝗼̉𝗶 𝗻𝗵𝗼́𝗺"
              break;
          }
          default:
              break;
      }

      if (task.length == 0) return;

      formReport = formReport
          .replace(/\{task}/g, task);

      for (let i = 0; i < global.config.ADMINBOT.length; i++) {
          api.sendMessage(formReport, global.config.ADMINBOT[i], (error, info) => {
              if (error) {
                  logger(formReport, "[ Logging Event ]");
              }
          });
      }
  }
