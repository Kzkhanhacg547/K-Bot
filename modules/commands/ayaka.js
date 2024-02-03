module.exports.config = {
  name: "ayaka",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "Random ảnh ayaka",
  commandCategory: "Hình ảnh",
  usages: "ayaka",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  const imageUrls = await Promise.all(Array.from({ length: 2 }, async () => {
    const res = await axios.get('https://ayaka.ngojchaan.repl.co/random');
    return res.data.url;
  }));

  const attachments = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));


  const data = await Currencies.getData(event.senderID);
  const money = data.money;


  if (money < 100) {
    api.sendMessage("Bạn cần 100 đô để xem ảnh ?", event.threadID, event.messageID);
    return;
  }


  Currencies.setData(event.senderID, options = {money: money - 100});


  api.sendMessage({
    body: `𝗔̉𝗻𝗵 𝗔𝘆𝗮𝗸𝗮 𝗡𝗲̀ 💞 \n-100 đô !`,
    attachment: attachments
  }, event.threadID, event.messageID);
};