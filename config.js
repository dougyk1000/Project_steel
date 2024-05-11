const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kulearnerebooks@gmail.com"
global.location="Norton,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://douglasnkowo0145:#Br@@115g00d0145@cluster0.owgtzo0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github=process.env.GITHUB|| "https://github.com/dougyk1000/Project_steel";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "263789707745" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263789707745";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "263789707745,2637xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2637xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263789707745,2637xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_44_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhMEswcWZuVTRmMzZxcUg0bnRja3ZtcmI0WG5VT1JwTUJiaU9ybVBHeTcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4OTcwNzc0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREFBOUQ1NjlFQkM3OTlGRDhFMUE3MTJDMTlENzQ2MDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDA5ODU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg5NzA3NzQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQTg0RDJCODAzQzRCNDYyQ0I4NEQwMkRFM0Q4MTRBRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU0MDk4NTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM1EtS1ZvTHpRT0c0bjhiY19Tb0NJd1wiLFxuICBcInBob25lSWRcIjogXCIyMTcwODFhZC01OTEwLTQ4MTAtOTY4ZS1lZTZmYTE4N2ZjNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgNTQsXG4gICAgICA3NCxcbiAgICAgIDQ0LFxuICAgICAgMTU5LFxuICAgICAgMTIwLFxuICAgICAgNDIsXG4gICAgICA0NCxcbiAgICAgIDE3MCxcbiAgICAgIDE1MCxcbiAgICAgIDQ5LFxuICAgICAgMTA4LFxuICAgICAgNjgsXG4gICAgICA5NCxcbiAgICAgIDE5NixcbiAgICAgIDgyLFxuICAgICAgNTMsXG4gICAgICAxNjUsXG4gICAgICAyMDYsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTExLFxuICAgICAgMTE1LFxuICAgICAgNzQsXG4gICAgICA1NCxcbiAgICAgIDMsXG4gICAgICAxNzUsXG4gICAgICA5OCxcbiAgICAgIDgzLFxuICAgICAgMTczLFxuICAgICAgMTA5LFxuICAgICAgMjE2LFxuICAgICAgMTg2LFxuICAgICAgMTI4LFxuICAgICAgMTQ5LFxuICAgICAgNjYsXG4gICAgICAxNixcbiAgICAgIDk3LFxuICAgICAgMTk4LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0zSDJQSkpBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODk3MDc3NDU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZG08J2SgvCdko8g8J2RtvCdkocg8J2RuvCdkpXwnZKG8J2ShvCdko0g8J2RtvCdka3wnZGqXCIsXG4gICAgXCJsaWRcIjogXCIxMjUxODE0NTI0MTQ5OTI6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZNaXRNREVMaW4vTEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaUTBldGxSSHNCa0plS1IwajI4UjFsM3ZDL1U5d1k4RE1PZ2VYSGpjU21FPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZtU2RxMHVGd2pQQUQyR25kcFgzbGd4bXN3TXNYT3BvdUxCbFhnKzBYQjZYZzlGMm5wNnkxaUwybWF0Rkp3Q0ZUa2VsdHV4YjdCMHBBbHM3V3NCa0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlo5Rzl5WmJFYW56NmpOeDNZMlJGWVl4QkZ4cTNTTDVQVzdkdEEraUpwTGxHU1g5NW1WdmFWaTRFbVZJdlVQM3d3SEdWamcwU3RvVDB2SmNBQkh3dmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4OTcwNzc0NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTQwOTg1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZtQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm1BLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK2JTcGJVZFY3cGRvWWVkTHByUWd4V091YzJIRFBZWFc5aU9sWnU1b2dQYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5Nzk1NDM1NTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTQwOTg1NTcwMlwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.0",
  caption : process.env.CAPTION || "©𝚸𝚪𝚯𝐉𝚵𝐂𝚻_𝐒𝚻𝚵𝚵𝐋" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝚸𝚪𝚯𝐉𝚵𝐂𝚻_𝐒𝚻𝚵𝚵𝐋",
  packname: process.env.PACK_NAME || "😉",
  botname : process.env.BOT_NAME  || "𝚸𝚪𝚯𝐉𝚵𝐂𝚻_𝐒𝚻𝚵𝚵𝐋",
  ownername:process.env.OWNER_NAME|| "𝐷𝛩𝑈𝐺𝑌_𝛫1000",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝚸𝚪𝚯𝐉𝚵𝐂𝚻_𝐒𝚻𝚵𝚵𝐋"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
