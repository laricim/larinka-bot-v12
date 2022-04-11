const Discord = require("discord.js");
const ayar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.react(ayar.x) 

  let larinkalink = args[0];
  let larinkaisim = args[1];
  let larinkaguild = message.guild;
  if (!larinkalink)
    return message.channel.send("You must enter the link for get emoji.");
  if (!larinkaisim) return message.channel.send("You have to enter the emoji name.");

  let embed = new Discord.MessageEmbed()
    .setColor("020202")
    .setAuthor("Emoji added.", message.guild.iconURL)
    .setDescription(`a new emoji with the name **${larinkaisim}.**`)
    .setFooter(`Requested by ${message.author.tag}`);
    message.react(ayar.yes)
  larinkaguild
    .emojis.create(`${larinkalink}`, `${larinkaisim}`)
    .then(emoji => message.channel.send(embed));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['addemoji','ae','ea'],
  permLevel: 0
};
exports.help = {
  name: "emojiadd",
  description: "Add emoji to server",
  usage: "addemoji <link> <emojiname>"
};