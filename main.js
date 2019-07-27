const Discord = require('discord.js')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))


const prefix = config.prefix;
const ownerID = "319093464740397056";

const serverStats = {
    guildID: '596741473601323020',
    totalUsersID: '604783822743142557',
    memberCountID: '604784590439186435',
    botCountID: '604784644323540995'
}




var client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username} ...`)
})


client.on('message', message => {
    

    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    // Return Statements
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    // Command Handler
    try {
        // Options 
        let ops = {
            ownerID: ownerID
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);
    } catch(e) {
        console.log(e.stack)
    }

})

// Serverstats
client.on('guildMemberAdd', member => {

    if(member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

});

client.on('guildMemberRemove', member => {
    
    if(member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

}) 


client.login(process.env.token)
