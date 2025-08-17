const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BQOXVPK0JuTDVwV3pDaGRGM21uTWh0cVg1Qk1Kd2NxN0h5TUlyN3BXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2JFeFd0SUY1QnFpcGVzRGNEeVc2TmN1V2UzUWJsSjBvaEhuZVhwYzJDUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQmpIUzZxQzJDVW9xMTJBNHpiaDBHUHIvNTd0Y241OFNUL2dSWENWTW1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMTA2WDV2UmFmdTJMWURnK1NVTlVxY0JpeWNlMEg5Z244UUpkZjUrWkVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLYzFLSEZESmVuY0ppNmJud3ZpRjFwNXlrdUFvdXVKaXBLV3lqODhOa1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRkM1hOQmpUdmlxMng1cTV1dklOUGtmbkhNU2x4LzRmRUN5eHBWZ2FsaXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RkUXRacEFEV2ExNzdadnhCcU9lN0ZDTGs5S2NhOVVHUm8zUUl0RUVWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHdiQU5zdGtMWFUzQkFtcENtUjBBTjRXNXB3dFNIWmJkLzM4aG9YWThScz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxuWHpUcFJ1VExKWCtNVFk3NWVQenhkQzhKWTJyS0FiN1BmV292aXkxbFAzcTh0dEQycW55QTNRQzlHRXI3L3RQRmh2aGxyZFBDSzR4VzlDeUREQ0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6IkIxMktTQkphQllzU3lWQ1RxemhZbmdWVTRqRitGOXpPdWx0eTdMNnRCME09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjQ0NTA1MjYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAyNDkyRjQ5OTMwRTM2NTMwOTNDMTkxNjA0NUJBMDU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU0NTExMjV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI0NDUwNTI2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQUZCOEZDNzU4N0VDN0NDMjAyNjJCODdFMjYyMEY0NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NDUxMTI1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTVEtXUFJZRCIsIm1lIjp7ImlkIjoiOTIzMjQ0NTA1MjYzOjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzEwNDQwNTc5NDgzMDk6N0BsaWQiLCJuYW1lIjoi8J+QoyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHFsNTQwQ0VPMmRpTVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL2t2TkdHZTF0WG1tdnM1WkhCMDhmNzRBZUFoY3psbFNDaFRJTlBHTy9uRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM2hLaWwxN3JFNWtoNEtUd2NDbjNuRy95ZFRNdEFDZ1A1VXZDamFSRWVtdVMrYU9iQ09TQ21EUGhDYitTS3ZQRExFbGJEUk1TbFZNK1NFSGN2TW5BQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InBQb0k5OUxtUVIvcWZPZGJYWk9iazV1MGxTVmZUR1FlV0QrQ2hRbmI3Zm9MQlNDTHNFTTYzUURBSGhnQituY3RUam0xNG1pR0EyTU12Wmp3djVwcENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjQ0NTA1MjYzOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjVMelJobnRiVjVwcjdPV1J3ZFBIKytBSGdJWE01WlVnb1V5RFR4anY1eCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NDUxMTIxLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUo5ciJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yj7zp0.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ",",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yj7zp0.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
