module.exports.config = {
    name: "work",
    version: "1.0.3",
    hasPermssion: 0,
    credits: "Hung", 
    description: "Làm việc để có tiền, có làm thì mới có ăn",
    commandCategory: "Game",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 300000 //thời gian cooldown là 5 phút (300000 mili giây)
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "🐳Bạn đã làm việc rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "⚡️You're done, come back later: %1 minute(s) %2 second(s)."
    }
}

module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
    var coinscn = Math.floor(Math.random() * 100000) + 200; //random coins khi làm ở khu công nghiệp
    var coinsdv = Math.floor(Math.random() * 170000) + 100; //random coins khi làm ở khu dịch vụ
    var coinsmd = Math.floor(Math.random() * 300000) + 400; //random coins khi làm ở mỏ dầu
    var coinsq = Math.floor(Math.random() * 200000) + 90; //random coins khi khai thác quặng
    var coinsdd = Math.floor(Math.random() * 50000) + 500; //random coins khi đào đá
    var coinsdd1 = Math.floor(Math.random() * 400000) + 1000; //random coins khi đào đá
    var coinsex1 = Math.floor(Math.random() * 300000) + 420;
    
    var rdcn = ['tuyển dụng nhân viên', 'quản trị khách sạn', 'tại nhà máy điện', 'đầu bếp trong nhà hàng', 'công nhân'];
    var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   
    var rddv = ['sửa ống nước', 'sửa điều hòa cho hàng xóm', 'bán hàng đa cấp', 'phát tờ rơi', 'shipper', 'sửa máy vi tính cho Hùng', 'hướng dẫn viên du lịch', 'cho con bú'];
    var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 
    var rdmd = ['kiếm được 13 thùng dầu', 'kiếm được 8 thùng', 'kiếm được 9 thùng dầu', 'kiếm được 8 thùng dầu', 'ăn cướp dầu', 'lấy nước đổ vô dầu rồi bán'];
    var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 
    var rdq = ['quặng sắt', 'quặng vàng', 'quặng than', 'quặng chì', 'quặng đồng', 'quặng dầu'];
    var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 
    var rddd = ['kim cương', 'vàng', 'than', 'ngọc lục bảo', 'sắt', 'đá bình thường', 'lưu ly', 'đá xanh'];
    var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 
    var rddd1 = ['khách vip', 'khách quen', 'người lạ', 'thằng ngu tầm 23 tuổi', 'anh lạ mặt', 'khách quen', 'đại gia 92 tuổi', 'thằng nhóc 12 tuổi'];
    var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];
    var rdex1 = ['làm đệ admin', 'làm chó', 'đánh cướp', 'làm cave', 'uống nước đái mèo', 'ăn cứt thay cơm'];
    var work7 = rdex1[Math.floor(Math.random() * rdex1.length)];

    var msg = "";
    switch (handleReply.type) {
        case "choosee": {
            switch(event.body) {
                case "1": 
                    msg = `Bạn đang làm việc ${work1} ở khu công nghiệp và kiếm được ${coinscn}$`;
                    await Currencies.increaseMoney(event.senderID, parseInt(coinscn)); 
                    break;             
                case "2": 
                    msg = `Bạn đang làm việc ${work2} ở khu dịch vụ và kiếm được ${coinsdv}$`;
                    await Currencies.increaseMoney(event.senderID, parseInt(coinsdv));
                    break;
                case "3": 
                    msg = `Bạn ${work3} tại khu mỏ dầu và bán được ${coinsmd}$`;
                    await Currencies.increaseMoney(event.senderID, parseInt(coinsmd)); 
                    break;
                case "4": 
                    msg = `Bạn đang khai thác ${work4} và kiếm được ${coinsq}$`;
                    await Currencies.increaseMoney(event.senderID, parseInt(coinsq)); 
                    break;
                case "5": 
                    msg = `Bạn đào được ${work5} và kiếm được ${coinsdd}$`;
                    await Currencies.increaseMoney(event.senderID, parseInt(coinsdd)); 
                    break;
                case "6": 
                    msg = `Bạn được ${work6} cho ${coinsdd1}$ nếu xxx 1 đêm, thế là bạn đồng ý ngay :)))`;
                    await Currencies.increaseMoney(event.senderID, parseInt(coinsdd1)); 
                    break;
                case "7": 
                    msg = `Bạn nhận được thử thách 24h ${work7} và bạn đã nhận được ${coinsex1}$ `;
                    await  Currencies.increaseMoney(event.senderID, parseInt(coinsex1)); 
                    break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID);
            api.unsendMessage(handleReply.messageID);
            if (msg == "⚡️Chưa update...") {
                msg = "⚡️Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
                data.work2Time = Date.now();
                await Currencies.setData(senderID, { data });
            });
        };
    }
}

module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};

    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {
        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 

        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
        return api.sendMessage("💸== 𝗖𝗨̀𝗡𝗚 𝗞𝗜𝗘̂́𝗠 𝗧𝗜𝗘̂̀𝗡 𝗠𝗢̂̃𝗜 𝗡𝗚𝗔̀𝗬 ==💸" +
            "\n\n1.🏬 𝐊𝐡𝐮 𝐜𝐨̂𝐧𝐠 𝐧𝐠𝐡𝐢𝐞̣̂𝐩." +
            "\n2.🏢 𝐊𝐡𝐮 𝐝𝐢̣𝐜𝐡 𝐯𝐮̣." +
            "\n3.🕳️ 𝐊𝐡𝐮 𝐦𝐨̉ 𝐝𝐚̂̀𝐮." +
            "\n4.⛏️ 𝐊𝐡𝐚𝐢 𝐭𝐡𝐚́𝐜 𝐪𝐮𝐚̣̆𝐧𝐠." +
            "\n5.⛏️⛰️ 𝐊𝐡𝐚𝐢 𝐓𝐡𝐚́𝐜." +
            "\n6.🕺💃 𝐂𝐚𝐯𝐞 𝐓𝐫𝐚̂̀𝐧 𝐃𝐮𝐲 𝐇𝐮̛𝐧𝐠" +
            "\n7.😂𝐓𝐡𝐮̛̉ 𝐭𝐡𝐚́𝐜𝐡🤦" +
            "\n\n𝗛𝗮̃𝘆 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘃𝗮̀ 𝗰𝗵𝗼̣𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
        , event.threadID, (error, info) => {
            data.work2Time = Date.now();
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })  
        })
    }
}