const si = require('systeminformation');
module.exports = {
    name: 'network',
    description: "this is a network info command",
   async execute(client, message, args){
    si.networkInterfaces().then(data => message.channel.send(`Interface: ${data[1].iface}`));
    si.networkInterfaces().then(data => message.channel.send(`Type: ${data[1].type}`));
    si.networkInterfaces().then(data => message.channel.send(`IPv4: ${data[1].ip4}`));
}

}