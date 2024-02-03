exports.config = {
    name: 'antithread',
    version: '0.0.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: '',
    commandCategory: 'Admin',
    usages: '[]',
    cooldowns: 3
};
let path = __dirname+'/cache/status-anti.nam.json';
let data = {};
let save = ()=>require('fs').writeFileSync(path, JSON.stringify(data));

if (!require('fs').existsSync(path))save(); else data = JSON.parse(require('fs').readFileSync(path));

exports.run = o=>(c=t=>!(data[o.event.threadID]||{})[t]?'off':'on',o.api.sendMessage(`==== 『Anti 』 ====
┏━━━━━━━━━━━━━┓
┣➤1.Anti namebox : cấm đổi tên nhóm - ${c('nb')}
┣➤2.Anti avtbox : cấm đổi ảnh nhóm - ${c('at')}
┣➤3.Anti name : cấm đổi biệt danh - ${c('bd')}
┣➤4.Anti out: cấm out chùa - ${c('o')}
┣➤5.Qtv only - ${c('ato')}
┣➤6.Admin only - ${c('abo')}
┗━━━━━ `, o.event.threadID, (err, res)=>(res.name = exports.config.name, res.o = o, global.client.handleReply.push(res))));
exports.handleReply = ({
    handleReply: _,
    event: {
        senderID: sid,
        threadID: tid,
        args,
    },
    api,
})=> {
    let send = msg=>api.sendMessage(msg, tid);

    if (_.o.event.senderID != sid)return;
    if (!data[tid])data[tid] = {};

    let t = data[tid];
    let msg;

    switch (args[0]) {
        case '1':
            t.nb = !t.nb?true: false;
            msg = `${t.nb?'bật': 'tắt'} chống đổi tên nhóm`;
            break;
        case '3':
            t.bd = !t.bd?true: false;
            msg = `${t.bd?'bật': 'tắt'} chống đổi biệt danh`;
            break;
        case '4':
            t.o = !t.o?true: false;
            msg = `${t.o?'bật': 'tắt'} chống rời nhóm`;
            break;
        case '5':
            t.ato = !t.ato?true:false;
            msg = `${t.ato?'bật':'tắt'} chỉ QTV nhóm/bot dùng lệnh`;
            break;
        case '6':
            t.abo = !t.abo?true:false;
            msg = `${t.abo?'bật':'tắt'} chỉ QTV bot dùng lệnh`;
            break;
        default:
            msg = `chưa hỗ trợ`;
            break;
    };

    save();
    send(msg);
};