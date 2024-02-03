module.exports.config = {
  name: "console",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "JRT",
  description: "Console bớt nhàm chán hơn",
  commandCategory: "Hệ thống",
  usages: "console",
  cooldowns: 5,
};

module.exports.handleEvent = async function ({
  api,
  event,
  args,
  Users,
  Threads,
}) {
  const { configPath } = global.client;
  const { DeveloperMode } = global.config;
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const modDev = config.DeveloperMode;
  if (this.config.credits != "JRT") {
    return;
  }
  if (modDev == true) return;
  else {
    var chalk = require("chalk");
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz("Asia/Ho_Chi_Minh").format("dddd");
    if (thu == "Sunday") thu = "Chủ Nhật";
    if (thu == "Monday") thu = "Thứ Hai";
    if (thu == "Tuesday") thu = "Thứ Ba";
    if (thu == "Wednesday") thu = "Thứ Tư";
    if (thu == "Thursday") thu = "Thứ Năm";
    if (thu == "Friday") thu = "Thứ Sáu";
    if (thu == "Saturday") thu = "Thứ Bảy";
    var msg = event.body || "Ảnh, video hoặc ký tự đặc biệt";
    const threadInfo = await api.getThreadInfo(event.threadID);
    var threadName = threadInfo.threadName || "Tên đã bị gạch sổ";
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor1 = Math.floor(Math.random() * 12345678).toString(16);
    var randomColor2 = Math.floor(Math.random() * 13245769).toString(16);
    var randomColor3 = Math.floor(Math.random() * 13333333).toString(16);
    var randomColor4 = Math.floor(Math.random() * 16777216).toString(16);
    var randomColor5 = Math.floor(Math.random() * 14532484).toString(16);
    const name = await Users.getNameUser(event.senderID);
    return console.log(
      chalk.bold.hex("#" + randomColor4)(`\n`) +
        chalk.bold.hex("#" + randomColor)(`BOX: `) +
        chalk.hex("#" + randomColor1)(`${threadName}`) +
        chalk.bold.hex("#" + randomColor)(`\nNAME: `) +
        chalk.bold.hex("#" + randomColor2)(`${name}`) +
        chalk.bold.hex("#" + randomColor)(`\nMESSAGE: `) +
        chalk.hex("#" + randomColor3)(`${msg}`) +
        chalk.bold.hex("#" + randomColor)(`\nTIME: `) +
        chalk.bold.hex("#" + randomColor5)(`${thu} || ${gio}\n`) +
        chalk.bold.hex("#" + randomColor4)(
          `━━━━━━━━━━━━━━━━━| ${name} |━━━━━━━━━━━━━━━━━`,
        ),
    );
  }
};
module.exports.run = async ({ api, event, args }) => {
  if (this.config.credits != "JRT") {
    return api.sendMessage(`cre`, event.threadID, event.messageID);
  }
  const { configPath } = global.client;
  const { DeveloperMode } = global.config;
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const modDev = config.DeveloperMode;

  if (modDev == true) {
    api.sendMessage(
      `→ DeveloperMode: ${modDev}\n→ Vui lòng chỉnh về false để sử dụng!!!`,
      event.threadID,
    );
  } else
    return api.sendMessage(
      `→ DeveloperMode: ${modDev}\n→ Console đang chạy...`,
      event.threadID,
    );
};
