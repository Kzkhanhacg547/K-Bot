module.exports.config = {
  name: "uidall",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "",
  description: "Lấy UID và tên thành viên trong nhóm",
  commandCategory: "Box",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {

function reply(d) {
  api.sendMessage(d, event.threadID, event.messageID)
}
var ep = event.participantIDs;
msg = ""
msgs = ""
m = 0;
for (let i of ep) {
  m += 1;
  const name = await Users.getNameUser(i);
  msg += m+". "+name+"\nUID: "+i+"\nFacebook: https://facebook.com/"+i+"\n\n";
}
msgs += "Danh sách UID trong nhóm.\n\n"+msg;
reply(msgs)
}