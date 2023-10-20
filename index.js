const axios = require("axios"); 
 const mongoose = require('mongoose'); 
 const CryptoJS = require("crypto-js"); 
 const { 
     delay, 
     useMultiFileAuthState, 
     BufferJSON, 
     fetchLatestBaileysVersion, 
     Browsers, 
     default: makeWASocket 
     } = require("@whiskeysockets/baileys") 
 const pino = require("pino"); 
  
 const UserSchema = new mongoose.Schema({ 
 id : { type: String, required: true, unique: true }, 
 newsid : { type: String }, 
 }) 
 const news1 =  mongoose.model("news1", UserSchema) 
  
  
  
         async function XAsena() { 
             mongoose.connect('mongodb+srv://nipuna2007:nipuna2007@cluster0.xzonoy7.mongodb.net/?retryWrites=true&w=majority') 
   .then(() => console.log('Connected!')); 
  
             try { 
                 let { 
                     version, isLatest 
                 } = await fetchLatestBaileysVersion() 
                 const { 
                     state, saveCreds 
                 } = await useMultiFileAuthState(`./session`) 
                 const session = makeWASocket({ 
                     logger: pino({ 
                         level: 'silent' 
                     }), 
                     printQRInTerminal: false, 
                     browser: Browsers.macOS("Desktop"), 
                     auth: state, 
                     version 
                 }) 
  
                 //------------------------------------------------------ 
  
                 session.ev.on("connection.update", async (s) => { 
                     const { 
                         connection, 
                         lastDisconnect 
                     } = s 
                     if (connection == "open") { 
  
 async function news() { 
  
     let response = await fetch('https://hirunews.aquaapk-dl.repl.co/api/latest'); 
     let data = await response.json(); 
  let mg = `*${data.title}*
  
${data.desc}

${data.time}`
     let newss = await news1.findOne({ id: '123' }) 
  
     if (!newss) { 
         await new news1({ id: '123', newsid: data.id, events:'true' }).save() 
           return session.sendMessage("120363039136072023@g.us",{image:{url: data.image}, caption: "YOUR CAPTION HERE"}) 
     } else { 
         if(newss.newsid == data.id )  
          { 
           return 
          } 
          else{ 
             await news1.updateOne({ id: '123' }, { newsid : data.id, events:'true'}) 
             return session.sendMessage("120363039136072023@g.us",{image:{url: data.image}, caption: "YOUR CAPTION HERE"}) 
          } 
  
     }  
     console.log(data); 
  
 } 
 setInterval(news, 1500);  
  
                     } 
                     if ( 
                         connection === "close" && 
                         lastDisconnect && 
                         lastDisconnect.error && 
                         lastDisconnect.error.output.statusCode != 401 
                     ) { 
                         XAsena() 
                     } 
                 }) 
                 session.ev.on('creds.update', 
                     saveCreds) 
                 await delay(3000 * 10); 
                 session.ev.on("messages.upsert", 
                     () => {}) 
  
             }catch(err) { 
                 console.log( 
                     err + "Unknown Error Occured Please report to Owner and Stay tuned" 
                 ); 
             } 
  
  
         } 
         XAsena()
