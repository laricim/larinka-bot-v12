const Discord = require('discord.js');
const ms = require('ms')

exports.run = async(client , message , args) => {
  
  let süre = args [0] 
  
  if(!süre) return message.channel.send(`!alarm <1h,1m,1s> <text to remind>`)
  
  let alarm = args.slice(1).join(' ')
  
  if(!alarm) return message.channel.send(`!alarm <1h,1m,1s> <text to time>`)
  
  message.channel.send(`I will let you know in **${süre}**.`)
  
  setTimeout(() => {
  
  message.channel.send(`<@${message.author.id}>,⏰ It's time for what you want me to remind you.\n**${alarm}**`);
  
  }, ms(süre));

}
exports.conf = {
  aliases: []
};
exports.help = { 
  name: 'alarm'
};