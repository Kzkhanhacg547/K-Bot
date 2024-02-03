const axios = require('axios');
const fs = require('fs');

const isURL = u => /^http(|s):\/\//.test(u);

exports.handleEvent = async function(o) {
    try {
        const str = o.event.body;
        const send = msg => o.api.sendMessage(msg, o.event.threadID);
        const head = app => `${app.toUpperCase()} tiêu đề:\n\n`;

        if (isURL(str)) {
            if (/fb|facebook/.test(str)) {
                const json = await infoPostFb(str);
                const body = `=====Facebook====\nTitle: ${json.message}`;
                const fil = type => json.attachment.filter($=>$.__typename == type);
                const photo = fil('Photo');
                const video = fil('Video');

                const attachment = [];
                for (const i of photo) {
                    try {
                        const img = i.photo_image || i.image || {};
                        attachment.push(await streamURL(img.uri, 'jpg'));
                    } catch {
                        continue;
                    }
                }
                if (attachment.length > 0) {
                    await send({
                        body, attachment
                    });
                }

                for (const i of video) {
                    try {
                        send({
                            body, attachment: await streamURL(i.playable_url_quality_hd || i.playable_url, 'mp4'),
                        });
                    } catch {
                        continue;
                    }
                }
            } else if (/(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//.test(str)) {
                const json = await infoPostTT(str);
                let attachment = [];
                if (json.images != undefined) {
                    for (const $ of json.images) {
                        attachment.push(await streamURL($, 'png'));
                    }
                } else {
                    attachment = await streamURL(json.play, 'mp4');
                }

                send({
                    body: `
Authour: ${json.author.nickname}\ntitlet: ${json.title}`, attachment
                });
            } else if (/(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//.test(str)) {
                const res = await axios.get(`https://apivip.nguyenlienmanh.com/v2/youtube/downloader?url=${str}`);
                send({
                    body: `\n[💬] → title: ${res.data.data.title}\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘃𝗶𝗱𝗲𝗼: ${res.data.data.duration}`, attachment: await streamURL(res.data.data.video.url, 'mp4')});
            } else if (/imgur\.com/.test(str)) {
                send({
                    body: ` =====imgur=====`,
                    attachment: await streamURL(str, str.split('.').pop())
                })
            } else if (/(^https:\/\/)((www)\.)?(pinterest|pin)*\.(com|it)\//.test(str)) {
                const res = await axios.get(`https://api.imgbb.com/1/upload?key=588779c93c7187148b4fa9b7e9815da9&image=${str}`);
                send({
                    body: `${head('pinterest')}- link: ${res.data.data.image.url}`, attachment: await streamURL(res.data.data.image.url, 'jpg')});
            } else if (/instagram\.com/.test(str)) {
                const res = await axios.get(`https://api.nguyenlienmanh.com/instagram/videodl?url=${str}`);
                const {
                    video_url = [{}],
                    images
                } = res.data;
                let attachment = [];

                if (video_url[0].url != undefined) {
                    attachment = await streamURL(video_url[0].url, 'mp4');
                } else if (images != undefined) {
                    for (const $ of typeof images == 'string' ? [images]: images) {
                        attachment.push(await streamURL($, 'png'));
                    }
                }

                send({
                    body: `${head('instagram')}- Tiêu Đề: ${res.data.title} \n- full name: ${res.data.user_full_name} \n- user name : ${res.data.user.username} \n- cảm súc: ${res.data.like_count} \n- bình luận: ${res.data.comment_count}`, attachment
                });
            } else if (/twitter\.com/.test(str)) {
                const res = await axios.get(`https://apivip.nguyenlienmanh.com/twitter/dow?link=${str}`);

                send({
                    body: `${head('twitter')}- Tiêu Đề: ${res.data.tile}`,
                    attachment: await streamURL(res.data.video_url || res.data.imgur_url, res.data.video_url != undefined?'mp4': 'png'),
                });
            }
        }
    } catch(e) {
        console.log('Error', e);
    }
};
exports.run = () => {};
exports.config = {
    name: "atd7",
    version: "1",
    hasPermssion: 0,
    credits: "tdoan",
    description: "",
    commandCategory: "Tiện ích",
    usages: [],
    cooldowns: 0
};

function streamURL(url, type) {
    return axios.get(url, {
        responseType: 'arraybuffer'
    }).then(res => {
        const path = __dirname + `/cache/${Date.now()}.${type}`;
        fs.writeFileSync(path, res.data);
        setTimeout(p => fs.unlinkSync(p), 1000 * 60, path);
        return fs.createReadStream(path);
    });
}

function infoPostTT(url) {
    return axios({
        method: 'post',
        url: `https://tikwm.com/api/`,
        data: {
            url
        },
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.data.data);
}

function infoPostFb(url) {
    return axios.get(`https://web.duongkum999.tech/fb/info-post?url=${url}`).then(res => res.data);
                  } 