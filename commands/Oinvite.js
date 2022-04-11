const Discord = require('discord.js');
const ayar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
 
    
    
      const lariembed = new Discord.MessageEmbed()
      .setTitle(`Invite link`) 
      .setDescription(`[Add your server](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`).setTimestamp()            
        .setColor(ayar.color)
     //  .setTimestamp()
       //.setFooter(`Requested by ${message.author.tag}`)
      message.channel.send(lariembed)
  message.react(ayar.yes)   
  //  .setImage(ayar.larininpp)
       
       ;
     };
exports.conf = {
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'invite'
  };