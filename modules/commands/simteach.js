module.exports.config = {
    name:"simteach",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Dạy sim :3",
    commandCategory: "Tiện ích",
    usages: "câu muốn hỏi sim => câu muốn sim trả lời",
    cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    let { messageID, threadID } = event;
    let work = args.join(" ");
    let fw = work.indexOf(" => ");
    if (fw == -1) {
        api.sendMessage("𝗦𝗮𝗶 𝗳𝗼𝗿𝗺𝗮𝘁 𝗿𝗼̂̀𝗶 𝗻𝗵𝗲́",threadID,messageID);
    } else {
        let ask = work.slice(0, fw);
        let answer = work.slice(fw + 4, work.length);
        if (ask=="") {api.sendMessage("𝘁𝗵𝗶𝗲̂́𝘂 𝗰𝗮̂𝘂 𝗵𝗼̉𝗶 𝗸𝗶̀𝗮 ",threadID,messageID)} else {
            if (!answer) {api.sendMessage("𝘁𝗵𝗶𝗲̂́𝘂 𝗰𝗮̂𝘂 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗸𝗶̀𝗮 ",threadID,messageID)} else {
                    axios.get(encodeURI(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/sim?type=teach&ask=${ask}&ans=${answer}`)).then(res => {
                        if (res.data.data.error == 'Câu trả lời đã tồn tại!') {
                            api.sendMessage("Câu hỏi đã có trong hệ thống mà bạn",threadID,messageID)}
                        else {
                            api.sendMessage(`Đã dạy sim thành công: \n- Câu hỏi: ${ask} \n- Câu trả lời: ${answer}`,threadID,messageID);
                        }
                    })
            }
        }
    }
}