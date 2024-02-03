module.exports.config = {
  name: "1p4",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AnnaHime",
  description: "Gần giống tx",
  commandCategory: "Game",
  usages: "[N0/N1/N2/N3] [<tiền cược>]\nNếu đặt trùng với kết quả sẽ x6 tiền cược, sai thì trừ x1",
  cooldowns: 0
};
module.exports.run = async function ({
  args,
  api,
  event,
  Users,
  Currencies
}) {
const moneyUser = args[1]
var data = await Currencies.getData(event.senderID);
var money = data.money
var text = args[0]
  if (!text) { return api.sendMessage(`[ ======= [ 𝟏𝐏𝟒 ] ======= ]\n\n🍀 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝘁𝗵𝗲𝗼 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝘀𝗮𝘂:\n/1p4 [𝗡𝟬/𝗡𝟭/𝗡𝟮/𝗡𝟯] [<𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰>] 🍀`, event.threadID, event.messageID) }
  if (text != "N0" && text != "N1" && text != "N2" && text != "N3") { return api.sendMessage(`[ ======== [ 𝟏𝐏𝟒 ] ======== ]\n\n🍀 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗻𝗵𝗮̣̂𝗽 𝘁𝗵𝗲𝗼 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝘀𝗮𝘂:\n/1p4 [𝗡𝟬/𝗡𝟭/𝗡𝟮/𝗡𝟯] [<𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰>] 🍀`, event.threadID, event.messageID) }
var type = ['N0', 'N1', 'N2', 'N3'];
var random = type[Math.floor(Math.random() * type.length)];
var N0 = '0'
var N1 = ['1', '2', '3']
var N2 = ['4', '5', '6']
var N3 = ['7', '8', '9']
if (random == 'N0') {
var defl_number = N0[Math.floor(Math.random() * N0.length)];
}
if (random == 'N1') {
var defl_number = N1[Math.floor(Math.random() * N1.length)];
}
if (random == 'N2') {
var defl_number = N2[Math.floor(Math.random() * N2.length)];
}
if (random == 'N3') {
var defl_number = N3[Math.floor(Math.random() * N3.length)];
}
if (args[1] < 50 || isNaN(args[1])) {
      return api.sendMessage("🍀 𝗠𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝗵𝗼𝗮̣̆𝗰 𝗱𝘂̛𝗼̛́𝗶 𝟱𝟬$ 🍀", event.threadID, event.messageID);
  } else {
      if (money < moneyUser) {
          api.sendMessage(`🍀 𝗕𝗮̣𝗻 𝗰𝗼̀𝗻 𝘁𝗵𝗶𝗲̂́𝘂 ${parseInt(moneyUser) - parseInt(money)}$ 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝗼̛𝗶 𝗵𝗮̃𝘆 𝗸𝗶𝗲̂́𝗺 𝘁𝗵𝗲̂𝗺 🍀`, event.threadID, event.messageID)
      } else {
          if (text == random ) {
                  await Currencies.increaseMoney(event.senderID, parseInt(moneyUser*6));
                  return api.sendMessage(`[ ==== 𝟏𝐏𝟒 ==== ]\n🌸 𝗕𝗮̣𝗻 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴\n🌸 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉: ${random}\n🌸 𝗦𝗼̂́: ${defl_number}\n🌸 𝗖𝗼̣̂𝗻𝗴: ${moneyUser*6}$`, event.threadID, event.messageID)
              } else {
                await Currencies.decreaseMoney(event.senderID, parseInt(moneyUser));
              return api.sendMessage(`[ ==== 𝟏𝐏𝟒 ==== ]\n🌸 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗰𝘂𝗼̣̂𝗰\n🌸 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉: ${random}\n🌸 𝗦𝗼̂́: ${defl_number}\n🌸 𝗧𝗿𝘂̛̀: ${moneyUser*1}$`, event.threadID, event.messageID)
              }
      }
  }
}