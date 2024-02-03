module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Admin",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) 
  {
      const permission = ["100081129610697"];
  if (!permission.includes(event.senderID))
  return api.sendMessage({body:"Mày Là Gì Tao Phải Out 👍", attachment: (await axios.get((await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/girl`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage({body: '💌!!𝐃𝐚̃ 𝐫𝐨̃, 𝐭𝐡𝐮̛𝐚 𝐀𝐝𝐦𝐢𝐧!!💌', attachment: (await axios.get((await axios.get(`https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/vdgirl`)).data.data, {
                    responseType: 'stream'
                })).data},id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
  }