exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    let Social = message.guild.channels.find(`name`, "social");
    
    let SocialEmed = new Discord.RichEmbed()
        .setDescription(`Faabz Socialmedias`)
        .addField("Twitch: https://www.twitch.tv/faabz")
        .addField("Instagram: https://www.instagram.com/fabiangvntn/")
        .addField("YouTube: https://www.youtube.com/channel/UCToYSMSN1-eL_MxC_55iGyg?view_as=subscriber")

    Social.message.channel.send(SocialEmed);

}