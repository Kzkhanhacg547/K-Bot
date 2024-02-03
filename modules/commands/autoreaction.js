let
[f] = ['fs'].map($=>require($)),
p = __dirname+'/cache/autoreactionuser.json',
d,
l = console.log,
e = id=>global.data.userName.get(id),
w = ()=>f.writeFileSync(p, JSON.stringify(d));

class Module {
    constructor(a) {
        this.config = a;
    };
    onLoad() {
        if (!f.existsSync(p))f.writeFileSync(p, '{}');
        d = JSON.parse(f.readFileSync(p));
    };
    run(o) {
        let
        {
            args,
            type,
            threadID: tid,
            senderID: sid
        } = o.event,
        id = type == 'message_reply'?o.event.messageReply.senderID: sid,
        s = (msg, callback)=>o.api.sendMessage(msg, tid, callback, o.event.messageID);
        args.shift();

        if (args == 0)return s(`=====『 𝐃𝐀𝐍𝐇 𝐒𝐀́𝐂𝐇 』=====\n◆━━━━━━━━━━━━━◆\n# [𝐃𝐞𝐥𝐞𝐭𝐞/𝐝]: 𝐱𝐨́𝐚 𝐢𝐝 𝐤𝐡𝐨̉𝐢 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡\n# {𝐈𝐜𝐨𝐧}: 𝐓𝐡𝐢𝐞̂́𝐭 𝐥𝐚̣̂𝐩 𝐢𝐜𝐨𝐧`);
        if (/list|l/.test(args[0]))return s(`=====『 𝐃𝐀𝐍𝐇 𝐒𝐀́𝐂𝐇 』=====\n◆━━━━━━━━━━━━━◆\n\n${Object.entries(d[tid]).map(($, i)=>`${i+1}. ${e($[0])}\n- 𝐈𝐜𝐨𝐧: ${$[1].join(', ')}`).join('\n\n')}\n\n- 𝐑𝐞𝐩𝐥𝐲 𝐒𝐓𝐓 đ𝐞̂̉ 𝐱𝐨́𝐚`, (err, msg)=>(msg.name = this.config.name, msg.t = sid, global.client.handleReply.push(msg)));
        if (/delete|d/.test(args[0])) {
            id = isFinite(args[1])?args[1]: id,
            delete d[tid][id],
            w();

            return s(`𝐃𝐞𝐥𝐞𝐭𝐞 ${id == sid?'𝐛𝐚̉𝐧 𝐭𝐡𝐚̂𝐧': e(id)} - ${id} 𝐤𝐡𝐨̉𝐢 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐭𝐮̛̣ đ𝐨̣̂𝐧𝐠 𝐭𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜`);
        };
        if (!args[0] || /[a-zA-Z0-9]/.test(args.join(' ')))return s(`𝐍𝐡𝐚̣̂𝐩 𝐢𝐜𝐨𝐧 𝐠𝐢̀ đ𝐨́ 𝐜𝐡𝐮̛𝐚?`);
        if (!d[tid])d[tid] = {};

        d[tid][id] = args,
        w();

        return s(`Đ𝐚̃ 𝐭𝐡𝐢𝐞̂́𝐭 𝐥𝐚̣̂𝐩 𝐭𝐮̛̣ 𝐭𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 ${args.length > 1?'𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧': ''} [ ${args.join(', ')} ] 𝐤𝐡𝐢 ${id == sid?'𝐛𝐚̉𝐧 𝐭𝐡𝐚̂𝐧': e(id)} - ${id} 𝐧𝐡𝐚̆́𝐧 𝐭𝐢𝐧.`)
    };
    handleReply(o) {
        let
        _ = o.handleReply,
        b = o.event.body,
        t = o.event.threadID,
        n = d[t],
        i = [];

        if (!b || isNaN(b))return;

        b = b.split(' '),
        b.forEach($=>i.push(Object.keys(n)[$-1])),
        i.forEach($=>delete n[$]),
        w();
        o.api.sendMessage(`done`, t);
    };
    handleEvent(o) {
        let
        {
            threadID: tid,
            senderID: sid
        } = o.event,
        n = d[tid];

        if (!n)return;
        if (!n[sid])return;

        return o.api.setMessageReaction(n[sid][Math.random()*n[sid].length<<0], o.event.messageID, err=>!!err?l(err): '', true);
    };
};

module.exports = new Module({
    name: 'autoreaction',
    version: '1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: '.',
    commandCategory: 'Tiện ích',
    usages: '[.]',
    cooldowns: 0,
});