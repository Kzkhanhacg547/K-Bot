const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk1 = require('chalk');
const chalk = require('chalkercli');
var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
const express = require('express');

const app = express();

app.use(express.static(__dirname + "/modules"));

app.listen(8008, () => {
  console.log('server started');
});

app.listen(3000, function () {
  console.log(chalk1.hex("#" + random)(`[ Bắt đầu ] → Máy chủ đang khởi động hệ\nthống bot Kz BOT...\n\n[ 𝗛𝗘𝗟𝗟𝗢 ] → WEICOM TO Kz BOT\n\n[ FACEBOOK ] → https://www.facebook.com/kzkhanh547\n\n[ >< ] → BOT RUN BY Kz Khánhh\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nĐã khởi tạo biến môi trường thành công
 __   ___  ________   
|/"| /  ")("      "\  
(: |/   /  \___/   :) 
|    __/     /  ___/  
(// _  \    //  \__   
|: | \  \  (:   / "\  
(__|  \__)  \_______) 
                         ---Kz Khánhh---`), "");
});  
function startBot(message) {
    (message) ? logger(message, "[ Bắt đầu ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "kzbot.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });
    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Tiến hành khởi động lại...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("Đã xảy ra lỗi: " + JSON.stringify(error), "[ Bắt đầu ]");
    });
};
axios.get("https://raw.githubusercontent.com/ThanhAli-Official/GbanMiraiProject/main/package.json").then((res) => {
  const rainbow = chalk.rainbow(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━         *
*                                        *
*   [👤] → Kz BOT                        *
*   [🔰] → Phiên bản: 1.2.15             *
*   [🌸] → Tên: Kz Khánhh                *
*   [🌐] → FB: Kz Khánhh                 *
*   [📞] → SĐT/Zalo: xxxxxxxxxx          *
*   [💌] → Email: xxx@gmail.com   
*                                        *
*                                        *  \n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\n`).stop();
rainbow.render();
const frame = rainbow.frame();
console.log(frame);
});

function startProgram() {
  startBot();
  console.log("Chương trình đang chạy...");

  // Sau khi chạy xong, đợi một khoảng thời gian rồi khởi động lại chương trình
  setTimeout(restartProgram, 1800000); // 1800000v milliseconds = 30 minute
}

function restartProgram() {
  console.log("Khởi động lại chương trình...");
  startProgram();
}

// Bắt đầu chương trình
startProgram();
