const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '242069953931'
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'deathsgun2.0@gmail.com'
global.github = 'https://github.com/Alp24ni/SASAKI-MD'
global.location = 'Africa, Gabon, Libreville'
global.gurl = 'https://instagram.com/lawliet.kfx' // add your username
global.sudo = process.env.SUDO || '242069953931'
global.devs = '242069953931';
global.website = 'https://github.com/Alp24ni/SASAKI-MD' //wa.me/+242069953931
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/acf07e2ad76c2c142c3b9.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐒𝐀𝐒𝐀𝐊𝐈-𝐌𝐃' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝗧𝗘𝗔𝗠 𝗦𝗔𝗦𝗔𝗞𝗜' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xMNEFYemN0TVUvODlJQ1kzbUhuZVFOd2JYbnlGd1ZiRG1MRDkyMExHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWZiOUsxWmp6YmRseWFQSEJIcGw3a2VRTWN2VXBlVVBaWnU5Z1lXd2JVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSllkSEVTR1FKWERFeFBMc3JOeG1hTituSHFlWlFYeVc4RitmQnppNjJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmWDViVkRZcGUyNmdwSGFpY0Erd1VuaFZBQ1ZmMFBEQ1hoTlJUMG5Za2lZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKb05vcjFLMFE4eStxb1VtQkpZMi8rM1gvcUdYV21wVUZuTmw5MDlIWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgrK1h3K1pROW0rRDhNQWVwMyt1WGdrUGlmWDdabWhlT1RhRVJXVXZwajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklvOGFBUllSN2g2NnRLOEpwZlFIaTlUSzA0QmJaaE83MVIxT0NiMERFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXFEY290L1FUd1J3NmtxbGV4U0hBTjFnRzAralNNNnV5QVlFOWptTStTND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwyQlIvaUQvUVZzZnVvVUhJMzBvWWpYdGtZNHFwOWRsY0RWU1I1MVdlQWI1bHFDYnk2TnJZVzVaaW9xSDVlSHNRNHdDdld1Qld5a0xwVy81NWtFNGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IitjTGQ3UFBxTm1qSmI3b296Z2xKaEpJcGwwWStzZ213akhJMW9BSFdtVGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJDZGs0cERmUW11QmpPWVNjVHNpWnciLCJwaG9uZUlkIjoiMzBjMmVjNTgtNTE3ZC00OGI2LTg5YjItMWIwODgzNTA1MmI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZLME9xK0ZMVStoVS9HcnRBd1dXdHBndHl0az0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWxtVVBndFdqMGI4RFVWTm5KRU5RZnJyWHNZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnJOd3E0QkVMWEF2N1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU2RPUC9pc2RpSkhlWFBnQ1pQczNEQjVGaXMrV1Q1Wm1DeXdEWXZ0S3hGQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFhCUWN1aWpJTlFQWGJvV0tLcllPS3hFelo0TEQxSWdOOHBmTTBXUlVoRjIrc09HUGtlQUFTTWYxeFVkZlZiVEJ5NGd4RlJGUVZHOGVJQk5MbmZwRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1VekF5MnJ3K0h6a2dSK0U0YmFNUkNIc3VFUXA1MjcrWjhhTXVLWHZvV3owd0F5TUdXSm9OMGpTMStYcjBOZUFaTnR4MmpUTnpXRXg5MUdYVGxmRGdnPT0ifSwibWUiOnsiaWQiOiIyNDIwNjcyNzQ2NjA6MkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNjcyNzQ2NjA6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVblRqLzRySFlpUjNsejRBbVQ3Tnd3ZVJZclBsaytXWmdzc0EyTDdTc1JRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODAyMjMzfQ==
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '𝐒𝐀𝐒𝐀𝐊𝐈-𝐌𝐃' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝐒𝐀𝐒𝐀𝐊𝐈-𝐌𝐃' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '242' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,am 𝐒𝐀𝐒𝐀𝐊𝐈-𝐌𝐃...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'SASAKI-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
