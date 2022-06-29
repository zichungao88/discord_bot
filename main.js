const Discord = require('discord.js');

const client = new Discord.Client({intents:["GUILDS", "GUILD_MESSAGES"]});

client.once('ready', () => {
    console.log('Your JG Vlogs Personal Assistant is online!');
});

// NOT ACTUAL TOKEN

client.login('OTkxNTE4MDEwMDM4ODI1MDYy.GMV-6c.EkfroZeOBX5dZIwqJ9qEUTT5NVLStuh2pCGs5g');
