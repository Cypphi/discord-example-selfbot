const config = require('../../config.json')

exports.run = (client, message, args) => {
    message.channel.send('Gaming')
}

exports.conf = {
    aliases: ['e']
}

exports.help = {
    name: "example",
    description: "Example command."
}