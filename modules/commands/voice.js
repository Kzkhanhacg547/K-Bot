/**
* @author thanh hiền
* @warn Do not edit code or edit credits 
*mdl xuất bản vào thứ 6 ngày 3 tháng 3 năm 2023 [00:03:56]
*/

module.exports.config = {
    name: "voice",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "thanh_hiền",// thay credits cái con cặc
    description: "Chuyển văn bản thành giọng nói",
    commandCategory: "GAME",
    usages: "<tag: -f, -g, -z> [text]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": ""
    },
    envConfig: {
        'zalo_apikey': 'O3ZIaECtEiEEvdhCiimFjzLDoThTMsgn',
        'fpt_apikey': 'O3ZIaECtEiEEvdhCiimFjzLDoThTMsgn'//lời nhắn từ thanh hiền: lên web fpt.ai + web zalo.ai log vào r get keys nha
    }
};

module.exports.run = async function ({ event, api, args }) {
    const { writeFileSync, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const axios = global.nodemodule["axios"];
    const path = resolve(__dirname, 'cache', 'voice.mp3');
    const { threadID, senderID, messageID, messageReply } = event;
    const out = (msg, callback = function () {}) => api.sendMessage(msg, threadID, callback, messageID);    
    const { zalo_apikey, fpt_apikey } = global.configModule.voice;
    const fpt_speaker = {
        "-1":"banmai",
        "-2":"lannhi",
        "-3":"leminh",
        "-4":"myan",
        "-5":"thuminh",
        "-6":"giahuy" //lời nhắn từ thanh hiền: có thể thêm nếu api key của bạn đủ điều kiện cao cấp, VD: "-6": "giahuy","-7":"vandung"
    },
    zalo_speaker = {
        "-1": "South women",
        "-2": "Northern women",
        "-3": "South men",
        "-4": "Northern men" //lời nhắn từ thanh hiền:giống dòng fpt ở trên 
    };
    var req_url;
    try {
        switch (args[0]) {
            case '-f':
                var speak_id = Object.keys(fpt_speaker).includes(args[1]) ? args[1] : 'lannhi';                var speak_data = event.type == "message_reply" ? messageReply.body : args.slice((Object.keys(fpt_speaker).includes(args[1]) ? 2 : 1), args.length);//lời nhắn từ thanh hiền: nếu muốn reply chuyển sang giọng khác thì thay banmai theo ID giọng nhé VD: 'banmai' -> 'lannhi'
                if (!speak_data) return out("🌺𝐁𝐚̣𝐧 𝐂𝐚̂̀𝐧 𝐍𝐡𝐚̣̂𝐩 𝐕𝐚̆𝐧 𝐁𝐚̉𝐧 Đ𝐞̂̉ 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐓𝐡𝐚𝐧𝐡 𝐆𝐢𝐨̣𝐧𝐠 𝐍𝐨́𝐢🌺");
                const { data: { async } } = await axios({
                    url: 'https://api.fpt.ai/hmi/tts/v5',//lời nhắn từ thanh hiền: thay api nếu bạn có thể thay đổi cả hệ thống FPT.AI
                    method: 'POST',
                    headers: {
                        'api-key': fpt_apikey,
                        'speed': '0',
                        'voice': speak_id
                    },
                    data: speak_data
                });
                if (async) req_url = async;
                break;
            case '-z':
                var speak_id = Object.keys(zalo_speaker).includes(args[1]) ? args[1].slice(1) : 1;
                var speak_data = event.type == "message_reply" ? messageReply.body : args.slice((Object.keys(zalo_speaker).includes(args[1]) ? 2 : 1), args.length);
                if (!speak_data) return out("🌺𝐁𝐚̣𝐧 𝐂𝐚̂̀𝐧 𝐍𝐡𝐚̣̂𝐩 𝐕𝐚̆𝐧 𝐁𝐚̉𝐧 𝐃𝐞̂̉ 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐓𝐡𝐚𝐧𝐡 𝐆𝐢𝐨̣𝐧𝐠 𝐍𝐨́𝐢🌺");
                const { data: { data, error_code } } = await axios({
                    url: 'https://api.zalo.ai/v1/tts/synthesize',//lời nhắn từ thanh hiền: thay api đi nếu có thể 
                    method: 'POST',
                    headers: {
                        'apikey': zalo_apikey
                    },
                    data: `encode_type=1&speaker_id=${speak_id}&speed=0.8&input=${encodeURIComponent(speak_data)}`
                })
                if (error_code == 0) req_url = data.url;
                else return out("🌺𝐂𝐨́ 𝐋𝐨̂̃𝐢 𝐗𝐚̉𝐲 𝐑𝐚 𝐇𝐨𝐚̣̆𝐜 𝐃𝐨 𝐐𝐮𝐚́ 𝐆𝐢𝐨̛́𝐢 𝐇𝐚̣𝐧 𝐂𝐡𝐮̛̃, 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐓𝐡𝐮̛̉ 𝐋𝐚̣𝐢 𝐇𝐨𝐚̣̆𝐜 𝐑𝐞𝐩𝐥𝐲+𝐆𝐡𝐢 𝐂𝐡𝐮̛̃ 𝐍𝐠𝐚̆́𝐧 𝐇𝐨̛𝐧 𝐍𝐡𝐞́🌺");
                break;
            case '-g':
                var speak_data = event.type == "message_reply" ? messageReply.body : args.slice(1);
                req_url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(speak_data)}&tl=vi&client=tw-ob`;// lời nhắn từ thanh hiền: api của say(chị google)
                break;
            default:
                var msg = '🌺𝐋𝐮̛̣𝐚 𝐂𝐡𝐨̣𝐧 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐊𝐡𝐨̂𝐧𝐠 𝐇𝐨̛̣𝐩 𝐋𝐞̣̂, 𝐇𝐚̃𝐲 𝐓𝐡𝐮̛̉ 𝐍𝐡𝐮̛̃𝐧𝐠 𝐋𝐮̛̣𝐚 𝐂𝐡𝐨̣𝐧 𝐃𝐮̛𝐨̛́𝐢 Đ𝐚̂𝐲:\n\n', fpt_helpers = '𝐅𝐏𝐓 𝐓𝐚𝐠: -f\n𝐒𝐩𝐞𝐚𝐤𝐞𝐫 𝐈𝐃:\n', zalo_helpers = '𝐙𝐀𝐋𝐎 𝐓𝐚𝐠: -z\n𝐒𝐩𝐞𝐚𝐤𝐞𝐫 𝐈𝐃:\n';
                Object.entries(fpt_speaker).map(e => fpt_helpers += `${e[0]} | ${e[1]}\n`);
                msg += fpt_helpers.join('');
                Object.entries(zalo_speaker).map(e => zalo_helpers += `${e[0]} | ${e[1]}\n`);
                msg += zalo_helpers.join('');
                msg += "Google tag: -g";
                return out(msg);
                break;
        }
        const { data } = await axios.get(req_url, { responseType: 'arraybuffer' });
        writeFileSync(path, Buffer.from(data, 'utf-8'));
        return out({ attachment: createReadStream(path) }, () => unlinkSync(path));
    } catch (e) {
        console.log(e);
        return out('🌺𝐂𝐨́ 𝐋𝐨̂̃𝐢 𝐗𝐚̉𝐲 𝐑𝐚 𝐇𝐨𝐚̣̆𝐜 𝐃𝐨 𝐐𝐮𝐚́ 𝐆𝐢𝐨̛́𝐢 𝐇𝐚̣𝐧 𝐂𝐡𝐮̛̃, 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐓𝐡𝐮̛̉ 𝐋𝐚̣𝐢 𝐇𝐨𝐚̣̆𝐜 𝐑𝐞𝐩𝐥𝐲+𝐆𝐡𝐢 𝐂𝐡𝐮̛̃ 𝐍𝐠𝐚̆́𝐧 𝐇𝐨̛𝐧 𝐍𝐡𝐞́🌺');
    }
};