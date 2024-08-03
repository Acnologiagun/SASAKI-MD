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
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExNbVQ3bEkrNUk3aUFpbSs3Tm5nQnJDNUpCTkp1dXFRYmVPOGRPQlNHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtSQXFMaCtQQm1haXVXa0QzMXNJakdVRnRmYUNWcm5zYUkxWXEwR0FSMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT2lXRWRVWThKNlM0a0tpMC9td2RKdWR6TUNzSnd1VEdOZXY5cUlGUEhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkQXFscUdXZjZ1UjV5YTVKZ25pQ3N2bHhsQkY3MU5GZXYxV3ltRmtsbldBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlMNUhKUnAzMnhFcEFzS1dIcGRSVDFNK0NJenVNdHJ4OGUvL2dHWUtjRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1qZ3B4Y2o0ZnJZNE9sT2M2ZzRGZFppa291bGJtYnVpUTVNNDBaQ0xDVUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUp4dFZBalpUa0ZRaVZocGtQdFRSVTl3UWIxM0tlMFB5NU5QN2V3Qzgwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmQybUUwZnBvU0UyNlVkeWJ3YXlYREx5c0l4N0I3clllenBBcFpSbWFTRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpGelpjYW9MVUs4TmlXTC85Uks2YUgreWxuN00zQ0UxOXkxY2x6a2JoTkx5TkZKazcxaTNTRFc2eWFyVnY1cnpLeGwvY2c4VEVMQXYrV3BZQlQ2WUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJhYlRMUTZvdnRpb3c4Tmh1dzlxbUJtaXNKZTZZVmJhalYzZmVvYXZkNkdzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5MDhjRl9iMlFLQ3BTZTlnLWV3SXp3IiwicGhvbmVJZCI6IjAyZjk3ZjAzLTBiNGYtNDY2Yi04MWExLTQwNTFhODkxZDZlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0d29oc282TnA4blJVRHZiUkh3TlZwVy9SL009In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE4RGhrZU5OYWFsb2kxaTY3QTBSQ1p5NnAvZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0orNHd1NEZFTG5kdUxVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktNZzVZNDhod0pYUFMyNUJtZllQOVA0K3luVFZGc0wwWjN0Nkt5WUhOVzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZYL1EwTVRLVGw5Sm42TGdSK1o2ZVljV1RDVEdCRVNCUElpazQ3MzBtYnQ1UXVhOG1NUlFOSWNZUTJKbU9QZVpUblRnbXZMeGlVMDJtbU5RY0xKVUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyaWh6M29oc1JCYUsveitHcDNwVDUvSnJHL3ROcGJRcEZGdDBBR0RZWVlLUFg3S1FocTA0L2ZqV2dtRElSbTJaYWFld3RPNkJhdExNVWpnMUNsV2JCZz09In0sIm1lIjp7ImlkIjoiMjQyMDY1MjQ3NTE1OjdAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY1MjQ3NTE1OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2pJT1dPUEljQ1Z6MHR1UVpuMkQvVCtQc3AwMVJiQzlHZDdlaXNtQnpWdSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjY5MTI2MH0=
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
