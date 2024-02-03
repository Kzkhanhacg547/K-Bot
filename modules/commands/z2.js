const axios = require('axios');

module.exports.config = {
    name: "z2",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kz Khánhh",
    description: "Tải video mẫu capcut",
    commandCategory: "Tiện ích",
    usages: "+link mẫu capcut",
    cooldowns: 5
};

module.exports.run = async function ({ api, args, event }) {
    try {
        const { threadID, messageID } = event;

        const extractLinks = (text) => {
            const regex = /(https:\/\/www.capcut.com\/t\/[a-zA-Z0-9_-]+)|(https:\/\/www.capcut.com\/template-detail\/[a-zA-Z0-9_-]+)/g;
            const matches = text.match(regex);
            return matches ? matches : [];
        };

        const url = args.join(" ");
        if (!url) {
            return api.sendMessage({ body: 'Thiếu Url vui lòng nhập Url để download', mentions: [{ tag: 'error', id: event.senderID }] }, threadID, messageID);
        }

        const extractedLinks = extractLinks(url);

        if (extractedLinks.length === 0) {
            return api.sendMessage({ body: 'Link này không phải link mẫu capcut vui lòng thay bằng link mẫu capcut', mentions: [{ tag: 'error', id: event.senderID }] }, threadID, messageID);
        }

        for (const link of extractedLinks) {
            const getUrlResponse = await axios.get(`https://ssscap.net/api/download/get-url?url=${link}`);
            const videoId = getUrlResponse.data.url.split("/")[4].split("?")[0];
            const options = {
                method: 'GET',
                url: `https://ssscap.net/api/download/${videoId}`,
                headers: {
                    'Connection': 'keep-alive',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
                    'Cookie': 'sign=08321c1cc11dbdd2d6e3c63f44248dcf; device-time=1699454542608',
                    'Referer': 'https://ssscap.net/vi',
                    'Host': 'ssscap.net',
                    'Accept-Language': 'vi-VN,vi;q=0.9',
                    'Accept': 'application/json, text/plain, /',
                    'Sec-Fetch-Dest': 'empty',
                    'Sec-Fetch-Site': 'same-origin',
                    'Sec-Fetch-Mode': 'cors'
                }
            };

            const response = await axios.request(options);
            const { title, description, usage, originalVideoUrl } = response.data;
            api.sendMessage({
                body: `Title: ${title}\nDescription: ${description}\nUsage: ${usage}\nVideo: https://ssscap.net${originalVideoUrl}`,
                mentions: [{ tag: 'video', id: event.senderID }]
            }, threadID, messageID);
        }
    } catch (error) {
        api.sendMessage({ body: 'Không tìm thấy mẫu', mentions: [{ tag: 'error', id: event.senderID }] }, threadID, messageID);
    }
};