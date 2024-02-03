  const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 1,
  credits: "",
  description: "goibot",
  commandCategory: "AUTOREP",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["Bạn kêu tôi có việc gì.?", "Tôi yêu bạn.", "Yêu em <3", "Hi, chào con vợ.", "Vợ gọi có việc gì không.?", "Sử dụng Callad để liên lạc với Admin.", "Em là BOT cute nhất hành tinh.", "Nói gì thế bạn yêu.", "Em đây.", "Yêu bạn quá.", "Sao đó bạn yêu.", "Đang quay tay đừng gọi.", "Gì thế.", "Sao thế công chúa.", "Đừng làm em đau.", "Rên với em nhé a á á á.", "Có ai thấy vợ tôi đâu không.", "Làm tí rượu không bạn.", "Cậu cô đơn ko.?", "Mệt không bạn yêu.", "Banh ra đi bạn.", "Em mệt lắm rồi.", "Đừng khen em ngại quá.", "Đừng spam em nha, Cậu chủ em mệt lắm rồi.", "Cút ra.", "Đừng đè em mạnh.", "Đưa tiền đây.", "Yêu cậu như một cực hình.\nNhấp lên nhấp xuống hai mình cùng rên.", "Spam à.", "Yêu em nha.", "Chồng em đây rồi."];
  var rand = tl[Math.floor(Math.random() * tl.length)]


  if ((event.body.toLowerCase() == "oke") || (event.body.toLowerCase() == "oke")) {
    return api.sendMessage("Oke bạn tôi.", threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ôi cái gì.?", threadID);
  };

  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("Ối cái gì.?", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 cái BCS.", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("Ừ à.\nLáo thế.\nKhông biết dạ à.", threadID);
  };

  if ((event.body.toLowerCase() == "vl") || (event.body.toLowerCase() == "vl")) {
    return api.sendMessage("Ý bạn là Vãi Lồn à.?", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("Uk à.\nLáo thế.\nKhông biết dạ à.", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Cậu ngoan đấy xứng đáng có 10 người yêu.", threadID);
  };

  if ((event.body.toLowerCase() == "vc") || (event.body.toLowerCase() == "vc")) {
    return api.sendMessage("Ý bạn là Vãi Cặc à.?", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi.", threadID);
  };

  if ((event.body.toLowerCase() == "đâu") || (event.body.toLowerCase() == "dau")) {
    return api.sendMessage("Bố ai biết ở đâu mà hỏi.", threadID);
  };

  if ((event.body.toLowerCase() == "thề") || (event.body.toLowerCase() == "the")) {
    return api.sendMessage("Bạn thề thì bố tôi cũng không dám tin.", threadID);
  };

  if ((event.body.toLowerCase() == "rồi") || (event.body.toLowerCase() == "roi")) {
    return api.sendMessage("Đã xong đâu mà rồi.", threadID);
  };

  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "a")) {
    return api.sendMessage("À cái gì.", threadID);
  };

  if ((event.body.toLowerCase() == "mua") || (event.body.toLowerCase() == "mua")) {
    return api.sendMessage("Mua làm gì tốn tiền.\nCái này Bot có đầy.\nBạn cần thì Bot tặng 1 cái.", threadID);
  };

  if ((event.body.toLowerCase() == "không") || (event.body.toLowerCase() == "khong")) {
    return api.sendMessage("Tại sao lại không.?", threadID);
  };

  if ((event.body.toLowerCase() == "chuẩn") || (event.body.toLowerCase() == "chuan ")) {
    return api.sendMessage("Chả thế.", threadID);
  };

  if ((event.body.toLowerCase() == "mượn") || (event.body.toLowerCase() == "muon")) {
    return api.sendMessage("Đừng có cho nó mượn.\nBot cho nó mượn mấy lần mà toàn mất.", threadID);
  };

  if ((event.body.toLowerCase() == "xoá bot") || (event.body.toLowerCase() == "kick bot")) {
    return api.sendMessage("Bạn biết nếu đuổi Bot là Bot buồn lắm không.?", threadID);
  };

  if ((event.body.toLowerCase() == "tao") ||  (event.body.toLowerCase() == "tao")) {
    return api.sendMessage("Mày làm sao.", threadID);
  };

  if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "ai")) {
    return api.sendMessage("Bot chứ còn ai nữa.", threadID);
  };

   if ((event.body.toLowerCase() == "súc vật") || (event.body.toLowerCase() == "suc vat")) {
    return api.sendMessage("Sao lại chửi nặng lời thế.", threadID);
  };

  if ((event.body.toLowerCase() == "gdtg") || (event.body.toLowerCase() == "gdtg")) {
    return api.sendMessage("Gdtg qua Admin Bot cho an toàn bạn nhé.", threadID);
  };

  if ((event.body.toLowerCase() == "vcl") || (event.body.toLowerCase() == "vcl")) {
    return api.sendMessage("Vãi cả Lồn.", threadID);
  };

  if ((event.body.toLowerCase() == "tag") || (event.body.toLowerCase() == "tag")) {
    return api.sendMessage("Tag Bot vào với.", threadID);
  };

  if ((event.body.toLowerCase() == "nó") || (event.body.toLowerCase() == "no")) {
    return api.sendMessage("Đâu, nó đâu.", threadID);
  };

  if ((event.body.toLowerCase() == "qua đây") || (event.body.toLowerCase() == "qua day")) {
    return api.sendMessage("Qua đâu.?", threadID);
  };

  if ((event.body.toLowerCase() == "ko") || (event.body.toLowerCase() == "ko")) {
    return api.sendMessage("Tại sao lại không.?", threadID);
  };

 if ((event.body.toLowerCase() == "èo") || (event.body.toLowerCase() == "eo")) {
    return api.sendMessage("Èo ôi.\nKinh chết đi được ý.", threadID);
  };

  if ((event.body.toLowerCase() == "thèm") || (event.body.toLowerCase() == "them")) {
    return api.sendMessage("Liếm đi.", threadID);
  };

  if ((event.body.toLowerCase() == "um") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage("Um à.\nLáo thế.\nKhông biết dạ à.", threadID);
  };

  if ((event.body.toLowerCase() == "sủa") || (event.body.toLowerCase() == "sua")) {
    return api.sendMessage("Về bảo con chó cái đẻ ra mày sủa cho mà nghe nhé.", threadID);
  };

  if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "ok")) {
    return api.sendMessage("OK là tên của hãng bao cao su mà Bot hay thổi bong bóng.", threadID);
  };

  if ((event.body.toLowerCase() == "adu") || (event.body.toLowerCase() == "Adu")) {
    return api.sendMessage("Ghê phết đấy.", threadID);
  };

  if ((event.body.toLowerCase() == "má") || (event.body.toLowerCase() == "ma")) {
    return api.sendMessage("Má đây con.", threadID);
  };

  if ((event.body.toLowerCase() == "nhầm") || (event.body.toLowerCase() == "nham")) {
    return api.sendMessage("️Nhầm mà xong à.?\nXin lỗi đi chứ.", threadID);
  };

  if ((event.body.toLowerCase() == "vc") || (event.body.toLowerCase() == "vc")) {
    return api.sendMessage("Ý của bạn là Vãi Cặc à.?", threadID);
  };

  if ((event.body.toLowerCase() == "cút") || (event.body.toLowerCase() == "cut")) {
    return api.sendMessage("Cút thằng cụ mày.\nMày bảo ai đấy.?", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi cái gì ra thế.?", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("Ơi. Sao thế.", threadID);
  };

  if ((event.body.toLowerCase() == "câm") || (event.body.toLowerCase() == "Câm")) {
    return api.sendMessage("Câm cái địt mẹ mày.", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Có cái link nào mlem thì nhớ gửi cho Admin của Bot với nhé.", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cúu đéo gì.\nNgu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "vâng") || (event.body.toLowerCase() == "vang")) {
    return api.sendMessage("Eo ơi.\nNghe yêu thế.", threadID);
  };

  if ((event.body.toLowerCase() == "đi") || (event.body.toLowerCase() == "di")) {
    return api.sendMessage("Đi đâu.?", threadID);
  };

  if ((event.body.toLowerCase() == "mệt") || (event.body.toLowerCase() == "Mệt")) {
    return api.sendMessage("Cố gắng lên nhé bạn.\nDù thế nào thì Bot vẫn luôn ở cạnh bạn nè.", threadID);
  };  

  if ((event.body.toLowerCase() == "ơ") || (event.body.toLowerCase() == "o")) {
    return api.sendMessage("Ơ cái gì.", threadID);
  };

  if ((event.body.toLowerCase() == "đâu") || (event.body.toLowerCase() == "dau")) {
    return api.sendMessage("Đây chứ đâu.", threadID);
  };  

  if ((event.body.toLowerCase() == "uh") || (event.body.toLowerCase() == "Uh")) {
    return api.sendMessage("Uh à.\nLáo thế.\nKhông biết dạ à.", threadID);
  };

  if ((event.body.toLowerCase() == "xong") || (event.body.toLowerCase() == "xong")) {
    return api.sendMessage("Đã xong đâu.", threadID);
  };

  if ((event.body.toLowerCase() == "đcm") || (event.body.toLowerCase() == "dcm")) {
    return api.sendMessage("Địt mẹ mày.\nMày chửi ai đấy con chó.", threadID);
  };

  if ((event.body.toLowerCase() == "xạo") || (event.body.toLowerCase() == "xao")) {
    return api.sendMessage("️Chuẩn.\nNó là chúa xạo L*N.", threadID);
  };

  if ((event.body.toLowerCase() == "gì") || (event.body.toLowerCase() == "gi")) {
    return api.sendMessage("️Gì là gì.\nHỏi lắm thế.", threadID);
  };

  if ((event.body.toLowerCase() == "uy tín") || (event.body.toLowerCase() == "uy tin")) {
    return api.sendMessage("️Uy tín sao bằng Admin của Bot được.", threadID);
  };

  if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == ":))")) {
    return api.sendMessage("️Cười cái gì.", threadID);
  };

  if ((event.body.toLowerCase() == ":)") || (event.body.toLowerCase() == ":)")) {
    return api.sendMessage("️Cười cái gì.", threadID);
  };

  if ((event.body.toLowerCase() == ":)))") || (event.body.toLowerCase() == ":)))")) {
    return api.sendMessage("️Cười cái gì.", threadID);
  };

  if ((event.body.toLowerCase() == "có") || (event.body.toLowerCase() == "co")) {
    return api.sendMessage("️Có cái gì thế.", threadID);
  };

  if ((event.body.toLowerCase() == "đây") || (event.body.toLowerCase() == "day")) {
    return api.sendMessage("️Đâu.", threadID);
  };

  if ((event.body.toLowerCase() == "ê") || (event.body.toLowerCase() == "e")) {
    return api.sendMessage("️Sao.", threadID);
  };

  if ((event.body.toLowerCase() == "hả") || (event.body.toLowerCase() == "ha")) {
    return api.sendMessage("️Hả cái gì đọc cho kỹ vào.", threadID);
  };

  if ((event.body.toLowerCase() == "đù") || (event.body.toLowerCase() == "du")) {
    return api.sendMessage("️Ghê chưa.\nGhê chưa.\nGhê chưa.", threadID);
  };

  if ((event.body.toLowerCase() == "chờ") || (event.body.toLowerCase() == "cho")) {
    return api.sendMessage("️Nhanh lên, chậm chạp quá.", threadID);
  };

  if ((event.body.toLowerCase() == "giá") || (event.body.toLowerCase() == "gia")) {
    return api.sendMessage("️Tiền bạc gì bạn ơi.\nBot tặng bạn luôn đấy.", threadID);
  };

  if ((event.body.toLowerCase() == "Hay") || (event.body.toLowerCase() == "hay")) {
    return api.sendMessage("️Qúa tuyệt vời luôn ấy chứ.", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "ib") || (event.body.toLowerCase() == "ib")) {
    return api.sendMessage("️IB riêng làm gì, có gì thì nói ở đây luôn đi.", threadID);
  };

  if ((event.body.toLowerCase() == "Spam") || (event.body.toLowerCase() == "spam")) {
    return api.sendMessage("️Địt mẹ đứa nào spam đấy.", threadID);
  };

  if ((event.body.toLowerCase() == "rồi") || (event.body.toLowerCase() == "roi")) {
    return api.sendMessage("️Đã xong đâu mà rồi.", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Cười cái gì đấy.?", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️Cười cái gì đấy.?", threadID);
  };

  if ((event.body.toLowerCase() == "Ngu") || (event.body.toLowerCase() == "ngu")) {
    return api.sendMessage("️Ngu cái địt mẹ mày.", threadID);
  };

  if ((event.body.toLowerCase() == "Về") || (event.body.toLowerCase() == "về")) {
    return api.sendMessage("️Về đâu.?", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "kk") || (event.body.toLowerCase() == "kk")) {
    return api.sendMessage("️Cười cái gì đấy.?", threadID);
  };

  if ((event.body.toLowerCase() == "chốt") || (event.body.toLowerCase() == "chot")) {
    return api.sendMessage("️Chốt thì quất luôn bạn ơi.", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dmm")) {
    return api.sendMessage("️Bớt nói bậy lại đi bạn ơi.", threadID);
  };

  if ((event.body.toLowerCase() == "xin") || (event.body.toLowerCase() == "xin")) {
    return api.sendMessage("️Xin cái gì cơ.\nỞ đời làm gì có chuyện miễn phí.", threadID);
  };

  if ((event.body.toLowerCase() == "huhu") || (event.body.toLowerCase() == "huhu")) {
    return api.sendMessage("Cố lên bạn.\nMọi chuyện rồi cũng sẽ qua thôi vì có Bot ở đây rồi.", threadID);
  };

  if ((event.body.toLowerCase() == "sợ") || (event.body.toLowerCase() == "so")) {
    return api.sendMessage("Biết sợ là tốt.", threadID);
  };

  if ((event.body.toLowerCase() == "sao") || (event.body.toLowerCase() == "sao")) {
    return api.sendMessage("Sao là sao, bây giờ làm sao, sao là sao thế nào.", threadID);
  };

  if ((event.body.toLowerCase() == "out") || (event.body.toLowerCase() == "out")) {
    return api.sendMessage("Bạn ấy sắp out kìa.\nBật ANTIOUT đi QTV ơi.", threadID);
  };

  if ((event.body.toLowerCase() == "lâu quá") || (event.body.toLowerCase() == "lau qua")) {
    return api.sendMessage("Cố gắng chờ đi.", threadID);
  };

  if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "ok")) {
    return api.sendMessage("Ok bạn tôi.", threadID);
  };

  if ((event.body.toLowerCase() == "Đéo") || (event.body.toLowerCase() == "đéo")) {
    return api.sendMessage("Cái đéo gì.", threadID);
  };

  if ((event.body.toLowerCase() == "thật") || (event.body.toLowerCase() == "that")) {
    return api.sendMessage("Thật mà.\nBot thề luôn.", threadID);
  };

  if ((event.body.toLowerCase() == "Rep") || (event.body.toLowerCase() == "rep")) {
    return api.sendMessage("Chờ tí.", threadID);
  };

  if ((event.body.toLowerCase() == "xong chưa") || (event.body.toLowerCase() == "xong chua")) {
    return api.sendMessage("Từ từ chờ tôi tí bạn ơi.", threadID);
  };

  if ((event.body.toLowerCase() == "nhanh lên") || (event.body.toLowerCase() == "nhanh len")) {
    return api.sendMessage("Sắp xong rồi cố chờ tí nữa thôi.", threadID);
  };

  if ((event.body.toLowerCase() == "tôi") || (event.body.toLowerCase() == "toi")) {
    return api.sendMessage("Bạn làm sao.?", threadID);
  };

  if ((event.body.toLowerCase() == "Xin Link") || (event.body.toLowerCase() == "xin link")) {
    return api.sendMessage("Nhấn •AD để lấy link.", threadID);
  };

  if ((event.body.toLowerCase() == "ghê") ||  (event.body.toLowerCase() == "ghe")) {
    return api.sendMessage("Cũng bình thường thôi.", threadID);
  };

  if ((event.body.toLowerCase() == "Đây") ||  (event.body.toLowerCase() == "đây")) {
    return api.sendMessage("Đâu.", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("À ý mày bảo mày là Chó á hả.\nSủa đi tao nghe xem nào :)", threadID);
  };

  if (event.body.indexOf("...") == 0 || (event.body.indexOf("...") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
