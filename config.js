//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "27736297296";
global.sudo = process.env.SUDO || "27736297296,27732762351";
global.owner = process.env.OWNER_NUMBER || "27601755395";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhNajFjNHpzSUhudnFkYlhTN3JlL042WFBqVXd5bnFod0dJMWViQkYwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0U3ZG14a3RZMGFKbnowSHVOenQvRk1OOUdrS044ZHpBcmxIV0hnNlFDST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SFl2L1NXakZuYWpEcVZBdEZTanN0OXRUUTRvaTVSdlNlRTZrV25EZG1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5VnFJZi9nVUxQTzVPZGZoMmx6K0N5VU1Gb202VzJ1SkxSMmttOGRDRUFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFMTmptaUprU0JTb2tzaE5YWFRFZFluNUorOU5HclhVN0RXNi9EOCtsRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhSRjUxWFIxdTFRcDVUeS82dDlwMklCWU9QUytaWDdtTU1jV20vcHFQR3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU8yRGd6YTlIT3d1QkdNS245TzM2aTg1MjdWUzFPT21Bczh3WG1kVDVIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQvSUxoREF6bHMva1g3cW9WSEh5RzFlS3ZvakFEWVk3cUNUaVZaQ096MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVaZUk1dWZOOEV6ZGIwbWZOYXlhbXd2b1hwQ0xRTlhOYkpQQ3NsbDk3elRCR29wV3NBR3lGYzh2eTRNYTVhT0J3VFIvTnFqTWtHVy9DWlU5NS92MWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiI1Y0ExT1F3MHpiV1dUWHhpcjRCS1RiRXQyZFZtMFExVEV6eUlNMUtMQ2dNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjAxNzU1Mzk1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc1RTFGNkU0NDM4NDcwOTBCRUJGNjNFOEU2QUJEMENCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI4ODkxMDF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjAxNzU1Mzk1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVDREZDNzNFRTM5REVGNEFGODFDRDg5OTlEQTZCMEIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI4ODkxMDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InEwdjNoNE05U0JPZDNrRkUzMC0wUWciLCJwaG9uZUlkIjoiZjFlYzE4MWQtZTZjMS00NDdlLWI2MzQtMTMyNWFiZWMzOGNmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdvdjJUOVNiVFRwUjFjcGxNNTM0ZjRXeU4vQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwcjJ3S1dpZkFCWTlTanJJOWdZaVB0d2ZyQUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREFDMUhGQkgiLCJtZSI6eyJpZCI6IjI3NjAxNzU1Mzk1OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkxRazQwSEVQN214TFVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWXhoTXZycGFnbE5vTjBnODBBVTdacVQ3dzlNMVltVTJ5T2REaEhiSHAxaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU2s4ZVJZVEhwejduM2hJMlNYMy81WlZGdVVIZHFaVWFlKzR6RWlTVFkrWmlLSDdxN085eUpmNGlGc25vS0dZejgzSzRaVDY2RVlhMnJxZWUzblJQQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkgxcHUyVDJMWFgySytBWXZiWW52d1JNZ3FQN0xvWDZkMDhUUzVMbEYrQ3ladngvdTE3bVo4MllNelpTTEJsNG5ONjkrb01HczcwU0NWdllKKzA5NGpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2MDE3NTUzOTU6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXTVlUTDY2V29KVGFEZElQTkFGTzJhays4UFROV0psTnNqblE0UjJ4NmRaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODg5MDk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNKOSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`theCyleeBot`",
  author: process.env.PACK_AUTHER || "CadillacCylee",
  packname: process.env.PACK_NAME || "C Y L E E",
  botname: process.env.BOT_NAME || "insomniac",
  ownername: process.env.OWNER_NAME || "Insomnia be real",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
