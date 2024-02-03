      module.exports.config = {
    name: 'autosend',
    version: '10.02',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
    get
} = require('axios'),
config = [{
        timer: '12:35:00 PM',
        message: ['====『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』====\n━━━━━━━━━━━━━━━━\n→ [⏰] 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n→ [🔰] 𝗖𝗵𝗼 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟮𝟬𝗸-𝟮𝗧𝗵\n━━━━━━━━━━━━━━━━\n→ [👻] 𝗖𝗼́ 𝗡𝗵𝘂 𝗰𝗮̂̀𝘂 𝗺𝘂𝗮 𝗳𝗶𝗹𝗲 𝗰𝗵𝗮̣𝘆 𝗯𝗼𝘁 𝗶𝗯 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁\n→ [❗] 𝗚𝗶𝗮́ 𝟭 𝘀𝗹𝗼𝘁 𝗔𝗱𝗺𝗶𝗻 𝗴𝗶𝗮́ 𝟱𝟬𝗸 𝗺𝗼̛̀𝗶 𝘃𝗮̀𝗼 𝗯𝗼𝘅 𝘁𝘂𝘆̀ 𝘁𝗵𝗶́𝗰𝗵 𝗱𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗲̣̂𝗻𝗵\n━━━━━━━━━━━━━━━━\n→ [🌐] 𝗙𝗯 𝗔𝗱𝗺𝗶𝗻:\nfb.com/kzkhanh547']
},
          {
        timer: '8:30:00 PM',
    message: ['====『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』====\n━━━━━━━━━━━━━━━━\n→ [⏰] 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n→ [🔰] 𝗖𝗵𝗼 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟮𝟬𝗸-𝟮𝗧𝗵\n━━━━━━━━━━━━━━━━\n→ [👻] 𝗖𝗼́ 𝗡𝗵𝘂 𝗰𝗮̂̀𝘂 𝗺𝘂𝗮 𝗳𝗶𝗹𝗲 𝗰𝗵𝗮̣𝘆 𝗯𝗼𝘁 𝗶𝗯 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁\n→ [❗] 𝗚𝗶𝗮́ 𝟭 𝘀𝗹𝗼𝘁 𝗔𝗱𝗺𝗶𝗻 𝗴𝗶𝗮́ 𝟱𝟬𝗸 𝗺𝗼̛̀𝗶 𝘃𝗮̀𝗼 𝗯𝗼𝘅 𝘁𝘂𝘆̀ 𝘁𝗵𝗶́𝗰𝗵 𝗱𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗲̣̂𝗻𝗵\n━━━━━━━━━━━━━━━━\n→ [🌐] 𝗙𝗯 𝗔𝗱𝗺𝗶𝗻:\nfb.com/kzkhanh547']     
},
          {
          timer: '1:00:00 AM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
          },
          { 
          timer: '5:00:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
          },
          { 
          timer: '6:00:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
          },
          { 
          timer: '7:00:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
          },
          { 
          timer: '8:00:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
          },
          { 
          timer: '9:00:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
          },
          { 
          timer: '10:00:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
          },
          { 
          timer: '11:00:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
          },
          { 
          timer: '12:00:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝗻𝗵𝗮̣𝗰 𝐯à 𝐧𝐠ủ đ𝗶, 𝐛â𝐲 𝐠𝐢ờ 𝐥à 𝐪𝐮á 𝐦𝐮ộ𝐧 𝐫ồ𝐢...']     
          },
          { 
          timer: '12:30:00 PM',
        message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝗻𝗵𝗮̣𝗰 𝐯à 𝐧𝐠ủ đ𝗶, 𝐛â𝐲 𝐠𝐢ờ 𝐥à 𝐪𝐮á 𝐦𝐮ộ𝐧 𝐫ồ𝐢...']     
          }
         ];
    const rdPathName = Math.floor(Math.random() * 99999999999999);
    const moment = require("moment-timezone");
const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | DD/MM/YYYY");
    module.exports.handleReply = async function({ api, args, event, handleReply, Users }) {
       // var name = (await Users.getData(event.senderID)).name;
        let { body, threadID, senderID, messageID } = event;
        var text = `BoxID: ${handleReply.boxid}  Tin Nhắn ${body} || Time: ${time}`
        const axios = require('axios');
            const fs = require('fs-extra')
       if(handleReply.type == 'sendtoadmin'){
        if (event.attachments.length != 0) {
            if (event.attachments[0].type == "audio") {
            var path = __dirname + `/sendmsg/${rdPathName}.m4a` ||  __dirname + `/sendmsg/${rdPathName}.mp3`
            }
            if (event.attachments[0].type == "photo") {
            var path = __dirname + `/sendmsg/${rdPathName}.jpg`
            }
            if (event.attachments[0].type == "video") {
            var path = __dirname + `/sendmsg/${rdPathName}.mp4`
            }
            if (event.attachments[0].type == "animated_image") {
            var path = __dirname + `/sendmsg/${rdPathName}.gif`
            }
          let getdata = (await axios.get(`${event.attachments[0].url}`, {
              responseType: 'arraybuffer'
            })).data
            fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'))
            var formsend = {
              body: `${text}`,
              attachment: fs.createReadStream(path) 
            }
       } else {
        var formsend = {
            body: `${text}`
          }
       }
       var idad = global.config.ADMINBOT;
       for (let ad of idad) {
        api.sendMessage(fromsend, threadID, (error, info) => {       
            if (error) { console.log(error) } else
              global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                boxid: handleReply.boxid,
                messID: messageID,
                type: "sendtouser"
              })
            })
       }   
}
if(handleReply.type == "sendtouser"){
    if (event.attachments.length != 0) {
        if (event.attachments[0].type == "audio") {
        var path = __dirname + `/sendmsg/${rdPathName}.m4a` ||  __dirname + `/sendmsg/${rdPathName}.mp3`
        }
        if (event.attachments[0].type == "photo") {
        var path = __dirname + `/sendmsg/${rdPathName}.jpg`
        }
        if (event.attachments[0].type == "video") {
        var path = __dirname + `/sendmsg/${rdPathName}.mp4`
        }
        if (event.attachments[0].type == "animated_image") {
        var path = __dirname + `/sendmsg/${rdPathName}.gif`
        }
      let getdata = (await axios.get(`${event.attachments[0].url}`, {
          responseType: 'arraybuffer'
        })).data
        fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'))
        var formsend = {
          body: `${text}`,
          attachment: fs.createReadStream(path) 
        }
   } else {
    var formsend = {
        body: `${text}`
      }
   }
   var idad = global.config.ADMINBOT;
   for (let ad of idad) {
    api.sendMessage(fromsend, threadID, (error, info) => {       
        if (error) { console.log(error) } else
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            boxid: handleReply.boxid,
            messID: messageID,
            type: "sendtoadmin"
          })
        })
   } 
}
}
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/thinh`)).data.data)
            msg = {
                body: msg, attachment: (await get((await get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/nhac`)).data.data, {
                    responseType: 'stream'
                })).data
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i, (error, info) => {       
                if (error) { console.log(error) } else
                  global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    boxid: i,
                    messID: messageID,
                    type: "sendtoadmin"
                  })
                }));
        };
    }, 1000);
};
module.exports.run = () => {};