module.exports.config = {
    name: "checkapi",
    version: "1.0.5",
    hasPermssion: 2,
    credits: "Tuấn 🐧",
    description: "Check link API",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 2,
    dependencies: {

    }
};
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) 
  {
    const {readFileSync, writeFileSync, readdirSync, unlinkSync, statSync} = require('fs-extra');
    const axios = require('axios');
        var v = readdirSync(__dirname + "/").filter(f => {
          return f.endsWith(".js") && !f.includes("example");
        });
        var S = readdirSync(__dirname + "/").filter(f => {
      return f.endsWith(".js");
        });
        var W = 0;
        for (let f of v) {
          var k = readFileSync(__dirname + "/" + f, {encoding: "utf-8"}).split(/\r?\n|\r/);
          for (let o of k) {
            if (o.indexOf("https://") !== -1 && o.indexOf("rapidapi.com") == -1) {
              const V = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
              const Q = o.match(V);
              if (Q != null) {
                const j1 = Q[0].split("/")[2];
                if (j1.indexOf("google") == -1 && j1.indexOf("rapidapi") == -1 && j1.indexOf("youtube.com") == -1 && j1.indexOf("ytimg.com") == -1 && j1.indexOf("giainhanh.io") == -1) {
                  try {
                    var I = await axios.get("https://" + j1);
                  } catch (j2) {
                    if (j2.toJSON() .status === 404) {
                      api.sendMessage("API https://" + j1 + " ở lệnh " + f + " có thể không còn hoạt động nữa", event.threadID, event.messageID);
                      W++;
                    }
                  }
                }
              }
            }
          }
        }
        for (let j7 of S) {
          var k = readFileSync(__dirname + "/" + j7, {encoding: "utf-8"}).split(/\r?\n|\r/);
          for (let jR of k) {
            if (jR.indexOf("https://") !== -1) {
              const jw = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
              const jU = jR.match(jw);
              if (jU != null) {
                const jG = jU[0].split("/")[2];
                axios.get("https://" + jG).then(function (js) {}).catch(function (js) {
                  if (js.toJSON().status === 404) {
                    api.sendMessage("API ở lệnh " + j7 + " có thể không còn hoạt động nữa", event.threadID, event.messageID);
                    W++;
                  }
                });
              }
            }
          }
        }
     api.sendMessage("Kiểm tra API hoàn thành, " + (W == 0 ? "không có API nào die trong file của bạn" : "có tổng cộng " + W + " API die trong file của bạn"), event.threaID, event.messageID);
       
}