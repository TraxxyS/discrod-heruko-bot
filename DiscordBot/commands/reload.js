exports.run = async (client, message, args, ops) => {


    if(message.author.id !== ops.ownerID) return message.channel.send("Sorry, nur der Owner vom Bot kann diesen Command ausführen!");


    
    // Delete from cache
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)]
    } catch (e) {
        return message.channel.send(`Unable to reload: ${args[0]}`);



    }

    message.channel.send(`Succesfully reloaded ${args[0]}`)

}