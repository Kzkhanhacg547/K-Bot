module.exports.config = {
    name: "rsexp",
    version: "1.0.2",
    hasPermssion: 2,
    credits: "Heo Rừng mod",
    description: "Phiên bản nâng cấp từ xóa tiền nhóm lên xóa tiền all",
    commandCategory: "Admin",
    usages: "UID kèm ID + số tin nhắn hoặc mỗi resetexp",
    cooldowns: 5
  };
  
  module.exports.run = async function ({ api,event,Currencies,Users,args }) {
          if(args[0]=="UID"){
          var id = args[1];
          var cut = args[2];
          let nameeee = (await Users.getData(id)).name
             return api.sendMessage(`[Eheheh] => Đã Thay Đổi Số Dư Của ${nameeee} Thành ${cut} Đô`, event.threadID, () => Currencies.setData(id, { exp: parseInt(cut)}), event.messageID)	
  
          }
       var x = global.data.allCurrenciesID;
        for (let ex of x) {
              await Currencies.setData(ex, { exp: parseInt(0) });
              var eheh = (await Currencies.getData(ex)).exp;
              console.log(eheh)
           }
      return api.sendMessage("[Eheheh] => Đã xóa toàn bộ số tin nhắn trên hệ thống  !",event.threadID);
  }