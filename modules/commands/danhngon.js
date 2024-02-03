module.exports.config = {
  name: "danhngon",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kz Khánhh",
  description: "Những câu nói đi vào lòng người",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require('fs');

  const data = [
    "Chớ nghe lời phỉnh tiếng phờ\nThò tay vào lờ, mắc kẹt cái  hom",

    "Măng chua nấu cá ngạch nguồn\nSự đời đắp đổi, khi buồn khi vui.",

    "Yêu nhau xé lụa may quần\nGhét nhau kể nợ kể nần nhau ra",

    "Ai ơi chớ vội cười nhau\nCây nào mà chẳng có sâu chạm cành",

    "Khi giàu chẳng có đỡ ai\nĐến khi hoạn nạn chẳng ai đỡ mình",

    "Ở sao cho vừa lòng người\nỞ rộng người cười, ở hẹp người chê.",

    "Chim khôn chưa bắt đã bay,\nNgười khôn ít nói, ít hay trả lời",

    "Thuốc đắng dã tật, sự thật mất lòng.",

    "Một lời nói dối, sám hối bảy ngày.",

    "Nói ngọt lọt đến xương",

    "Miếng ngon nhớ lâu, lời đau nhớ đời",

    "Lưỡi sắc hơn gươm",

    "Lưỡi không xương, nhiều đường lắt léo.",

    "Sẩy chân còn hơn sẩy miệng.",

    "Tiếng lành đồn xa, tiếng dữ đồn xa.",

    "Một người thì kín, hai người thì hở.",

    "Nói thì dễ, làm thì khó.",

    "Tre non dễ uốn",

    "Bé chẳng vin, cả gãy cành.",

    "Yêu cho vọt, ghét cho chơi",

    "Mẹ dạy thì con khéo, bố dạy thì con khôn.",

    "Học ăn học nói, học gói học mở",

    "Dốt đến đâu, học lâu cũng biết.",

    "Người vụng đan thúng giữa đường.",

    "Không thầy đố mày làm nên.",

    "Học thày không tày học bạn.",

    "Có tích mới dịch nên tuồng.",

    "Văn hay chẳng lo dài dòng.",

    "Văn mình, vợ người.",

    "Ở hiền gặp lành.",

    "Ở tinh gặp ma, ở quỷ gặp quái, gian tà gặp nhau.",

    "Nọc người bằng mười nọc rắn.",

    "Một đời làm hại, bại hoại ba đời.",

    "Hùm giết người hùm ngủ,\nNgười giết người thức đủ năm canh.",

    "Phụ vợ, không gặp vợ.",

    "Hiền quá hóa ngu.",

    "Giết một con cò, cứu trăm con tép.",

    "Đẹp nết hơn đẹp người.",

    "Cái nết đánh chết cái đẹp.",

    "Đói cho sạch, rách cho thơm.",

    "Chết trong còn hơn sống đục.",

    "Xấu hay làm tốt, dốt hay nói chữ.",

    "Ai ưa dưa khú, bầu già.",

    "Tốt đẹp phô ra, xấu xa đậy lại.",

    "Bạc đầu chưa hết dại.",

    "Khôn ba năm, dại một giờ.",

    "Người khôn ăn nói nửa chừng\nĐể cho người dại vừa mừng vừa lo.",

    "Khôn làm văn tế, dại làm văn bia.",

    "Ăn cỗ đi trước, lội nước đi sau.",

    "Chẳng có dại nào giống dại nào.",

    "Ngu si hưởng thái bình",

    "Thằng dại làm hại thằng khôn.",

    "Khôn cho người ta sợ,\nDại cho người ta thương,\nDở dở ương ương tổ cho người ta ghét.",

    "Vụng chèo khéo chống.",

    "Vụng múa chê đất lệch.",

    "Hay thì khen, hèn thì chê.",

    "Mười quan tiền công,\nKhông bằng một đồng tiền thưởng.",

    "Trâu chết để da, người chết để tiếng.",

    "Tốt danh hơn lành áo.",

    "Lắm người yêu hơn nhiều kẻ ghét.",

    "Yêu trẻ, trẻ đến nhà; yêu già, già để phúc.",

    "Yêu nhau chín bỏ làm mười\nCó mặt thì mắng, vắng mặt thì thương.",

    "Yêu nhau lắm, cắn nhau đau.",

    "Yêu nên tốt, ghét nên xấu.",

    "Yêu ai yêu cả đường đi,\nGhét nhau ghét cả tông chi họ hàng.",

    "Ghét nhau đào đất đổ đi",

    "Người có lúc vinh lúc nhục,\nNước có lúc đục lúc trong.",

    "Sướng lắm, khổ nhiều.",

    "Thương người như thể thương thân",

    "Lá lành đùm lá rách\nĂn nhạt mới biết thương mèo.",

    "Bỏ thì thương, vương thì tội.",

    "Ăn quả nhớ kẻ trồng cây.",

    "Uống nước nhớ nguồn.",

    "Một đêm nằm một năm ở.",

    "Đường mòn, ân nghĩa không mòn.",

    "Chanh chua chớ phụ, ngọt bòng chớ ham.",

    "Hoài thóc nuôi cò rừng",

    "Được chim bẻ ná, được cá quên nơm.",

    "Ăn cháo đái bát.",

    "Chưa khỏi rên đã quên thầy.",

    "Có xương sông, tình phụ lá lốt.",

    "Có trăng, phụ đèn.",

    "Một câu nhịn là chín câu lành.",

    "Tránh voi chẳng xấu mặt.",

    "Con gà tức nhau tiếng gáy.",

    "Đánh nhau chia gạo, chào nhau ăn cơm.",

    "Cả giận mất khôn.",

    "Hơi đâu mà giận người dưng.",

    "Một đời kiện, chín đời thù.",

    "Ăn ngay nói thật, mọi tật mọi lành.",

    "Cây ngay chẳng sợ chết đứng",

    "Có tật giật mình, có tình kinh trong bụng.",

    "Thẳng mực tàu đau lòng gỗ.",

    "Mất lòng trước, được lòng sau.",

    "Mật ngọt chết ruồi,\nnhững nơi cay đắng là nơi thật thà.",

    "Trâu đồng nào ăn cỏ đồng ấy.",

    "Ăn cây nào rào cây ấy.",

    "Thân trâu trâu lo, thân bò bò liệu.",

    "Cha chung không ai khóc.",

    "Cháy nhà hàng xóm, bình chân như vại.",

    "Hoài tiền mua pháo, mượn người đốt.",

    "Việc nhà thì nhác, việc chú bác thì siêng.",

    "Có vay có trả, mới thỏa lòng nhau.",

    "Cá mè một lứa.",

    "Tắt đèn nhà ngói cũng như nhà tranh.",

    "Làm quan ăn lộc vua, ở chùa ăn lộc phật.",

    "Ngày dưng thì chẳng chắp gai,\nđến khi có cá mượn chài ai cho.",

    "Người lười đất không lười.",

    "Mồm miệng đỡ chân tay.",

    "Giã gạo thì ốm, giã cốm thì khỏe.",

    "Khéo ăn thì no, khéo co thì ấm.",

    "Đo bò làm chuồng.",

    "Yếu chân chạy trước.",

    "Làm khi lành, để dành khi đau",

    "Mất bò mới lo làm chuồng.",

    "Có mình thì giữ.",

    "Buôn tàu bán đất, không bằng ăn dè hà tiện.",

    "Đãi cứt sáo lấy hạt đa, đãi cứt gà lấy hạt tấm.",

    "Kiếm củi ba năm thiêu một giờ",

    "Đời cha vo tròn, đời con bóp bẹp",

    "Sông lở cát bồi",

    "Được lòng ta, xót xa lòng người",

    "Bói rẻ còn hơn ngồi không",

    "Chẳng được con trắm con chép, cũng được mớ tép mớ tôm",

    "Thả con săn sắt, bắt con cá rô",

    "Lọt sàng xuống nia",

    "Lá rụng về cội",

    "Cơm không ăn, gạo còn đó",

    "Gạo đổ, hót chẳng đầy thưng",

    "Mất cả chì lẫn chài",

    "Được một bữa cơm người, mất mười bữa cơm nhà.",

    "Đã khó, chó cắn thêm",

    "Biết tội đâu mà tránh, biết phúc đâu mà tìm.",

    "Buồn ngủ lại gặp chiếu manh\nhay ăn làm biếng gặp anh đứng đường.",

    "Đi đêm lắm có ngày gặp ma",

    "Bốn chín chưa qua, năm ba đã tới",

    "Tránh vỏ dưa, gặp vỏ dừa",

    "Chạy trời không khỏi nắng",

    "Thuốc chữa bệnh, chẳng chữa được mệnh",

    "Khi nên, trời cũng chiều người",

    "Năm ngón tay có ngón dài ngón ngắn",

    "Ai uốn câu cho vừa miệng cá",

    "Thánh cũng có khi nhầm",

    "Bới bèo ra bọ",

    "Đánh rắn phải đánh dập đầu",

    "Đã tu thời tu cho trót.",

    "Có chí thì nên.",

    "Mưu cao chẳng bằng chí dày",

    "Kiến tha lâu cũng đầy tổ",

    "Có công mài sắt, có ngày nên kim",

    "Năng nhặt chặt bị",

    "Trăm bó đuốc cũng vớ được con ếch",

    "Còn nước còn tát",

    "Thắng không kiêu, bại không nản",

    "Sóng cả chớ ngã tay chèo",

    "Vua thua thằng liều"
  ];

  const danhngon = data[Math.floor(Math.random() * data.length)];

  const imageUrls = await Promise.all(Array.from({ length: 3 }, async () => {
    const res = await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/caunoihay');
    return res.data.url;
  }));

  const attachments = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data;
  }));

  const ext = imageUrls[0].split(".").pop();
  const path = __dirname + `/cache/daoly.${ext}`;

  const callback = () => {
    api.sendMessage(
      {
        body: `💞 =『 𝗗𝗮𝗻𝗵 𝗡𝗴𝗼̂𝗻 』= 💞\n\n🌸──── •❤️‍🔥• ────🌸\n\n${danhngon}\n\n🎀──── •❤️‍🔥• ────🎀`,
        attachment: attachments
      },
      event.threadID,
      () => fs.unlinkSync(path),
      event.messageID
    );
  };

  if (!fs.existsSync(path)) {    
    request(imageUrls[0])
      .pipe(fs.createWriteStream(path))
      .on("close", callback);
  } else {
    callback();
  }
};