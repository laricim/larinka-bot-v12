const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const tags = require('common-tags');
const ms = require("ms"); //
const config = JSON.parse(require("fs").readFileSync("./ayarlar.json").toString());
const neko = require("nekos.life")
const discord = require('discord.js');
const http = require("http");
const app = express();



client.a = {
  "COLOR" : "00e5ee"
}

//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};




//
client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./commands/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} command loading.`);//
    files.forEach(f => {//
        let props = require(`./commands/${f}`);//
        log(`Larinka#0007 was here - ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commands/${command}`)];
            let cmd = require(`./commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./commands/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commands/${command}`)];
            let cmd = require(`./commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.BotOwner) permlvl = 4;
    return permlvl;
};

const fetch = require("node-fetch");
const PREFIX = ayarlar.prefix;

const ACTIVITIES = {
    "poker": {
        id: "755827207812677713",
        name: "Poker Night"
    },
    "betrayal": {
        id: "773336526917861400",
        name: "Betrayal.io"
    },
    "youtube": {
        id: "755600276941176913",
        name: "YouTube Together"
    },
    "fishington": {
        id: "814288819477020702",
        name: "Fishington.io"
    },
  chess: {
    id: "832012774040141894",
    name: "Chess in the Park",
  },
};


client.on("ready", () => console.log("Bot online."));
client.on("warn", console.warn);
client.on("error", console.error);

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(PREFIX) !== 0) return;

    const args = message.content.slice(PREFIX.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") return message.channel.send(`Ping <a:lari_arrow:902295553793224704> \`${client.ws.ping}ms\``);

    if (cmd === "yttogether") {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send(`Could not start **Youtube Together** ${ayarlar.x}`)
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send(`I need \` CREATE_INSTANT_INVITE \` permission`);

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913", // youtube together
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send("**YouTube Together** Could not start! <:lari_unsuccesful:902295644776038470>");
                message.channel.send(`Click here to start **YouTube Together** in **${channel.name}**\n<a:lari_arrow:902295553793224704> <https://discord.gg/${invite.code}> <:lari_succesful:902295597946667028>`);
            })
            .catch(e => {
                message.channel.send("**YouTube Together** Could not start! <:lari_unsuccesful:902295644776038470>");
            })
    }
    
    // or use this
    if (cmd === "activity") {
        const channel = message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("Geçersiz kanal!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("`DAVET_OLUŞTUR` yetkisi gerek! <:lari_unsuccesful:902295644776038470>");
        const activity = ACTIVITIES[args[1] ? args[1].toLowerCase() : null];
        if (!activity) return message.channel.send(`<:lari_unsuccesful:902295644776038470> Wrong Format ⬇️\n${Object.keys(ACTIVITIES).map(m => `- **${PREFIX}activity <Channel_ID> ${m}**`).join("\n")}`);

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: activity.id,
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`**${activity.name}**Başlatılamadı! <:lari_unsuccesful:902295644776038470>`);
                message.channel.send(` Click here to start **${activity.name}** in **${channel.name}**\n<a:lari_arrow:902295553793224704> <https://discord.gg/${invite.code}> <:lari_succesful:902295597946667028>`);
            })
            .catch(e => {
                message.channel.send(`Could not start! **${activity.name}**! <:lari_unsuccesful:902295644776038470>`);
            })
    }
});


// TOGETHER COMMANDS END \\

client.login(ayarlar.BotToken)