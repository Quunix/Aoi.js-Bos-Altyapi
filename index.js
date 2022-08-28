const aoijs = require("aoi.js");
const ayarlar = require("./ayarlar.json")
 const bot = new aoijs.Bot({
   token: ayarlar.token,
   prefix: ayarlar.prefix,
   intents: "all"
 });
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/")
  
bot.onMessage() 
bot.command({
  name: "ping",
  code: `Pingim \`$ping ms\` ` 
})

bot.status({
  text: "Quunix",
  type: "PLAYING",
})

bot.variables({
Quunix: "<3",
aoijs:"<3"
})