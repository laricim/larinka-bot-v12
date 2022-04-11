const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`You have to tag someone`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤`
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
        var yorum = `Let's get you married <3`
        if(anasonuc < 80) {
                var yorum = 'uwu :3'
        }
        if(anasonuc < 60) {
                var yorum = 'Maybe (:'
        }
        if(anasonuc < 40) {
                var yorum = 'Ehh'
        }
        if(anasonuc < 20) {
                var yorum = 'Forget this.'
        }
        const embed = new Discord.MessageEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`%${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 0,
}
 
exports.help = {
        name: 'ship',
        description: 'ship',
        usage: 'ship [@user] [@user]'
}