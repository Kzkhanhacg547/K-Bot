module.exports.config = {
  name: "gpt",
  version: "1.2.1",
  hasPermssion: 0,
  credits: "KaiyoTeam",
  description: "AI lỏ fai fai",
  commandCategory: "Tiện ích",
  usages: "/gpt [câu hỏi]",
  cooldowns: 3,
  dependencies: {}
}

const axios = require("axios")
const cheerio = require("cheerio")

module.exports.run = async function({ api, event, args }) {
  let message = args.join(" ")

  if (message.length < 1) api.sendMessage("Lệnh không hợp lệ\n Cách sử dụng: gpt <câu hỏi> )", event.threadID)
  else {
    try {
      const response = await axios.get(`https://duckduckgo.com/html/?q=${encodeURIComponent(message)}`)
      const $ = cheerio.load(response.data)
      const answer = $(".result__snippet").first().text()

      if (answer) api.sendMessage(answer, event.threadID, event.messageID)
      else api.sendMessage("Xin lỗi, tôi không thể tìm thấy câu trả lời..", event.threadID)
    } catch (error) {
      console.error(error)
      api.sendMessage("‼️Lỗi khi tìm kiếm câu trả lời..", event.threadID)
    }
  } 
}  