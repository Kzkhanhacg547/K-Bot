module.exports.config = {
     name: "poke",
     version: "1.0.0",
     hasPermssion: 0,
     credits: "DC-Nam",
     description: "Xem thông tin của 1 pokemon bất kì",
     commandCategory: "Tiện ích",
     usages: "[namePoke]",
     cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];	
const namePoke = args.join(" ");
if (!namePoke) return api.sendMessage('🦄 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐭𝐞̂𝐧 𝟏 𝐥𝐨𝐚̀𝐢 𝐩𝐨𝐤𝐞𝐦𝐨𝐧 !', event.threadID, event.messageID)
try {
const res = await axios.get(`https://some-random-api.ml/pokedex?pokemon=${namePoke}`);
const data = res.data;
const stt = data.stats
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${data.description}`), (err, response, body) => {
        if (err) return api.sendMessage("Đã có lỗi xảy ra!", event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text = '';
        retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
return api.sendMessage(`
» 𝗧𝗲̂𝗻: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}
» 𝗛𝗲̣̂: ${data.type}
» 𝗧𝗵𝗲̂́ 𝗵𝗲̣̂: ${data.generation}
» 𝗟𝗼𝗮̀𝗶: ${data.species.join(', ')}
» 𝗡𝗵𝗼́𝗺 𝘁𝗿𝘂̛́𝗻𝗴: ${data.egg_groups.join(', ')}
» 𝗞𝗵𝗮̉ 𝗻𝗮̆𝗻𝗴: ${data.abilities.join(', ')}
» 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: ${data.height}
» 𝗖𝗮̂𝗻 𝗻𝗮̣̆𝗻𝗴: ${data.weight}
» 𝗧𝗿𝗮̣𝗻𝗴 𝘁𝗵𝗮́𝗶: 𝗛𝗣 ${stt.hp}, 𝗔𝗧𝗞: ${stt.attack}, 𝗗𝗘𝗙: ${stt.defense}, 𝗦𝗽𝗲𝗲𝗱: ${stt.speed}
» 𝗧𝗶𝗲̂́𝗻 𝗵𝗼́𝗮: ${data.family.evolutionLine.join(' => ')}
» 𝗠𝗼̂ 𝘁𝗮̉: ${text}`, event.threadID, event.messageID)
})
} catch {
            return api.sendMessage('🚫 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 𝘁𝗲̂𝗻 𝗽𝗼𝗸𝗲𝗺𝗼𝗻 !', event.threadID, event.messageID);
        }
}
