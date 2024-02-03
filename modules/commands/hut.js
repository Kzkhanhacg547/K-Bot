module.exports.config = {
  name: "hút",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vthien",
  description: "Random video",
  commandCategory: "Random-mp4",
  usages: "api",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Hút")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/aubae9N.mp4",
      "https://i.imgur.com/naSeN2o.mp4",
      "https://i.imgur.com/HqGY6qq.mp4",
      "https://i.imgur.com/V101sLy.mp4",
      "https://i.imgur.com/QJex3Cd.mp4",
      "https://i.imgur.com/RC8REpB.mp4",
      "https://i.imgur.com/WtudxrS.mp4",
      "https://i.imgur.com/NX22Pg3.mp4",
      "https://i.imgur.com/GSdBavZ.mp4",
      "https://i.imgur.com/lZCrkgJ.mp4",
      "https://i.imgur.com/VUhLjvD.mp4",
      "https://i.imgur.com/crqwMw1.mp4"
          ];
     var callback = () => api.sendMessage({body:`𝐇𝐮́𝐭 𝐁𝐨̂̀ Đ𝐚̀=))))))`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };