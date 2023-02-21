const { Client } = require('discord.js-selfbot-v13')
const config = require('../config.json')

const client = new Client({
    checkUpdate: false,
    patchVoice: true,
    partials: [
        'CHANNEL',
        'GUILD_MEMBER',
        'GUILD_SCHEDULED_EVENT',
        'MESSAGE',
        'REACTION',
        'USER'
    ]
})

module.exports = client

require('./events/ready')
require('./events/message')

client.login(config.token)