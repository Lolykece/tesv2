let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [62885731657889]
│ •  [62885731657889]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler