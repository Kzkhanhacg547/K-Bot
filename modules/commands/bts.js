module.exports.config = {
  name: "bts",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tài",
  description: "Random video",
  commandCategory: "Noprefix",
  usages: "api",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("taekook")==0 || (event.body.indexOf("bts")==0) ||
event.body.indexOf("Bts")==0 ||
event.body.indexOf("Taekook")==0 ||
event.body.indexOf("9597")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
     "https://imgur.com/y9zItnH.jpg",
      "https://imgur.com/saSv6ax.jpg",
      "https://imgur.com/S82KaHo.jpg",
      "https://imgur.com/tXovhs7.jpg",
      "https://imgur.com/GMG1p0y.jpg",
      "https://imgur.com/2atcow9.jpg",
      "https://imgur.com/QWMPRlC.jpg",
      "https://imgur.com/7YX8TeB.jpg",
      "https://imgur.com/iOFnTCg.jpg",
      "https://imgur.com/BbnfQ62.jpg",
      "https://imgur.com/2mQNgHd.jpg",
      "https://imgur.com/7hNywYG.jpg",
      "https://imgur.com/PKfVg6w.jpg",
      "https://imgur.com/qtaAEEK.jpg",
      "https://imgur.com/cUNZQK4.jpg",
      "https://imgur.com/H7UjCFW.jpg",
      "https://imgur.com/eb2xCxu.jpg",
      "https://imgur.com/hSbMmUH.jpg",
      "https://imgur.com/zki9aEt.jpg",
      "https://imgur.com/LZAPyOC.jpg",
      "https://imgur.com/TajvxLr.jpg",
      "https://imgur.com/fvTvDpF.jpg",
      "https://imgur.com/nOHVNmO.jpg",
      "https://imgur.com/oDleqXV.jpg",
      "https://imgur.com/4uUcQR6.jpg",
      "https://imgur.com/tiz3ZFi.jpg",
      "https://imgur.com/mwxurS5.jpg",
          ];
     var callback = () => api.sendMessage({body:`Phái Phái, chảy nước miến, chảy nước miến \n\nSố ảnh bts: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };