  module.exports.config = {
    name: "dịch",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Translate languages",
    commandCategory: "Tiện ích",
    usages: "[Translate all languages] [Text]",
    cooldowns: 5,
    dependencies: {
      request: ""
    }
  };

  module.exports.run = async ({ api, event, args }) => {
    const request = global.nodemodule["request"];

    if (args[0] && ["help"].includes(args[0].trim())) {
      const allContent = 
`Abkhazian	ab
Afar	aa
Afrikaans	af
Albanian	sq
Amharic	am
Arabic	ar
Aragonese	an
Armenian	hy
Assamese	as
Aymara	ay
Azerbaijani	az
Bashkir	ba
Basque	eu
Bengali (Bangla)	bn
Bhutani	dz
Bihari	bh
Bislama	bi
Breton	br
Bulgarian	bg
Burmese	my
Byelorussian (Belarusian)	be
Campuchia	km
Catalan	ca
Cherokee	
Chewa	
Tiếng Trung Quốc	zh
Tiếng Trung Quốc (Giản thể)	zh-Hans
Tiếng Trung Quốc (Phồn thể)	zh-Hant
Corsican	co
Croatian	hr
Séc	cs
Tiếng Đan mạch	da
Divehi	
Tiếng Hà Lan	nl
Edo	
Tiếng Anh	en
Esperanto	eo
Estonian	et
Faeroese	fo
Farsi	fa
Fiji	fj
Tiếng Phần Lan	fi
Flemish	
Tiếng Pháp	fr
Frisian	fy
Fulfulde	
Galician	gl
Gaelic (Scottish)	gd
Gaelic (Manx)	gv
Georgian	ka
Tiếng Đức	de
Tiếng Hy Lạp	el
Greenlandic	kl
Guarani	gn
Gujarati	gu
Haitian Creole	ht
Hausa	ha
Tiếng Hawaii	
Hebrew	he, iw
Hindi	hi
Hungarian	hu
Ibibio	
Icelandic	is
Ido	io
Igbo	
Tiếng Indonesia	id, in
Interlingua	ia
Interlingue	ie
Inuktitut	iu
Inupiak	ik
Irish	ga
Tiếng Ý	it
Tiếng Nhật	ja
Javanese	jv
Kannada	kn
Kanuri	
Kashmiri	ks
Kazakh	kk
Kinyarwanda (Ruanda)	rw
Kirghiz	ky
Kirundi (Rundi)	rn
Konkani	
Tiếng Hàn Quốc ko
Kurdish	ku
Tiếng Lào	lo
Latin	la
Latvian (Lettish)	lv
Limburgish ( Limburger)	li
Lingala	ln
Lithuanian	lt
Macedonian	mk
Malagasy	mg
Malay	ms
Malayalam	ml
Maltese	mt
Maori	mi
Marathi	mr
Moldavian	mo
Mongolian	mn
Nauru	na
Tiếng Nepal	ne
Norwegian	no
Occitan	oc
Oriya	or
Oromo (Afaan Oromo)	om
Papiamentu	
Pashto (Pushto)	ps
Polish	pl
Tiếng Bồ Đào Nha	pt
Punjabi	pa
Quechua	qu
Rhaeto-Romance	rm
Romanian	ro
Tiếng Nga	ru
Sami (Lappish)	
Samoan	sm
Sangro	sg
Sanskrit	sa
Serbian	sr
Serbo-Croatian	sh
Sesotho	st
Setswana	tn
Shona	sn
Sichuan Yi	ii
Sindhi	sd
Sinhalese	si
Siswati	ss
Slovak	sk
Slovenian	sl
Somali	so
Tiếng Tây Ban Nha	es
Sundanese	su
Swahili (Kiswahili)	sw
Tiếng Thụy Điển	sv
Syriac	
Tagalog	tl
Tajik	tg
Tamazight	
Tamil	ta
Tatar	tt
Telugu	te
Tiếng Thái Lan	th
Tibetan	bo
Tigrinya	ti
Tonga	to
Tsonga	ts
Tiếng Thổ Nhĩ Kỳ	tr
Turkmen	tk
Twi	tw
Uighur	ug
Ukrainian	uk
Urdu	ur
Uzbek	uz
Venda	
Tiếng Việt Nam	vi
Volapük	vo
Wallon	wa
Welsh	cy
Wolof	wo
Xhosa	xh
Yi	
Yiddish	yi, ji
Yoruba	yo
Zulu	   zu`;

          api.sendMessage(`${allContent}`, event.threadID, event.messageID);
        }
    
var content = args.join(" ");
if (content.length == 0 && event.type != "message_reply") return global.utils.throwError(this.config.name, event.threadID,event.messageID);
var translateThis = content.slice(0, content.indexOf(" ->"));
var lang = content.substring(content.indexOf(" -> ") + 4);
if (event.type == "message_reply") {
translateThis = event.messageReply.body
if (content.indexOf("-> ") !== -1) lang = content.substring(content.indexOf("-> ") + 3);
else lang = global.config.language;
}
else if (content.indexOf(" -> ") == -1) {
translateThis = content.slice(0, content.length)
lang = global.config.language;
}
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${translateThis}`), (err, response, body) => {
if (err) return api.sendMessage("⚠️Đ𝙖̃ 𝙨𝙖̉𝙮 𝙧𝙖 𝙡𝙤̂̃𝙞 𝙫𝙚̂̀ 𝙡𝙚̣̂𝙣𝙝 𝙢𝙖̀ 𝙗𝙖̣𝙣 đ𝙖𝙣𝙜 𝙨𝙪̛̉ 𝙙𝙪̣𝙣𝙜 𝙫𝙪𝙞 𝙡𝙤̀𝙣𝙜 𝙨𝙪̛̉ 𝙙𝙪̣𝙣𝙜 đ𝙤𝙖̣𝙣 𝙩𝙞𝙣 𝙣𝙝𝙖̆́𝙣 𝙠𝙝𝙖́𝙘", event.threadID, event.messageID);
var retrieve = JSON.parse(body);
var text = '';
retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
api.sendMessage(`${text}`, event.threadID, event.messageID);
});
}