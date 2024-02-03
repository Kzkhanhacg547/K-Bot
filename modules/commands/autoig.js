const fs = require("fs-extra");
const axios = require("axios");

module.exports.config = {
    name: "autoig",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zaara",
    description: "Tự động tải xuống từ Instagram",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function () { };

module.exports.handleEvent = async function ({ api, event }) {
    if (event.body) {
        const url = extractInstagramURL(event.body);
        if (url) {
            downloadInstagramVideo(url, api, event);
        }
    }
};

function extractInstagramURL(text) {
    const regex = /(https?:\/\/(www\.)?)?instagram\.com(\/(p|reel)\/[\w-]+\/?)/;
    const matches = text.match(regex);
    return matches ? matches[0] : null;
}

async function downloadFile(url, destPath) {
    // Validate inputs
    if (typeof url !== 'string' || url.trim().length === 0) {
        throw new Error('Invalid URL');
    }
    if (typeof destPath !== 'string' || destPath.trim().length === 0) {
        throw new Error('Invalid destination path');
    }

    // Download file
    const writer = fs.createWriteStream(destPath);
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}
function isFileSizeValid(filepath) {
    return fs.statSync(filepath).size > 48000000 ? false : true;
}

async function downloadInstagramVideo(url, api, event) {
    try {
        const { data } = await axios.post('https://lovezyros.glitch.me/', { url });
        if (data && data.status === 'success') {
            const { postType, dataDownload } = data;

            const file_name = `${__dirname}/cache/ảnh/${Date.now()}`;
            if (postType === 'SingleVideo') {
                const downloadPromise = downloadFile(dataDownload, `${file_name}.mp4`);
                await downloadPromise;
                if (!isFileSizeValid(`${file_name}.mp4`)) {
                    api.setMessageReaction('👎', event.messageID);
                    fs.unlinkSync(`${file_name}.mp4`);
                } else {
                    api.setMessageReaction('👍', event.messageID);
                    api.sendMessage({  body: data.caption, attachment: fs.createReadStream(`${file_name}.mp4`) }, event.threadID, (() => fs.unlinkSync(`${file_name}.mp4`)), event.messageID);
                }
            } else if (postType === 'SingleImage') {
                const downloadPromise = downloadFile(dataDownload, `${file_name}.jpg`);
                await downloadPromise;
                api.setMessageReaction('👍', event.messageID);
                api.sendMessage({ body: data.caption, attachment: fs.createReadStream(`${file_name}.jpg`) }, event.threadID, (() => fs.unlinkSync(`${file_name}.jpg`)), event.messageID);
            } else if (postType === 'MultiplePost') {
                const downloadPromises = dataDownload.map((download, i) => {
                    const fileExt = download.is_video ? '.mp4' : '.jpg';
                    const fileName = `${__dirname}/cache/ảnh${i}${fileExt}`;
                    const downloadPromise = axios.get(download.placeholder_url, { responseType: 'arraybuffer' })
                        .then(response => {
                            fs.writeFileSync(fileName, Buffer.from(response.data, 'utf-8'));
                            return { isVideo: download.is_video, fileName };
                        });
                    return downloadPromise;
                });
                const downloads = await Promise.all(downloadPromises);
                const videoArray = downloads.filter(download => download.isVideo).map(download => fs.createReadStream(download.fileName));
                const imageArray = downloads.filter(download => !download.isVideo).map(download => fs.createReadStream(download.fileName));
                if (imageArray.length > 0) {
                    api.setMessageReaction('👍', event.messageID);
                    api.sendMessage({  body: data.caption, attachment: imageArray }, event.threadID, event.messageID);
                }
                if (videoArray.length > 0) {
                    api.setMessageReaction('👍', event.messageID);
                    videoArray.forEach(video => api.sendMessage({  body: data.caption, attachment: video }, event.threadID, event.messageID));
                }
            }
        } else {
            api.setMessageReaction('👎', event.messageID);
        }
    } catch (error) {
        api.setMessageReaction('👎', event.messageID);
        console.log(`Failed to fetch data from lovezyros.glitch.me server: \n${error}`);
    }
}