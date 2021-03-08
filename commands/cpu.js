var os = require('os-utils');
module.exports = {
    name: 'cpu',
    description: "this shows cpu info",
   async execute(si, client, message, args){
    si.cpu().then(data => message.channel.send(`Manufacturer: ${data.manufacturer}`));
    si.cpu().then(data => message.channel.send(`Model: ${data.brand}`));
    si.cpu().then(data => message.channel.send(`Cores: ${data.cores}`));
    si.cpu().then(data => message.channel.send(`Speed: ${data.speed}`));
    os.cpuUsage(function(v){
        message.channel.send( 'CPU Usage (%): ' + v );
    });
    }
}