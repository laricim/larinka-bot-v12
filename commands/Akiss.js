const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

exports.run = async (client, message, args) => {
  //command
let user = message.mentions.users.first() || client.users.get(args[0])  

//if(!user) return message.reply("Tag the person you want to kiss **^^**")

  //if(user.bot) return message.reply("You can't kiss the boat!")
//if(user.id === message.author.id) {
  

  
        async function work() {
        let owo = (await neko.sfw.kiss());

        const dog = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> kissed <@${user.id}>. :kiss:`)
        .setImage(owo.url)
        .setColor(client.a.COLOR)
        .setURL(owo.url);
        message.channel.send(dog);

}

      work();
}
  //   }           

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kiss'
};
