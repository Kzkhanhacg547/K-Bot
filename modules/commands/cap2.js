 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap2",
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
  if(event.body.toLowerCase() == "cap2"){
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
    var cookies = `sb=UHqpZO65Cfft_Wbw-IfX-QDJ;datr=UXqpZEwJszhuxGcE6s3NRYLR;dpr=1.5;c_user=100088887769464;wd=718x831;xs=26%3AIpZOGK4G82nkrg%3A2%3A1688828849%3A-1%3A14130%3A%3AAcXifRVvy6LLkdzTcnSQdgT5ltFvLn21kDLFiKyiMg;fr=0CyzU3cvLNk59gRiq.AWWnREZVDAatsbrY-5foSkM4Dwk.BkqZeY.bO.AAA.0.0.BkqZeY.AWVMg4n1l2s;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1688835995821%2C%22v%22%3A1%7D;`,
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
    var cookies = `sb=UHqpZO65Cfft_Wbw-IfX-QDJ;datr=UXqpZEwJszhuxGcE6s3NRYLR;dpr=1.5;c_user=100088887769464;wd=718x831;xs=26%3AIpZOGK4G82nkrg%3A2%3A1688828849%3A-1%3A14130%3A%3AAcXifRVvy6LLkdzTcnSQdgT5ltFvLn21kDLFiKyiMg;fr=0CyzU3cvLNk59gRiq.AWWnREZVDAatsbrY-5foSkM4Dwk.BkqZeY.bO.AAA.0.0.BkqZeY.AWVMg4n1l2s;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1688835995821%2C%22v%22%3A1%7D;`,
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
