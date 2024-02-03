module.exports.config = {
  name: "pinterest",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Sam",
  description: "tải nhạc hoặc tìm kiếm ảnh trên pinterest",
  commandCategory: "THÀNH VIÊN",
  usages: "down + url/ name - number",
  cooldowns: 0
}
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "pin1.jpeg")) request("https://i.imgur.com/Q25NX7S.jpeg").pipe(fs.createWriteStream(dirMaterial + "pin1.jpeg"));
                                                               }
module.exports.run = async function ({ api, event, args }) {
  const a = require("axios");
  const r = require('request');
  const fs = require("fs-extra");
  const short = require("tinyurl").shorten;
  const p = global.config.PREFIX;
  const t = module.exports.config.name;
  if (!args[0]) return api.sendMessage({body:`====『 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 』====\n→ 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝘂̛̃𝗻𝗴 𝗰𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝘀𝗮𝗼:\n\n💬 ${p}𝗽𝗶𝗻 𝘀𝗲𝗮𝗿𝗰𝗵: 𝗧𝘂̛̀ 𝗸𝗵𝗼𝗮́ 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 - 𝘀𝗼̂́ 𝗮̉𝗻𝗵\n🔰 ${p}𝗽𝗶𝗻 𝗱𝗼𝘄𝗻 + 𝗹𝗶𝗻𝗸: 𝘁𝗮̉𝗶 𝗮̉𝗻𝗵/𝘃𝗱 𝗰𝗼́ 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸 `,attachment: fs.createReadStream(__dirname + `/noprefix/pin1.jpeg`)}, event.threadID, event.messageID);
  if (args[0] == "down") {
    var data = require("qs").stringify({
      'url': args[1]
    });
    const o = {
      method: 'POST',
      url: 'https://www.expertsphp.com/twitter-video-downloader.php',
      headers: {
        'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33'
      },
      data
    };

    const res = await a(o);
    const newData = res.data;
    const url = newData.split('<td><a href="')[1].split('"')[0];
    const t = (await a.get(url, {
      responseType: "stream"
    })).data;
    return api.sendMessage({
      body: "Url: " + await short(url),
      attachment: t
    }, event.threadID)
  };
  const input = args.join(" ").split("-");
  var headers = {
      'authority': 'www.pinterest.com',
      'cache-control': 'max-age=0',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
      'sec-gpc': '1',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'same-origin',
      'sec-fetch-dest': 'empty',
      'accept-language': 'en-US,en;q=0.9',
      'cookie': 'csrftoken=92c7c57416496066c4cd5a47a2448e28; g_state={"i_l":0}; _auth=1; _pinterest_sess=TWc9PSZBMEhrWHJZbHhCVW1OSzE1MW0zSkVid1o4Uk1laXRzdmNwYll3eEFQV0lDSGNRaDBPTGNNUk5JQTBhczFOM0ZJZ1ZJbEpQYlIyUmFkNzlBV2kyaDRiWTI4THFVUWhpNUpRYjR4M2dxblJCRFhESlBIaGMwbjFQWFc2NHRtL3RUcTZna1c3K0VjVTgyejFDa1VqdXQ2ZEQ3NG91L1JTRHZwZHNIcDZraEp1L0lCbkJWUytvRis2ckdrVlNTVytzOFp3ZlpTdWtCOURnbGc3SHhQOWJPTzArY3BhMVEwOTZDVzg5VDQ3S1NxYXZGUEEwOTZBR21LNC9VZXRFTkErYmtIOW9OOEU3ektvY3ZhU0hZWVcxS0VXT3dTaFpVWXNuOHhiQWdZdS9vY24wMnRvdjBGYWo4SDY3MEYwSEtBV2JxYisxMVVsV01McmpKY0VOQ3NYSUt2ZDJaWld6T0RacUd6WktITkRpZzRCaWlCTjRtVXNMcGZaNG9QcC80Ty9ZZWFjZkVGNURNZWVoNTY4elMyd2wySWhtdWFvS2dQcktqMmVUYmlNODBxT29XRWx5dWZSc1FDY0ZONlZJdE9yUGY5L0p3M1JXYkRTUDAralduQ2xxR3VTZzBveUc2Ykx3VW5CQ0FQeVo5VE8wTEVmamhwWkxwMy9SaTNlRUpoQmNQaHREbjMxRlRrOWtwTVI5MXl6cmN1K2NOTFNyU1cyMjREN1ZFSHpHY0ZCR1RocWRjVFZVWG9VcVpwbXNGdlptVzRUSkNadVc1TnlBTVNGQmFmUmtrNHNkVEhXZytLQjNUTURlZXBUMG9GZ3YwQnVNcERDak16Nlp0Tk13dmNsWG82U2xIKyt5WFhSMm1QUktYYmhYSDNhWnB3RWxTUUttQklEeGpCdE4wQlNNOVRzRXE2NkVjUDFKcndvUzNMM2pMT2dGM05WalV2QStmMC9iT055djFsYVBKZjRFTkRtMGZZcWFYSEYvNFJrYTZSbVRGOXVISER1blA5L2psdURIbkFxcTZLT3RGeGswSnRHdGNpN29KdGFlWUxtdHNpSjNXQVorTjR2NGVTZWkwPSZzd3cwOXZNV3VpZlprR0VBempKdjZqS00ybWM9; _b="AV+pPg4VpvlGtL+qN4q0j+vNT7JhUErvp+4TyMybo+d7CIZ9QFohXDj6+jQlg9uD6Zc="; _routing_id="d5da9818-8ce2-4424-ad1e-d55dfe1b9aed"; sessionFunnelEventLogged=1'
    };
if (args[0] == "search") {

  var o = {
      url: 'https://www.pinterest.com/search/pins/?q=' + (encodeURIComponent(input[0])) + '&rs=typed&term_meta[]=' + (encodeURIComponent(input[0])) + '%7Ctyped',
      headers
    };
  async function req(e, r, b) {
    let img = [];
    let msg = '';
    let num = 0;
    if (!e && r.statusCode == 200) {
      msg += `Có ${input[1]} cho từ khóa ${input[0]}:\n`;
      const ar = b.match(/https:\/\/i\.pinimg\.com\/originals\/[^.]+\.jpg/g);
      for (i = 0; i < input[1]; i++){
        msg += `\n${num+=1} - ${await short(ar[i])}`;
        const t = (await a.get(`${ar[i]}`, {
          responseType: "stream"
        })).data;
        img.push(t);
      };
      return api.sendMessage({body: msg, attachment: img}, event.threadID, event.messageID)
    }
  }
  r(o, req);
}
}