module.exports.config = {
  name: "getappstate",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ManhG",
  description: "Làm mới appstate.json",
  commandCategory: "Hệ Thống",
  usages: "",
  cooldowns: 5,
  dependencies: {
  }
};

module.exports.run = async function ({ api, event, args }) {
  const fs = global.nodemodule["fs-extra"];

  let appstate = api.getAppState();
  // convert JSON object to a string
  const data = JSON.stringify(appstate);
  // write file to disk
  fs.writeFile(`${__dirname}/../../appstate.json`, data, 'utf8', (err) => {
    if (err) {
      return api.sendMessage(`Error writing file: ${err}`, event.threadID);
    } else {
      return api.sendMessage(`𝗟𝗮̀𝗺 𝗺𝗼̛́𝗶 𝗮𝗽𝗽𝘀𝘁𝗮𝘁𝗲 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘁𝘂𝗼̂̉𝗶 𝗹𝗼̂̀𝗻 𝗰𝗵𝗼̂𝗺 𝗮𝗰𝗰 😼`, event.threadID);
    }
  });

}