const Discord = require('discord.js');
const ayar = require('../ayarlar.json')
//larinkaxd
exports.run = async (client, message, args) => {

let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first()
} else {
member = message.member;

}

let lightmind = {
  web: 'Internet Browser',
  desktop: 'Computer (App)',
  mobile: 'Mobile'
}

let durum = (member.user.presence.status).replace('dnd', 'Do not disturb').replace('idle', 'Idle.').replace('online', 'Online.').replace('offline', 'Offline.');
let larinka;
if(member.user.presence.status !== 'offline') {
larinka = ` \ndevice : ${lightmind[Object.keys(member.user.presence.clientStatus)[0]]}` } else { larinka = '' }

  const larinkamk = new Discord.MessageEmbed()
.setColor(ayar.color)
.setFooter(`Requested by ${message.author.tag}`)
.setImage(ayar.larininpp)
  .setDescription(`User's status : ${durum} ${larinka}`).setTimestamp()
  
  message.channel.send(larinkamk)

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'device'
};
