module.exports.config = {
    name: "datlai",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "nam",
    description: "như hd",
    commandCategory: "công cụ",
    usages: "",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies, args, Threads }) => {
    const data = await api.getThreadInfo(event.threadID);
    const n1 = this.config.name
    const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
        const p2 = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    if (args.length == 0) {return api.sendMessage(`==== [ 𝗥𝗘𝗦𝗘𝗧 ] ====\n\n${p2}${n1} exp => xóa hết exp của thành viên trong nhóm\n${p2}${n1} money => xóa hết money của thành viên trong nhóm\n\n${p2}${n1} moneyall => xóa toàn bộ money trên hệ thống`, event.threadID, event.messageID);}
    else if (args[0] == "exp") {
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var exp = currenciesData.exp;
            if (typeof exp != "undefined") {
                exp -= exp;
                await Currencies.setData(user.id, { exp });
            }
        }
    }
    return api.sendMessage("Số tương tác của thành viên nhóm đã được reset về mức 0 !", event.threadID);
}
 else if (args[0] == "money") {
for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
                money -= money;
                await Currencies.setData(user.id, { money });
            }
        }
    }
    return api.sendMessage("Số money của thành viên nhóm đã được reset về mức 0 !", event.threadID);
    }
  else if (args[0] == "moneyall"){
    const permission = config.OWNER
    if (!permission.includes(event.senderID)) return api.sendMessage("Cút", event.threadID, event.messageID);
  var x = global.data.allCurrenciesID;
      for (let ex of x) {
            await Currencies.setData(ex, { money: parseInt(0) });
            var eheh = (await Currencies.getData(ex)).money;
            console.log(eheh)
         }
    return api.sendMessage("Đã xóa toàn bộ tiền trên hệ thống",event.threadID);
    }
}