const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Online, Commands Loaded!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Login with name ${client.user.username}!`);
  client.user.setStatus("idle");
  client.user.setActivity(`${prefix}help | ${prefix}yttogether`, { type: "WATCHING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(`Bot status loaded!`);

};