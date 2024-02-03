module.exports.config = {
  name: "getuid", 
  version: "2.0.0", 
  hasPermission: 0,
  credits: "Kz Khánhh",
  description: "Lấy UserID và ngày đăng ký của người được tag hoặc của người dùng lệnh",
  commandCategory: "THÀNH VIÊN",
  usages: "",
  cooldowns: 0
};

module.exports.run = async ({ api, event, args, client }) => {
  const { threadID, messageID, senderID } = event;
  const axios = require('axios');
  
  let tagUID = "";
  let replyMsg = event.messageReply;
  if (replyMsg) {
    tagUID = replyMsg.senderID;
  } else {
    let mentionList = Object.keys(event.mentions);
    if (mentionList.length != 0) {
      const mentionedUser = event.mentions[mentionList[0]];
      tagUID = mentionedUser.id;
    } else {
      tagUID = senderID;
    }
  }

  const res = await axios.get(`https://api.simsimi.vn/facebook/v1/CheckInFoUID?key=leanhtruong&data=${tagUID}`);
  if (res.status == 200) {
    const finduid = res.data.data.id;
    const finddate = res.data.data.register;
    const name = res.data.data.name;
    const data = (await axios({
      url: (await axios('https://sex.accountkz.repl.co/animev2')).data.data,
      method: "GET",
      responseType: "stream"
    })).data;

    return api.sendMessage({ 
      body: `🌐==== [ 𝐂𝐇𝐄𝐂𝐊 𝐅𝐁 ] ====🌐\n━━━━━━━━━━━━━━\n\n🌠𝐍𝐚𝐦𝐞: ${name}\n📌 𝗜𝗗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${finduid}\n📆 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼: ${finddate}\n\n- 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝘅𝗮̀𝗶 𝗯𝗼𝘁 𝘃𝘂𝗶 𝘃𝗲̉ 💓🌸`,
      attachment: data
    }, threadID, messageID);
  }
};
//\n📆 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼: ${finddate}