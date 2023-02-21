const client = require('..')
const config = require('../../config.json')

client.on('messageCreate', (message) => {
    if (message.author !== client.user) return
    if (!message.content.startsWith(config.prefix)) return
    let command = message.content.toLocaleLowerCase().split(" ")[0].slice(config.prefix.length)
    let args = message.content.split(" ").slice(1)
    let cmd
    if (client.commands.has(command)) {
        cmd = client.commands.get(command)
        message.delete()
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command))
        message.delete()
    }
    if (cmd) {
        console.log(`Running ${command} command.`)
        cmd.run(client, message, args)
    }
})