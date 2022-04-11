const Discord = require('discord.js');
const ayar = require('../ayarlar.json')

exports.run = function(client, message) {
  if(message.author.id !== (ayar.BotOwner))
    return message.react(ayar.x) //(
  const embed = new Discord.MessageEmbed()
  .setColor(ayar.color)
  .setFooter(ayar.footer)
  .setDescription(`**Bot Restarting!**`)
    message.channel.send(embed).then(msg => { //("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT]Restarting.");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot', 
  description: 'restart the bot',
  usage: 'reboot'
};
