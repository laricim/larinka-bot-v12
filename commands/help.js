const Discord = require('discord.js');
const ayar = require('../ayarlar.json')

exports.run = async (client, message, args) => {


    
      const lariembed = new Discord.MessageEmbed()
         .setTitle(`**Larinka Help Menu**`)
        .setDescription(`**Activity Commands;**\n\`!activity <Channel_ID> poker\`\n\`!activity <Channel_ID> betrayal\`\n\`!activity <Channel_ID> youtube\`\n\`!activity <Channel_ID> fishington\n!activity <Channel_ID> chess\n\`\n**__Activity commands only work in the desktop app.__\n**
**Actions;**\n\`!kiss @user\`\n\`!pat @user\`\n\`!cuddle @user\`\n\`!hug @user\`\n\`!slap @user\`\n
**Other Commands;**\n\`!device @user\`\n\`!addemoji <link> emojiname\` - [admin command]\n\`!alarm <1h,1m,1s> <text to remind>\`\n\`!avatar @user\`\n\`!banner @user/id\`\n\`!ship @user\`\n\`!serverinfo\`
\`!invite\` - Add the bot to your server`)            
        .setColor(ayar.color)
       .setFooter(`Requested by ${message.author.tag}`).setTimestamp()
      message.channel.send(lariembed)
  message.react(ayar.yes)   
       
       ;
     };
exports.conf = {
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'help'
  };