const Discord = require('discord.js');
const client = new Discord.Client();
//prefix here
const prefix = '-';
  
const si = require('systeminformation');
var os = require('os-utils');
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('The bot is online :)');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(client, message, args);
    } 

    if(command === 'general'){
        client.commands.get('general').execute(client, message, args);
    } 

    if(command === 'cpu'){
        client.commands.get('cpu').execute(si, client, message, args);
    } 

    if(command === 'os'){
        client.commands.get('os').execute(client, message, args);
    }
    
    if(command === 'network'){
        client.commands.get('network').execute(client, message, args);
    } 
});
//toke here
client.login('');