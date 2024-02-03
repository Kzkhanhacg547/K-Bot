const axios = require('axios'), fs = require("fs-extra"), path = __dirname + `/cache/${Date.now()}.jpg`;
module.exports ={
	config: {
		name: 'draw',
		commandCategory: 'Tiện ích',
		hasPermssion: 0,
		credits: 'Lê Minh Tiến',
		usages: 'cat',
		description: 'tạo ảnh từ văn bản của bạn',
		cooldowns: 5
	},
run: async function({ api, event, args }) {
const { threadID, messageID } = event;
const t = args.join(" ");
		if (!t) return api.sendMessage('Chưa nhập văn bản!', threadID, messageID)
api.sendMessage('Vui lòng chời đợi AI vẽ! ', threadID, messageID)
let timeStart = Date.now();
   axios({
	url: "http://goatbot.tk/api/image/mdjrny",
	method: "GET",
	headers: {
		"x-api-key": "l5hu30vYb9S1YrGJkUSwpfG3Z1few3NP"
	},
	params: {
		"prompt": t, 
		"style_id": 28,
		"aspect_ratio": "1:1"
	},
	responseType: 'arraybuffer'
})
	.then((response) => {
		fs.writeFileSync(path,  Buffer.from(response.data, 'utf-8'));
    return api.sendMessage({body:`Tạo hình ảnh hoàn tất với ${Math.floor((Date.now() - timeStart)/1000)}s`,attachment: fs.createReadStream(path)}, threadID, messageID)
	})
	.catch((e) => {
		return api.sendMessage(e.response.data.toString(),threadID);
	});   
  }
                                                                                       }