const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

exports.run = async (client, message, args) => {
  //command
let user = message.mentions.users.first() || client.users.get(args[0])  

//if(!user) return message.reply("Tag the person you want to hug **^^**")

  //if(user.bot) return message.reply("You can't kiss the hug!")
//if(user.id === message.author.id) {

 
  
        async function work() {
        let owo = (await neko.sfw.cuddle());

        const dog = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> cuddles <@${user.id}>. nom nom~`)
        .setImage(owo.url)
        .setColor(`#000000`)
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
  name: 'cuddle'
};
