const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('Oynuyor kısmı ayarlandı!');
console.log(`${client.guilds.size} sunucu ve ${client.users.size} kullanıcıya hizmet veriliyor`);
console.log('Bot aktif, Komutlar çalıştırıldı.');

  
  
    var Oynuyor = [
      
      





    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Oynuyor.length-0+1)+0);

        client.user.setActivity(Oynuyor[random], `merhabalar ben hüseyinin malafatıyım`) // twitch linki gerektirmez fakat yine de olsun :)
        }, 25000); // DBL kayıt olucak arkadaşlar için 25000 uygundur. Kayıt olmayacaklar değiştirebilir :)

}; 