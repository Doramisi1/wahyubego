let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa yang mau di banned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `berhasil ban`, m)
}
handler.help = ['banuser']
handler.tags = ['premium']
handler.command = /^banuser$/i
handler.premium = true

module.exports = handler
