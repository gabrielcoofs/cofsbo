/*Salve Rapaziada
Fiz essa bot para ajuda-los
Feito por: Cofs
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

///_ARQUIVOS PASTA LIB
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const fs = require('fs')
const { recognize } = require('./lib/ocr')

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ VOLDER BOTZ ]==============================================================*/                    	
const { 
	bayarLimit,
	limitAdd
} = require('./lib/limitatm.js') 

limitawal = 100
ky_ttt = []
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

//_MÓDULOS NPM
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')

//_GRUPOS JSON

let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const _Elite = JSON.parse(fs.readFileSync('./database/json/Elite.json')) 

//_COMANDOS GERAIS
const { ccofs } = require('./src/ccofs')
const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, islamMenu, sertiMenu, ceritaMenu, makerMenu,dewasaMenu, toolsMenu} = require('./message/help.js')
const { tabelamenu } = require('./src/tabelamenu')
const { cofs } = require('./src/cofs')
const { jogosdarodada } = require('./src/jogosdarodada') 

//_FIM DO GERAIS
let fakeimage = fs.readFileSync("./media/ganteng.jpg")

img = setting.img
ppbot = setting.ppbot
const botName = setting.botName
targetpc = setting.ownerNumberr
owner = targetpc
banChats = true
ownername = setting.ownername
thumbnail = setting.thumb
fthumb = setting.fakethumb
hit_today = []
fake = setting.fake
cr = setting.cr
numbernye = '0'
msgId="B826873620DD5947E683E3ABE663F263"
blocked = []
petik = '```'
prefix = setting.prefix

let prefa = setting.prefix

let menusimple = false
offline = false

//_FUNCTIONS
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        
        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
        const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            client.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA KETIK *#claim*`, text, {quoted: mek})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
            return false
            }
            }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Hrs ${pad(minutes)} Min ${pad(seconds)} ┃Seg`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Use o código QR acima'))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Conectando...')
	})
	client.on('open', () => {
		success('2', 'Conectado')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

//_BOAS VINDAS
client.on('group-participants-update', async (chat) => {
		try {
            mem = chat.participants[0]
            try {
                var pp_group = await client.getProfilePicture(mem)
            } catch (e) {
                var pp_group = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
			}
            try {
                var pp_user = await client.getProfilePicture(chat.jid)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
			if (chat.action == 'add') {
				ini_user = client.contacts[mem]
				group_info = await client.groupMetadata(chat.jid)
                let buff = await getBuffer(pp_user)
                ini_img = await getBuffer(`https://api-gdr2.herokuapp.com/api/welcome?titulo=Slv%20Boleiro&nome=${ini_user.notify}&perfil=${pp_group}&fundo=${pp_user}&grupo=${group_info.subject}&numero=${group_info.participants.length}&membroconta=FUTEBOL21`)
				welkam = `*𝙎𝘼𝙇𝙑𝙀 @${mem.split('@')[0]}*\n`
				welkam += `\ 𝙎𝙀𝙅𝘼 𝘽𝙀𝙈 𝙑𝙄𝙉𝘿𝙊 𝘼𝙊 𝙂𝙍𝙐𝙋𝙊:n`
				welkam += ` ${group_info.subject}*\n`
				welkam += `𝙎𝙀𝙐 𝙉𝙐𝙈𝙀𝙍𝙊 :* ${mem.replace('@s.whatsapp.net', '')}\n`
				welkam += `*𝙇𝙀𝙄𝘼 𝘼?? 𝙍𝙀𝙂𝙍𝘼𝙎 :*\n\n${group_info.desc}`
				await client.sendMessage(chat.jid, buff, MessageType.image, { caption: welkam , contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
				}
            if (chat.action == 'remove') {
            	mem = chat.participants[0]
            	ini_user = client.contacts[mem]
                let buff = await getBuffer(pp_user)
                group_info = await client.groupMetadata(chat.jid)
                ini_img = await getBuffer(`https://api-gdr2.herokuapp.com/api/leave?titulo=Slv%20Boleiro&nome=${ini_user.notify}&perfil=${pp_group}&fundo=${pp_user}&grupo=${group_info.subject}&numero=${group_info.participants.length}&membroconta=FUTEBOL21`)
                ini_out = `𝙁𝙇𝙒 𝙈𝘼𝙉𝙊, @${mem.split('@')[0]} 𝙁𝙊𝙄 𝙂𝘼𝘿𝙄𝘼𝙍 𝙀𝙈 𝙊𝙐𝙏𝙍𝙊 𝙇𝙐𝙂𝘼𝙍 🤣😂`
                await client.sendMessage(chat.jid, buff, MessageType.image, { caption: ini_out, contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
            }
        } catch (e) {
            console.log('Error :', e)
        }
    })
            
//_FIM

    client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

      client.on('chat-update', async (mek) => {
		try {
                          if (!mek.hasNewMessage) return
                          mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			hit_today.push(command)		
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const botNumber = client.user.jid
			const ownerName = setting.ownerName
			const ownerNumber = ["5511910592328@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
			//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
            var creator = setting.ownername
            const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
            const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
			const isGroup = from.endsWith('@g.us')
			const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
			const totalchat = await client.chats.all()
			const ini_mark = `0@s.whatsapp.net`
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const alfa = `${targetpc}@s.whatsapp.net`
		    const alfa1 = `${targetpc}@s.whatsapp.net`
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined									            
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '5511910592328@s.whatsapp.net'    

                        idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}

                        const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Domingo"; break;
                case 1: hari = "Segunda"; break;
                case 2: hari = "Terça"; break;
                case 3: hari = "Quarta"; break;
                case 4: hari = "Quinta"; break;
                case 5: hari = "Sexta"; break;
                case 6: hari = "Sábado"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Janeiro"; break;
                case 1: bulan1 = "Fevereiro"; break;
                case 2: bulan1 = "Março"; break;
                case 3: bulan1 = "Abril"; break;
                case 4: bulan1 = "Maio"; break;
                case 5: bulan1 = "Junho"; break;
                case 6: bulan1 = "Julho"; break;
                case 7: bulan1 = "Agosto"; break;
                case 8: bulan1 = "Setembro"; break;
                case 9: bulan1 = "Outubro"; break;
                case 10: bulan1 = "Novembro"; break;
                case 11: bulan1 = "Dezembro"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "𝙃𝙤𝙧𝙖́𝙧𝙞𝙤 : " + jam + ":" + menit + ":" + detik + " ⏰";     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
	const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
 var ucapannya = "" + waktoonyabro;
 
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
            }
            var ucapannya = "" + waktoonyabro;
            
            var ase = new Date();
                        var waktoonyabroo = ase.getHours();
                        switch(waktoonyabroo){
                case 0: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 1: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 2: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 3: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 4: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 5: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 6: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 7: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 8: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 9: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 10: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 11: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 12: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 13: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 14: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 15: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 16: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 17: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 18: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 19: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 20: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 21: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 22: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 23: waktoonyabroo = `Night 🌛 ${pushname}`; break;
            }
            var ucapannya2 = "" + waktoonyabroo;     
            
            selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

const gcount = setting.gcount

const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","listType": "SINGLE_SELECT","sections": list}}, {})
  return client.relayWAMessage(po, {waitForAck: true})
 }     
                        const Barbarkey= 'YOUR_APIKEY' 
                 const isUrl = (url) => {
			        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const sendKontak = (from, nomor, nama, org = "") => {
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Cofs ツ❤\n' 
            + 'ORG:❥ ;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=5511910592328:+55 (11) 91059-2328\n' 
            + 'END:VCARD'
            client.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
				}
        const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            client.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5511910592328-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
 }, 
message: {
"imageMessage": {
 "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
"mimetype": "image/jpeg",
"caption": "ϟ𝙈𝙖́𝙧𝙞𝙤༄ ♠️", 
'jpegThumbnail': fs.readFileSync('image/Choji.webp')
} 				
} 
} 
			const addEliteUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./database/json/Elite.json', JSON.stringify(_Elite))
            }
            const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
client.sendMessage(from, hasil, type, options).catch(e => {
client.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
				
                const  timestampi = speed();
                const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const ini_totalchat = `${totalchat.length - giid.lenght}`
				
            const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "5511910592328-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `ᴄᴍᴅ ᴇxᴇᴄ : ${command}`, orderTitle: '𝙈𝙖́𝙧𝙞𝙤✨🎭', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}	
            const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
            const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5511910592328-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
            const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5511910592328-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
            const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "5511910592328-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `👨‍🦱 ${pushname} 🎖️`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
            const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '5511910592328-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		    const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `5511910592328-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
            const checkEliteUser = (sender) => {
            let status = false
	        Object.keys(_Elite).forEach((i) => {
		    if (_Elite[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }      
            const textImg = (teks) => {
            return client.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
            } 
            const bayarLimit = (sender, amount) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
            }
			
			mess = {
				wait: '𝘾𝙖𝙡𝙢𝙖 𝙖𝙚 𝙘𝙖𝙧𝙖𝙞 ⌛', 
				sucess: '️❬ ✔ ❭ 𝙋𝙧𝙤𝙣𝙩𝙤 𝙙𝙚𝙨𝙜𝙧𝙖𝙘̧𝙖𝙙𝙤!',
				levelon: '❬ ✔ ❭ *leveling* *ativado*',
				leveloff: ' ❬ X ❭  *leveling* *desativado*',
				levelnoton: '❬ X ❭ *leveling não ativado*',
				levelnol: '*error* 0 °-°',
				error: {
				stick: '*𝘽𝙚𝙢, 𝙛𝙖𝙡𝙝𝙚, 𝙩𝙚𝙣𝙩𝙚 𝙣𝙤𝙫𝙖𝙢𝙚𝙣𝙩𝙚 ^_^*',
				Iv: '𝗠𝗮𝗮𝗳 𝗹𝗶𝗻𝗸 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱☹️'
				},
				only: {
					group: '[ ✘ ] 𝙉𝘼̃𝙊 𝙀𝙎𝙏𝘼𝙈𝙊𝙎 𝙀𝙈 𝙉𝙀𝙉𝙃𝙐𝙈 𝙂𝙍𝙐𝙋𝙊 💀',
					ownerG: '[ ⚠️ ] 𝙊𝙋𝙎, 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘼𝘾𝙀𝙎𝙎𝙄́𝙑𝙀𝙇 𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝙋𝘼𝙍𝘼 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝙊𝙎 ⚠️',
					ownerB: '[ ⚠️ ] 𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝙊 𝘾𝙊𝙁𝙎 𝙋𝙊𝘿𝙀 𝙐𝙏𝙄𝙇𝙄𝙕𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊! ☢',
					admin: '[ 👀 ] 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙉𝘼̃𝙊 𝙀𝙎𝙏𝘼́ 𝘼𝘾𝙀𝙎𝙎𝙄́𝙑𝙀𝙇 𝙋𝘼𝙍𝘼 𝙑𝙊𝘾𝙀 😅',
					Badmin: ' [ 🤷‍♂️ ] 𝙎𝙀𝙈 𝘼𝘿𝙈 𝙀́ 𝙁𝙊𝘿𝘼 𝙉𝙀́? 😉',
					                     registerB: `── 「𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙀-𝙎𝙀」 ──\n𝙊𝙥𝙨!\n𝙊𝙡𝙝𝙚𝙞 𝙖𝙦𝙪𝙞 𝙚 𝙣𝙖̃𝙤 𝙫𝙞 𝙫𝙘 𝙣𝙖 𝙢𝙞𝙣𝙝𝙖 𝙖𝙜𝙚𝙣𝙙𝙖 𝙙𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤𝙨, 𝙥𝙖𝙧𝙖 𝙨𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙚́ 𝙨𝙞𝙢𝙥𝙡𝙚𝙨, 𝙨𝙞𝙜𝙖 𝙖𝙨 𝙥𝙧𝙤́𝙭𝙞𝙢𝙖𝙨 𝙚𝙩𝙖𝙥𝙖𝙨 ↪, \n\n𝘾𝙤𝙢𝙖𝙣𝙙𝙤 : ${prefix}𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙣𝙤𝙢𝙚|𝙞𝙙𝙖𝙙𝙚\n𝙀𝙭𝙚𝙢𝙥𝙡𝙤 : ${prefix}𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙘𝙤𝙛𝙨|𝟭𝟳`,     
                } 
         } 
			//+++++++++++UCAPAN+++++++++++//
            const isElite = checkEliteUser(sender)
			//+++++++++++END+++++++++++//
			
            if (isGroup && isElite && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(nyz.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
           	if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('𝙋𝙤𝙬 𝙖𝙙𝙢𝙞𝙧𝙤, 𝙫𝙘 𝙚́ 𝙚𝙭𝙚𝙢𝙥𝙡𝙤, 𝙣𝙖̃𝙤 𝙚𝙣𝙫𝙞𝙚 𝙡𝙞𝙣𝙠𝙨 𝙥𝙛𝙫𝙧 😉')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("𝟭 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("𝟮 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("𝟯 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 🤙")
		}, 0)
	}
	
			colors = ['red','white','black','blue','yellow','green']
			const xxx = '```'
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'client', sellerJid: '0@s.whatsapp.net'} } }
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
            if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('Name', 'red'), color(pushname, 'yellow'), color('Currently', 'white'), color('Using', 'yellow'), color('Features', 'red'), color('➻', 'yellow'), color(command), 'In :', color('Private Chat', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('Name', 'red'), color(pushname, 'yellow'), color('Currently', 'white'), color('Using', 'yellow'), color('Features', 'red'), color('➻', 'yellow'), color(command), 'In :', color(groupName, 'yellow'))		
			
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return itsmeiky.sendMessage(from,`BATAS PENGGUNAN ANDA (LIMIT) TELAH HABIS`, text,{ quoted: mek})
            client.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            client.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            client.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA KETIK *#claim*`, text, {quoted: mek})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
            return false
            }
            }
 
        /******END OF FUNCTIONS INPUT******/
             switch(command) {
             	case 'donasi':
               txtt =`Hai Kak.....\n*${pushname}*\nMAU DONASI PILIH SALAH SATU`

               buttons = [{buttonId: '!dana',buttonText:{displayText: 'DANA'},type:1},{buttonId:'!gopay',buttonText:{displayText:'GOPAY'},type:1},{buttonId:'!pulsa',buttonText:{displayText:'PULSA'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'DONASI MU SANGAT BERHARGA BAGI KAMI',
               buttons: buttons,
               headerType: 1
}

               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{})
               client.relayWAMessage(prep)
               break 
        case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak..... ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!youtube',buttonText:{displayText: 'YOUTUBE'},type:1},{buttonId:'!infoig',buttonText:{displayText:'INSTAGRAM'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Sungkan Chat Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await client.prepareMessageFromContent(from,{buttonsMessage},{})
               client.relayWAMessage(prep)
               break      
               const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

case 'mario':
var ini_gopayyp =`𝘽𝙚𝙢 𝙫𝙞𝙣𝙙𝙤 𝙖𝙤 𝙢𝙚𝙪 𝙗𝙤𝙩, ${pushname}`
var buttonsos = [
{buttonId: `MENU`, buttonText: {displayText: 'Menu'}, type: 1}] 

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
client.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
			break
       case 'store':
               list = []
               listmenu = [`tabelamenu`]
               listmenuu = [`MOBILE LEGENDS`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'menu ke' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: ``,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `${tampilTanggal}\n${tampilWaktu}`,   `Hai kak.....\n*${pushname}*\nJangan Lupa Subscribe KurrXd Yahh`, list)
               break
               case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group buka`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group tutup`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
        
             break
                                case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('𝙂𝙧𝙪𝙥𝙤 𝙖𝙣𝙩𝙞-𝙡𝙞𝙣𝙠 𝙖𝙩𝙞𝙫𝙖𝙙𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 𝙣𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 ✔️')
						client.sendMessage(from,`𝘼𝙩𝙚𝙣𝙘𝙖𝙤 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙤𝙨 𝙢𝙚𝙢𝙗𝙧𝙤𝙨 𝙖𝙩𝙞𝙫𝙤𝙨 𝙙𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙖𝙣𝙩𝙞-𝙡𝙞𝙣𝙠. 𝙚𝙚 𝙫𝙤𝙘𝙚̂ 𝙚𝙣𝙫𝙞𝙖𝙧 𝙪𝙢 𝙡𝙞𝙣𝙠 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙫𝙤𝙘𝙚 𝙨𝙚𝙧𝙖 𝙚𝙭𝙥𝙪𝙡𝙨𝙤 𝙙𝙖𝙦𝙪𝙞  𝙜𝙧𝙪𝙥𝙤`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('O modo de grupo anti-link foi desabilitado ')
						var ini = anti.clientOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
					case 'qrcode':
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
			    case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Título* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    client.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break
					case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man \n ex: +55 89981246187')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
					case 'wallpaperjogador':
				 data = fs.readFileSync('./wallpaper/wallpaperjogador.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, {quoted: mek})
				break
				case 'clube':
				 data = fs.readFileSync('./time/timesbr.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, {quoted: mek, caption: "𝙎𝙀𝙐 𝘾𝙇𝙐𝘽𝙀 𝙀́ 𝙀𝙎𝙏𝙀"})
				break
				case  'wallpaperaleatorio':
				 data = fs.readFileSync('./wallpaper/wallpaperaleatorio.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, {quoted: mek})
				break
				case 'wallpapertime':
				 data = fs.readFileSync('./wallpaper/wallpapertime.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, {quoted: mek})
				break
				case 'wallpaperselecoes':
				 data = fs.readFileSync('./wallpaper/wallpaperselecoes.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, {quoted: mek})
				break
				    case 'banir':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Esse ai ja foi kkkk :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`𝙁𝙇𝙒 𝙈𝙀𝙈𝘽𝙍𝙊 𝘾𝙊𝙈𝙐𝙈𝙆𝙆𝙆𝙆𝙆𝙆🤣  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
			    case 'delete':
				case 'del':
				case 'd':
				    if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝙐𝙚́')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('𝙅𝙖́ 𝙚𝙨𝙩𝙖́ 𝙤𝙣')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('𝘼𝙩𝙞𝙫𝙖𝙙𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 𝙤 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙗𝙤𝙖𝙨-𝙫𝙞𝙣𝙙𝙖𝙨😉️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('𝘿𝙚𝙨𝙖𝙩𝙞𝙫𝙖𝙙𝙤 𝙖 𝙛𝙪𝙣𝙘̧𝙖̃𝙤 𝙙𝙚 𝙗𝙤𝙖𝙨-𝙫𝙞𝙣𝙙𝙖𝙨 😡️')
					} else {
						reply('𝙋𝙦𝙥, 𝙥𝙖𝙧𝙖 𝙖𝙩𝙞𝙫𝙖𝙧 𝙚́ 𝟭 𝙚 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙖 𝟬, 𝙨𝙡𝙘𝙠𝙠𝙠𝙠𝙠𝙠𝙠')
					}
                                      break
                                      case 'mystat': 
			case 'mystatus':
				
                anu = process.uptime()
                teskny = `∆ *MY STATS*
*├❒ V. Whatsapp :* ${wa_version}
*├❒ RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*├❒ MCC :* ${mcc}
*├❒ MNC :* ${mnc}
*├❒ Versi OS :* ${os_version}
*├❒ Merk HP :* ${device_manufacturer}
*├❒ Versi HP :* ${device_model}
*├❒ Group Chat :* ${giid.length}
*├❒ Personal Chat :* ${client - giid.length}
*├❒ Total Chat :* ${totalchat.length}
*├❒ Speed :* ${latensii.toFixed(4)} Second
*└❒ Runtime :* ${kyun(anu)}`
				client.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
                 case 'battlefield': 
					if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`*Examplo :*\n${prefix}${command} cofs`)
					darknn = body.slice(9)
					ll1 = darknn.split("|")[0];
					ll2 = darknn.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://apicofsv1.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=Cofs`)
					buffer1 = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer1, image, {quoted: mek})
					break
					case 'destrava':
                    client.sendMessage(from, destrava(prefix), text, { quoted: mek })
                    break
                   case  'pornhub':  
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} cofs*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   fakegroup(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   client.sendMessage(from, anu, image, {quoted: mek})
                   break
                   case 'toimg':   
					fakegroup(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Feito fdp'})
				    fs.unlinkSync(ran)
					})					
			    	break 
			case 'tomp3':
		            if (!isQuotedVideo) return fakegroup
		            fakegroup(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await client.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
                   case 'ytmp3':
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n*Tamanho do arquivo* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					bufferyyy = await getBuffer(anu.result)
					client.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                case 'ytmp4':
					if (args.length < 1) return reply('qual link fof??')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo do video* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
                    case 'glitch':  
                    if (args.length < 1) return reply(`*Examplo :*\n${prefix}${command} cofs`)
					darknn = body.slice(9)
					ll1 = darknn.split("|")[0];
					ll2 = darknn.split("|")[1];
					fakegroup(mess.wait)
					anu = await fetchJson(`https://apicofsv1.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&theme=glitch&apikey=Cofs`)
					buffer1 = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer1, image, {quoted: mek})
					break
					case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apa?')
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.me/api/wiki?apikey=apivinz&q=onlinequery=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Título\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Publicados\`\`\` : *${i.uploadDate}*\n\`\`\`Duração\`\`\` : *${i.duration}*\n\`\`\`Visualizadores: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Canal:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
                    case 'naruto':
                    if (args.length < 1) return reply(`*Examplo :*\n${prefix}${command} cofs`)
					darknn = body.slice(9)
					ll1 = darknn.split("&")[0];
					ll2 = darknn.split("&")[1];
					fakegroup(mess.wait)
					anu = await fetchJson(`https://apicofsv1.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=naruto&apikey=Cofs`)
					buffer1 = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer1, image, {quoted: mek})
					break
                    case 'google': 
                    if (args.length < 1) return reply(`*Examplo :*\n${prefix}${command} cofs`)
					darknn = body.slice(9)
					ll1 = darknn.split("|")[0];
					ll2 = darknn.split("|")[1];
					ll3 = darknn.split("|")[2];
					fakegroup(mess.wait)
					anu = await fetchJson(`https://apicofsv1.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=Cofs`)
					buffer1 = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer1, image, {quoted: mek})
					break
					      case 'ownermenu':
             client.sendMessage(from, ownerMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'downloadmenu':
             client.sendMessage(from, downloadMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'gamemenu':
             client.sendMessage(from, gameMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'rules':
             client.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: troli})
             break
       case 'owner':
             client.sendMessage(from, owner(prefix), MessageType.text, {quoted: troli})
             break
      case 'wibumenu':
             client.sendMessage(from, wibuMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'infomenu':
             client.sendMessage(from, infoMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'stickermenu':
             client.sendMessage(from, stickerMenu(prefix), MessageType.text, {quoted: troli})
             break
       case 'islammenu':
             client.sendMessage(from, islamMenu(prefix), MessageType.text, {quoted: troli})
             break
       case 'sertimenu':
             client.sendMessage(from, sertiMenu(prefix), MessageType.text, {quoted: troli})
             break
       case 'ceritamenu':
             client.sendMessage(from, ceritaMenu(prefix), MessageType.text, {quoted: troli})
             break  
       case 'makermenu':
             client.sendMessage(from, makerMenu(prefix), MessageType.text, {quoted: troli})
             break 
     case 'toolsmenu':
              client.sendMessage(from,toolsMenu(prefix), MessageType.text, {quoted: troli})
              break                   
      case 'dewasamenu':
             client.sendMessage(from, dewasaMenu(prefix), MessageType.text, {quoted: troli})
             break                                    
      case 'othermenu':
             client.sendMessage(from, otherMenu(prefix), MessageType.text, {quoted: troli})
             break
      case 'groupmenu': 
      case 'grupmenu': 
             client.sendMessage(from, groupMenu(prefix), MessageType.text, {quoted: troli})
             break
             case 'funmenu':
             client.sendMessage(from, funMenu(prefix), MessageType.text, {quoted: troli})
             break
				 case 'tabelamenu':
				    client.sendMessage(from, tabelamenu(prefix), text) 
				    break
				case 'ccofs':
				    client.sendMessage(from, ccofs(prefix), text) 
				    break
						          case 'registrar':
				    if(!isUser) return fakegroup
                    fakegroup(mess.wait)
					client.updatePresence(from, Presence.composing)
					if (isUser) return reply('𝙊𝙥𝙨, 𝙫𝙤𝙘𝙚̂ 𝙟𝙖́ 𝙚𝙨𝙩𝙖́ 𝙣𝙤 𝙗𝙖𝙣𝙘𝙤 𝙙𝙚 𝙙𝙖𝙙𝙤𝙨!')
					if (args.length < 1) return reply(`Parâmetro incorreto \nCommand : ${prefix}registrar nome|idade\nContoh : ${prefix}registrar cofs|18`)
					var reg = body.slice(8)
					var jeneng = reg.split("|")[0];
					var umure = reg.split("|")[1];
						user.push(sender)
						fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`𝙋𝙖𝙧𝙖𝙗𝙚́𝙣𝙨, 𝙫𝙤𝙘𝙚̂ 𝙨𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤𝙪 𝙣𝙤 𝙣𝙤𝙨𝙨𝙤 𝙗𝙖𝙣𝙘𝙤 𝙙𝙚 𝙙𝙖𝙙𝙤𝙨.\`\`\`\n\n\`\`\`🗓️ ${tampilTanggal} ⏳ ${tampilWaktu}\`\`\`\n\`\`\`[𝙉𝙤𝙢𝙚]: ${jeneng}\`\`\`\n\`\`\`[𝙉𝙪́𝙢𝙚𝙧𝙤]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`𝘼𝙘𝙚𝙨𝙨𝙚\`\`\`\n\`\`\`𝙢𝙚𝙪𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨\`\`\`\n\`\`\`𝙚𝙢 ${prefix}𝙢𝙚𝙣𝙪\`\`\`\n\`\`\`\n𝙏𝙊𝙏𝘼𝙇 𝘿𝙀 𝙈𝙀𝙈𝘽𝙍𝙊𝙎 ${user.length}\`\`\``, text, {quoted: mek})
					break
                case 'fig':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                                                if (!isUser) return reply(mess.only.daftarB)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`âŒ Falhou, no momento da conversÃ£o ${tipe} para o sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
                                        case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digite 1 para ativar o recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*o recurso de nível já estava ativo antes*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(` *Digite o comando 1 para ativar, 0 para desativar *\n * Exemplo: ${prefix}leveling 1*`)
                }
            break
            case 'bc':
            if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*ATENÇÃO* ⚠️\n\n${body.slice(4)}`})
						}
						reply('𝙍𝙚𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤!')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*ATENÇÃO* ⚠️\n\n${body.slice(4)}`)
						}
						reply('𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝙚𝙣𝙫𝙞𝙖𝙙𝙖 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤')
					}
					break
            case 'dono':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.ibb.co/jvJcfvk/cofsgato.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*MEU CHEFE:* COFS\n*GRUPO WHATS:* https://chat.whatsapp.com/LfVNqcLiqwYAiCh18XGUyp\n*CONTATO MEU AE:* wa.me/+5511910592328\n*INSTA:* @gabrielcofs_\n\n\n*Acessem lá seus viado* 🐊🚩️'})
					break
                case 'simi':
					if (args.length < 1) return reply('Onde está o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativado')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativando o modo simi com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
                default: 
	if (selectedButton == 'MENU') {
                	                	koko = `${targetpc}@s.whatsapp.net`
                let p1 = await client.getStatus(sender)
                anunya = process.uptime()
 buttonsos = [
  {buttonId: `${prefix}store`, buttonText: {displayText: '🌀 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨'}, type: 1}, 
  {buttonId: `${prefix}owner`, buttonText: {displayText: '🙍‍♂️ 𝘾𝙧𝙞𝙖𝙙𝙤𝙧'}, type: 1}
] 
  gbuttonan = {
  	contentText: `┏━━⬣ ~ ϟ𝙈𝙖́𝙧𝙞𝙤༄ ♠️ ♫𝄢 𝙄𝙉𝙁𝙊        
┃👑 𝘾𝙧𝙞𝙖𝙙𝙤𝙧: ${koko.split('@')[0]}
┃🔥 𝙋𝙡𝙖𝙩𝙖𝙛𝙤𝙧𝙢𝙖 : 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥
┃✨ 𝙎𝙩𝙖𝙩𝙪𝙨: ${offline ? 'OFFLINE' : 'ONLINE'}
┃♠️ 𝙋𝙞𝙣𝙜: ${latensii.toFixed(4)} 𝙎𝙚𝙜𝙪𝙣𝙙𝙤𝙨
┃⌛ 𝘼𝙩𝙞𝙫𝙤 𝙖: ${kyun(anunya)}
┗⬣

______██████████████
-____██▓▓▓▓▓▓▓▓▓ M ▓████
-__██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
-__██████░░░░██░░██████
██░░░░████░░██░░░░░░░░██
██░░░░████░░░░██░░░░░░██
-__████░░░░░░██████████
-__██░░░░░░░░░░░░░██
_____██░░░░░░░░░██
-______██░░░░░░██
-____██▓▓████▓▓▓█
-_██▓▓▓▓▓▓████▓▓█
██▓▓▓▓▓▓███░░███░
-__██░░░░░░███████
-____██░░░░███████
-______██████████
-_____██▓▓▓▓▓▓▓▓▓██
-_____█████████████

┏━━⬣ 𝙎𝙪𝙖𝙨 𝙄𝙉𝙁𝙊 ✨🎭
┃👩‍🦱👨‍🦱 𝙉𝙤𝙢𝙚: ${pushname}
┃🎭 𝘽𝙞𝙤𝙜𝙧𝙖𝙛𝙞𝙖: ${p1 ? `${p1.status}` : '-'}
┃📱 𝙉𝙪́𝙢𝙚𝙧𝙤: ${sender.split('@')[0]}
┗⬣`, 
    buttons: buttonsos,
    headerType: 1
}
  
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
	break
		}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
