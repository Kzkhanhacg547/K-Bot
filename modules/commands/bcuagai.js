 /*
* @Module made by DuyVuong
* @No edit credits
* @Ban user edit credits
*/
module.exports.config = {
    name: "cuagai",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DuyVuong",
    description: "Game bầu cua có đặt cược </> Coder by DuyVuong",
    commandCategory: "Game",
    usages: "<[đỏ/cam/tím/xanh/đen/trắng] hoặc[❤️/🧡/💜/💙/🖤/🤍]> <Số tiền cược (lưu ý phải trên 50$)>",
    cooldowns: 0
  };
  
  module.exports.run = async function({ api, event, args, Currencies, getText, permssion }) {
    try {
      const { threadID, messageID, senderID } = event;
      const { getData, increaseMoney, decreaseMoney } = Currencies;
      const request = require('request');
      const axios = require('axios');
      if (this.config.credits != 'DuyVuong') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      }
      const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
      const slotItems = ["đỏ", "cam", "tím", "xanh", "đen", "trắng"];
      const money = (await getData(senderID)).money;
      if (isNaN(args[1]) == true) return api.sendMessage('Nội dung "Số tiền cược" mà bạn nhập không phải 1 con số hợp lệ!', threadID, messageID);
      var moneyBet = parseInt(args[1]);
      if (isNaN(moneyBet) || moneyBet <= 50) return api.sendMessage('Số tiền đặt cược không được dưới 50$', threadID, messageID);
      if (moneyBet > money) return api.sendMessage('Tài khoản của bạn không đủ tiền để chơi.', threadID, messageID);
      var number = [], list = [], listimg = [], win = false;
      var baucua1 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua2 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua3 = slotItems[Math.floor(Math.random() * slotItems.length)];
      // ARGS
      let content = args[0];
      var content1;
       if (content == 'đỏ' || content == '❤️') {
        content1 = 'do';
      }
      else if (content == 'cam' || content == '🧡') {
        content1 = 'cam';
      }
      else if (content == 'tím' || content == '💜') {
        content1 == 'tim';
      }
      else if (content == 'xanh' || content == '💙') {
        content1 = 'xanh';
      }
      else if (content == 'đen' || content == '🖤') {
        content1 = 'den';
      }
      else if (content == 'trắng' || content == '🤍') {
        content1 = 'trang';
      }
      else {
        return api.sendMessage(`Sai định dạng\n${global.config.PREFIX}${this.config.name} <[đỏ/cam/tím/xanh/đen/trắng] hoặc[❤️/🧡/💜/💙/🖤/🤍]> <Số tiền cược (lưu ý phải trên 50$)>`, threadID, messageID);
      }
      // request
      if (!existsSync(__dirname + '/cache/do.jpg')) {
        request('https://i.imgur.com/27cFGA7.jpg').pipe(createWriteStream(__dirname + '/cache/do.jpg'));
      }
      if (!existsSync(__dirname + '/cache/cam.jpg')) {
        request('https://i.imgur.com/q3lAZZc.jpg').pipe(createWriteStream(__dirname + '/cache/cam.jpg'));
      }
      if (!existsSync(__dirname + '/cache/tim.jpg')) {
        request('https://i.imgur.com/EWptgY1.jpg').pipe(createWriteStream(__dirname + '/cache/tim.jpg'));
      }
      if (!existsSync(__dirname + '/cache/xanh.jpg')) {
        request('https://i.imgur.com/fsM7tmc.jpg').pipe(createWriteStream(__dirname + '/cache/xanh.jpg'));
      }
      if (!existsSync(__dirname + '/cache/den.jpg')) {
        request('https://i.imgur.com/FUloMlI.jpg').pipe(createWriteStream(__dirname + '/cache/den.jpg'));
      }
      if (!existsSync(__dirname + '/cache/trang.jpg')) {
        request('https://i.imgur.com/PlNhCPd.jpg').pipe(createWriteStream(__dirname + '/cache/trang.jpg'));
      }
      if (!existsSync(__dirname + '/cache/gaigu.png')) {
        request('https://i.imgur.com/tJHoyIm.png').pipe(createWriteStream(__dirname + '/cache/gaigu.png'));
      }
      // baucua 1
      if (baucua1 == 'đỏ') {
        var bau1 = 'do';
        var bau_1 = __dirname + '/cache/do.jpg';
      }
      else if (baucua1 == 'cam') {
        var bau1 = 'cam';
        var bau_1 = __dirname + '/cache/cam.jpg';
      }
      else if (baucua1 == 'tím') {
        var bau1 = 'tim';
        var bau_1 = __dirname + '/cache/tim.jpg';
      }
      else if (baucua1 == 'xanh') {
        var bau1 = 'xanh';
        var bau_1 = __dirname + '/cache/xanh.jpg';
      }
      else if (baucua1 == 'đen') {
        var bau1 = 'den';
        var bau_1 = __dirname + '/cache/den.jpg';
      }
      else if (baucua1 == 'trắng') {
        var bau1 = 'trang';
        var bau_1 = __dirname + '/cache/trang.jpg';
      }
      // baucua 2
      if (baucua2 == 'đỏ') {
        var bau2 = 'do';
        var bau_2 = __dirname + '/cache/do.jpg';
      }
      else if (baucua2 == 'cam') {
        var bau2 = 'cam';
        var bau_2 = __dirname + '/cache/cam.jpg';
      }
      else if (baucua2 == 'tím') {
        var bau2 = 'tim';
        var bau_2 = __dirname + '/cache/tim.jpg';
      }
      else if (baucua2 == 'xanh') {
        var bau2 = 'xanh';
        var bau_2 = __dirname + '/cache/xanh.jpg';
      }
      else if (baucua2 == 'đen') {
        var bau2 = 'den';
        var bau_2 = __dirname + '/cache/den.jpg';
      }
      else if (baucua2 == 'trắng') {
        var bau2 = 'trang';
        var bau_2 = __dirname + '/cache/trang.jpg';
      }
      // baucua 3
      if (baucua3 == 'đỏ') {
        var bau3 = 'do';
        var bau_3 = __dirname + '/cache/do.jpg';
      }
      else if (baucua3 == 'cam') {
        var bau3 = 'cam';
        var bau_3 = __dirname + '/cache/cam.jpg';
      }
      else if (baucua3 == 'tím') {
        var bau3 = 'tim';
        var bau_3 = __dirname + '/cache/tim.jpg';
      }
      else if (baucua3 == 'xanh') {
        var bau3 = 'xanh';
        var bau_3 = __dirname + '/cache/xanh.jpg';
      }
      else if (baucua3 == 'đen') {
        var bau3 = 'den';
        var bau_3 = __dirname + '/cache/den.jpg';
      }
      else if (baucua3 == 'trắng') {
        var bau3 = 'trang';
        var bau_3 = __dirname + '/cache/trang.jpg';
      }
      // array baucua
      list.push(bau1);
      list.push(bau2);
      list.push(bau3);
      // array img
      listimg.push(createReadStream(__dirname + '/cache/' + bau1 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau2 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau3 + '.jpg'))
      // ICON
      // icon 1
       if (bau1 == 'do') {
        var icon1 = '❤️';
      }
      else if (bau1 == 'cam') {
        var icon1 = '🧡'
      }
      else if (bau1 == 'tim') {
        var icon1 = '💜';
      }
      else if (bau1 == 'xanh') {
        var icon1 = '💙';
      }
      else if (bau1 == 'den') {
        var icon1 = '🖤';
      }
      else if (bau1 == 'trang') {
        var icon1 = '🤍';
      }
      // icon 2
      if (bau2 == 'do') {
        var icon2 = '❤️';
      }
      else if (bau2 == 'cam') {
        var icon2 = '🧡'
      }
      else if (bau2 == 'tim') {
        var icon2 = '💜';
      }
      else if (bau2 == 'xanh') {
        var icon2 = '💙';
      }
      else if (bau2 == 'den') {
        var icon2 = '🖤';
      }
      else if (bau2 == 'trang') {
        var icon2 = '🤍';
      }
      // icon 3
      if (bau3 == 'do') {
        var icon3 = '❤️';
      }
      else if (bau3 == 'cam') {
        var icon3 = '🧡'
      }
      else if (bau3 == 'tim') {
        var icon3 = '💜';
      }
      else if (bau3 == 'xanh') {
        var icon3 = '💙';
      }
      else if (bau3 == 'den') {
        var icon3 = '🖤';
      }
      else if (bau3 == 'trang') {
        var icon3 = '🤍';
      }
      // sendMessage
      api.sendMessage({
        body: '🌺 𝑷𝒉𝒆́𝒑 𝑻𝒉𝒖𝒂̣̂𝒕 𝑾𝒊𝒏𝒙 𝑬𝒏𝑪𝒉𝒂𝒏𝑻𝒊𝒙...𝑩𝒊𝒆̂́𝒏 𝑯𝒊̀𝒏𝒉\n🌺 𝑪𝒉𝒖́𝒄 𝑩𝒂̣𝒏 𝑴𝒂𝒏𝒈 𝑽𝒆̂̀ 𝑴𝒐̣̂𝒕 𝑪𝒐̂ 𝑽𝒐̛̣ 𝑿𝒊𝒏𝒉 𝑽𝒂̀ 𝑫𝒂𝒎𝒅𝒂𝒏𝒈 😍',
        attachment: createReadStream(__dirname + '/cache/gaigu.png')
      }, threadID, (err, info) => {
        if (err) return api.sendMessage(err, threadID, messageID);
        setTimeout(() => {
          api.unsendMessage(info.messageID);
          var check = list.findIndex(i => i.toString() == content1);
          var check2 = list.includes(content1);
          //console.log(check);
          //console.log(icon1 + icon2 + icon3);
          if (check >= 0 || check2 == true) {
            return api.sendMessage({
              body: `➢ 𝑩𝒊𝒆̂́𝒏 𝑯𝒊̀𝒏𝒉: ${icon1} | ${icon2} | ${icon3}\n🌺 𝑩𝒂̣𝒏 𝑽𝒖̛̀𝒂 𝑻𝒉𝒂̆́𝒏𝒈 𝑳𝒐̛́𝒏 𝑽𝒂̀ 𝑴𝒂𝒏𝒈 𝑴𝒐̣̂𝒕 𝑪𝒐̂ 𝑪𝒐𝒏 𝑫𝒂̂𝒖 𝑽𝒆̂̀ 𝑪𝒉𝒐 𝑴𝒆̣ 😍\n𝑪𝒐̣̂𝒏𝒈 ${moneyBet * 3}$ 𝑽𝒂̀𝒐 𝑻𝒂̀𝒊 𝑲𝒉𝒐𝒂̉𝒏`,
              attachment: listimg
            }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 3), messageID);
          }
          else if (check < 0 || check2 == false) {
            return api.sendMessage({
              body: `➢ 𝑩𝒊𝒆̂́𝒏 𝑯𝒊̀𝒏𝒉: ${icon1} | ${icon2} | ${icon3}\n🌺 𝑩𝒂̣𝒏 𝑽𝒖̛̀𝒂 𝑻𝒉𝒖𝒂 𝑯𝒆̂́𝒕 𝑺𝒂̣𝒄𝒉 𝑻𝒊𝒆̂̀𝒏 𝑽𝒂̀ 𝑩𝒊̣ 𝑽𝒐̛̣ 𝑩𝒐̉ 😭💸\n𝑻𝒓𝒖̛̀ ${moneyBet}$ 𝑽𝒂̀𝒐 𝑻𝒂̀𝒊 𝑲𝒉𝒐𝒂̉𝒏`,
              attachment: listimg
            }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
          }
          else {
            return api.sendMessage('Đã xảy ra lỗi. Vui lòng thử lại sau 5s', threadID, messageID);
          }
        }, 3000);
      }, messageID);
    }
    catch (err) {
      console.error(err);
      return api.sendMessage(err, event.threadID, event.messageID);
    }
      }