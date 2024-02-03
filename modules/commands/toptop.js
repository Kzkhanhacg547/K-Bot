const { writeFileSync, createReadStream } = require('fs');
module.exports.config = {
    name: "toptop",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thông tin từ nền tảng TikTok",
    commandCategory: "Tiện ích",
    usages: "tiktok [link] < tải 1 video theo link tiktok >\ntiktok info [id tiktok] < xem thông tin một người >\ntiktok search [từ khoá] < phát video thông qua từ khoá tìm kiếm >",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;
    const type = args[0];
    switch (type.toLowerCase()) {
        case "info":
            var username = args[1];
            var info = await global.tiktok.getInfoUser(username);
            var { user, stats } = info.userInfo,
                id = user.id,
                nickname = user.nickname,
                avatar = user.avatarMedium,
                signature = user.signature,
                username = user.uniqueId,
                followers = stats.followerCount,
                following = stats.followingCount,
                total_videos = stats.videoCount
            var msg = `==== [ 𝗧𝗜𝗞𝗧𝗢𝗞 𝗜𝗡𝗙𝗢 ] ====\n━━━━━━━━━━━━━━━━━━\n➝ Tên: ${nickname}\n➝ ID: ${id}\n➝ Chữ ký: ${signature}\n➝ Username: ${username}\n➝ Số người theo dõi: ${followers}\n➝ Số người đang theo dõi: ${following}\n➝ Số video: ${total_videos}\n━━━━━━━━━━━━━━━━━━\n➝ Avatar: ${avatar}\n`
            api.sendMessage(msg, threadID, messageID);
            break
        case 'search':
            var keyword = args.join(" ").slice(args[0].length + 1);
            var result = await global.tiktok.searchVideo(keyword);
            var msg = `➝ 𝗖𝗼́ 6 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝘁𝗿𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝘁𝘂̛̀ 𝗸𝗵𝗼𝗮́ 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺:\n\n`,
                num = 1
            for(let i = 0; i <= 5 ; i++) {
                msg += `${num++} ➝ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${result[i].desc} \n𝗧𝗶𝗺: ${result[i].stats.diggCount}\n𝗕𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${result[i].stats.commentCount}\n𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${result[i].stats.playCount}\n𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${result[i].author.nickname}\n━━━━━━━━━━━━━━━━━━\n`
            }
            msg += `➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗿𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼!`
            api.sendMessage(msg, threadID, (error, info) => global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                data: result
            }), messageID);
            break
        default: 
            var url = args[0];
            var data = await download(url, event.senderID);
            api.sendMessage({ body: `== [ 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 ] ==\n━━━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${data.metaData.desc}\n➝ 𝗧𝗶𝗺: ${data.metaData.digg_count}\n➝ 𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${data.metaData.play_count}\n➝ 𝗕𝗶̀𝗻𝗵 𝗹𝘂𝗮̣̂𝗻: ${data.metaData.comment_count}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗡𝗵𝗮̣𝗰: ${data.metaData.music}\n`, attachment: createReadStream(data.path)}, threadID, messageID);
            break
    }
}
module.exports.handleReply = async function ({ api, event, handleReply }) {
    const { threadID, messageID, senderID } = event;
    var data = handleReply.data;
    var num = parseInt(event.body);
    if(num <= 0 && num > 6) return
    var result = data[num - 1];
    var data = await download(result.id, senderID);
    api.unsendMessage(handleReply.messageID);
    return api.sendMessage({ body: `=== [ 𝗧𝗜𝗞𝗧𝗢𝗞 𝗦𝗘𝗔𝗥𝗖𝗛 ] ===\n━━━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${data.metaData.desc}\n➝ 𝗧𝗶𝗺: ${data.metaData.digg_count}\n➝ 𝗟𝘂̛𝗼̛̣𝘁 𝘅𝗲𝗺: ${data.metaData.play_count}\n➝ 𝗡𝗵𝗮̣𝗰: ${data.metaData.music}`, attachment: createReadStream(data.path)}, threadID, messageID);
}
async function download(url, senderID) {
    const axios = require('axios');
    const data = await global.tiktok.getData(url);
    var path = process.cwd() + "/lib/cache/tiktok-" +  senderID + ".mp4";
    var getVideo = (await axios.get(data.itemData.video.no_watermark.hd.url, { responseType: "arraybuffer" })).data;
    writeFileSync(path, Buffer.from(getVideo, "utf-8"));
    return {
        metaData: {
            desc: data.itemData.desc,
            digg_count: data.itemData.statistics.digg_count,
            play_count: data.itemData.statistics.play_count,
            comment_count: data.itemData.statistics.comment_count,
            music: data.itemData.music.title
        },
        path: path
    }
}