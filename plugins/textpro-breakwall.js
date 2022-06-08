const textpro = require("../lib/textpro.js");
const axios = require ("axios")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args}) => {
    let txt = args.join` `
    	  if (!txt) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
    	  if (txt.length > 15) return conn.reply (m.chat, 'maksimal 15',m)
    textpro("https://textpro.me/break-wall-text-effect-871.html", [`${txt}`])
.then(async (data) => {
let au = `${data}`
console.log(data)
let buf = await getBuffer(data);
conn.reply(m.chat, 'Bentar',m)
conn.sendMessage(m.chat, buf, MessageType.image, { quoted: m, caption: wm} )
})
.catch(error => console.log(error));
}


handler.help = ['breakwall [teks]']
handler.tags = ['textpro']
handler.command = /^breakwall?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

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
