const textpro = require("../lib/textpro.js");
const axios = require ("axios")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args}) => {
    let txt = args.join` `
    	  if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
    let items = ["https://textpro.me/pink-sparkling-jewelry-text-effect-899.html","https://textpro.me/blue-sparkling-jewelry-text-effect-898.html","https://textpro.me/green-sparkling-jewelry-text-effect-897.html","https://textpro.me/purple-sparkling-jewelry-text-effect-896.html","https://textpro.me/gold-sparkling-jewelry-text-effect-895.html","https://textpro.me/red-sparkling-jewelry-text-effect-894.html","https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html","https://textpro.me/3d-luxury-gold-text-effect-online-1003.html","https://textpro.me/peridot-stone-text-effect-916.html"];
    let cewe = items[Math.floor(Math.random() * items.length)]
    textpro(`${cewe}`, [`${txt}`])
.then(async (data) => {
let au = `${data}`
console.log(data)
let buf = await getBuffer(data);
conn.reply(m.chat, 'Bentar',m)
conn.sendMessage(m.chat, buf, MessageType.image, { quoted: m, caption: wm} )
})
.catch(error => console.log(error));
}
handler.help = ['steel [text]']
handler.tags = ['textpro']
handler.command = /^steel$/i
module.exports = handler

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
