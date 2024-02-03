module.exports.config = {
  name: "add",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Thêm người dùng vào nhóm bằng link hoặc uid",//mod thêm by nnl
  commandCategory: "THÀNH VIÊN",
  usages: "[args]",
  cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
const res1 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`);
const res2 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`);
const res3 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`);
const res4 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`);
const res5 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`);
const res6 = await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`);
var data1 = res1.data.data;
var array = [];
var data2 = res2.data.data;
var data3 = res3.data.data;
var data4 = res4.data.data;
var data5 = res5.data.data;
var data6 = res6.data.data;
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
var downloadfile3 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile4 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile5 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile6 = (await axios.get(data1, {responseType: 'stream'})).data;
  array.push(downloadfile1);
  array.push(downloadfile2);
  array.push(downloadfile3);
  array.push(downloadfile4);
  array.push(downloadfile5);
  array.push(downloadfile6);

      if(!args[0]) return api.sendMessage({body:`==🌸 𝗠𝗲𝗻𝘂 𝗔𝗱𝗱𝘂𝘀𝗲𝗿 🌸==
━━━━━━━━━━━━━━━━
𝟭.𝗮𝗱𝗱𝘂𝘀𝗲𝗿+𝗹𝗶𝗻𝗸                𝟮.𝗔𝗱𝗱𝘂𝘀𝗲𝗿+𝗨𝗶𝗱
(𝘁𝗿𝘂̛𝗼̛̀𝗻𝗴 𝗵𝗼̛̣𝗽 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝘂́𝘁 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗵𝗼𝗮̣̆𝗰 đ𝗮̃ 𝗰𝗵𝗮̣̆𝗻 𝗯𝗼𝘁 𝘁𝗵𝗶̀ 𝗯𝗼𝘁 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗲̂𝗺🍒)`,attachment: array}, event.threadID, event.messageID); 
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await api.getUID(args[0] || event.messageReply.body);
  var uidUser = res
  api.addUserToGroup(uidUser, threadID, (err) => {
  if (participantIDs.includes(uidUser)) return api.sendMessage(`🌸Thành viên đã có mặt trong nhóm🌸`, threadID, messageID);
  if (err) return api.sendMessage(`🌸Không thể thêm threadInfoành viên vào nhóm🌸`, threadID, messageID);
  else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`🌸Đã thêm người dùng vào danh sách phê duyệt🌸`, threadID, messageID);
  else return api.sendMessage(`🌸Thêm thành viên vào nhóm thành công🌸`, threadID, messageID);
  });
  }
else { 
  var uidUser = args[0] 
  api.addUserToGroup(uidUser, threadID, (err) => {
  if (participantIDs.includes(uidUser)) return api.sendMessage(`🌸👻Thành viên đã có mặt trong nhóm👽🌸`, threadID, messageID);
  if (err) return api.sendMessage(`🌸🤖Không thể thêm thành viên vào nhóm👹🌸`, threadID, messageID);
  else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`🌸👾Đã thêm người dùng vào danh sách phê duyệt❤️‍🔥🌸`, threadID, messageID);
  else return api.sendMessage(`🌸😈Thêm thành viên vào nhóm thành công🤡👿🌸`, threadID, messageID);
   });
 }
}