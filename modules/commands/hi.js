      module.exports.config = {
        name: "hi",
        version: "3.0.0",
        hasPermssion: 0,
        credit: "Kz Khánhh",
        description: "hi gửi sticker and hình ảnh",
        commandCategory: "Nhóm",
        usages: "[text]",
        cooldowns: 5
      };

      module.exports.handleEvent = async ({ api, event, Threads, Users }) => {
        const axios = require('axios');
        const request = require('request');
        const fs = require("fs");
        const moment = require("moment-timezone");
        const gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
        let thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
        if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
  if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
  if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
  if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
  if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
  if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
  if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'

        let KEY = ["hello", "hi", "hai", "chào", "chao", "hí", "híí", "hì", "hìì", "lô", "hii", "helo", "hê nhô"];

        let thread = global.data.threadData.get(event.threadID) || {};
       // if (typeof thread["hi"] === "undefined" || thread["hi"] === false) return;
       // else {
          if (KEY.includes(event.body.toLowerCase())) {
            let data = ["526214684778630", "526220108111421","526214684778630","526220108111421","526220308111401","526220484778050","526220691444696","526220814778017","526220978111334","526221104777988","526221318111300","526221564777942","526221711444594","526221971444568","2523892817885618","2523892964552270","2523893081218925","2523893217885578","2523893384552228","2523892544552312","2523892391218994","2523891461219087","2523891767885723","2523891204552446","2523890691219164","2523890981219135","2523890374552529","2523889681219265","2523889851219248","2523890051219228","2523886944552872","2523887171219516","2523888784552688","2523888217886078","2523888534552713","2523887371219496","2523887771219456","2523887571219476" ];
            let sticker = data[Math.floor(Math.random() * data.length)];
            let data2 = [
              "𝐇𝐚𝐩𝐩𝐲=))", "𝐯𝐮𝐢 𝐯𝐞̉:𝟑", "𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 ❤", "𝐧𝐡𝐢𝐞̂̀𝐮 𝐧𝐢𝐞̂̀𝐦 𝐯𝐮𝐢 😘"
            ];
            let tet2 = ["𝐛𝐢̀𝐧𝐡 𝐚𝐧", "𝐚𝐧 𝐥𝐚̀𝐧𝐡", "𝐦𝐚𝐲 𝐦𝐚̆́𝐧"];
            let tet = tet2[Math.floor(Math.random() * tet2.length)];
            let text = data2[Math.floor(Math.random() * data2.length)];

            let hours = parseInt(moment().tz("Asia/Ho_Chi_Minh").format("HH"));
            let session =
              (hours > 0 && hours <= 4 ? "𝐬𝐚́𝐧𝐠 𝐭𝐢𝐧𝐡 𝐦𝐨̛" :
                hours > 4 && hours <= 7 ? "𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦" :
                  hours > 7 && hours <= 10 ? "𝐬𝐚́𝐧𝐠" :
                    hours > 10 && hours <= 12 ? "𝐭𝐫𝐮̛𝐚" :
                      hours > 12 && hours <= 17 ? "𝐜𝐡𝐢𝐞̂̀𝐮" :
                        hours > 17 && hours <= 18 ? "𝐜𝐡𝐢𝐞̂̀𝐮 𝐭𝐚̀" :
                          hours > 18 && hours <= 21 ? "𝐭𝐨̂́𝐢" :
                            hours > 21 && hours <= 24 ? "𝐭𝐨̂́𝐢 𝐦𝐮𝐨̣̂𝐧" :
                              "lỗi");

            let name = await Users.getNameUser(event.senderID);
            let mentions = [{
              tag: name,
              id: event.senderID
            }];

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
            var callback = function () {
              api.sendMessage({
                body: `🎆🎇『 𝐀𝐔𝐓𝐎𝐍𝐎𝐓𝐈 』🎇🎆\n╞═════𖠁🌸𖠁═════╡\n『👤』𝐇𝐞𝐥𝐥𝐨 𝐛𝐞́ ${name} 𝐜𝐮𝐭𝐢\n『🧧』𝐂𝐡𝐮́𝐜 𝐦𝐨̣̂𝐭 𝐛𝐮𝐨̂̉𝐢 ${session} ${text}, 𝐦𝐨̣̂𝐭 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 ${tet}🍀\n『⏳』𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${thu} ${gio}`,
                attachment: fs.createReadStream(__dirname + "/cache/5.mp3")
              }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp3"));
              api.sendMessage({
                body: ``,
                sticker: sticker
              }, event.threadID, event.messageID);
            };

            return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.mp3")).on("close", () => callback());
          }

        };

      module.exports.languages = {
        "vi": {
          "on": "Bật",
          "off": "Tắt",
          "successText": `${this.config.name} thành công`,
        },
        "en": {
          "on": "on",
          "off": "off",
          "successText": "success!",
        }
      };

      module.exports.run = async ({ event, api, Threads, getText }) => {
        let {
          threadID,
          messageID
        } = event;
        let data = (await Threads.getData(threadID)).data;
        if (typeof data["hi"] === "undefined" || data["hi"] === true) data["hi"] = false;
        else data["hi"] = true;
        await Threads.setData(threadID, {
          data
        });
        global.data.threadData.set(threadID, data);
        return api.sendMessage(`${(data["hi"] === false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
      };
