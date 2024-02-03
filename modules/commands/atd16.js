let axios = require('axios');
let fs = require('fs');

let is_url = url=>/^http(s|):\/\//.test(url);
let stream_url = (url, type)=>axios.get(url, {
  responseType: 'arraybuffer'
}).then(res=> {
  let path = __dirname+'/cache/'+Date.now()+'.'+type;

  fs.writeFileSync(path, res.data);
  setTimeout(p=>fs.unlinkSync(p), 1000*60, path);

  return fs.createReadStream(path);
});
let data = {};
let path = __dirname+'/cache/status_auto_down.json';
let save = ()=>fs.writeFileSync(path, JSON.stringify(data));

if (!fs.existsSync(path))save(); else data = require(path);

let all_app = [
  'tiktok',
  'facebook',
  'instagram',
  'youtube',
  'pinterest',
  'imgur'
];

exports.config = {
  name: 'atd16',
  version: '0.0.1',
  hasPermssion: 2,
  credits: 'DC-Nam',
  description: '.',
  commandCategory: 'Hệ Thống',
  usages: '[]',
  cooldowns: 3
};
exports.run = function(o) {
  let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
  send(`[====[ AUTO ]====]\n\n${all_app.map(($, i)=>`${i+1}. ${$}`).join('\n')}\n\n-> Reply STT on/off (STT có thể cách nhau để on/off cùng lúc)`, (err, res)=> {
    res.name = exports.config.name,
    res.event = o.event;
    global.client.handleReply.push(res);
  });

};
exports.handleEvent = async function(o) {
  try {
    let status = data[o.event.threadID] || {};
    let a = o.event.args[0];
    let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
    let head = app=>`[====[ ${app.toUpperCase()} AUTO DOWN ]====]\n\n`;

    if (!is_url(a))return;
    if (!!status.tiktok && /tiktok\.com/.test(a)) {
      let res = await axios.post(`https://www.tikwm.com/api/`, {
        url: a
      });
      if (res.data.code != 0)throw res;

      let tiktok = res.data.data;
      let attachment = [];

      if (typeof tiktok.images == 'object')for (let image_url of tiktok.images)attachment.push(await stream_url(image_url, 'jpg')); else attachment.push(await stream_url(tiktok.play, 'mp4'));

      send({
        body: `${head('tiktok')}- Tiêu Đề: ${tiktok.title}\n- Lượt Thích: ${tiktok.digg_count}\n- Thời Lượng: ${(tiktok.duration)} Giây\n- Tác Giả: ${tiktok.author.nickname} (${tiktok.author.unique_id})`,
        attachment,
      });
    } else
      if (!!status.facebook && /facebook\.com/.test(a)) {
      let res = await axios.get(`https://web.duongkum999.tech/fb/info-post?url=${a}`);
      let fb = res.data;
      let fb_vd = fb.attachment.filter($=>$.__typename == 'Video');
      let fb_img = fb.attachment.filter($=>$.__typename == 'Photo');

      if (fb_vd.length > 0) {
        let form_msg = {};
        form_msg.body = fb.message;
        form_msg.attachment = [];
        for (let vd of fb_vd)form_msg.attachment.push(await stream_url(vd.playable_url_quality_hd, 'mp4'));

        send(form_msg);
      };
      if (fb_img.length > 0) {
        let form_msg = {};
        form_msg.body = fb.message;
        form_msg.attachment = [];
        for (let img of fb_img)form_msg.attachment.push(await stream_url((img.photo_image || img.image).uri, 'jpg'));

        send(form_msg);
      };
    } else
      if (!!status.youtube && /youtube\.com/.test(a)) {} else
      if (!!status.instagram && /instagram\.com/.test(a)) {} else
      if (!!status.pinterest && /(pinterest|pinimg)\.com/.test(a)) {
      if (/\.[^/]+$/.test(a)) {
        send({
          body: `${head('pinterest')}`,
          attachment: await stream_url(a, a.split('.').pop())
        });
      } else {
        let src = (await axios.get(a)).data.replace(/^[^]+,"image":"/, '').split('"')[0];
        send({
          body: `${head('pinterest')}- Link: ${src}`,
          attachment: await stream_url(src, src.split('.').pop()),
        });
      };

    } else
      if (!!status.imgur && /imgur\.com/.test(a)) {
      send({
        body: head('imgur'),
        attachment: await stream_url(a, a.split('.').pop()),
      })
    }

  }catch(e) {
    console.log(e);
  };
};
exports.handleReply = function(o) {
  let _ = o.handleReply;
  let t = o.event.threadID;
  let send = (msg, callback)=>o.api.sendMessage(msg, t, callback, o.event.messageID);

  if (o.event.senderID != _.event.senderID)return;
  if (!data[t])data[t] = {};

  let status_input = o.event.args.pop();

  for (let i of o.event.args)data[t][all_app[i-1]] = status_input == 'on'?true: false;

  save();
  send(`Hoàn tất.`);
};