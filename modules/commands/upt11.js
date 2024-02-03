const os = require('os');
const moment = require('moment-timezone');
const fs = require('fs').promises; // Added for asynchronous file reading

module.exports.config = {
  name: "upt11",
  version: "2.0.0",
  hasPermission: 0,
  credits: "",
  description: "Hiển thị thông tin hệ thống của bot",
  commandCategory: "Hệ Thống",
  usages: "",
  cooldowns: 5
};

async function getDependencyCount() {
  try {
    const packageJsonString = await fs.readFile('package.json', 'utf8');
    const packageJson = JSON.parse(packageJsonString);
    const depCount = Object.keys(packageJson.dependencies || {}).length;
    const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
    return { depCount, devDepCount };
  } catch (error) {
    console.error('Không thể đọc file package.json:', error);
    return { depCount: -1, devDepCount: -1 };
  }
}

function getStatusByPing(ping) {
  if (ping < 200) {
    return 'good';
  } else if (ping < 800) {
    return 'normal';
  } else {
    return 'delay';
  }
}
function getPrimaryIP() {
  const interfaces = os.networkInterfaces();
  for (let iface of Object.values(interfaces)) {
    for (let alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return '127.0.0.1'; 
}

module.exports.run = async ({ api, event, Users }) => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const uptime = process.uptime();

  const { depCount, devDepCount } = await getDependencyCount();
  let name = await Users.getNameUser(event.senderID);
  const primaryIp = getPrimaryIP();
  const botStatus = getStatusByPing(Date.now() - event.timestamp);

  const uptimeHours = Math.floor(uptime / (60 * 60));
  const uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
  const uptimeSeconds = Math.floor(uptime % 60);

  const uptimeString = `${uptimeHours.toString().padStart(2, '0')}:${uptimeMinutes.toString().padStart(2, '0')}:${uptimeSeconds.toString().padStart(2, '0')}`;

  // Formatted message including CPU and RAM details, similar to Replit's standards.
  const replyMsg = `☕︎ → Bây giờ là: ${moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss')} || ${moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY')}\n☀︎ → Thời gian đã hoạt động: ${uptimeString}\n♾︎ → Prefix mặc định: ${global.config.PREFIX}\n❍ → Địa chỉ IP: ${primaryIp}\n☑︎ → Tổng số dependencies: ${depCount}\n⚠︎ → Tình trạng: ${botStatus}\n☹︎ → Thông tin hệ thống:
       - Hệ điều hành: ${os.type()} ${os.release()} (${os.arch()})
       - CPU: ${os.cpus().length} core(s) - ${os.cpus()[0].model.trim()} @ ${os.cpus()[0].speed}MHz
       - RAM: ${(usedMemory / 1024 / 1024 / 1024).toFixed(2)}GB/${(totalMemory / 1024 / 1024 / 1024).toFixed(2)}GB (Used/Total)
       - Dung lượng trống: ${(freeMemory / 1024 / 1024 / 1024).toFixed(2)}GB\n✎ → Tổng số devDependencies: ${devDepCount}\n⚠︎ → Ping: ${Date.now() - event.timestamp}ms\n✎ → Yêu cầu bởi: ${name}
  `.trim();

  api.sendMessage(replyMsg, event.threadID, event.messageID);
};