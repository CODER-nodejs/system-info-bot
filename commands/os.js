var os = require('os');

const osName = require('os-name');

const si = require('systeminformation');

const osLocale = require('os-locale');
module.exports = {
    name: 'os',
    description: "this is a os command",
   async execute(client, message, args){
    message.channel.send(`Platform: ${osName(os.platform(), os.release())}`)
    si.osInfo().then(data => message.channel.send(`Distro: ${data.distro}`));
    si.osInfo().then(data => message.channel.send(`Kernel version: ${data.kernel}`));
    si.osInfo().then(data => message.channel.send(`UEFI: ${data.uefi}`));
    si.osInfo().then(data => message.channel.send(`Encoding: ${data.codepage}`));
    si.osInfo().then(data => message.channel.send(`Hostname: ${data.hostname}`));
    message.channel.send(`Locale: ${await osLocale()}`)
}
}