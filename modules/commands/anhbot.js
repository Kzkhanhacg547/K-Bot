const fs = require("fs");
module.exports.config = {
  name: "anhbot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vtuan", 
  description: "Noprefix",
  commandCategory: "Hình ảnh",
  usages: "13",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
  const request = require('request');
  var { threadID, messageID, body } = event;
  const tdung1 = require('./../../img/gaivip.json');
  const tdung2 = require('./../../img/anime1.json');
  const tdung3 = require('./../../img/ig.json');
  const tdung4 = require('./../../img/mui.json');
  const tdung5 = require('./../../img/gura.json');
  const tdung6 = require('./../../img/mong.json');
  const tdung7 = require('./../../img/loil.json');
  const tdung8 = require('./../../img/umaru.json');
  const tdung9 = require('./../../img/cosplay.json');
  function vtuanhihi(image, vtuandz, callback) {
    request(image).pipe(fs.createWriteStream(__dirname + `/` + vtuandz)).on("close", callback);
  }
  const numImages = 6;
  let imagesDownloaded = 0;
  let attachments = [];
  switch(event.body){
    case "1":


      for (let i = 0; i < numImages; i++) {
        let image = tdung1[Math.floor(Math.random() * tdung1.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;


    case "2":
      for (let i = 0; i < numImages; i++) {
        let image = tdung2[Math.floor(Math.random() * tdung2.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;
    case "3":
      for (let i = 0; i < numImages; i++) {
        let image = tdung3[Math.floor(Math.random() * tdung3.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;
    case "4":
      for (let i = 0; i < numImages; i++) {
        let image = tdung4[Math.floor(Math.random() * tdung4.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;
    case "5":
      for (let i = 0; i < numImages; i++) {
        let image = tdung5[Math.floor(Math.random() * tdung5.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;
    case "6":
      for (let i = 0; i < numImages; i++) {
        let image = tdung6[Math.floor(Math.random() * tdung6.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;
    case "7":
      for (let i = 0; i < numImages; i++) {
        let image = tdung7[Math.floor(Math.random() * tdung7.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;
    case "8":
      for (let i = 0; i < numImages; i++) {
        let image = tdung8[Math.floor(Math.random() * tdung8.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;
    case "9":
      for (let i = 0; i < numImages; i++) {
        let image = tdung9[Math.floor(Math.random() * tdung9.length)].trim();
        let imgFileName = `${i}.png`;
        vtuanhihi(image, imgFileName, () => {
            imagesDownloaded++;
            attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
            if (imagesDownloaded === numImages) {
              api.sendMessage({
                body: ``,
                attachment: attachments
              }, event.threadID, () => {

                for (let img of attachments) {
                  fs.unlinkSync(img.path); 
                }
              }, event.messageID);
            }
        });
      }
      break;
  ///// muốn thêm thì tự thêm đi, ai rảnh đâu thêm quài=))
    default:
      api.sendMessage({
        body: "nhap 1-9 thoi <3 iu", 

      }, event.threadID, event.messageID); 
      return
  }
   api.unsendMessage(handleReply.messageID);
}




module.exports.handleEvent = function({ api, event}) {
  if (event.body.indexOf("IMAGES")==0 || (event.body.indexOf("IMG Bot")==0)) {
    api.sendMessage({
      body: "===𝐀̉𝐍𝐇 𝐁𝐎𝐓===\n 𝟏-  𝐆𝐚́𝐢\n 𝟐 - 𝐀𝐧𝐢𝐦𝐞\n 𝟑 - 𝐈𝐆\n 𝟒 - 𝟔𝐦𝐮́𝐢\n 𝟓 - 𝐆𝐮𝐫𝐚\n 𝟔 - Đ𝐢́𝐜\n 𝟕 - 𝐋𝐨𝐥𝐢\n 𝟖 - 𝐔𝐦𝐚𝐫𝐮\n 𝟗 - 𝐂𝐨𝐬𝐩𝐥𝐚𝐲"}, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
  }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}
