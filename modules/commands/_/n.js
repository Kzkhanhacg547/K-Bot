module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "prefix",
  cooldowns: 5,
  dependencies: {
    request: "",
    "fs-extra": "",
  },
};

const request = require("request");
const fs = require("fs");

module.exports.run = async ({ api, event }) => {
  const axios = require("axios");
  const threadID = event.threadID;
  const API = global.config.configApi.domain1;
  const imageUrls = await Promise.all(
    Array.from({ length: 3 }, async () => {
      const res = await axios.get(`${API}/loli`);
      return res.data.url;
    }),
  );

  const attachments = await Promise.all(
    imageUrls.map(async (url) => {
      return (
        await axios({
          url,
          method: "GET",
          responseType: "stream",
        })
      ).data;
    }),
  );
  const res = await axios.get(`${API}/thinh`);
  var thinh = res.data.data;
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const prefix = config.PREFIX;
  const moment = require("moment-timezone");
  const timeStart = Date.now();
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz("Asia/Ho_Chi_Minh").format("dddd");
  if (thu == "Sunday") thu = "𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭";
  if (thu == "Monday") thu = "𝐓𝐡𝐮̛́ 𝐇𝐚𝐢";
  if (thu == "Tuesday") thu = "𝐓𝐡𝐮̛́ 𝐁𝐚";
  if (thu == "Wednesday") thu = "𝐓𝐡𝐮̛́ 𝐓𝐮̛";
  if (thu == "Thursday") thu = "𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦";
  if (thu == "Friday") thu = "𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮";
  if (thu == "Saturday") thu = "𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲";

  const namebot = global.config.BOTNAME;
  var getlink = (
    await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`)
  ).data;
  var uid = event.senderID;

  api.sendMessage(
    {
      body: `❏===『 𝐒𝐀𝐈 𝐋Ệ𝐍𝐇 』===❑\n『🦋』 𝗟𝗲̣̂𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗼̂̀𝗻 𝘁𝗮̣𝗶 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 ${namebot}\n『🌸』 𝗧𝗼̂́𝗰 𝗱𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${timeStart}\n『⚙️』 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms\n『💓』 𝗧𝗵𝗶́𝗻𝗵: 『 ${thinh} 』\n『✅』𝐃𝐮̀𝐧𝐠 ${prefix}𝐦𝐞𝐧𝐮 𝐡𝐨𝐚̣̆𝐜 ${prefix}𝐡𝐞𝐥𝐩 đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐥𝐞̣̂𝐧𝐡\n『💮』 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👍" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐧𝐡𝐨́𝐦\n『⏰』${global.config.BOTNAME} đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞: \n           『 ${hours} : ${minutes} : ${seconds} 』\n👥 𝐓𝐡ô𝐧𝐠 𝐭𝐢𝐧 𝐧𝐠ườ𝐢 𝐝𝐮̀𝐧𝐠:\n➣ 💾𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://fb.me/${uid}\n═══════════════\n${gio} || ${thu}\n`,
      attachment: attachments,
    },
    threadID,
    (err, info) => {
      global.client.handleReaction.push({
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
      });
    },
    event.messageID,
  );
};

module.exports.handleReaction = async ({
  event,
  api,
  handleReaction,
  Currencies,
  Users,
}) => {
  const axios = require("axios");
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
  const API = global.config.configApi.domain1;
  const imageUrls = await Promise.all(
    Array.from({ length: 1 }, async () => {
      const res = await axios.get(`${API}/loli`);
      return res.data.url;
    }),
  );

  const attachment = await Promise.all(
    imageUrls.map(async (url) => {
      return (
        await axios({
          url,
          method: "GET",
          responseType: "stream",
        })
      ).data;
    }),
  );
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  async function streamURL(url, mime = "jpg") {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
      downloader = require("image-downloader"),
      fse = require("fs-extra");
    await downloader.image({
      url,
      dest,
    });
    setTimeout((j) => fse.unlinkSync(j), 60 * 1000, dest);
    return fse.createReadStream(dest);
  }

  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
  let sex = threadInfo.approvalMode;
  var pd = sex == false ? "Tắt" : sex == true ? "Bật" : "\n";
  let color = threadInfo.color;
  let icon = threadInfo.emoji;
  let threadMem = threadInfo.participantIDs.length;
  if (event.userID != handleReaction.author) return;
  if (event.reaction != "👍") return;
  api.sendMessage(
    {
      body: `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${id}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadMem}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${
        icon ? icon : "Không sử dụng"
      }\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${
        threadInfo.messageCount
      }\n🎀 𝟭: 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺\n📑 𝟮: 𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n🎶 𝟑. 𝐍𝐠𝐡𝐞 𝐧𝐡𝐚̣𝐜 𝐫𝐚𝐧𝐝𝐨𝐦\n🌟 𝟒. 𝐓𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐛𝐨𝐭 💻\n😶‍🌫️ 𝟓. 𝐓𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐛𝐨𝐱 \n✅ 𝟲. 𝗤𝘂𝘆 𝗹𝘂𝗮̣̂𝘁 𝗯𝗼𝘁 \n📝𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘅𝗲𝗺 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡 𝗻𝗵𝗼́𝗺 𝘃𝗮̀ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 `,
      attachment: attachment,
    },
    event.threadID,
    (err, info) => {
      global.client.handleReply.push({
        type: "choosee",
        name: this.config.name,
        author: event.senderID,
        messageID: info.messageID,
      });
    },
  );
};

module.exports.handleReply = async function ({
  args,
  event,
  Users,
  api,
  handleReply,
  Currencies,
  permssion,
  getText,
  __GLOBAL,
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
  api.sendMessage(`vui lòng chờ 1 xíu`, event.threadID, (err, info) =>
    setTimeout(() => {
      api.unsendMessage(info.messageID);
    }, 100000),
  );
  const request = require("request");
  const nameUser =
    (await Users.getData(event.senderID)).name ||
    (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;

  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "":
        case "":
        case "1":
          {
            var threadInfo = await api.getThreadInfo(event.threadID);
            let qtv = threadInfo.adminIDs.length;
            var listad = "";
            var qtv2 = threadInfo.adminIDs;
            dem = 1;
            for (let i = 0; i < qtv2.length; i++) {
              const info = await api.getUserInfo(qtv2[i].id);
              const name = info[qtv2[i].id].name;
              listad += "" + `${dem++}` + ". " + name + "\n";
            }

            api.sendMessage(
              `𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 ${qtv} 𝗤𝗨𝗔̉𝗡 𝗧𝗥𝗜̣ 𝗩𝗜𝗘̂𝗡:\n ${listad}`,
              event.threadID,
              event.messageID,
            );
          }
          break;
        case "2":
          {
            const { ADMINBOT } = global.config;
            listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];
            for (const idAdmin of listAdmin) {
              if (parseInt(idAdmin)) {
                const name = (await Users.getData(idAdmin)).name;
                msg.push(`»  ${name}\nLink: fb.me/${idAdmin}`);
              }
            }
            return api.sendMessage(
              `『 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 』\n${msg.join("\n")}\n`,
              event.threadID,
              event.messageID,
            );
          }
          break;
        case "3":
          {
            const API = global.config.configApi.domain1;
            const { threadID, messageID, senderID, body } = event;
            const res = await axios.get(`${API}/thinh`);
            var thinh = res.data.data;
            const moment = require("moment-timezone");
            var gio = moment
              .tz("Asia/Ho_Chi_Minh")
              .format("HH:mm:ss || D/MM/YYYY");
            var thu = moment.tz("Asia/Ho_Chi_Minh").format("dddd");
            if (thu == "Sunday") thu = "𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭";
            if (thu == "Monday") thu = "𝐓𝐡𝐮̛́ 𝐇𝐚𝐢";
            if (thu == "Tuesday") thu = "𝐓𝐡𝐮̛́ 𝐁𝐚";
            if (thu == "Wednesday") thu = "𝐓𝐡𝐮̛́ 𝐓𝐮̛";
            if (thu == "Thursday") thu = "𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦";
            if (thu == "Friday") thu = "𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮";
            if (thu == "Saturday") thu = "𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲";
            const t =
              Date.parse("February 10, 2024 00:00:00") - Date.parse(new Date());
            const seconds = Math.floor((t / 1000) % 60);
            const minutes = Math.floor((t / 1000 / 60) % 60);
            const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const time = process.uptime(),
              h = Math.floor(time / (60 * 60)),
              p = Math.floor((time % (60 * 60)) / 60),
              s = Math.floor(time % 60);
            var link = [
              "https://i.imgur.com/CgP3D97.mp4",
              "https://i.imgur.com/TRl17f7.mp4",
              "https://i.imgur.com/yp9z5QN.mp4",
              "https://i.imgur.com/qeIxxvn.mp4",
              "https://i.imgur.com/LhINDGL.mp4",
              "https://i.imgur.com/ygEYdzr.mp4",
              "https://i.imgur.com/9thHnST.mp4",
              "https://i.imgur.com/AMi9NiT.mp4",
              "https://i.imgur.com/l8UisUZ.mp4",
              "https://i.imgur.com/BZXJerW.mp4",
              "https://i.imgur.com/xJpuVLs.mp4",
              "https://i.imgur.com/MOQDCjg.mp4",
              "https://i.imgur.com/kz7S5JO.mp4",
              "https://i.imgur.com/K4pnAw0.mp4",
              "https://i.imgur.com/WrPhJrH.mp4",
              "https://i.imgur.com/fsol3MG.mp4",
              "https://i.imgur.com/XT0d0a2.mp4",
              "https://i.imgur.com/voxsCFv.mp4",
              "https://i.imgur.com/QzyFnVK.mp4",
              "https://i.imgur.com/BlI7Jbh.mp4",
              "https://i.imgur.com/mK44Aod.mp4",
              "https://i.imgur.com/UM95eCs.mp4",
              "https://i.imgur.com/jDOLZYQ.mp4",
              "https://i.imgur.com/xDfgeeD.mp4",
              "https://i.imgur.com/iTUuWjl.mp4",
              "https://i.imgur.com/WpnFSm5.mp4",
              "https://i.imgur.com/nTw4lOF.mp4",
              "https://i.imgur.com/5lrWddV.mp4",
              "https://i.imgur.com/QRd4BCs.mp4",
              "https://i.imgur.com/26ckWFR.mp4",
              "https://i.imgur.com/Lzfz1kO.mp4",
              "https://i.imgur.com/xVGLkGv.mp4",
              "https://i.imgur.com/dXDJzCy.mp4",
              "https://i.imgur.com/PPUGhmB.mp4",
              "https://i.imgur.com/aZKx6VU.mp4",
              "https://i.imgur.com/jG6uBjO.mp4",
              "https://i.imgur.com/urLh5YY.mp4",
              "https://i.imgur.com/WMrkIpE.mp4",
              "https://i.imgur.com/8gCbvp7.mp4",
              "https://i.imgur.com/y65Ca7R.mp4",
              "https://i.imgur.com/zaWey6t.mp4",
              "https://i.imgur.com/b4DAHmp.mp4",
              "https://i.imgur.com/7S9zgzS.mp4",
              "https://i.imgur.com/rQbbWTe.mp4",
              "https://i.imgur.com/GiBE3pB.mp4",
              "https://i.imgur.com/ZDwSxR2.mp4",
              "https://i.imgur.com/d69YoWG.mp4",
              "https://i.imgur.com/BEIVEeL.mp4",
              "https://i.imgur.com/XjFRXLC.mp4",
              "https://i.imgur.com/miPoxUE.mp4",
              "https://i.imgur.com/jPoduAa.mp4",
              "https://i.imgur.com/nnBtUvs.mp4",
              "https://i.imgur.com/18b4dYW.mp4",
              "https://i.imgur.com/FjlFGqN.mp4",
              "https://i.imgur.com/Zi42ele.mp4",
              "https://i.imgur.com/qc6Lvbn.mp4",
              "https://i.imgur.com/datpS26.mp4",
              "https://i.imgur.com/kSFBhfG.mp4",
              "https://i.imgur.com/RX7OVmh.mp4",
              "https://i.imgur.com/NRO7bdg.mp4",
              "https://i.imgur.com/ll1xtkb.mp4",
              "https://i.imgur.com/bcJZSzn.mp4",
              "https://i.imgur.com/WQ4fZ4O.mp4",
              "https://i.imgur.com/qsJ7vc8.mp4",
              "https://i.imgur.com/rlPcOFZ.mp4",
              "https://i.imgur.com/H56OWJp.mp4",
              "https://i.imgur.com/vWDbID7.mp4",
              "https://i.imgur.com/5Up4FPW.mp4",
              "https://i.imgur.com/o3o6cUG.mp4",
              "https://i.imgur.com/4DDIXGg.mp4",
              "https://i.imgur.com/mQiuy3Q.mp4",
              "https://i.imgur.com/yHlYX6H.mp4",
              "https://i.imgur.com/XWH7YI3.mp4",
              "https://i.imgur.com/8nO53RV.mp4",
              "https://i.imgur.com/fK0d4SM.mp4",
              "https://i.imgur.com/LD7dKKy.mp4",
              "https://i.imgur.com/eZL0dYb.mp4",
              "https://i.imgur.com/yy0Q3e2.mp4",
              "https://i.imgur.com/tl93y9t.mp4",
              "https://i.imgur.com/4oSiH6I.mp4",
              "https://i.imgur.com/KQpOxAj.mp4",
              "https://i.imgur.com/HpTkibI.mp4",
              "https://i.imgur.com/cFgfQq6.mp4",
              "https://i.imgur.com/gGsDrKd.mp4",
              "https://i.imgur.com/aLDqvXB.mp4",
              "https://i.imgur.com/IX8zdwz.mp4",
              "https://i.imgur.com/aWpMWFY.mp4",
              "https://i.imgur.com/XB8r4aJ.mp4",
              "https://i.imgur.com/FJIJvol.mp4",
              "https://i.imgur.com/FJIJvol.mp4",
              "https://i.imgur.com/FJIJvol.mp4",
              "https://i.imgur.com/JbULkHU.mp4",
              "https://i.imgur.com/SqkxW36.mp4",
              "https://i.imgur.com/SqkxW36.mp4",
              "https://i.imgur.com/SqkxW36.mp4",
              "https://i.imgur.com/RhxOIIO.mp4",
              "https://i.imgur.com/RhxOIIO.mp4",
              "https://i.imgur.com/ZQIumLc.mp4",
              "https://i.imgur.com/eXUaXJV.mp4",
              "https://i.imgur.com/L022j1M.mp4",
              "https://i.imgur.com/L022j1M.mp4",
              "https://i.imgur.com/fLe6AoI.mp4",
              "https://i.imgur.com/R5VPPuA.mp4",
              "https://i.imgur.com/6tkZdZP.mp4",
              "https://i.imgur.com/JlsOYBU.mp4",
              "https://i.imgur.com/oxFYx9O.mp4",
              "https://i.imgur.com/z2HMI55.mp4",
              "https://i.imgur.com/UeKHJP2.mp4",
              "https://i.imgur.com/CHROKR0.mp4",
              "https://i.imgur.com/cLg3LPt.mp4",
              "https://i.imgur.com/1ZEsONC.mp4",
              "https://i.imgur.com/b45vxpb.mp4",
              "https://i.imgur.com/aQERmfA.mp4",
              "https://i.imgur.com/4ZXTEFX.mp4",
              "https://i.imgur.com/rPFNUfL.mp4",
              "https://i.imgur.com/S7rSJxf.mp4",
              "https://i.imgur.com/GbS7bj3.mp4",
              "https://i.imgur.com/2j3dLjO.mp4",
              "https://i.imgur.com/aVvtb0Z.mp4",
              "https://i.imgur.com/kTkZA7x.mp4",
              "https://i.imgur.com/LrFbbA5.mp4",
              "https://i.imgur.com/J6Wq06v.mp4",
              "https://i.imgur.com/bp6NiTQ.mp4",
              "https://i.imgur.com/Q9TEK7e.mp4",
              "https://i.imgur.com/wzu1Eoq.mp4",
              "https://i.imgur.com/OJksO64.mp4",
              "https://i.imgur.com/xRD5pXd.mp4",
              "https://i.imgur.com/qsJ7vc8.mp4",
              "https://i.imgur.com/wGKNeup.mp4",
              "https://i.imgur.com/ZUKORKW.mp4",
              "https://i.imgur.com/JryGDCI.mp4",
              "https://i.imgur.com/3SYSACG.mp4",
              "https://i.imgur.com/qVkDs4i.mp4",
              "https://i.imgur.com/OrEXjr0.mp4",
              "https://i.imgur.com/Sa9TVTN.mp4",
              "https://i.imgur.com/9NK1OdE.mp4",
              "https://i.imgur.com/KNyzD1J.mp4",
              "https://i.imgur.com/RO9ZNh0.mp4",
              "https://i.imgur.com/WLtWVEK.mp4",
              "https://i.imgur.com/UbC66yP.mp4",
              "https://i.imgur.com/QZuzecn.mp4",
              "https://i.imgur.com/twOdpl6.mp4",
              "https://i.imgur.com/Y0GTaCI.mp4",
              "https://i.imgur.com/fXM7eaf.mp4",
              "https://i.imgur.com/Bg2aAJu.mp4",
              "https://i.imgur.com/vJpocHx.mp4",
              "https://i.imgur.com/m9oCzSe.mp4",
              "https://i.imgur.com/oIVERTi.mp4",
              "https://i.imgur.com/hAyly2s.mp4",
              "https://i.imgur.com/sIM6z5m.mp4",
              "https://i.imgur.com/noKbbrF.mp4",
              "https://i.imgur.com/8o5QY7s.mp4",
              "https://i.imgur.com/AzuG6eg.mp4",
              "https://i.imgur.com/IWcYlun.mp4",
              "https://i.imgur.com/QsL5oa4.mp4",
              "https://i.imgur.com/OFCA4Yr.mp4",
              "https://i.imgur.com/89Adgiu.mp4",
              "https://i.imgur.com/Bl9BsVW.mp4",
              "https://i.imgur.com/MzrA4qk.mp4",
              "https://i.imgur.com/I6JhzB2.mp4",
              "https://i.imgur.com/8FMmCQY.mp4",
              "https://i.imgur.com/FH52IvD.mp4",
              "https://i.imgur.com/tnL2PbA.mp4",
              "https://i.imgur.com/uPTF3Kd.mp4",
              "https://i.imgur.com/N8hMFwx.mp4",
              "https://i.imgur.com/JiAeqUu.mp4",
              "https://i.imgur.com/oQa4LjR.mp4",
            ];
            var callback = () =>
              api.sendMessage(
                {
                  body: `◆━◆『 𝐊𝐳 𝐁𝐨𝐭 』◆━◆\n『✪』 → 𝐓𝐢𝐦𝐞: ${gio} || ${thu}\n『★』 → 𝐓𝐡𝐢́𝐧𝐡 : ${thinh} \n『✶』 → 𝐇𝐚̃𝐲 𝐜𝐮̀𝐧𝐠 𝐭𝐨̂𝐢 𝐧𝐠𝐡𝐞 𝐛𝐚̉𝐧 𝐧𝐡𝐚̣𝐜 𝐧𝐚̀𝐲 𝐧𝐡𝐚 \n『✲』 → 𝐍𝐨́ 𝐬𝐞̃ 𝐤𝐡𝐢𝐞̂́𝐧 𝐛𝐚̣𝐧 𝐯𝐮𝐢 𝐡𝐨̛𝐧 đ𝐚̂́𝐲 \n『✧』 → 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐨̀𝐧 𝐥𝐚̣𝐢 𝐜𝐡𝐨 𝐭𝐞̂́𝐭 𝐚̂𝐦: ${days} 𝐧𝐠𝐚̀𝐲 ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲\n『↻』 → 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐛𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 ${h} 𝐠𝐢𝐨̛̀ ${p} 𝐩𝐡𝐮́𝐭 ${s} 𝐠𝐢𝐚̂𝐲`,
                  attachment: fs.createReadStream(__dirname + "/cache/5.mp3"),
                },
                event.threadID,
                () => fs.unlinkSync(__dirname + "/cache/5.mp3"),
              );
            return request(
              encodeURI(link[Math.floor(Math.random() * link.length)]),
            )
              .pipe(fs.createWriteStream(__dirname + "/cache/5.mp3"))
              .on("close", () => callback());
          }
          break;

        case "4":
          {
            const API = global.config.configApi.domain1;
            const admin = config.ADMINBOT;
            const ndh = config.NDH;
            const namebot = config.BOTNAME;
            const { commands } = global.client;
            const PREFIX = config.PREFIX;
            const axios = require("axios");
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(
              {
                body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n👑 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━━━━━━━━\n𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀ 𝘁𝘂𝗶 𝗿𝗮̂́𝘁 𝗰𝘂𝘁𝗶 , 𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`,
                attachment: (
                  await global.nodemodule["axios"]({
                    url: (
                      await global.nodemodule["axios"](
                        `${API}/images/KzGIF`,
                      )
                    ).data.data,
                    method: "GET",
                    responseType: "stream",
                  })
                ).data,
              },
              event.threadID,
              event.messageID,
            );
          }
          break;
        case "5":
          {
            const API = global.config.configApi.domain1;
            let threadInfo = await api.getThreadInfo(event.threadID);
            let threadName = threadInfo.threadName;
            let id = threadInfo.threadID;
            let sex = threadInfo.approvalMode;
            var pd = sex == false ? "Tắt" : sex == true ? "Bật" : "\n";
            let qtv = threadInfo.adminIDs.length;
            let color = threadInfo.color;
            let icon = threadInfo.emoji;
            let threadMem = threadInfo.participantIDs.length;
            const axios = require("axios");
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(
              {
                body: `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${id}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadMem}\n💞 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${
                  icon ? icon : "Không sử dụng"
                }\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${
                  threadInfo.messageCount
                }\n🎀 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘅 𝗶𝗻𝗳𝗼 đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 `,
                attachment: (
                  await global.nodemodule["axios"]({
                    url: (
                      await global.nodemodule["axios"](
                        `${API}/loli`,
                      )
                    ).data.data,
                    method: "GET",
                    responseType: "stream",
                  })
                ).data,
              },
              event.threadID,
              event.messageID,
            );
          }
          break;
        case "6":
          {

            const API = global.config.configApi.domain1;
            const axios = require("axios");
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(
              {
                body: `💓 === [ 𝗤𝗨𝗬 𝗟𝗨𝗔̣̂𝗧 𝗕𝗢𝗧 ] === 💓\n━━━━━━━━━━━━━━━━━━\n→ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 𝗹𝘂𝗮̣̂𝘁 𝗯𝗼𝘁 𝗱𝗲̂̉ 𝘅𝗲𝗺 𝗹𝘂𝗮̣̂𝘁 𝗯𝗼𝘁 𝗿𝗼̂̀𝗶 𝗵𝗮̃𝘆 𝘅𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝗺𝗼̣̂𝘁 𝗰𝗮́𝗰𝗵 𝘃𝘂𝗶 𝘃𝗲̉ 𝗻𝗵𝗲́ 
               𝐃𝐮̛𝐨̛́𝐢 𝐥𝐚̀ 𝐥𝐮𝐚̣̂𝐭 𝐛𝐨𝐭 𝐧𝐠𝐚̆́𝐧 𝐠𝐨̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐛𝐢𝐞̂́𝐭 𝐜𝐡𝐢́𝐧𝐡 𝐱𝐚́𝐜 𝐥𝐮𝐚̣̂𝐭 𝐛𝐨𝐭 𝐭𝐡𝐢̀ 𝐝𝐮̀𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 !𝐥𝐮𝐚𝐭𝐛𝐨𝐭 𝐧𝐡𝐞́ 𝐱𝐢𝐧 𝐜𝐚̉𝐦 𝐨̛𝐧 😘
                     💖 𝐋𝐮𝐚̣̂𝐭 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭 💖
            𝟏: 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐚̂́𝐩 𝐡𝐚̀𝐧𝐡 𝐥𝐮𝐚̣̂𝐭 𝐜𝐮̉𝐚 𝐛𝐨𝐭 
            𝟐: 𝐊𝐡𝐨̂𝐧𝐠 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭 𝐯𝐚̀𝐨 𝐯𝐢𝐞̣̂𝐜 𝐱𝐞𝐦 𝐡𝐞𝐧𝐭𝐚𝐢 𝐪𝐮𝐚́ 𝐧𝐡𝐢𝐞̂̀𝐮 :𝐯 
            𝟑: 𝐍𝐞̂́𝐮 𝐛𝐢̣ 𝐛𝐚𝐧 𝐝𝐨 𝐬𝐩𝐚𝐦 𝐭𝐡𝐢̀ 𝐚𝐝𝐦𝐢𝐧 𝐠𝐨̛̃ 𝐛𝐚𝐧 
            𝟒: 𝐍𝐞̂́𝐮 𝐛𝐢̣ 𝐛𝐚𝐧 𝐝𝐨 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐭𝐡𝐢̀ 𝐧𝐡𝐚̆́𝐧 𝐭𝐢𝐧 𝐚𝐝𝐦𝐢𝐧 𝐱𝐢𝐧 𝐥𝐨̂̃𝐢 𝐦𝐨̛́𝐢 đ𝐮̛𝐨̛̣𝐜 𝐠𝐨̛̃
            𝟓: 𝐊𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐝𝐮̛𝐨̛́𝐢 𝐦𝐨̣𝐢 𝐡𝐢̀𝐧𝐡 𝐭𝐡𝐮̛́𝐜 𝐡𝐨𝐚̣̆𝐜 𝐜𝐮̛́ 𝐜𝐡𝐮̛̉𝐢 𝐧𝐞̂́𝐮 𝐲́ 𝐭𝐡𝐮̛́𝐜 𝐛𝐚̣𝐧 𝐧𝐡𝐮̛ 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜 🌺
                 𝐃𝐮̛𝐨̛́𝐢 𝐥𝐚̀ 𝐥𝐢𝐧𝐤 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭 𝐧𝐡𝐞́  
            https://www.facebook.com/kzkhanh547\n→ 𝗩𝗶𝗲̣̂𝗰 𝘁𝘂𝗮̂𝗻 𝘁𝗵𝘂̉ 𝗾𝘂𝘆 𝗹𝘂𝗮̣̂𝘁 𝗯𝗼𝘁 𝘀𝗲̃ đ𝗼́𝗻𝗴 𝗴𝗼́𝗽 𝘁𝗶́𝗰𝗵 𝗰𝘂̛̣𝗰 đ𝗲̂́𝗻 𝗰𝗼̣̂𝗻𝗴 đ𝗼̂̀𝗻𝗴🌸\n━━━━━━━━━━━━━━━━━━`,
                attachment: (
                  await global.nodemodule["axios"]({
                    url: (
                      await global.nodemodule["axios"](
                        `${API}/robot`,
                      )
                    ).data.url,
                    method: "GET",
                    responseType: "stream",
                  })
                ).data,
              },
              event.threadID,
              event.messageID,
            );
          }
          break;
        default:
          const choose = parseInt(event.body);
          if (isNaN(event.body))
            return api.sendMessage(
              "→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́",
              event.threadID,
              event.messageID,
            );
          if (choose > 2 || choose < 1)
            return api.sendMessage(
              "→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.",
              event.threadID,
              event.messageID,
            );
      }
    }
  }
};
