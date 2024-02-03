const fontMaps = [
  {
    name: 'font',
    map: {
      'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀', 'h': '𝗁',
      'i': '𝗂', 'j': '𝗃', 'k': '𝗄', 'l': '𝗅', 'm': '𝗆', 'n': '𝗇', 'o': '𝗈', 'p': '𝗉', 'q': '𝗊',
      'r': '𝗋', 's': '𝗌', 't': '𝗍', 'u': '𝗎', 'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓',
      'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦', 'H': '𝖧',
      'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖫', 'M': '𝖬', 'N': '𝖭', 'O': '𝖮', 'P': '𝖯', 'Q': '𝖰',
      'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴', 'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹',
    },
  },
  // Add other font mappings here...
];

module.exports.config = {
    name: "edu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "KENLIEPLAYS",//modified by ntrems
    description: "GPTGO by KENLIEPLAYS",
    commandCategory: "Tiện ích",
    usages: "[ask]",
    usePrefix: false,
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {

    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("🧑🏻‍🏫𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚢𝚙𝚎 𝚊 𝚖𝚎𝚜𝚜𝚊𝚐𝚎...", tid, mid);
    try {
      api.setMessageReaction("🔍", event.messageID, (err) => {}, true);
      api.sendMessage("🖇𝚂𝚎𝚊𝚛𝚌𝚑𝚒𝚗𝚐 𝚏𝚘𝚛 𝚊𝚗 𝚊𝚗𝚜𝚠𝚎𝚛...", threadID, messageID);
      const res = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${content}`);
        let respond = res.data.response;
       // Apply font mapping for font
    const fontMapBold = fontMaps.find(item => item.name === 'font');
    if (fontMapBold) {
      respond = respond
        .split('')
        .map(char => fontMapBold.map[char] || char)
        .join('');
    }
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
          api.setMessageReaction("✅", event.messageID, (err) => {}, true);
          api.sendMessage('🤖𝐍𝐭𝐫𝐄𝐦𝐬 (𝐄𝐝𝐮):\n\n' + respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};