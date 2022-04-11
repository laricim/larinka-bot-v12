const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const db = require('quick.db');
const Jimp = require('jimp')
 
exports.run = (client, message, args) => {
    if(message.author.id !== (ayarlar.BotOwner))return message.channel.send(new Discord.MessageEmbed().setColor("#020202").setDescription("**Yetkim Yok Gülüm :/**"));
    try {
      var code = args.join(" ");
      var evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
   let Embed = new Discord.MessageEmbed()
                            .setColor("#020202")
                            .setFooter(`Larinka`, client.user.avatarURL()) 
                            .addField("***__Larinka:__***","```js\n" + code + "```")
                            .setDescription("***__JavaScript:__***```js\n" + clean(evaled) + "```")
if (Embed.description.length >= 2048)
      Embed.description = Embed.description.substr(0, 2042) + "```...";
    return message.channel.send
    } catch (err) {
      message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'eval',
  description: 'Try command.',
  usage: 'eval2 [kod]'
};  