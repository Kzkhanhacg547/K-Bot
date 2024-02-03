module.exports.config = {
  name: "sleep",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Tính thời gian đi ngủ hoàn hảo cho bạn",
  commandCategory: "Công cụ",
  usages: "[Time]",
  cooldowns: 5,
  dependencies: {
    "moment-timezone": ""
  }
};

module.exports.languages = {
  "vi": {
    "returnTimeNow": "𝗡ế𝘂 𝗯ạ𝗻 đ𝗶 𝗻𝗴ủ 𝗯â𝘆 𝗴𝗶ờ, 𝗻𝗵ữ𝗻𝗴 𝘁𝗵ờ𝗶 𝗴𝗶𝗮𝗻 𝗵𝗼à𝗻 𝗵ả𝗼 𝗻𝗵ấ𝘁 để 𝘁𝗵ứ𝗰 𝗱ậ𝘆 𝗹à:\n%1",
    "returnTimeSet": "𝗡ế𝘂 𝗯ạ𝗻 đ𝗶 𝗻𝗴ủ 𝘃à𝗼 𝗹ú𝗰 %1, 𝗻𝗵ữ𝗻𝗴 𝘁𝗵ờ𝗶 𝗴𝗶𝗮𝗻 𝗵𝗼à𝗻 𝗵ả𝗼 𝗻𝗵ấ𝘁 để 𝘁𝗵ứ𝗰 𝗱ậ𝘆 𝗹à: \n%2"	
  },
  "en": {
    "returnTimeNow": "If you go to sleep now, the perfect time to wake up is:\n%1",
    "returnTimeSet": "If you go to sleep at %1, perfect times to wake up is:\n%2"	
  }
}

module.exports.run = function({ api, event, args, getText }) {
  const { threadID, messageID } = event;
  const { throwError } = global.utils;
  const moment = global.nodemodule["moment-timezone"];

  var wakeTime = [];
  let content = args.join(" ")
  if (!content) {
    for (var i = 1; i < 7; i++) wakeTime.push(moment().tz("Asia/Ho_Chi_Minh").add(90 * i + 15, 'm').format("HH:mm"));
    return api.sendMessage(getText("returnTimeNow", wakeTime.join(', ')), threadID, messageID);
  }
  else {
    if (content.indexOf(":") == -1) return throwError(this.config.name, threadID, messageID);
    var contentHour = content.split(":")[0];
    var contentMinute = content.split(":")[1];
    if (isNaN(contentHour) || isNaN(contentMinute) || contentHour > 23 || contentMinute > 59 || contentHour < 0 || contentMinute < 0 || contentHour.length != 2 || contentMinute.length != 2) return global.utils.throwError(this.config.name, threadID, messageID);
    var getTime = moment().tz("Asia/Ho_Chi_Minh").format();
    var time = getTime.slice(getTime.indexOf("T") + 1, getTime.indexOf("+"));
    var hour = time.split(":")[0];
    var minute = time.split(":")[1];
    var sleepTime = getTime.replace(hour + ":", contentHour + ":").replace(minute + ":", contentMinute + ":");
    for (var i = 1; i < 7; i++) wakeTime.push(moment(sleepTime).tz("Asia/Ho_Chi_Minh").add(90 * i + 15, 'm').format("HH:mm"));
    return api.sendMessage(getText("returnTimeSet", content, wakeTime.join(', ')), threadID, messageID);
  }
}  