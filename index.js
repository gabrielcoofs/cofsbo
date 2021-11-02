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
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = pt
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

//_MÓDULOS NPM
const yts = require( 'yt-search')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const imageToBase64 = require('image-to-base64')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const crypto = require('crypto')
const speed = require('performance-now')

//_GRUPOS JSON
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antifake = JSON.parse(fs.readFileSync('./database/json/antifake.json'));
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const _Elite = JSON.parse(fs.readFileSync('./database/json/Elite.json')) 

//_COMANDOS GERAIS
const { cofs } = require('./src/cofs')
const { jogosdarodada } = require('./src/jogosdarodada') 

//_FIM DO GERAIS
let fakeimage = fs.readFileSync("./image/cofs.jpg")

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

let menusimple = false
offline = false

let multipref = false;
let oneprefix = true;
let noprefix = false;
let preff = "!"
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
            cofs.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA KETIK *#claim*`, text, {quoted: mek})
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
  return `${pad(hours)} *Hrs* ${pad(minutes)} *Min* ${pad(seconds)} *Seg*`
}

async function starts() {
	const cofs = new WAConnection()
	cofs.logger.level = 'warn'
	cofs.version = [2,2143,3]
	console.log(banner.string)
	cofs.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Use o código QR acima'))
	})

	fs.existsSync('./cofs.json') && cofs.loadAuthInfo('./cofs.json')
	cofs.on('connecting', () => {
		start('2', 'Conectando...')
	})
	cofs.on('open', () => {
		success('2', 'Conectado')
	})
	await cofs.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./cofs.json', JSON.stringify(cofs.base64EncodedAuthInfo(), null, '\t'))
    
    cofs.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

      cofs.on('chat-update', async (mek) => {
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
			
			if (multipref) {
    var prefix = /^[Ã‚Â°Ã¢â‚¬Â¢Ãâ‚¬ÃƒÂ·Ãƒâ€”Ã‚Â¶Ã¢Ë†â€ Ã‚Â£Ã‚Â¢Ã¢â€šÂ¬Ã‚Â¥Ã‚Â®Ã¢â€žÂ¢Ã¢Å“â€œ=|~!?@#%^&.zZ_â€¢\/\\Ã‚Â©^<+]/.test(cmd) ? cmd.match(/^[Ã‚Â°Ã¢â‚¬Â¢Ãâ‚¬ÃƒÂ·Ãƒâ€”Ã‚Â¶Ã¢Ë†â€ Ã‚Â£Ã‚Â¢Ã¢â€šÂ¬Ã‚Â¥Ã‚Â®Ã¢â€žÂ¢Ã¢Å“â€œ=|~!?@#%^&.zZ_+â€¢\/\\Ã‚Â©^<+]/gi)[0]: '!'
  } else if (noprefix) {
    prefix = ""
  } else if (oneprefix) {
    prefix = preff
  }
  
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
			
if (prefix != "") {
  if (!body.startsWith(prefix)) {
    isCmdd = false
    comm = ""
  } else {
    isCmdd = true
    comm = body.slice(1).trim().split(" ").shift().toLowerCase()
  }
} else {
  isCmdd = false
  comm = body.trim().split(" ").shift().toLowerCase()
}

		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			hit_today.push(command)		
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const q = args.join(' ')
			const botNumber = cofs.user.jid
			const ownerName = setting.ownerName
			const ownerNumber = ["5511910592328@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
			//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
            var creator = setting.ownername
            const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
            const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
			const isGroup = from.endsWith('@g.us')
			const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = cofs.user.phone
			let senderr = mek.key.fromMe ? Lazuardi.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			const totalchat = await cofs.chats.all()
			const ini_mark = `0@s.whatsapp.net`
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await cofs.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const alfa = `${targetpc}@s.whatsapp.net`
		    const alfa1 = `${targetpc}@s.whatsapp.net`
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            pushname = cofs.contacts[sender] != undefined ? cofs.contacts[sender].vname || cofs.contacts[sender].notify : undefined									            
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiFa = isGroup ? antifake.includes(from) : true
			const isWelkom = isGroup ? welkom.includes(from) : false
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
        var ucapannya2 = `GoodDay ?? ${pushname}`
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
let po = cofs.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLIQUE AQUI","listType": "SINGLE_SELECT","sections": list}}, {})
  return cofs.relayWAMessage(po, {waitForAck: true})
 }     
 
 const isImage = (type === 'imageMessage')

cofs.on('group-participants-update', async(anu) => {
	if (!welkom.includes(anu.jid)) return
	mdata = await cofs.groupMetadata(anu.jid)
        try {
			if (anu.action == 'add') {
				num = anu.participants[0]
				mem = anu.participants[0]
				console.log(anu)
            try {
               var pp_user = await cofs.getProfilePicture(mem)
            } catch (e) {
               var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            let pp_userz = await getBuffer(pp_user)
            mdata = await cofs.groupMetadata(anu.jid)
                member = mdata.participants.length
                num = anu.participants[0]
                anu_user = cofs.contacts[mem]
                           teks = `*Salve Boleiro* @${num.split('@')[0]}, 
*Bem-vindo(a) ao grupo* ${mdata.subject}! *Olhe as regras do grupo para não ser banido.*

Use o comando ${prefix}cofs para listar meus comandos

🏆⚽COFS-BOT©`
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeURI(anu_user.vname)}&descriminator=${member}&memcount=${member}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/t303Kq1/Sem-t-tulo10.jpg`)
await cofs.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
            } else if (anu.action == 'remove') {
            	num = anu.participants[0]
				mem = anu.participants[0]
				console.log(anu)
            try {
                var pp_user = await cofs.getProfilePicture(mem)
            } catch (e) {
               var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            let pp_userz = await getBuffer(pp_user)
				teks = `*Vish, o membro comum* @${num.split('@')[0]} *saiu do grupo* 🤣😂`
				mdata = await cofs.groupMetadata(anu.jid)
                member = mdata.participants.length
                num = anu.participants[0]
                anu_user = cofs.contacts[mem]
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeURI(anu_user.vname)}&descriminator=${member}&memcount=${member}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/t303Kq1/Sem-t-tulo10.jpg`)
				await cofs.sendMessage(mdata.id, buff, MessageType.image, { caption: teks, contextInfo: {"mentionedJid": [mem],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
    
    const daftar1 = `*Olá* ${pushname} \n\n*Antes de usar o* ${botName}, *Registre-se*`
const daftar2 = '```Clique abaixo para se registrar no, 𝘾𝙤𝙛𝙨𝘽𝙊𝙏```'
const daftar3 = [{buttonId: noprefix ? "verify" : "!"+"verify",buttonText: {displayText: `👤 DAFTAR `,},type: 1,},]
                        const Barbarkey= 'YOUR_APIKEY' 
                 const isUrl = (url) => {
			        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			function jsonformat(string) {
return JSON.stringify(string, null, 2)
} 
			const sendKontak = (from, nomor, nama, org = "") => {
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Cofs 🦅\n' 
            + 'ORG: ;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=5511910592328:+55 (11) 91059-2328\n' 
            + 'END:VCARD'
            cofs.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
			const reply = (teks) => {
				cofs.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				cofs.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? cofs.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : cofs.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
				}
				const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
}}}
        const fakestatus = (teks) => {
            cofs.sendMessage(from, teks, text, {
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
            cofs.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            cofs.sendMessage(from, teks, text, {
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
"caption": "~ϟ𝘾𝙤𝙛𝙨𝘽𝙊𝙏༄ ♠️🇫🇷", 
'jpegThumbnail': fs.readFileSync('image/cofs.jpg')
} 				
} 
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

let ikyads = await getBuffer(`${ppbot}`)
fakelink = (tekslink) => { 
return {"externalAdReply": { "title": tekslink, "thumbnail": ikyads, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}

            const isRegistered = checkRegisteredUser(sender)
			const addEliteUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./database/json/Elite.json', JSON.stringify(_Elite))
            }
            async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return cofs.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      cofs.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
            const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
cofs.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
cofs.sendMessage(from, hasil, type, options).catch(e => {
cofs.sendMessage(from, { url : link }, type, options).catch(e => {
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
            return cofs.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
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
				wait: '??𝙖𝙡𝙢𝙖 𝙖𝙚 𝙘𝙖𝙧𝙖𝙞 ⌛', 
				sucess: '️❬ ✔ ❭ 𝙋𝙧𝙤𝙣𝙩𝙤 𝙙𝙚𝙨𝙜𝙧𝙖𝙘̧𝙖𝙙𝙤!',
				levelon: '❬ ✔ ❭ *leveling* *ativado*',
				leveloff: ' ❬ X ❭  *leveling* *desativado*',
				levelnoton: '❬ X ❭ *leveling não ativado*',
				levelnol: '*error* 0 °-°',
				error: {
				stick: '*𝘽𝙚𝙢, 𝙛𝙖𝙡𝙝𝙚, 𝙩𝙚𝙣𝙩𝙚 𝙣𝙤𝙫𝙖𝙢𝙚𝙣𝙩𝙚 ^_^*',
				Iv: '𝗠𝗮𝗮𝗳 𝗹𝗶𝗻𝗸 𝘁𝗶𝗱??𝗸 𝘃𝗮𝗹𝗶𝗱☹️'
				},
				only: {
					group: '[ ✘ ] 𝙉𝘼̃𝙊 𝙀𝙎𝙏𝘼𝙈𝙊𝙎 𝙀𝙈 𝙉𝙀𝙉𝙃𝙐𝙈 𝙂𝙍𝙐𝙋𝙊 💀',
					ownerG: '[ ⚠️ ] 𝙊𝙋𝙎, 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘼𝘾𝙀𝙎𝙎𝙄́𝙑𝙀𝙇 𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝙋𝘼𝙍𝘼 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝙊𝙎 ⚠️',
					ownerB: '[ ⚠️ ] 𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝙊 𝘾𝙊𝙁𝙎 𝙋𝙊𝘿𝙀 𝙐𝙏𝙄𝙇𝙄𝙕𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊! ☢',
					admin: '[ 👀 ] 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙉𝘼̃𝙊 𝙀𝙎𝙏𝘼́ 𝘼𝘾𝙀𝙎𝙎𝙄́𝙑𝙀𝙇 𝙋𝘼𝙍𝘼 𝙑𝙊𝘾𝙀 😅',
					Badmin: ' [ 🤷‍♂️ ] 𝙎𝙀𝙈 𝘼𝘿𝙈 𝙀́ 𝙁𝙊𝘿𝘼 𝙉𝙀́? 😉',
					                     registerB: `── 「𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙀-𝙎𝙀」 ──\n𝙊𝙥𝙨!\n𝙊𝙡𝙝𝙚?? 𝙖𝙦𝙪𝙞 𝙚 𝙣𝙖̃𝙤 𝙫𝙞 𝙫𝙘 𝙣𝙖 𝙢𝙞𝙣𝙝𝙖 𝙖𝙜𝙚𝙣𝙙𝙖 𝙙𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤𝙨, 𝙥𝙖𝙧𝙖 𝙨𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙚́ 𝙨𝙞𝙢𝙥𝙡𝙚𝙨, 𝙨𝙞𝙜𝙖 𝙖𝙨 𝙥𝙧𝙤́𝙭𝙞𝙢𝙖𝙨 𝙚𝙩𝙖𝙥𝙖𝙨 ↪, \n\n𝘾𝙤𝙢𝙖𝙣𝙙𝙤 : ${prefix}𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙣𝙤𝙢𝙚|𝙞𝙙𝙖𝙙𝙚\n𝙀𝙭𝙚𝙢𝙥𝙡𝙤 : ${prefix}𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙘𝙤𝙛𝙨|𝟭𝟳`,     
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
		if (isGroupAdmins) return reply('𝙋𝙤𝙬 𝙖𝙙𝙢𝙞𝙧𝙤, 𝙫𝙘 𝙚́ 𝙚𝙭𝙚𝙢𝙥𝙡𝙤, 𝙣𝙖̃𝙤 𝙚𝙣??𝙞𝙚 𝙡𝙞𝙣𝙠𝙨 𝙥𝙛𝙫𝙧 😉')
		cofs.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			cofs.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			cofs.updatePresence(from, Presence.composing)
			reply("𝟭 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨")
		}, 2000)
		setTimeout( () => {
			cofs.updatePresence(from, Presence.composing)
			reply("𝟮 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨")
		}, 1000)
		setTimeout( () => {
			cofs.updatePresence(from, Presence.composing)
			reply("𝟯 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 🤙")
		}, 0)
	}
	
			colors = ['red','white','black','blue','yellow','green']
			const xxx = '```'
			const { quotedMsg, isQuotedMsg, isBaileys } = mek
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'cofs', sellerJid: '0@s.whatsapp.net'} } }
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
            if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('Name', 'red'), color(pushname, 'yellow'), color('Currently', 'white'), color('Using', 'yellow'), color('Features', 'red'), color('➻', 'yellow'), color(command), 'In :', color('Private Chat', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('Name', 'red'), color(pushname, 'yellow'), color('Currently', 'white'), color('Using', 'yellow'), color('Features', 'red'), color('➻', 'yellow'), color(command), 'In :', color(groupName, 'yellow'))		
			
			const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
reply(`*ã€Œ GROUP LINK DETECTOR ã€*\n\n karena kamu melanggar aturan group, yaitu menggirim link group kamu akan di kick dari group!`)
cofs.groupRemove(from, [sender])
}
}
			
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
            cofs.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            cofs.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            cofs.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA KETIK *#claim*`, text, {quoted: mek})
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
case 'cofs':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftoko})
var ini_gopayyp =`𝘽𝙚𝙢 𝙫𝙞𝙣𝙙𝙤 𝙖𝙤 𝙢𝙚𝙪 𝙗𝙤𝙩, ${pushname}`
var buttonsos = [
{buttonId: `${prefix}cofs2`, buttonText: {displayText: '🔎 𝙈𝙀𝙉𝙐'}, type: 1}, 
{buttonId: `${prefix}tempoativo`, buttonText: {displayText: '⏳ 𝙏𝙀𝙈𝙋𝙊 𝘼𝙏𝙄𝙑𝙊'}, type: 1}
] 

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
cofs.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
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
       case 'comandos':
               list = []
               listmenu = [`grupomenu`,`downloadmenu`,`stickermenu`,`jogosmenu`,`wallpapermenu`]
               listmenuu = [`Menu Grupo`,`Menu Download`,`Sticker Menu`,`Jogos Menu`,`Wallpaper Menu`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Menu' + nombor++,
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
               listmsg(from, `𝘾𝙤𝙛𝙨𝘽𝙊𝙏⚡🇧🇷`,   `𝙎𝙡𝙫, *${pushname}* 𝘼𝙥𝙧𝙤𝙫𝙚𝙞𝙩𝙚 𝙢𝙚𝙪 𝙢𝙚𝙣𝙪 𝙚 𝙣𝙖̃𝙤 𝙛𝙡𝙤𝙙𝙚.\n𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘼𝘽𝘼𝙄𝙓𝙊 ☟`, list)
               break
               case 'antifake':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}antifake 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isAntiFa) return reply('❎O recurso ANTIFAKE já está ativado no grupo❎')
                        antifake.push(from)
                        fs.writeFileSync('./database/data/antifake.json', JSON.stringify(antifake))
                        reply('✅O recurso ANTIFAKE foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiFa) return reply('❎O recurso ANTIFAKE não está ativado no grupo❎')
                        let position = false
                        Object.keys(antifake).forEach((i) => {
                            if (antifake[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            antifake.splice(position, 1)
                            fs.writeFileSync('./database/data/antifake.json', JSON.stringify(antifake))
                        }
                        reply('❌O recurso ANTIFAKE foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}antifake 1, para ativar e 0 para desativar`)
                    }
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
             case 'verify':
              
if (isRegistered) return reply('*Ué carai, você já está registrado*')
const serialUser = createSerial(18)
	         try {
								ppimg = await cofs.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `👤 *REGISTRO DE USUÁRIO* 🗣️
*Obrigado por se registrar no banco de dados* ${botName}

👤 *Nome* : ${pushname}
🤳 *Número* : +${sender.split('@')[0]}
📈 *Serial* : ${serialUser}
👨‍👩‍👦 *Total*: ${_registered.length} *Membros*`
         ikyads = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=https://i.ibb.co/TKzcD5k/Sem-t-tulo6.jpg`)
             buttons = [{buttonId: noprefix ? "cofs2" : "!"+"cofs2",buttonText:{displayText: `🔎 MENU`},type:1}]
              imageMsg = (await cofs.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage
              buttonsMessage = {footerText:'𝘾𝙤𝙛𝙨𝘽𝙊𝙏', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await cofs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
              cofs.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			cofs.updatePresence(from, Presence.composing)
		}, 2000)
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
						cofs.sendMessage(from,`𝘼𝙩𝙚𝙣𝙘𝙖𝙤 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙤𝙨 𝙢𝙚𝙢𝙗𝙧𝙤𝙨 𝙖𝙩𝙞𝙫𝙤𝙨 𝙙𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙖𝙣𝙩𝙞-𝙡𝙞𝙣𝙠. 𝙚𝙚 𝙫𝙤𝙘𝙚̂ 𝙚𝙣𝙫𝙞𝙖𝙧 𝙪𝙢 𝙡𝙞𝙣𝙠 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙫𝙤𝙘𝙚 𝙨𝙚𝙧𝙖 𝙚𝙭𝙥𝙪𝙡𝙨𝙤 𝙙𝙖𝙦𝙪𝙞  𝙜𝙧𝙪𝙥𝙤`, text)
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
					if (!tex) return cofs.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					cofs.sendMessage(from, bufferr, image, {quoted: mek})
					break
					case 'tts':
				   cofs.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return cofs.sendMessage(from, 'Qual o código da linguagem?', text, {quoted: mek})
                                   if (!isRegistered) return reply(mess.only.registerB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return cofs.sendMessage(from, 'CadÃª o texto', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							cofs.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
			    case 'google':
			    if (!isRegistered) return reply(mess.only.registerB)
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
                    cofs.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break
					case 'add':
					if (!isRegistered) return reply(mess.only.registerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um membro?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man \n ex: +55 89981246187')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cofs.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
        case 'criador':
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

               prep = await cofs.prepareMessageFromContent(from,{buttonsMessage},{})
               cofs.relayWAMessage(prep)
               break
               case 'gay':
               if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftoko})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
               case 'prisao':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftoko})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'comunismo':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftoko})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'efeitoverde':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftoko})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
    case 'gtasarespect':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftoko})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'efeitoazul':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftoko})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
					case 'efeitoblackwhite':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invertido':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invertido_blackwhite':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'efeitovermelho':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'efeitoblurple':
         if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'efeitoblurple2':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'gtavwasted':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'arco-iris':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':
		if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
					            case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'gtasarespect':
case 'moustache':
case 'lookwhatkarenhave':
case 'prisao':
case 'invertido':
case 'instagram':
case 'efeitoblackwhite':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (!isRegistered) return reply(mess.only.registerB)
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
     var imgbb = require('imgbb-uploader')
     if (isQuotedImage) {
     reply(lang.wait())
     let ppk = await cofs.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
	 thumbnya = await getBuffer(ppk)
   var bioij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    var delib = await cofs.downloadAndSaveMediaMessage(bioij, `./media/${sender}.png`)
    let  datau = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", delib)
     anuk = `${datau.display_url}`
     ini_gen = `${com}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     cofs.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: thumbnya})
     } else {
     	reply(lang.wait())
		ghost = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		let oppp = await cofs.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
		let medianya = await getBuffer(oppp)
		let datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
		fs.writeFileSync('janckuk.jpeg', datae, 'base64')
		let odata = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", 'janckuk.jpeg')
		anuk = `${odata.display_url}`
     ini_gen = `${comandos}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     cofs.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: medianya})
     } 
     break
					case 'wallpaperjogador':
					if (!isRegistered) return reply(mess.only.registerB)
				 data = fs.readFileSync('./wallpaper/wallpaperjogador.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                cofs.sendMessage(from, hasil, image, {quoted: mek})
				break
				case 'clube':
				 data = fs.readFileSync('./time/timesbr.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                cofs.sendMessage(from, hasil, image, {quoted: mek, caption: "𝙎𝙀𝙐 𝘾𝙇𝙐𝘽𝙀 𝙀́ 𝙀𝙎𝙏𝙀"})
				break
				case  'wallpaperaleatorio':
				if (!isRegistered) return reply(mess.only.registerB)
				 data = fs.readFileSync('./wallpaper/wallpaperaleatorio.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                cofs.sendMessage(from, hasil, image, {quoted: mek})
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
						cofs.groupRemove(from, mentioned)
					} else {
						mentions(`𝙁𝙇𝙒 𝙈𝙀𝙈𝘽𝙍𝙊 𝘾𝙊𝙈𝙐𝙈𝙆𝙆𝙆𝙆𝙆𝙆🤣  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						cofs.groupRemove(from, mentioned)
					}
					break
			    case 'delete':
				case 'del':
				case 'd':
				    if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					cofs.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝙐𝙚́')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('𝙅𝙖́ 𝙚𝙨𝙩𝙖́ 𝙤𝙣')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('𝘼𝙩𝙞𝙫𝙖𝙙𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤 𝙤 𝙧𝙚𝙘𝙪𝙧𝙨𝙤 𝙙𝙚 𝙗𝙤𝙖𝙨-𝙫𝙞𝙣𝙙𝙖𝙨😉️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('𝘿𝙚𝙨𝙖𝙩𝙞𝙫𝙖𝙙𝙤 𝙖 𝙛𝙪𝙣𝙘̧𝙖̃𝙤 𝙙𝙚 𝙗𝙤𝙖𝙨-𝙫𝙞𝙣𝙙𝙖𝙨 😡️')
					} else {
						reply('𝙋𝙦𝙥, 𝙥𝙖𝙧𝙖 𝙖𝙩𝙞𝙫𝙖𝙧 𝙚́ 𝟭 𝙚 𝙙𝙚𝙨𝙖𝙩𝙞𝙫𝙖 𝟬, 𝙨𝙡𝙘𝙠𝙠𝙠𝙠𝙠𝙠𝙠')
					}
                                      break
case 'tempoativo':
		            run = process.uptime() 
		            teks = `*BOT ATIVO A* ${kyun(run)}`
		            fakegroup(teks)
		            break  
                 case 'battlefield':
                 if (!isRegistered) return reply(mess.only.registerB)
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
					cofs.sendMessage(from, buffer1, image, {quoted: mek})
					break
					case 'destrava':
                    cofs.sendMessage(from, destrava(prefix), text, { quoted: mek })
                    break
                   case  'pornhub': 
                   if (!isRegistered) return reply(mess.only.registerB)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} cofs*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   fakegroup(mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   cofs.sendMessage(from, anu, image, {quoted: mek})
                   break
                   case 'toimg':  
                   if (!isRegistered) return reply(mess.only.registerB)
					fakegroup(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await cofs.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        cofs.sendMessage(from, buffer, image, {quoted: mek, caption: 'Feito fdp'})
				    fs.unlinkSync(ran)
					})					
			    	break 
			case 'tomp3':
			if (!isRegistered) return reply(mess.only.registerB)
		            if (!isQuotedVideo) return fakegroup
		            fakegroup(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await cofs.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            cofs.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
                   case 'ytmp3':
                   if (!isRegistered) return reply(mess.only.registerB)
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n*Tamanho do arquivo* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					cofs.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					bufferyyy = await getBuffer(anu.result)
					cofs.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                case 'ytmp4':
                if (!isRegistered) return reply(mess.only.registerB)
					if (args.length < 1) return reply('qual link fof??')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo do video* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					cofs.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					cofs.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					case 'play2':
					if (!isRegistered) return reply(mess.only.registerB)
                play2 = body.slice(6)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp4?q=${play2}&apikey=Alphabott`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canção encontrada!!!*\nJudul : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIANDO POR FAVOR, SEM FLOD*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_video)
                cofs.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                cofs.sendMessage(from, lagu, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: fgclink})
                break
					case 'play': 
					if (!isRegistered) return reply(mess.only.registerB)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=Alphabott`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canção encontrada!!!*\nJudul : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIANDO POR FAVOR, SEM FLOD*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                cofs.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                cofs.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: fgclink})
                break
                    case 'glitch': 
                    if (!isRegistered) return reply(mess.only.registerB)
                    if (args.length < 1) return reply(`*Examplo :*\n${prefix}${command} cofs`)
					darknn = body.slice(9)
					ll1 = darknn.split("|")[0];
					ll2 = darknn.split("|")[1];
					fakegroup(mess.wait)
					anu = await fetchJson(`https://apicofsv1.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&theme=glitch&apikey=Cofs`)
					buffer1 = await getBuffer(anu.result.url)
					cofs.sendMessage(from, buffer1, image, {quoted: mek})
					break
					case 'ytsearch':
					if (!isRegistered) return reply(mess.only.registerB)
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
                    if (!isRegistered) return reply(mess.only.registerB)
                    if (args.length < 1) return reply(`*Examplo :*\n${prefix}${command} cofs`)
					darknn = body.slice(9)
					ll1 = darknn.split("&")[0];
					ll2 = darknn.split("&")[1];
					fakegroup(mess.wait)
					anu = await fetchJson(`https://apicofsv1.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=naruto&apikey=Cofs`)
					buffer1 = await getBuffer(anu.result.url)
					cofs.sendMessage(from, buffer1, image, {quoted: mek})
					break
					case 'trigger':
					if (!isRegistered) return reply(mess.only.registerB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  cofs.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					cofs.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
                    case 'google':
                    if (!isRegistered) return reply(mess.only.registerB)
                    if (args.length < 1) return reply(`*Examplo :*\n${prefix}${command} cofs`)
					darknn = body.slice(9)
					ll1 = darknn.split("|")[0];
					ll2 = darknn.split("|")[1];
					ll3 = darknn.split("|")[2];
					fakegroup(mess.wait)
					anu = await fetchJson(`https://apicofsv1.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=Cofs`)
					buffer1 = await getBuffer(anu.result.url)
					cofs.sendMessage(from, buffer1, image, {quoted: mek})
					break
					case 'wallpapermenu':
					gopeynya = `${ppbot}`
            buff = await getBuffer(gopeynya)
           
           teksnya = `📸 *𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧 𝙈𝙚𝙣𝙪* ꧂
          
📸${prefix}wallpaperjogador
📸${prefix}wallpaperaleatorio`
         
         buttons = [  {buttonId: `${prefix}comandos`, buttonText: {displayText: '⋮☰ VOLTAR'}, type: 1},
{buttonId: `${prefix}criador`, buttonText: {displayText: '🧒 𝘾𝙧𝙞𝙖𝙙𝙤𝙧'}, type: 1}
]
imageMsg = (await cofs.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await cofs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
              cofs.relayWAMessage(prep)
      break
					case 'jogosmenu':
					gopeynya = `${ppbot}`
            buff = await getBuffer(gopeynya)
           
           teksnya = `🎮 *𝙅𝙤𝙜𝙤𝙨 𝙈𝙚𝙣𝙪* ꧂
          
🎮${prefix}clube`
         
         buttons = [  {buttonId: `${prefix}comandos`, buttonText: {displayText: '⋮☰ VOLTAR'}, type: 1},
{buttonId: `${prefix}criador`, buttonText: {displayText: '🧒 𝘾𝙧𝙞𝙖𝙙𝙤𝙧'}, type: 1}
]
imageMsg = (await cofs.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await cofs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
              cofs.relayWAMessage(prep)
      break
      case 'stickermenu':
      gopeynya = `${ppbot}`
            buff = await getBuffer(gopeynya)
            
    teksnya = `🤳 *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙈𝙚𝙣𝙪* ꧂
	
🤳${prefix}sticker
🤳${prefix}gtasarespect 
🤳${prefix}efeitoblackwhite
🤳${prefix}efeitoazul
🤳${prefix}comunismo
🤳${prefix}efeitoverde
🤳${prefix}prisao
🤳${prefix}gay
🤳${prefix}invertido
🤳${prefix}invertido_blackwhite
🤳${prefix}efeitovermelho
🤳${prefix}efeitoblurple
🤳${prefix}efeitoblurple2
🤳${prefix}gtavwasted
🤳${prefix}arco-iris
🤳${prefix}sepia`
    
buttons = [  {buttonId: `${prefix}comandos`, buttonText: {displayText: '⋮☰ VOLTAR'}, type: 1},
{buttonId: `${prefix}criador`, buttonText: {displayText: '🧒 𝘾𝙧𝙞𝙖𝙙𝙤𝙧'}, type: 1}
]
imageMsg = (await cofs.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await cofs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
              cofs.relayWAMessage(prep)
      break
      case 'downloadmenu':
      gopeynya = `${ppbot}`
            buff = await getBuffer(gopeynya)
            
    teksnya = `🖤 *𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙈𝙚𝙣𝙪* ꧂
	
🖤${prefix}play musica
🖤${prefix}play2 video`


buttons = [  {buttonId: `${prefix}comandos`, buttonText: {displayText: '⋮☰ VOLTAR'}, type: 1},
{buttonId: `${prefix}criador`, buttonText: {displayText: '🧒 𝘾𝙧𝙞𝙖𝙙𝙤𝙧'}, type: 1}
]
imageMsg = (await cofs.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await cofs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
              cofs.relayWAMessage(prep)
      break
      case 'grupomenu':
      gopeynya = `${ppbot}`
            buff = await getBuffer(gopeynya)
 
    teksnya = `👨‍👩‍👦 *𝙈𝙚𝙣𝙪 𝙂𝙧𝙪𝙥𝙤* ꧂
	
👨‍👩‍👦${prefix}antilink
👨‍👩‍👦${prefix}bemvindo
👨‍👩‍👦${prefix}add
👨‍👩‍👦${prefix}banir
👨‍👩‍👦${prefix}promover
👨‍👩‍👦${prefix}rebaixar`
   
	buttons = [  {buttonId: `${prefix}comandos`, buttonText: {displayText: '⋮☰ VOLTAR'}, type: 1},
{buttonId: `${prefix}criador`, buttonText: {displayText: '🧒 𝘾𝙧𝙞𝙖𝙙𝙤𝙧'}, type: 1}
]
imageMsg = (await cofs.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await cofs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
              cofs.relayWAMessage(prep)
      break
case 'promover':
					cofs.updatePresence(from, Presence.composing) 
                                        if (!isRegistered) return reply(mess.only.registerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Cadê a tag amigo?*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `*Feito, bem-vindo novo administrador* :\n`
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						cofs.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Feito, @${mentioned[0].split('@')[0]} foi promovido para adm.*  `, mentioned, true)
						cofs.groupMakeAdmin(from, mentioned)
					}
					break
					case 'rebaixar':
					if (!isRegistered) return reply(mess.only.registerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Cadê a tag amigo?*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Feito, @_.split('@')[0] foi rebaixado para membro comum* :\n`
						}
						mentions(teks, mentioned, true)
						cofs.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Feito, @${mentioned[0].split('@')[0]} foi rebaixado para membro comum* `, mentioned, true)
						cofs.groupDemoteAdmin(from, mentioned)
					}
					break
                case 'fig':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cofs.downloadAndSaveMediaMessage(encmedia)
                                                if (!isRegistered) return reply(mess.only.registerB)
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
								cofs.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cofs.downloadAndSaveMediaMessage(encmedia)
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
								cofs.sendMessage(from, buff, sticker)
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
					anu = await cofs.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await cofs.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cofs.sendMessage(_.jid, buff, image, {caption: `*ATENÇÃO* ⚠️\n\n${body.slice(4)}`})
						}
						reply('𝙍𝙚𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤!')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*ATENÇÃO* ⚠️\n\n${body.slice(4)}`)
						}
						reply('𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝙚𝙣𝙫𝙞𝙖𝙙𝙖 𝙘𝙤𝙢 𝙨𝙪𝙘𝙚𝙨𝙨𝙤')
					}
					break
					case 'ttp': 
if (!isRegistered) return reply(mess.only.registerB)
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    cofs.sendMessage(from, anu1, image, {quoted: fgclink})
                    break
                case 'simi':
					if (args.length < 1) return reply('Onde está o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
					case 'cofs2':
					if (!isRegistered) return reply(mess.only.registerB)
					gopeynya = `${ppbot}`
            buff = await getBuffer(gopeynya)
					koko = `${targetpc}@s.whatsapp.net`
					let p1 = await cofs.getStatus(sender)
anunya = process.uptime()

    teksnya = `
┏━━⬣ ~ ϟ𝘾𝙤𝙛𝙨𝘽𝙊𝙏༄ ♠️🇫🇷 ♫𝄢 𝙄𝙉𝙁𝙊        
┃👑 𝘾𝙧𝙞𝙖𝙙𝙤𝙧: ${koko.split('@')[0]}
┃🔥 𝙋𝙡𝙖𝙩𝙖𝙛𝙤𝙧𝙢𝙖 : 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥
┃✨ 𝙎𝙩𝙖𝙩𝙪𝙨: ${offline ? 'OFFLINE' : 'ONLINE'}
┃♠️ 𝙋𝙞𝙣𝙜: ${latensii.toFixed(4)} Seg
┃⌛ 𝘼𝙩𝙞𝙫𝙤 𝙖: ${kyun(anunya)}
┗⬣

┏━━⬣ 𝙎𝙪𝙖𝙨 𝙄𝙉𝙁𝙊 ✨🎭
┃👩‍🦱👨‍🦱 𝙉𝙤𝙢𝙚: ${pushname}
┃🎭 𝘽𝙞𝙤𝙜𝙧𝙖𝙛𝙞𝙖: ${p1 ? `${p1.status}` : '-'}
┃📱 𝙉𝙪́𝙢𝙚𝙧𝙤:  ${sender.split('@')[0]}
┗⬣`
    buttons = [  {buttonId: `${prefix}comandos`, buttonText: {displayText: '📖 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨'}, type: 1},
{buttonId: `${prefix}criador`, buttonText: {displayText: '🧒 𝘾𝙧𝙞𝙖𝙙𝙤𝙧'}, type: 1}
]
imageMsg = (await cofs.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await cofs.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
              cofs.relayWAMessage(prep)
      break
case 'autorespon': case 'autorespond':
      if (!isOwner && !isCoOwner && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
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
					        if (budy.includes("#m")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!m")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
        if (budy.includes("#a")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!a")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
        if (budy.includes("#s")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!s")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("bot")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("Bot")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
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
