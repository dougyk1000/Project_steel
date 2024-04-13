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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_59_04_13_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic1B3Z3pKNlhVLzFZakc3Mms4b0lmWGo1TVBRTnVUVlREZytLT0p0cjlWVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjB6ZnVMa3A5MEsrMENmMSsxaGZUaVlSUlczcHZxN3c5d1RMNHI1NEE0eUU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0Yya0hVMk5FYkh5R1dreVEvUHA0Uk1keUF6bGNmV3A1dndUTUtGNDYxbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImpIVkRTdXVzNXh4TjN5QUEzS0RNaDBoanN6UkwvT2VFTDhIakg1eE5JMzA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0dod3k2U0xpUDMwaHRPWmR6WEcvK2lCd3B1SlhZQTVNRkM0Uk9qNzQzMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImRSRElGdC9aalNlaGFDOE02RS9aYkM2Qlo2VTBxdEU3UGZ4SHE5VVpFM1E9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrRnFtZ0Z0WXBQU2FlK2JpWmZ5QUhzdjljVjhEOUJUMmxNdUJzQ2tCa2xNPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0RsbVpkTXl5L091RVZtK3RmYys2b3hERlJLVTBvdGdDY3c1bUFWQ2MxMD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJwRHd4WkZwQlVhUUVpeGVuY3hzcExwVUoxOXZkUnc4bURkWnZPOEIvSXFmR1gxNW9CTzVEeGFkM09WakZzTG5yRzZGWnNORFEzWGxBaU9hRENJNURodz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NjYsXCJhZHZTZWNyZXRLZXlcIjpcIlRYVXdrVVRITHZ4M1ZDM2ZCNWViUVVXditBcmxNRWF1SHFwZVZ0alRWSkk9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNjM3MTg3ODE3ODJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNkIwOTkxNzkyMERDQUQ1RDI2NzkzMkU3QUIyRDRCNkFcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMzAyMzkzNn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNjM3MTg3ODE3ODJAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMDhCRjQ0OTM4MjJFRDdDQjdFQ0VGQTdCODk5RjlCMjRcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMzAyMzkzNn1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcImg3eklTSEFtVE9LRUFpcmkwWVY4V0FcIixcInBob25lSWRcIjpcIjdlMzJmZjY4LTgzZjEtNGQwYi1hYTU3LTAzYTA3ZTM4NTM2Y1wiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWjRnVHRrT1oxU3ZrMzVwT3Z1SE4wR3laamJVPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm8xd1JaRkVjUWFKTk94T056Z2dkWUlocjhsWT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCI5QlM5RDhLRFwiLFwibWVcIjp7XCJpZFwiOlwiMjYzNzE4NzgxNzgyOjJAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiODM4MzM5MTk2NjQyMDA6MkBsaWRcIixcIm5hbWVcIjpcIlfDqWIgw5DDqXZcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0t2aS91Z0JFTHZYNnJBR0dBRT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkFFNFZKZkRILzFxWjk3K0xtUkd5OFpWWkd1Mi9WazZJTzRzVkEyR1htRDg9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJJRnFmNzNGK0hLM2tXendyVmxhaGY0dEgrUjR2LzRiMTU5SFlYQXV1S2w5NFRYVUo4ZUpTd1dOMWF4YVV6c2hFSFJiOUR2MXJ4WUIvNm9CYVRwcENBZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkNHdm5SdzQ5UFFGRjlHTGoyaHozK202bS9TTG1sUEpLdjZnZXhKb3g1L1FKNCtVc2Z5MWt1V2hQUU9Ed1ZMcGlyNjkrWmMySHZJNHppMEx6eGpqU2hBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNjM3MTg3ODE3ODI6MkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRQk9GU1h3eC85YW1mZS9pNWtSc3ZHVldScnR2MVpPaUR1TEZRTmhsNWcvXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMzAyMzkzNCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFIWVBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIWVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2aWlRS1RWTGVBVDhlM255eW1aR21nK2dxais0c284TllWanRUUnZXbFdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ4ODYxNjIzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEzMDIzOTM0NzUyXCJ9Igp9" ;


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
