// Loli is the best!!
module.exports.config = {
  name: "tinhtuoi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khoa",
  description: "Tính tuổi",
  commandCategory: "Cộng cụ",
  usages: "[ngày/tháng/năm sinh]",
  cooldowns: 0
};
module.exports.run = async function ({ api, event, args, client, Users }) {
  const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
  var data = await api.getUserInfo(id);
 let a = data[id].gender;
  var gt = a.gender == 'MALE' ? "Nam" : a.gender == 'FEMALE' ? "Nữ" : "Không công khai";
  var path = __dirname + "/cache/1.png";
let getimg = (await axios.get(`https://graph.facebook.com/${id}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
 var input = args[0];
  if (!input) return api.sendMessage(`Vui lòng nhập đúng format >age [ngày/tháng/năm sinh]`,event.threadID,event.messageID);
  var cc = input.split("/");
  var ngay1 = parseInt(cc[0]);
  if (!ngay1 || isNaN(ngay1) || ngay1 > 31 || ngay1 < 1) return api.sendMessage("Ngày sinh không hợp lệ!",event.threadID,event.messageID);
  var thang1 = parseInt(cc[1]);
  if (!thang1 || isNaN(thang1) || thang1 > 12 || thang1 < 1) return api.sendMessage("Tháng sinh không hợp lệ!",event.threadID,event.messageID);
  var nam1 = parseInt(cc[2]);
  if (!nam1) return api.sendMessage("Năm sinh không hợp lệ!",event.threadID,event.messageID);
  const moment = require("moment-timezone");
  var hientai = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY HH:mm:ss");
  var concac = `${hientai}`;
  var djtme = concac.split(" ");
  var dm = djtme[0].split("/");
  var ngay2 = parseInt(dm[0]);
  var thang2 = parseInt(dm[1]);
  var nam2 = parseInt(dm[2]);
  var ngay3 = ngay2 - ngay1;
  var thang3 = thang2 - thang1;
  var nam3 = nam2 - nam1;
  var duma = djtme[1].split(":");
  var hh = parseInt(duma[0]);
  var mm = parseInt(duma[1]);
  var ss = parseInt(duma[2]);
  var nam = nam3 + Math.round(thang3/12 * 100)/100;
  var xthang = nam*12 + thang3 + ngay1/31;
  var thang = Math.round(xthang * 100)/100;
  var dcm = thang/36;
  var tuan = Math.round(thang*4 * 100)/100;
  var xngay = (xthang*31 + xthang*30)/2 - dcm*3/2 + ngay3 + hh/24;
  var wtf = (xthang*31 + xthang*30)/2 - dcm*3/2 + ngay3;
  var ngay = Math.round(xngay * 100)/100;
  var gio = Math.round((wtf*24 + hh) * 100)/100;
  var xphut = gio*60 + mm + ss/60;
  var phut = Math.round(xphut * 100)/100;
  var giay = Math.round((phut*60 + ss)* 100)/100;
  // Nỗ não : 
api.sendMessage({body:`====「 𝕋𝕦𝕠̂̉𝕚 ℂ𝕦̉𝕒 𝔹𝕒̣𝕟 」====\n→ Name: ${name}\n→ Giới tính: ${gt}\n→ Ngày tháng năm sinh: ${input}\n▱▱▱▱▱▱▱▱▱▱\n→ Số năm đã qua: ${nam} năm \n→ Số tháng đã qua: ${thang} tháng \n→ Số tuần đã qua: ${tuan} tuần \n→ Số ngày đã qua: ${ngay} ngày \n→ Số giờ đã qua: ${gio} giờ \n→ Số phút đã qua: ${phut} phút \n→ Số giây đã qua: ${giay} giây\n→ Hiện tại: ${hientai} `, attachment: fs.createReadStream(__dirname + "/cache/1.png")},event.threadID, event.messageID);
};