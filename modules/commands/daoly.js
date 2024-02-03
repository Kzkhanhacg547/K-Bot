module.exports.config = {
  name: "daoly",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "tdunguwu",
  description: "Những câu nói đạo lý đi vào lòng người",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require('fs');

  const data = [
    "Đạo trời không thiên vị ai, luôn giúp đỡ cho người lương thiện. Lưới trời lồng lộng, tuy thưa nhưng khó lọt",
    "Lời nói hợp đạo nghe như ngược đời.",
    "Binh mạnh thì không thắng, cây cứng thì lại bị chặt. Cứng mạnh thì phải ở dưới, mềm yếu lại được ở trên. Răng cứng thì chóng gãy, lưỡi mềm thì bền lâu",
    "Danh dự với sinh mệnh, cái nào mới thật sự quý? Người khôn ngoan không bao giờ vì trọng cái danh hão mà xem nhẹ tính mạng mình.",
    "Lời hứa dễ dàng thì khó tin, người nào cho việc gì cũng dễ làm thì sẽ gặp nhiều cái khó. Cho nên người hiểu đạo coi việc gì cũng khó mà rốt cuộc không gặp cái gì khó",
    "Cần cù thì bù siêng năng, không làm mà đòi có ăn thì ăn đầu buồi, ăn cứt.",
    "Cây lớn sinh ra từ một cái mầm nhỏ; tháp cao chín tầng khởi đầu từ một sọt đất, đi xa ngàn dặm bắt đầu từ một bước chân.",
    "Cái gì ở yên thì dễ nắm, giòn thì dễ vỡ, nhỏ thì dễ phân tán.",
    "Người giản dị nhất thì không phải là người giản dị.",
    "Người khiêm tốn nhất thì không phải là người khiêm tốn",
    "Người cực khéo thì dường như vụng. Người nói giỏi thì dường như ấp úng. Cử động thì thắng được lạnh. Nhưng yên tĩnh thì thắng được nóng. Vậy cứ thanh tĩnh thì mọi vật sẽ đâu vào đấy.",
    "Từ bi là vũ khí tốt nhất của chính bạn.",
    "Có lòng thương yêu vô tư thì sẽ có tất cả.",
    "Bạn bè là để sớt chia, không phải để lấn lướt.",
    "Tiền bạc là để chi tiêu, không phải để so lường.",
    "Bình yên đến từ bên trong. Đừng tìm nó bên ngoài.",
    "Không có sự ô nhiễm nào lớn hơn sự thiếu hiểu biết.",
    "Nguồn gốc mọi đau khổ của con người chính là luyến ái.",
    "Niềm Tin là để chắc chắn, không phải để lường gạt.",
    "Hãy nhớ rằng, đôi khi sự im lặng là câu trả lời hay nhất.",
    "Nếu có điều gì đáng làm, hãy làm nó bằng tất cả trái tim.",
    "Bạn hãy luôn cảm ơn những ai đem đến nghịch cảnh cho mình.",
    "Cung kính đối với người là sự trang nghiêm cho chính mình.",
    "Chỉ cần đối diện với hiện thực, bạn mới vượt qua hiện thực.",
    "Người không biết yêu mình thì không thể yêu được người khác.",
    "Hận thù diệt hận thù, là điều không thể có. Tình yêu diệt hận thù, là định luật ngàn thu.",
    "Tâm là tên lừa đảo lớn nhất, người khác có thể dối bạn nhất thời, nhưng nó lại gạt bạn suốt đời.",
    "Quảng kết chúng duyên, chính là không làm tổn thương bất cứ người nào.",
    "Sống một ngày vô ích, không làm được chuyện gì, thì chẳng khác gì kẻ phạm tội ăn trộm.",
    "Nói một lời dối gian thì phải bịa thêm mười câu không thật nữa để đắp vào, cần gì khổ như vậy?",
    "Người che đậy khuyết điểm của mình bằng thủ đoạn tổn thương người khác là kẻ đê tiện.",
    "Đừng lãng phí sinh mạng của mình trong những chốn mà nhất định bạn sẽ ân hận.",
    "Những ai phá hủy được cội nguồn của sự ghen tị sẽ luôn bình yên trong tâm hồn.",
    "Nếu có thể đứng ở góc độ của người khác để nghĩ cho họ thì đó mới là từ bi.",
    "Bạn cứ xem những chuyện đơn thuần thành nghiêm trọng, như thế bạn sẽ rất đau khổ.",
    "Nụ cười của bạn khiến người khác cảm thấy hạnh phúc, kể cả những người không thích bạn.",
    "Cảm xúc, một là phục vụ ta, hai là thao túng ta, tùy thuộc ta xem ai là người làm chủ.",
    "Bầu không khí yêu thương trong gia đình chính là nền tảng cho cuộc sống của bạn.",
    "Người âm thầm quan tâm chúc phúc người khác, đó là một sự bố thí vô hình.",
    "Cảm ơn đời với những gì tôi đã có, cảm ơn đời những gì tôi không có.",
    "Hạnh phúc không có sẵn. Hạnh phúc xuất phát từ chính hành động của bạn.",
    "Hãy sẵn sàng để thay đổi nhưng đừng đánh mất các giá trị của bản thân.",
    "Bao dung mới là trí huệ, tĩnh tại mới là tu tâm.",
    "Cá lội ngược dòng cá sống, người vượt nghịch cảnh người thành công",
    "Chân lý của nhân sinh chỉ là giấu trong cái bình thường đơn điệu.",
    "Sự chấp trước của ngày hôm nay sẽ là niềm hối hận cho ngày mai.",
    "Không có nỗi sợ hãi với những ai tâm trí không ngập tràn ham muốn.",
    "Không có con đường dẫn đến hạnh phúc, hạnh phúc chính là con đường.",
    "Nhân quả không nợ chúng ta thứ gì, cho nên xin đừng oán trách nó.",
    "Một con chó tốt không phải bởi vì nó sủa giỏi. Một người tốt không phải bởi vì anh ta nói hay.",
    "Yêu nhau là phải được sờ. Không cho lại bảo giả vờ yêu nhau.",
    "Đi Lên Từ Hai Bàn Tay Trắng. Và Gây Dựng Một Khoản Nợ Khổng Lồ.",
    "Trời sinh cái khiếu trăng hoa lại cho cái ấy gấp 3 người thường!",
    "Tình chỉ đẹp khi tiền đầy túi - Đời bớt vui khi túi cạn tiền.",
    "Tiền không phải là tất kả, vì trên thế giới này còn vàng và kim cương.",
    "Sai thì sửa, mà chửa thì đẻ…",
    "Trái tim em chỉ 2 lần mở cửa, đón anh vào và tống cổ anh ra.",
    "Thất bại vì ngại thành công",
    "Phất áo lên vai đời lãng tử, chào mẹ con đi 9 rưỡi về",
    "Bồ xấu thì sợ bạn chê, bồ đẹp thì sợ bạn mê bạn dành.",
    "Thuốc đắng vào người em lắc, em phê xong rồi anh nắc",
    "Nhà sạch thì mát, bát sạch không phải rửa",
    "Gần mực thì… bia, gần đèn thì… hút.",
    "Bầu ơi thương lấy bí cùng,",
    "Mai sau có lúc… nấu chung một nồi.",
    "Có công mài sắt có ngày… chai tay",
    "Không có gì quý hơn đọc truyện tự do."
  ];

  const daoly = data[Math.floor(Math.random() * data.length)];

  const imageUrls = await Promise.all(Array.from({ length: 6 }, async () => {
    const res = await axios.get('https://4dd9ea6e-d5a6-4f8f-892c-ce90e4d539b9-00-11lae77drh9zo.janeway.replit.dev/anime');
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
        body: `💞 = 𝐘́ 𝐍𝐠𝐡𝐢̃𝐚 𝐋𝐚̀𝐦 𝐍𝐠𝐮̛𝐨̛̀𝐢 = 💞\n\n🌸──── •❤️‍🔥• ────🌸\n\n${daoly}\n\n🎀──── •❤️‍🔥• ────🎀`,
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