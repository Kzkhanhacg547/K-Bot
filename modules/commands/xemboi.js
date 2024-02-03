module.exports.config = {
    name: "xemboi",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "CatalizCS",
    description: "Xem bói bài tarot",
    commandCategory: "Tiện ích",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
    const axios = require("axios")
    const c = (await axios.get('https://raw.githubusercontent.com/kenyrm2250/tarot/main/data.json')).data
  if(args[0] > c.length) return api.sendMessage('Không Thể Vượt Quá Số Bài Đang Có Trong Data', event.threađID)
    if(!args[0]){
    var k = Math.floor(Math.random() * c.length)
  } else {
      var k = args[0]
  }
    const x = c[k]
    const t = (await axios.get(`${x.image}`, {
        responseType: "stream"
      })).data;
    const msg = ({
        body: `🔮==[ 𝐁𝐎́𝐈 𝐓𝐀𝐑𝐎𝐓 ]==🔮\n\n🃏 𝗧𝗲̂𝗻 𝗹𝗮́ 𝗯𝗮̀𝗶: ${x.name}\n⚜️ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗯𝗼̣̂: ${x.suite}\n💭 𝗠𝗼̂ 𝘁𝗮̉: ${x.vi.description}\n📖 𝗬́ 𝗻𝗴𝗵𝗶̃𝗮: ${x.vi.interpretation}\n🀄 𝗟𝗮́ 𝗯𝗮̀𝗶 𝗻𝗴𝘂̛𝗼̛̣𝗰: ${x.vi.reversed}`,
        attachment: t
    })
    return api.sendMessage(msg, event.threadID, event.messageID)
}