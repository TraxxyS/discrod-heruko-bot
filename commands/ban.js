exports.run = async (client, message, args, ops) => {


        const Discord = require('discord.js')
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(22);
        if (message.author.id !== ops.ownerID) return message.channel.send("No Permission")
        if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked");

        let kickEmed = new Discord.RichEmbed()
            .setDescription(`✅ ${kUser} has been successfully banned!`)
            .setColor("#f25100")
            .addField("Ban User", `${kUser} with ID ${kUser.id}`)
            .addField("Ban by", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Ban in", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kReason);


        let kickChannel = message.guild.channels.find(`name`, "ban-channel");
        if (!kickChannel) return message.channel.send("Can't find test channel");

        message.guild.member(kUser).kick(kReason);
        
        kickChannel.send(kickEmed);
        kickChannel.message.send()

}





















































