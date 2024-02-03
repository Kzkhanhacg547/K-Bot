module.exports.config = {
	name: "checktt",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "",
	description: "Kiểm tra lượt tương tác trong nhóm",
	commandCategory: "THÀNH VIÊN",
	usages: "[all/tag]",
	cooldowns: 5,
    envConfig: {
        "maxColumn": 10
    }
};

module.exports.languages = {
    "vi": {
        "all": "%1/ %2 với %3 tin nhắn\n",
        "mention": "%1 đứng hạng %2 với %3 tin nhắn",
        "myself": "Bạn đang đứng hạng %1 với %2 tin nhắn"
    },
    "en": {
        "all": "%1/ %2 with %3 messages\n",
        "mention": "%1 on top %2 with %3 messages",
        "myself": "You are on top %1 with %2 messages "
    }
}

module.exports.run = async function ({ args, api, event, Currencies, getText }) {
    var mention = Object.keys(event.mentions);
    try {
        const data = await api.getThreadInfo(event.threadID);
        if (args[0] == "all") {
            var number = 0, storage = [], exp = [];
            for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
            for (const user of storage) {
                const countMess = await Currencies.getData(user.id);
                exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
            }
            exp.sort(function (a, b) { return b.exp - a.exp });

            var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var limit = 10;
            var msg = "Đ𝐨̣̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐭𝐫𝐨𝐧𝐠 𝐛𝐨𝐱:\n";
            var numPage = Math.ceil(exp.length/limit);

            for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
                if(i >= exp.length) break;
                let infoUser = exp[i];
                msg += `${i+1}.${infoUser.name}: ${infoUser.exp} tin nhắn\n=========\n`
            }

            msg += `--𝐓𝐫𝐚𝐧𝐠 ${page}/${numPage}--\n𝐃𝐮̀𝐧𝐠 ${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐭𝐭 𝐚𝐥𝐥 𝐬𝐨̂́ 𝐭𝐫𝐚𝐧𝐠`
            return api.sendMessage(msg, event.threadID);
        }
        else if (mention[0]) {
            var storage = [], exp = [];
            for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});

            for (const user of storage) {
                const countMess = await Currencies.getData(user.id);
                exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
            }
            exp.sort(function (a, b) { return b.exp - a.exp });

            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
            const infoUser = exp[rank - 1];
            return api.sendMessage(getText("mention", infoUser.name, rank, infoUser.exp), event.threadID);
        }
        else {
            var storage = [], exp = [];
            for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
            for (const user of storage) {
                const countMess = await Currencies.getData(user.id);
                exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
            }
            exp.sort(function (a, b) { return b.exp - a.exp });

            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
            const infoUser = exp[rank - 1];
            return api.sendMessage(getText("myself", rank, infoUser.exp), event.threadID);
        }
    } catch (e) { return console.log(e) }
}