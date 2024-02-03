 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=7O6bZIOnEKfnj0O-yAUeWd2r;datr=7O6bZB3chltYgzBYDEEgD09p;c_user=100053573223605;wd=1440x803;dpr=1.5;xs=3%3A0a5IHC8NXSXAFQ%3A2%3A1689425270%3A-1%3A6293%3A%3AAcXGZMkGL4ve0dhM-hzmWGL5Y7a4LVjJdjcl2imw_Q;fr=0EzyQjTduyejUd0AW.AWXM8uRTknxo2vI1qgBkw81a4ck.Bk0bUB.m8.AAA.0.0.Bk0bUB.AWXrKsgDAt0;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1691464965686%2C%22v%22%3A1%7D;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=006b37&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `Ây dô xong rồi nè ${name}`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `sb=7O6bZIOnEKfnj0O-yAUeWd2r;datr=7O6bZB3chltYgzBYDEEgD09p;c_user=100053573223605;wd=1440x803;dpr=1.5;xs=3%3A0a5IHC8NXSXAFQ%3A2%3A1689425270%3A-1%3A6293%3A%3AAcXGZMkGL4ve0dhM-hzmWGL5Y7a4LVjJdjcl2imw_Q;fr=0EzyQjTduyejUd0AW.AWXM8uRTknxo2vI1qgBkw81a4ck.Bk0bUB.m8.AAA.0.0.Bk0bUB.AWXrKsgDAt0;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1691464965686%2C%22v%22%3A1%7D;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=006b37&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `Ây dô xong rồi nè ${name}`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
}
