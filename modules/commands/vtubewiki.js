module.exports.config = {
  name: "vtubewiki",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "SaikiDesu (Mr.Aik3ro)",
  description: "Search VTubers on VTubersWiki Official",
  commandCategory: "Công cụ",
  usages: "vtubewiki [vtuber name]",
  cooldowns: 5,
 /* dependencies: {
    "vtuber-wiki": "",
    "axios": "",
    "fs": "",
    "request": ""               
} */ 
};


module.exports.run = async ({ api, event, args }) => {
  const axios = require("axios");
    const { wiki } = require("vtuber-wiki"); 
  const request = require('request');
  const fs = require("fs");
  if (!args[0]) {api.sendMessage(`[⚜️] ➜ Từ khóa tìm kiếm không được bỏ trống !!!`,event.threadID, event.messageID)}
  else{
var query = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    let Replaced = query.replace(/ /g, " ");
  api.sendMessage(`[🔎] ➜ Đang tìm với từ khóa ${Replaced}...`, event.threadID, event.messageID);

const vtuber = await wiki(Replaced)
 .catch(err => {
                     api.sendMessage("[⚠️] ➜ " + err, event.threadID, event.messageID);
           }); 
          if(vtuber === null) {
    api.sendMessage(`[⚠️] ➜ Không thể tìm thấy từ khóa ${Replaced} này.`, event.threadID, event.messageID)
    return;
          }
   console.log(vtuber);                if (vtuber.title){ 
    let getURL = vtuber.image_url;


   if (!vtuber.title || vtuber.title === undefined) vtuber.title = "Không tìm thấy";

    if (!vtuber.gender || vtuber.gender === undefined) vtuber.gender = "Không tìm thấy";

  if (!vtuber.birthday || vtuber.birthday === undefined) vtuber.birthday = "Không tìm thấy";

  if (!vtuber.height || vtuber.height === undefined) vtuber.height = "Không tìm thấy";

  if (!vtuber.weight || vtuber.weight === undefined) vtuber.weight = "Không tìm thấy";




var v1 = vtuber.title;
var v2 = vtuber.gender;
var v3 = vtuber.age.replace(/<ref>/g, " ");
var v4 = vtuber.birthday;
var v5 = vtuber.description;
var v6 = vtuber.more;
var v7 = vtuber.height;
var v8 = vtuber.weight;
var v9 = vtuber.channel.replace(/<br>/g, "\n\n");
var v10 = vtuber.social_media.replace(/<br>/g, "\n\n");
var v11 = vtuber.official_website.replace(/<br>/g, "\n\n");
var v12 = vtuber.affiliation

  //var v11 = bb.replace(/<br>/g, "\n\n");



        let callback = function () {           



 api.sendMessage({
     body:`=== 『 TÌM KIẾM THÀNH CÔNG 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ Tiều đề: ${v1}\n[⚜️] ➜ Liên kết: ${v12}\n[⚜️] ➜ Giới tính: ${v2}\n[⚜️] ➜ Tuổi tác: ${v3}\n[⚜️] ➜ Sinh nhật: ${v4}\n[⚜️] ➜ Chiều cao: ${v7}\n[⚜️] ➜ Cân nặng: ${v8}\n[⚜️] ➜ Mô tả: ${v5}\n[⚜️] ➜ Kênh: ${v9}\n[⚜️] ➜ Mạng xã hội: ${v10}\n[⚜️] ➜ Nguồn: ${v11}\n[⚜️] ➜ Các thông tin khác: ${v6}`, 
          attachment: fs.createReadStream(__dirname + `/cache/vtuber.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vtuber.png`), event.messageID)
        }

 //   }
        request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/vtuber.png`)).on("close", callback)  
  } 
   else if (vtuber.title1){

let getURL = vtuber.image_url;


   if (!vtuber.title1 || vtuber.title1 === undefined) vtuber.title1 = "Không tìm thấy";

    if (!vtuber.gender || vtuber.gender === undefined) vtuber.gender = "Không tìm thấy";

  if (!vtuber.birthday || vtuber.birthday === undefined) vtuber.birthday = "Không tìm thấy";

  if (!vtuber.height || vtuber.height === undefined) vtuber.height = "Không tìm thấy";

  if (!vtuber.zodiac_sign || vtuber.zodiac_sign === undefined) vtuber.zodiac_sign = "Không tìm thấy";
        if (!vtuber.official_website || vtuber.official_website === undefined) vtuber.official_website = "Không tìm thấy";

var v1 = vtuber.title1;
var v2 = vtuber.caption1;
var v3 = vtuber.original_name;
var v4 = vtuber.nick_name.replace(/<br>/g, "\n");
var v5 = vtuber.debut_date;
var v6 = vtuber.character_designer;
var v7 = vtuber.affiliation;
var v8 = vtuber.gender;
var v9 = vtuber.age;
var v10 = vtuber.birthday;
var v11 = vtuber.official_website; 
var v12 = vtuber.height;
var v13 = vtuber.zodiac_sign;
var v14 = vtuber.description;
var v15 = vtuber.channel.replace(/<br>/g, "\n\n");
var v16 = vtuber.social_media.replace(/<br>/g, "\n\n");
var v17 = vtuber.more;

       let callback = function () {           

 api.sendMessage({
     body: `=== 『 TÌM KIẾM THÀNH CÔNG 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ Tên: ${v1}\n[⚜️] ➜ Tên thật: ${v3}\n[⚜️] ➜ Biệt danh: ${v4}\n[⚜️] ➜ Dòng phổ biến: ${v2}\n[⚜️] ➜ Ngày ra mắt: ${v5}\n[⚜️] ➜ Nhà thiết kế nhân vật: ${v6}\n[⚜️] ➜ Liên kết: ${v7}\n[⚜️] ➜ Giới tính: ${v8}\n[⚜️] ➜ Tuổi tác: ${v9}\n[⚜️] ➜ Sinh nhật: ${v10}\n[⚜️] ➜ Chiều cao: ${v12}\n[⚜️] ➜ Cung hoàng đạo: ${v13}\n[⚜️] ➜ Mô tả: ${v14}\n[⚜️] ➜ Link kênh: ${v15}\n[⚜️] ➜ Mạng xã hội: ${v16}\n[⚜️] ➜ Nguồn: ${v11}\n[⚜️] ➜ Nhiều thông tin khác: ${v17}`,
          attachment: fs.createReadStream(__dirname + `/cache/vtuber.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vtuber.png`), event.messageID)
        }

 //   }
        request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/vtuber.png`)).on("close", callback)  
  } 
   else if (vtuber.nick_name){

    let getURL = vtuber.image_url;


var v1 = vtuber.nick_name.replace(/\x3c\x62\x72\x20\x2f\x3e/g, "\n");
var v2 = vtuber.debut_date;
var v3 = vtuber.character_designer;
var v4 = vtuber.affiliation.replace(/\x3c\x62\x72\x20\x2f\x3e/g, "\n");
var v5 = vtuber.channel;
var v6 = vtuber.gender;
var v7 = vtuber.age;
var v8 = vtuber.birthday;
var v9 = vtuber.height;
var v10 = vtuber.caption1;
var v11 = vtuber.zodiac_sign;
var v12 = vtuber.description;
var v13 = vtuber.social_media;
var v14 = vtuber.more;

  let callback = function () {           

 api.sendMessage({
     body: `Name: ${v1}\nDebut Date: ${v2}\nCharacter Designer: ${v3}\nAffiliation: ${v4}\nGender: ${v6}\nAge: ${v7}\nBirthday: ${v8}\nHeight: ${v9}\nPopular Line: ${v10}\nZodiac Sign: ${v11}\n\nDescription: ${v12}\n\nSocial Media(s): ${v13}\n\nChannel: ${v5}\n\nMore info(s): ${v14}`,
          attachment: fs.createReadStream(__dirname + `/cache/vtuber.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vtuber.png`), event.messageID)
      }

request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/vtuber.png`)).on("close", callback)  
  } 

}		
}


