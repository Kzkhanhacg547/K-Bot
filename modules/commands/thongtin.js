    /**
     * @author Yae Miko
     * @warn Do not edit code or edit credits
     */

    module.exports.config = {
      name: "thongtin",
      version: "1.2.6",
      hasPermssion: 0,
      credits: "Yae Miko mod TNT",
      description: "Một số thông tin về bot",
      commandCategory: "Box",
      hide:true,
      usages: "",
      cooldowns: 5,
        dependencies: {
        "fast-speedtest-api": ""
      }
    };


    module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
      const content = args.slice(1, args.length);
      const { threadID, messageID, mentions } = event;
      const { configPath } = global.client;
      const { ADMINBOT } = global.config;
       const { NDH } = global.config;
      const { userName } = global.data;
      const request = global.nodemodule["request"];
      const fs = global.nodemodule["fs-extra"];
      const { writeFileSync } = global.nodemodule["fs-extra"];
      const mention = Object.keys(mentions);
      delete require.cache[require.resolve(configPath)];
      var config = require(configPath);
      {
        const PREFIX = config.PREFIX;
        const namebot = config.BOTNAME;
        const { commands } = global.client;
        const threadSetting = (await Threads.getData(String(event.threadID))).data || 
        {};
        const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
        : global.config.PREFIX;
        const fast = global.nodemodule["fast-speedtest-api"];
        const speedTest = new fast({
          token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
          verbose: false,
          timeout: 10000,
          https: true,
          urlCount: 5,
          bufferSize: 8,
          unit: fast.UNITS.Mbps
        });
        const resault = await speedTest.getSpeed();
        const dateNow = Date.now();
        const time = process.uptime(),
              hours = Math.floor(time / (60 * 60)),
              minutes = Math.floor((time % (60 * 60)) / 60),
              seconds = Math.floor(time % 60);
        const data = [
         "Trường đẹp trai vcl","Mỹ nhân trên thiên hạ đều tầm thường chỉ có vợ kẻ thù mới làm ta hứng thú","Mông, dú là chân lý","Gái gú chỉ là phù du, vợ bạn mới là bất diệt.","Admin là 1 người cute dzai s1tg","Bạn đang thở.","Admin rất nghiện sex","Trái đất hình vuông.","Kẹo sữa Milkita được làm từ sữa.","Chim cánh cụt có thể bay.","con bot này thông minh hơn bạn","tôi không có khả năng hiểu con gái","con bot này giúp bạn hỗ trợ trong việc học?","spam bot tôi sẽ ban bạn khỏi người dùng bot","đừng để tôi cáu nhé!","việc bạn đang làm là vô nghĩa","cái gì chưa biết chỉ cần biết là được","con chuột bị ốm uống thuốc chuột thì tại sao con chuột lại chết ?","chảy máu cam nhưng sao màu máu là màu đỏ ?","Thời gian là câu nói hay nhất, đúng nhất cho một tình yêu.","Dù tình yêu có lớn đến mấy cũng chẳng ngăn được thời gian.","Đừng để thời gian biến nỗi nhớ thành gánh nặng của bạn.","Tuổi trẻ chúng ta đang trôi qua không ngừng.","Tuổi trẻ là hữu hạn - Hãy ngừng lãng phí thời gian và tập trung kiến tạo bản thân ngày một tốt hơn.","Thời gian không chờ đợi một ai cả, chớp mắt một cái thanh xuân đã qua nhanh như một giấc mộng.","Thời gian tuổi trẻ không phụ thuộc vào guồng quay của thế giới mà nó phụ thuộc vào chính mỗi người chúng ta.","Bầu trời sẽ xanh trở lại, nhưng thời gian sẽ không quay trở lại. Nơi ấy sẽ vẫn thế, nhưng tuổi trẻ thì không...","Biết mình còn trẻ và biết tuổi trẻ không hề kéo dài.","Trên đời này có hai thứ không thể quay trở lại đó là: thời gian và tuổi trẻ.","Rồi sẽ có một ngày bạn thức dậy và không còn đủ thời gian để làm những điều hàng ngày mình mong muốn. Hãy làm ngay bây giờ. - Paulo Coelho","Điều hối tiếc nhất trong cuộc đời là không được làm những điều mình thích, là đã không trân trọng thời gian tuổi trẻ của chính mình.","Nếu thời gian là thứ đáng giá nhất, phí phạm thời gian hẳn phải là sự lãng phí ngông cuồng nhất","Cuộc đời đã ngắn ngủi như vậy mà chúng ta vẫn rút ngắn nó thêm khi bất cẩn lãng phí thời gian.","Chúng ta cần phải đi ngang với thời gian chứ không phải để thời gian đi ngang qua."," Nếu bạn yêu đời, hãy đừng phung phí thời gian, vì chất liệu của cuộc sống làm bằng thời gian.","Có những lúc, không có lần sau, không có cơ hội bắt đầu lại. Có những lúc, bỏ lỡ hiện tại, vĩnh viễn không còn cơ hội nữa","Người nào dám lãng phí một giờ đồng hồ hãy còn chưa phát hiện ra giá trị của cuộc sống"," Cuộc sống quá ngắn ngủi. Hận thù chỉ tàn phá những hạnh phúc tuyệt vời bạn đang có. Hãy cười khi bạn có thể và quên đi những gì bạn không thể thay đổi.","Kẻ tầm thường chỉ lo tìm cách giết thời gian, còn người có tài thì tìm mọi cách tận dụng thời gian.","Một tuần lễ với người chăm chỉ có 7 ngày, còn với kẻ lười biếng có 7 ngày mai.","Tôi chỉ còn lại một ít thời gian, và tôi không muốn lãng phí nó với Chúa.","Thương hại chính mình và điều kiện hiện tại của mình không chỉ lãng phí thời gian mà là thói quen tồi tệ nhất mà bạn có thể.","Con người không bao giờ được lãng phí thời gian vô ích để nuối tiếc quá khứ hay phàn nàn về những thay đổi khiến mình khó chịu, bởi thay đổi là bản chất của cuộc sống","Hầu hết mọi người lãng phí phần nào đó của cuộc đời cố gắng thể hiện những phẩm chất mình không có","Ngày đi, tháng chạy, năm bay. Thời gian nước chảy, chẳng quay được về.","Giúp bạn bè khi họ cần thật dễ dàng, nhưng dành cho họ thời gian không phải lúc nào cũng thuận lợi.","Người khôn ngoan là người học được những sự thật này: Rắc rối là tạm thời. Thời gian là thuốc bổ. Khổ đau là ống nghiệm.","Thời gian mà bạn hưởng thụ để phung phí, không lãng phí.","Lòng kiên nhẫn và thời gian làm được nhiều hơn là sức mạnh hay nhiệt huyết.","Cuộc đời đã ngắn ngủi như vậy mà chúng ta vẫn rút ngắn nó thêm khi bất cẩn lãng phí thời gian.","Anh có thể trì hoãn, nhưng thời gian thì không"," Anh có yêu cuộc sống không? Vậy đừng lãng phí thời gian, vì đó là vật liệu của cuộc sống"," Anh có yêu cuộc sống không? Vậy đừng lãng phí thời gian, vì đó là vật liệu của cuộc sống","Giống như tuyết mùa đông trên bãi cỏ mùa hè, thời gian đã qua là thời gian đã mất."," Tiền bạc và thời gian là những gánh nặng ghê gớm nhất của cuộc đời… và những kẻ bất hạnh nhất là những người sở hữu chúng nhiều hơn mình có thể sử dụng.","Thời gian thay đổi tất cả, chỉ trừ thứ bên trong chúng ta luôn luôn khiến ta thấy ngạc nhiên vì thay đổi.","Tính cách là kết quả của hai thứ: thái độ tinh thần và cách chúng ta sử dụng thời gian","Nếu một người cho bạn thời gian của mình, anh ta không thể cho bạn món quà nào quý giá hơn nữa."," Người nào dám lãng phí một giờ đồng hồ hãy còn chưa phát hiện ra giá trị của cuộc sống","Hãy sống thật xứng đáng để những tháng ngày thanh xuân không trở nên lãng phí.","Tuổi thanh xuân tươi đẹp, thời gian quý báu của cuộc đời, hãy sống tự do hết mình."," Khi thanh xuân, người ta vui chơi, yêu đương và làm những điều rồ dại. Người ta vẫn lớn lên mỗi ngày, sai lầm, đứng dậy, đi tiếp.","Tuổi trẻ của mỗi chúng ta chẳng ai giống nhau, có thể tươi đẹp hoặc sóng gió triền miên nhưng đọng lại là những kí ức mãi mãi không thể nào xóa nhòa."
        ];
        var link = [
          "https://i.imgur.com/jXU3PJf.jpg",
          "https://i.imgur.com/Jnasyor.jpg",
          "https://i.imgur.com/wnliEwX.jpg",
          "https://i.imgur.com/iKEbfXw.jpg",
          "https://i.imgur.com/UIS41MC.jpg",
        ];

        listAdmin = ADMINBOT || config.ADMINBOT ||  [];
          var msg = [];
          for (const idAdmin of listAdmin) {
              if (parseInt(idAdmin)) {
                const name = (await Users.getData(idAdmin)).name
                  msg.push(`卍 ${name}\n卍 𝗟𝗶𝗻𝗸: fb.me/${idAdmin}`);
              }
          }
        listNDH = NDH || config.NDH ||  [];
          var msg1 = [];
          for (const idNDH of listNDH) {
              if (parseInt(idNDH)) {
                const name1 = (await Users.getData(idNDH)).name
                  msg1.push(`卍 ${name1}\n卍 𝗟𝗶𝗻𝗸: fb.me/${idNDH}`);
              }
        var callback = () => 
          api.sendMessage({ body: `🌪⚌⚌<[ ${namebot} ]>⚌⚌🌊
  >🌐 𝗣𝗿𝗲𝗳𝗶𝘅 𝗛𝗲̣̂ 𝗧𝗵𝗼̂́𝗻𝗴: ${PREFIX}
  >🌟 𝗣𝗿𝗲𝗳𝗶𝘅 𝗕𝗼𝘅: ${prefix}
  >🌈 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: ${commands.size}
  >⚠️ 𝗣𝗶𝗻𝗴: ${Date.now() - dateNow}ms
  >🍁 𝗙𝗮𝘀𝘁: ${resault} 𝗠𝗕𝗦
   ━━━━━━━━━━━━━━━━
  𝗧𝗵𝗮̆́𝗰 𝗺𝗮̆́𝗰 𝗴𝗶̀ 𝘅𝗶𝗻 𝗵𝗮̃𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗔𝗱𝗺𝗶𝗻
   ━━━━━━━<[🎀]>━━━━━━━
  🌐⚌⚌[ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ⚌⚌🌐
   ${msg.join("\n")}
   ━━━━━━━━━━━━━━━
  🎀⚌⚌「 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 」 ⚌⚌🎀
    ${msg1.join("\n")}
   ━━━━━━━━━━━━━━━
   >⏰ 𝗧𝗶𝗺𝗲 𝗕𝗼𝘁 𝗛𝗼𝗮̣𝘁 Đ𝗼̣̂𝗻𝗴:
    ${hours} 𝗚𝗶𝗼̛̀ ${minutes} 𝗣𝗵𝘂́𝘁 ${seconds} 𝗚𝗶𝗮̂𝘆
   >🎁 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿𝘀: ${global.data.allUserID.length}
   >🪄 𝗧𝗼𝘁𝗮𝗹 𝗧𝗵𝗿𝗲𝗮𝗱𝘀: ${global.data.allThreadID.length}\n\🍀⚌⚌⚌[ 𝗬𝗼𝘂 𝗖𝗼́ 𝗕𝗶𝗲̂́𝘁 ]⚌⚌⚌💐\n ${data[Math.floor(Math.random() * data.length)]}`, attachment: fs.createReadStream(__dirname + "/cache/nah.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg"));
          return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/nah.jpg")).on("close", () => callback()); 
      }
    };
    };