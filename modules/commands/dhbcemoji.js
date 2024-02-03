module.exports.config = {
    name: 'dhbcemoji',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Game đuổi hình bắt chữ bằng emoji',
    commandCategory: 'Game',
    usages: 'dhbcemoji',
    cooldowns: 3,
    dependencies: {
        'axios': ''
    }
};
const $$ = {
    max: 0x2710-0x1,
    min: 0x400-0x18
};
const localeNum = n => ((+n).toLocaleString()).replace(/,/g, '.');
const {
    get
} = require('axios');
module.exports.run = function({
    api, event
}) {
    runRiddle({
        api, event, author: event.senderID
    })};
module.exports.handleReaction = function ({
    handleReaction: $, api, event
}) {
    if (event.userID != $.author) return;
    api.unsendMessage($.messageID);
    runRiddle({
        api, event, author: $.author
    });
};
module.exports.handleReply = function({
    handleReply: $, api, event, Currencies: $_
}) {
    if (event.senderID != $.author) return;
    api.unsendMessage($.messageID);
    const body = event.body.toLowerCase();
    const money = {
        type: `${body != $.answer ? 'decreaseMoney': 'increaseMoney'}`,
        num: randomNumber($$)};
    api.sendMessage(`[💡] ➜ Đáp Án: ${$.answer}\n[📌] ➜ ${body != $.answer ? `Rất tiếc đáp án của bạn là sai(- ${localeNum(money.num)} VNĐ)`: `Đáp án của bạn đã chính xác(+ ${localeNum(money.num)} VNĐ)`}\n[❗] ➜ Thả cảm xúc vào tin nhắn để chơi tiếp !`, event.threadID, (err, msg) => {
        global.client.handleReaction.push({
            name: 'dhbcemoji', messageID: msg.messageID, author: event.senderID
        });
        $_[money.type](event.senderID, +money.num);
    }, event.messageID);
};
function runRiddle({
    api, event, author
}) {
    get(`https://docs-api.jrtxtracy.repl.co/game/dhbcemj`).then(response => {
        const {
            emoji1, emoji2, wordcomplete
        } = response.data || {};
        api.sendMessage(`[🔡]=== 『 𝑫𝑯𝑩𝑪-𝑬𝑴𝑶𝑱𝑰 』 ===[🔰]\n◆━━━━━━━━━━━━━━━━◆\n\n[🔰] ➜ Câu Đố: ${emoji1} ${emoji2}\n\n[❗] ➜ [Reply] để nhập đáp án của bạn !`, event.threadID, (err, msg) => global.client.handleReply.push({
            name: 'dhbcemoji', messageID: msg.messageID, author, answer: wordcomplete.toLowerCase()
        }));
    });
};
function randomNumber({
    min = 0x0, max = 0x0
}) {
    return Math.floor(Math.random()*(max-min+0x1))+min;
};