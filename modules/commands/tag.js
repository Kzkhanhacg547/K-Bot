module.exports.config = {
  name: "tag",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "VanHung & Dựa trên demo của NTKhang",
  description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
  commandCategory: "Qtv",
  usages: "tagLientuc @mention",
  cooldowns: 30,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  const mention = Object.keys(event.mentions)[0];
  if (!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
  const name = event.mentions[mention];
  const arrayTag = [];
  arrayTag.push({ id: mention, tag: name });

  const a = function(a) { api.sendMessage(a, event.threadID); };

  a("Bắt đầu gọi hồn!");

  setTimeout(() => {
    a({ body: "Hi Chào Câu " + " " + name, mentions: arrayTag });
  }, 3000);

  setTimeout(() => {
    a({ body: "Cậu Ra Đây Mình Bảo Này Nè🤭" + " " + name, mentions: arrayTag });
  }, 4000);

  setTimeout(() => {
    a({ body: "alo câu ơi" + " " + name, mentions: arrayTag });
  }, 5000);

  setTimeout(() => {
    a({ body: "ra đây chơi cậu" + " " + name, mentions: arrayTag });
  }, 6000);

  setTimeout(() => {
    a({ body: "ra đây chơi cậu" + " " + name, mentions: arrayTag });
  }, 6500);

  setTimeout(() => {
    a({ body: "ra đây chơi cậu" + " " + name, mentions: arrayTag });
  }, 7000);

  setTimeout(() => {
    a({ body: "ra đây chơi cậu" + " " + name, mentions: arrayTag });
  }, 7500);

  setTimeout(() => {
    a({ body: "ra đây chơi cậu" + " " + name, mentions: arrayTag });
  }, 8000);

  setTimeout(() => {
    a({ body: "ra đây chơi cậu" + " " + name, mentions: arrayTag });
  }, 8500);

  setTimeout(() => {
    a({ body: "ra đây chơi câu" + " " + name, mentions: arrayTag });
  }, 9000);

  setTimeout(() => {
    a({ body: "ra đây chơi cậu" + " " + name, mentions: arrayTag });
  }, 9500);

  setTimeout(() => {
    a({ body: "ra đây chơi cậu" + " " + name, mentions: arrayTag });
  }, 10000);
}