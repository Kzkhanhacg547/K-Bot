module.exports.config = {
  name: 'tachnen',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'Dũng Kon',
  description: 'adu',
  commandCategory: 'THÀNH VIÊN',
  usages: 'Reply images or url images',
  cooldowns: 2,
  dependencies: {
       'form-data': '',
       'image-downloader': ''
    }
};

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs-extra');
const path = require('path');
const {image} = require('image-downloader');
module.exports.run = async function({
    api, event, args
}){
    try {
        if (event.type !== "message_reply") return api.sendMessage("Bạn phải reply một ảnh nào đó", event.threadID, event.messageID);
        if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("Bạn phải reply một ảnh nào đó", event.threadID, event.messageID);
        if (event.messageReply.attachments[0].type != "photo") return api.sendMessage("Đây không phải là image", event.threadID, event.messageID);

        const content = (event.type == "message_reply") ? event.messageReply.attachments[0].url : args.join(" ");
        const KeyApi = ["ozsPt8dsaQYCeyMDyvAeEv73","ozsPt8dsaQYCeyMDyvAeEv73","pE17etf7JSuZGPcZeBFNndW8","pE17etf7JSuZGPcZeBFNndW8","hVdSv6UyWKjCt2zjy58rSHjx","hVdSv6UyWKjCt2zjy58rSHjx"]
        const inputPath = path.resolve(__dirname, 'cache', `photo.png`);
         await image({
        url: content, dest: inputPath
    });
        const formData = new FormData();
        formData.append('size', 'auto');
        formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
        axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
                ...formData.getHeaders(),
                'X-Api-Key': KeyApi[Math.floor(Math.random() * KeyApi.length)],
            },
            encoding: null
        })
            .then((response) => {
                if (response.status != 200) return console.error('Error:', response.status, response.statusText);
                fs.writeFileSync(inputPath, response.data);
                return api.sendMessage({ attachment: fs.createReadStream(inputPath) }, event.threadID, () => fs.unlinkSync(inputPath));
            })
            .catch((error) => {
                return console.error('Request failed:', error);
            });
     } catch (e) {
        console.log(e)
        return api.sendMessage(`có cái nịt`, event.threadID, event.messageID);
  }
};