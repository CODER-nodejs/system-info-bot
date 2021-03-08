const os = require('os');
const osName = require('os-name');

const si = require('systeminformation');

const osLocale = require('os-locale');
module.exports = {
    name: 'general',
    description: "this shows general info",
   async execute(client, message, args){
    let locale = await osLocale()
    si.system().then(data => message.channel.send(`Computer model: ${data.manufacturer} ${data.model}`));
    message.channel.send(`OS: ${osName(os.platform(), os.release())}`)
    message.channel.send(`Locale: ${locale}`)
    si.osInfo().then(data => message.channel.send(`Arch: ${data.arch}`));
    si.osInfo().then(data => message.channel.send(`Hostname: ${data.hostname}`));
    si.cpu().then(data => message.channel.send(`CPU: ${data.manufacturer} ${data.brand}`));
    si.battery().then(data => message.channel.send(`Battery percentage: ${data.percent}%`));
    }
}