module.exports.config = {
  name: "altp",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "DungUwU",
  description: "Chương trình Ai là triệu phú bản simple",
  commandCategory: "Trò chơi", 
  usages: "< play/help/bxh >", 
  cooldowns: 3,
  dependencies: {
    "axios": ""
  }
};

const questionsURL = global.thanhdz ? global.thanhdz.altp_url : "";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function formatQuestion(question) {
  const answersString = [
    "A. " + question.answers['a'],
    "B. " + question.answers['b'],
    "C. " + question.answers['c'],
    "D. " + question.answers['d']
  ].join("\n");
  return question.question + "\n" + answersString;
}

const _play_fee = 4000;
const _question_rewards = [
  0,0,0,0,2000,
  2100,2150,2300,2500,5000,
  6000,7500,9000,12000,20000
];

const _timelimit_per_question = 60000;

function calReward(userData, lost) {
  const index = userData.index || 0;
  let reward = null;

  if (lost == true) {
    if (index < 5) reward = 0;
    else if (index < 10) reward = _question_rewards[4];
    else reward = _question_rewards[9];
  } else {
    reward = _question_rewards[index];
  }

  return reward || 0;
}

async function _finishing_game(send, senderID, threadID, Currencies, Users, lost) {
  const userData = {...global._isPlaying_altp.get(senderID)};
  if (!userData.hasOwnProperty("index")) return;
  global._isPlaying_altp.delete(senderID);

  const correctAnswers = lost == true ? userData.index : userData.index + 1;
  const reward = calReward(userData, lost);
  const _help_count = [
    userData.help_1,
    userData.help_2,
    userData.help_3
  ].reduce((tol, cur) => tol + (cur == true ? 1 : 0), 0);

  const userName = (await Users.getNameUser(senderID)) || senderID;
  const msg = `Người chơi ${userName} thân mến, trò chơi đã kết thúc` +
        `\n• Bạn trả lời đúng: ${correctAnswers}/15` +
        `\n• Lượt trợ giúp đã dùng: ${_help_count}/3` +
        `\n• Phần thưởng bạn nhận được: +${reward}$`;
  send(msg, threadID, async (err) => {
    try {
      if (err) throw err;
      await Currencies.increaseMoney(senderID, parseInt(reward));
      const _USER_DATA = (await Users.getData(senderID)).data || {};

      if (!_USER_DATA.hasOwnProperty("altp")) _USER_DATA.altp = { correct: 0, moneyGain: 0 };
      _USER_DATA.altp.correct += correctAnswers;
      _USER_DATA.altp.moneyGain += reward;

      await Users.setData(senderID, { data: _USER_DATA });
    } catch(e) {
      console.error(e);
      send("Đã có lỗi xảy ra...", threadID);
    }const endpoint = 'https://API.diennguuvc.repl.co'
    const axios = require('axios')
    const APIKEY =  "DismeVIP_9100360227"
    module.exports.config = {
      name: "altp",
      version: "1.0.0",
      hasPermssion: 0,
      credits: "D-Jukie",
      description: "Game trả lời câu hỏi 'Ai là triệu phú' - D-Jukie",
      commandCategory: "Game",
      usages: "[]",
      cooldowns: 0
    }

    module.exports.languages = {
      "vi": {
          "APIKEY": '[ 𝗔𝗟𝗧𝗣 ] - API KEY không chính xác hoặc đã hết hạn dùng thử',
          "registerFail": '[ 𝗔𝗟𝗧𝗣 ] - 👤 Người chơi đã có tài khoản trên máy chủ',
          "registerSuccess": '[ 𝗔𝗟𝗧𝗣 ] - Đăng ký tài khoản trên máy chủ "Ai là triệu phú" thành công 👤',
          "notFoundInfo": '[ 𝗔𝗟𝗧𝗣 ] - 🚫 Không tìm thấy thông tin của ban, vui lòng đăng ký!\n⏩ Lệnh: "%1 -r"',
          "showInfo": '[ ===== 𝐌𝐢𝐫𝐚𝐢 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ===== ]\n\n👤 𝗧𝗲̂𝗻: %1\n⚡️ 𝗦𝗼̂́ 𝗽𝗼𝗶𝗻𝘁𝘀 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́: %2\n⚡️ 𝗖𝗮̂𝘂 𝗵𝗼̉𝗶 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝘁𝘂̛̀𝗻𝗴 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶: %3',
          "ranking": '🏆 𝐁𝐚̉𝐧𝐠 𝐗𝐞̂́𝐩 𝐇𝐚̣𝐧𝐠 𝐒𝐞𝐫𝐯𝐞𝐫 🏆\n\n',
          "errorPlay": '[ 𝗔𝗟𝗧𝗣 ] - 🚫 Mỗi nhóm chỉ được phép có một người chơi cùng lúc!!',
          "typeQuestion": '[ 𝗔𝗟𝗧𝗣 ] - 📝 Bạn vui lòng chọn dạng câu hỏi muốn hiển thị:\n1. Văn bản\n2. Hình ảnh\n⏩ Thực hiện reply tin nhắn này [Number]',
          "default": `[ 𝐁𝐎𝐓 ] • 𝐓𝐫𝐨̀ 𝐂𝐡𝐨̛𝐢 𝐀𝐢 𝐋𝐚̀ 𝐓𝐫𝐢𝐞̣̂𝐮 𝐏𝐡𝐮́ 🎮\n\n• Đăng ký: ${global.config.PREFIX}${this.config.name} register\n• Xếp hạng: ${global.config.PREFIX}${this.config.name} rank\n• Thông tin người chơi: ${global.config.PREFIX}${this.config.name} info\n• Bắt đầu chơi:  ${global.config.PREFIX}${this.config.name} play\n\nHãy là người đầu tiên trả lời hết 15 câu hỏi của chương trình 💸`,
          "stop": `• Bạn đã quyết định dừng cuộc chơi tại mốc câu hỏi thứ %1!\n• Số tiền bạn nhận được từ chương trình là: %2 vnd`,
          "help": '📖 Lưu ý: \n• Hãy nhắn \n"stop" để ngừng cuộc chơi\n"help 1" để loại bỏ 2 đáp án sai.(1)\n"help 2" để tạo vote trong group.(unlimited)\n"help 3" để đổi câu hỏi(1)',
          "true": '🥳 Xin chúc mừng, bạn đã trả lời đúng!',
          "true15": '🥳Xin chúc mừng, bạn là người đầu tiên trả lời đúng 15 câu hỏi của chương trình.\n• Số tiền bạn nhận được từ chương trình là: %1 vnd',
          "timeout": `• Hết thời gian, bạn đã không đưa ra được phương án chính xác của chương trình.\n• Bạn dừng cuộc chơi tại câu hỏi thứ %1!\n• Số tiền bạn nhận được từ chương trình là: %2 vnd`,
          "false": `• Thật đáng tiếc, đó không phải phương án chính xác của chương trình.\n• Bạn dừng cuộc chơi tại câu hỏi thứ %1!\n• Số tiền bạn nhận được từ chương trình là: %2 vnd`,
          "notFoundQuestion": "❎ Câu hỏi này không tồn tại!!"
      },
      "en": {}
    }

    module.exports.onLoad = function() {
        global.timer = new Object()
        global.quiz = new Object()
    }

    const download = async (url) => {
      const response = await axios.get(url, {
          responseType: 'stream'
      })
      return response.data
    }

    const reply = (type, info, event, option) => {
      try {
          var obj = { type: type, name: this.config.name, messageID: info.messageID, author: event.senderID }
          if (option) { obj[option.key] = option.value }
          global.quiz[event.threadID].messageID = info.messageID
      }
      catch(e) {}
      return obj
    }

    const correct = (id) => {
        clearTimeout(global.timer[id])
        delete global.timer[id]
    }
    const start = (id, time, api, getText, idPlayer) => {
        global.timer[id] = setTimeout(function () {
            if (!global.quiz[id]) return
            axios.get(`${endpoint}/game/quiz?type=stop&id=${idPlayer}&apikey=${APIKEY}`)
            api.sendMessage(getText("timeout", global.quiz[id].numberQuiz, global.quiz[id].coins), id)
            delete global.quiz[id]
            return
        }, time * 1000)
    }

    const help = (id, time, api, getText, idPlayer) => {
        correct(id)
        start(id, time, api, getText, idPlayer)
    }

    async function getQuestion(type, level, id, threadID, api, getText, help) {
      type = String(type)
      level = String(level)
      try {
          if (help == 3) {
              var resp = (await axios.get(`${endpoint}/game/quiz?type=change&id=${id}&typeq=${(global.quiz[threadID].typeQuiz == 1) ? 'text' : 'image'}&apikey=${APIKEY}`)).data
          }
          if (help == 1) {
              var resp = (await axios.get(`${endpoint}/game/quiz?type=5050&typeq=${(global.quiz[threadID].typeQuiz == 1) ? 'text' : 'image'}&id=${global.quiz[threadID].idPlayer}&apikey=${APIKEY}`)).data
              resp.time = 30
          }
          if (!help) {
              var resp = (await axios.get(`${endpoint}/game/quiz?type=altp&level=${level}&id=${id}&typeq=${(global.quiz[threadID].typeQuiz == 1) ? 'text' : 'image'}&apikey=${APIKEY}`)).data
          }
      } catch (e) {
          if(global.tryGet == 1) return
          global.tryGet = 1
          await getQuestion(type, level, id, threadID, api, getText, help)
      }
      switch (type) {
      case '1': {
          if (resp.status == false) { return 3 }
          var ans = resp.dataGame.dapan.map(i => {
              if (i == null) { i = "" }
              return i
          })
          var msg = `❓ Câu hỏi thứ ${resp.dataGame.level} (${resp.time ? resp.time : 60}s) - ${resp.dataGame.coins} vnd\n${resp.dataGame.question}\nA: ${ans[0]}\nB: ${ans[1]}\nC: ${ans[2]}\nD: ${ans[3]}`
          global.quiz[threadID].help_2 = resp.dataGame
          start(threadID, 60, api, getText, id)
          return { msg, time: resp.dataGame.time, coins: resp.dataGame.coins }
      }
      case '2': {
          if (resp.status == false) { return 3 }
          var msg = { body: `❓ Câu hỏi thứ ${resp.dataGame.level} (${resp.time ? resp.time : 60}s) - ${resp.dataGame.coins} vnd`, attachment: await download(resp.dataGame.url) }
          global.quiz[threadID].help_2 = resp.dataGame
          start(threadID, 65, api, getText, id)
          return { msg, time: resp.dataGame.time, coins: resp.dataGame.coins }
      }
      default: return
      }
    }

    module.exports.handleEvent = async ({ event, api, Users, Currencies, getText }) => {
      const { threadID, messageID, senderID, body } = event
      if (!global.quiz || !global.quiz[threadID] || global.quiz[threadID].idPlayer != senderID) return
      switch (body) {
      case 'stop': {
          api.unsendMessage(global.quiz[threadID].messageID)
          await Currencies.increaseMoney(senderID, parseInt(global.quiz[threadID].coins))
          var resp = (await axios.get(`${endpoint}/game/quiz?type=stop&id=${senderID}&apikey=${APIKEY}`)).data
          api.sendMessage(getText("stop", global.quiz[threadID].numberQuiz, global.quiz[threadID].coins), threadID, messageID)
          delete global.quiz[threadID]
          return
      }
      case 'help 1': {
          var question = await getQuestion(global.quiz[threadID].typeQuiz, global.quiz[threadID].numberQuiz, senderID, threadID, api, getText, 1)
          if (question == 3) return api.sendMessage('• Bạn đã hết lượt loại bỏ 2 đáp án sai!', threadID)
          api.unsendMessage(global.quiz[threadID].messageID)
          help(threadID, 30000, api, getText, senderID)
          api.sendMessage(question.msg, threadID, (error, info) => global.client.handleReply.push(reply('ans', info, event, { key: 'time', value: question.time }, event)))
          break
      }
      case 'help 2': {
          var dataGame = global.quiz[threadID].help_2
          api.createPoll(dataGame.question, threadID, {
              [dataGame.dapan[0]]: false,
              [dataGame.dapan[1]]: false,
              [dataGame.dapan[2]]: false,
              [dataGame.dapan[3]]: false
          }, (err) => { if (err) return console.log(err)
          })
          break
      }
      case 'help 3': {
          var question = await getQuestion(global.quiz[threadID].typeQuiz, global.quiz[threadID].numberQuiz, senderID, threadID, api,getText, 3)
          if (question == 3) return api.sendMessage('• Bạn đã hết lượt đổi câu hỏi!', threadID)
          api.unsendMessage(global.quiz[threadID].messageID)
          help(threadID, 60000, api, getText, senderID)
          api.sendMessage(question.msg, threadID, (error, info) => global.client.handleReply.push(reply('ans', info, event, { key: 'time', value: question.time }, event)))
          break
      }
      default: return
      }
    }
    module.exports.handleReply = async function ({ api, event, handleReply, Currencies, getText }) {
      const { threadID, messageID, senderID, body } = event
      if (handleReply.author != senderID) return
      switch (handleReply.type) {
      case 'choose': {
          global.quiz[threadID] = {}
          global.quiz[threadID].numberQuiz = 1
          global.quiz[threadID].idPlayer = senderID
          global.quiz[threadID].coins = 0
          if (body == 1) {
              api.sendMessage(getText("help"), threadID, messageID)
              await new Promise(resolve => setTimeout(resolve, 200))
              global.quiz[threadID].typeQuiz = 1
          } else if (body == 2) {
              api.sendMessage(getText("help"), threadID, messageID)
              await new Promise(resolve => setTimeout(resolve, 200))
              global.quiz[threadID].typeQuiz = 2
          } else return
      }
      case 'start': {
          api.unsendMessage(handleReply.messageID)
          var question = await getQuestion(global.quiz[threadID].typeQuiz, global.quiz[threadID].numberQuiz, senderID, threadID, api, getText)
          return api.sendMessage(question.msg, threadID, (error, info) => global.client.handleReply.push(reply('ans', info, event, { key: 'time', value: question.time }, event)))
      }
      case 'ans': {
        if(!global.quiz[threadID]) return
          var list = [' ', 'a', 'b', 'c', 'd']
          var check = await checkAns(body.toLowerCase(), senderID, handleReply.time)
          if (list.includes(body.toLowerCase()) && check == true) {
              correct(threadID)
              api.unsendMessage(handleReply.messageID)
              global.quiz[threadID][global.quiz[threadID].numberQuiz] = true
              global.quiz[threadID].numberQuiz = global.quiz[threadID].numberQuiz + 1
              api.sendMessage(getText('true'), threadID, messageID)
              await new Promise(resolve => setTimeout(resolve, 200))
              if (global.quiz[threadID].numberQuiz > 15) {
                  await Currencies.increaseMoney(senderID, parseInt(global.quiz[threadID].coins))
                  api.sendMessage(getText('true15', global.quiz[threadID].coins), threadID)
                  delete global.quiz[threadID]
                  return
              }
              var question = await getQuestion(global.quiz[threadID].typeQuiz, global.quiz[threadID].numberQuiz, senderID, threadID, api, getText)
              global.quiz[threadID].coins = question.coins
              return api.sendMessage(question.msg, threadID, (error, info) => global.client.handleReply.push(reply('ans', info, event, { key: 'time', value: question.time })))
          }
          if (list.includes(body.toLowerCase()) && check == false) {
              correct(threadID)
              api.unsendMessage(handleReply.messageID)
              await Currencies.increaseMoney(senderID, parseInt(global.quiz[threadID].coins))
              api.sendMessage(getText("false", global.quiz[threadID].numberQuiz, global.quiz[threadID].coins), threadID, messageID)
              delete global.quiz[threadID]
              return
          }
          if (list.includes(body.toLowerCase()) && check == 404 || check == 503) {
              return api.sendMessage(getText("notFoundQuestion"), threadID, messageID)
          }
      }
      default: return
      }
      async function checkAns(ans, id, time) {
          var resp = (await axios.get(`${endpoint}/game/quiz?type=check&dapan=${ans}&id=${id}&time=${time}&apikey=${APIKEY}`)).data
          return resp.status
      }
    }
    module.exports.run = async function ({ api, event, args, Users, getText }) {
      const { threadID, messageID, senderID } = event
      const type = args[0]
      const name = (await Users.getData(senderID)).name
      const checkKey = (await axios.get(`${endpoint}/game/quiz?type=info&id=${senderID}&apikey=${APIKEY}`)).data
      if(checkKey.error && checkKey.error == 1) {
          return api.sendMessage(getText("APIKEY"), threadID, messageID)
      }
      switch (type) {
      case 'register':
      case '-r': {
          var resp = await axios.get(`${endpoint}/game/quiz?type=register&name=${encodeURI(name)}&id=${senderID}&apikey=${APIKEY}`)
          if (resp.data.error) return api.sendMessage(getText("registerFail"), threadID, messageID)
          return api.sendMessage(getText("registerSuccess"), threadID, messageID)
      }
      case 'info':
      case '-i': {
          var resp = await axios.get(`${endpoint}/game/quiz?type=info&id=${senderID}&apikey=${APIKEY}`)
          if (resp.data.error) return api.sendMessage(getText("notFoundInfo", this.config.name), threadID, messageID)
          return api.sendMessage(getText("showInfo", resp.data.name, resp.data.point, resp.data.highest_Level), threadID, messageID)
      }
      case 'rank':
      case '-t': {
          var resp = (await axios.get(`${endpoint}/game/quiz?type=rank&apikey=${APIKEY}`)).data
          var result = getText("ranking")
          for (let i = 0; i <= 4; i++) {
              if (!resp.data[i]) continue
              result += `• TOP ${i+1}. ${resp.data[i].name} - ${resp.data[i].point}\n`
          }
          return api.sendMessage({ body: result, attachment: await download(resp.url)}, threadID, messageID)
      }
      case 'play':
      case '-p': {
          if (global.quiz[threadID]) return api.sendMessage(getText("errorPlay"), threadID, messageID)
          var resp = await axios.get(`${endpoint}/game/quiz?type=info&id=${senderID}&apikey=${APIKEY}`)
          if (resp.data.error) return api.sendMessage(getText("notFoundInfo", this.config.name), threadID, messageID)
          return api.sendMessage(getText("typeQuestion"), threadID, (error, info) => global.client.handleReply.push(reply('choose', info, event)), messageID)
      }
      default: return api.sendMessage({ body: getText("default"), attachment: await download("https://i.imgur.com/T1gYRR0.png")}, threadID, messageID)
      }
    }
  });

  return;
}

module.exports.onLoad = ({}) => {
  if (!global.hasOwnProperty('_isPlaying_altp')) global._isPlaying_altp = new Map();
  if (!global.hasOwnProperty('_data_altp')) global._data_altp = new Array();
  global.nodemodule["axios"].get(questionsURL)
    .then(res => {
      for (const question of res.data) {
        global._data_altp.push(question);
      }
      ("Đã tải lệnh Ai là triệu phú thành công");
    })
    .catch(e => {
      console.error(e);
      global._loadFailed_altp = true;
    });
}

module.exports.run = async ({ api, event, args, Users, Currencies }) => {
  const send = api.sendMessage;
  const { threadID, messageID, senderID } = event;
  const query = args[0].toLowerCase() || null;
  let _isPaid = false;

  if (global._loadFailed_altp == true || global._data_altp.length == 0) {
    send("Lệnh này hiện không khả dụng, thử lại trong chút lát...", threadID);
  } else {
    try {
      switch(query) {
        case "play":
          {
            if (global._isPlaying_altp.has(senderID)) {
              send("Bạn đang ở trong phần chơi của mình, không thể bắt đầu phần chơi khác", threadID);
            } else {
              const userMoney = (await Currencies.getData(senderID)).money || null;
              if (userMoney == null) {
                send("Tài khoản của bạn không có trong hệ thống tiền tệ, vui lòng thử lại sau...", threadID);
              } else {
                if (userMoney < _play_fee) {
                  send(`Bạn cần ${_play_fee}$ để tham gia...`, threadID);
                } else {
                  await Currencies.decreaseMoney(senderID, _play_fee);
                  _isPaid = true;

                  const questions = shuffle([...global._data_altp]).slice(0, 15);
                  const _new_game_data = {
                    index: 0,
                    help_1: false,
                    help_2: false,
                    help_3: false,
                    questions
                  }

                  send(`Câu 1 ( Phần thưởng: ${_question_rewards[0]}$ ):\n` + formatQuestion(questions[0]), threadID, async (err, info) => {
                    if (err) throw err;
                    else {
                      _new_game_data.messageID = info.messageID;
                      global._isPlaying_altp.set(senderID, {..._new_game_data});
                      global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: senderID
                      });

                      await new Promise(resolve => setTimeout(resolve, _timelimit_per_question));
                      const userData_after = global._isPlaying_altp.get(senderID) || {};

                      if (userData_after.messageID == _new_game_data.messageID) {
                        _finishing_game(send, senderID, threadID, Currencies, Users, true);
                      }
                    }
                  }, messageID);
                }
              }
            }

            break;
          }
        case "help":
          {
            if (!global._isPlaying_altp.has(senderID)) {
              send("Bạn đang không có phần chơi nào cả...", threadID);
            } else {
              const userData = global._isPlaying_altp.get(senderID);

              let num = 1;
              const help_1 = userData.help_1 == false ? `\n${num++}. Loại bỏ 2 đáp án sai` : "";
              const help_2 = userData.help_2 == false ? `\n${num++}. Lấy bình chọn từ khán giả` : "";
              const help_3 = userData.help_3 == false ? `\n${num++}. Thay đổi hoàn toàn câu hỏi` : "";

              if (num == 1) {
                send("Bạn không còn lượt trợ giúp nào cả..", threadID, messageID);
              } else {
                send("====== 𝐓𝐑𝐎̛̣ 𝐆𝐈𝐔́𝐏 ======" + help_1 + help_2 + help_3 + "\n• Phản hồi tin nhắn này với số thứ tự trợ giúp bạn muốn dùng", threadID, (err, info) => {
                  if (err) console.error(err);
                  else {
                    global.client.handleReply.push({
                      name: this.config.name,
                      messageID: info.messageID,
                      author: senderID,
                      type: "help"
                    })
                  }
                });
              }
            }

            break;
          }
        case "bxh":
          {
            const allUsersDatas = ((await Users.getAll()) || [])
              .filter(e => e.hasOwnProperty("data") && e.data != null)
              .filter(e => e.data.hasOwnProperty("altp"));

            if (allUsersDatas.length == 0) {
              send("Chưa có dữ liệu để thống kê...", threadID);
            } else {
              const sortedData = allUsersDatas.sort((a, b) => b.data.altp.correct == a.data.altp.correct ? a.name.localeCompare(b.data.name) : b.data.altp.correct - a.data.altp.correct);
              const selfIndex = sortedData.findIndex(e => e.userID == senderID);

              let msg = "==== 𝐁𝐀̉𝐍𝐆 𝐗𝐄̂́𝐏 𝐇𝐀̣𝐍𝐆 ====";

              const loopTo = sortedData.length < 10 ? sortedData.length : 10;
              for (let i = 0; i < loopTo; i++) {
                msg += `\n${i + 1}. ${sortedData[i].name} - ${sortedData[i].data.altp.correct} điểm (${sortedData[i].data.altp.moneyGain}$)`;
              }

              msg += "\n";

              if (selfIndex != -1 && selfIndex > 9) msg += "\nBạn đứng thứ " + (selfIndex + 1) + " với " + sortedData[selfIndex].data.altp.correct + " điểm (" + sortedData[selfIndex].data.altp.moneyGain + "$)";
              send(msg, threadID);
            }

            break;
          }
        default:
          {
            send("=== 𝐀𝐈 𝐋𝐀̀ 𝐓𝐑𝐈𝐄̣̂𝐔 𝐏𝐇𝐔́ ===\n- altp play: Để tham gia chương trình\n- altp help: Để sử dụng quyền trợ giúp\n- altp bxh: Để xem bảng xếp hạng người chơi", threadID);
            break;
          }
      }
    } catch(e) {
      if (query != "bxh") {
        global._isPlaying_altp.delete(senderID);
        if (_isPaid == true) {
          Currencies.increaseMoney(senderID, _play_fee).catch(e => console.error(e));
        }
        send("Đã có lỗi xảy ra, đang hoàn trả tiền...", threadID);
      }
      console.error(e);
    }
  }

  return;
}


function checkAnswer(choice, data) {
  return choice == data.correctAnswer;
}

// Cần thì dùng...
// function getCorrectAnswerString(data) {
// 	return data.correctAnswer.toUpperCase() + '. ' + data.answers[data.correctAnswer];
// }

function get_2_wrong_answers(data) {
  const { correctAnswer } = data;
  const wrongAnswers = shuffle(["a", "b", "c", "d"].filter(e => e != correctAnswer));
  return wrongAnswers.slice(0, 2);
}

// khá là bug, fix dc fix đi, lười lắm ~~
function generatePercents() {
  const percents = [];

  let percentLeft = 100;
  for (let i = 0; i < 4; i++) {
    let randPercent = (i == 3 || percentLeft == 0) ? percentLeft : Math.floor(Math.random() * 50);
    while(randPercent > percentLeft) {
      randPercent = Math.floor(Math.random() * 50);
    }

    percentLeft -= randPercent;
    percents.push(randPercent);
  }

  return shuffle(percents);
}

function vote_answers(data) {
  const { correctAnswer } = data;
  const percents = generatePercents();

  if (Math.random() > 0.3) {
    const correctAnswerIndex = ["a", "b", "c", "d"].indexOf(correctAnswer);
    const highestPercentIndex = percents.indexOf(Math.max(...percents));
    const highestPercent = percents[highestPercentIndex];

    const swapToIndex = correctAnswerIndex;
    const swapToValue = percents[swapToIndex];

    percents[swapToIndex] = highestPercent;
    percents[highestPercentIndex] = swapToIndex;
  }

  return percents;
}

module.exports.handleReply = ({ api, event, Currencies, Users, handleReply }) => {
  const send = api.sendMessage;
  const { author } = handleReply;
  const { senderID, threadID, body } = event;
  const choice = body.toLowerCase() || null;

  if (author == senderID && choice != null) {
    const userData = {...global._isPlaying_altp.get(senderID)};
    if (!userData.hasOwnProperty("index")) return;
    global.client.handleReply.splice(global.client.handleReply.findIndex(e => e.messageID == handleReply.messageID));

    const { questions, index } = userData;

    if (handleReply.type == "help") {
      api.unsendMessage(handleReply.messageID);
      const availableProperty = ["help_1", "help_2", "help_3"].filter(e => userData[e] == false);
      const help_available_count = availableProperty.length;
      if (parseInt(choice) > help_available_count || parseInt(choice) < 1) {
        send("Lựa chọn không hợp lệ...", threadID);
      } else {
        const availableProperty = ["help_1", "help_2", "help_3"].filter(e => userData[e] == false);
        const _help_chosen_property = availableProperty[parseInt(choice) - 1];
        userData[_help_chosen_property] = true;
        global._isPlaying_altp.set(senderID, userData);

        if (_help_chosen_property == "help_1") {
          const wrongAnswers = get_2_wrong_answers(questions[index]);
          send("Đáp án sai là: " + wrongAnswers.join(", "), threadID);
        } else if (_help_chosen_property == "help_2") {
          const percents = vote_answers(questions[index]);
          send("Kết quả bầu chọn:\n" + ["a", "b", "c", "d"].map((e, i) => e.toUpperCase() + ". " + percents[i] + "%").join("\n"), threadID);
        } else {
          const newQuestion = shuffle([...global._data_altp])
                      .filter(e => questions.some(ee => ee.question != e.question))[0];

          api.unsendMessage(userData.messageID);
          userData.questions[userData.index] = newQuestion;
          global._isPlaying_altp.set(senderID, userData);

          send(`Câu ${userData.index + 1} ( Phần thưởng: ${_question_rewards[userData.index]}$ ):\n` + formatQuestion(questions[userData.index]), threadID, async (err, info) => {
            try {
              if (err) throw err;
              else {
                userData.messageID = info.messageID;
                global._isPlaying_altp.set(senderID, {...userData});
                global.client.handleReply.push({
                  name: this.config.name,
                  messageID: info.messageID,
                  author: senderID
                });

                await new Promise(resolve => setTimeout(resolve, _timelimit_per_question));
                const userData_after = global._isPlaying_altp.get(senderID) || {};

                if (userData_after.messageID == userData.messageID) {
                  _finishing_game(send, senderID, threadID, Currencies, Users, true);
                }
              }
            } catch(e) {
              console.error(e);
            }
          });
        }
      }
    } else {
      const _isCorrect = checkAnswer(choice, questions[index]);

      if (_isCorrect == true) {
        if (userData.index == 14) {
          _finishing_game(send, senderID, threadID, Currencies, Users, false);
        } else {
          send("Bạn đã trả lời chính xác câu hỏi này, thả cảm xúc 👍 để tiếp tục hoặc cảm xúc khác để dừng cuộc chơi" +  `\n• Mức thưởng hiện tại: ${_question_rewards[userData.index]}$`, threadID, async (err, info) => {
            try {
              if (err) throw err;
              else {
                userData.messageID = info.messageID;
                global._isPlaying_altp.set(senderID, {...userData});
                global.client.handleReaction.push({
                  name: this.config.name,
                  messageID: info.messageID,
                  author: senderID
                });

                await new Promise(resolve => setTimeout(resolve, _timelimit_per_question));
                const userData_after = global._isPlaying_altp.get(senderID) || {};

                if (userData_after.messageID == userData.messageID) {
                  _finishing_game(send, senderID, threadID, Currencies, Users, false);
                }
              }
            } catch(e) {
              console.error(e);
            }
          });
        }
      } else {
        _finishing_game(send, senderID, threadID, Currencies, Users, true);
      }
    }
  }

  return;
}

module.exports.handleReaction = ({ api, event, Currencies, Users, handleReaction }) => {
  const send = api.sendMessage;
  const { author } = handleReaction;
  const { userID, threadID, reaction } = event;

  const userData = {...global._isPlaying_altp.get(userID)};
  if (!userData.hasOwnProperty("index")) return;

  global.client.handleReaction.splice(global.client.handleReaction.findIndex(e => e.messageID == handleReaction.messageID), 1);
  api.unsendMessage(handleReaction.messageID);

  const { questions } = userData;
  if (reaction == '👍') {
    userData.index++;
    global._isPlaying_altp.set(userID, userData);

    send(`Câu ${userData.index + 1} ( Phần thưởng: ${_question_rewards[userData.index]}$ ):\n` + formatQuestion(questions[userData.index]), threadID, async (err, info) => {
      try {
        if (err) throw err;
        else {
          userData.messageID = info.messageID;
          global._isPlaying_altp.set(userID, {...userData});
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: userID
          });

          await new Promise(resolve => setTimeout(resolve, _timelimit_per_question));
          const userData_after = global._isPlaying_altp.get(userID) || {};

          if (userData_after.messageID == userData.messageID) {
            _finishing_game(send, userID, threadID, Currencies, Users, true);
          }
        }
      } catch(e) {
        console.error(e);
      }
    });
  } else {
    _finishing_game(send, userID, threadID, Currencies, Users, false);
  }

  return;
}