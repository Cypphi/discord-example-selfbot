const client = require('..')
const fs = require('fs')
const { Collection } = require('discord.js-selfbot-v13')

client.on('ready', async () => {
    console.log(`Successfully logged in on ${client.user.tag}!`)
    client.commands = new Collection()
    client.aliases = new Collection()
    client.description = new Collection()
    client.usage = new Collection()
    fs.readdir('./src/commands/', (err, files) => {
        if (err) console.log(err)
        console.log(`Found ${files.length} commands, loading...`)
        files.forEach(f => {
            if (!f.endsWith('.js')) return
            let props = require(`../commands/${f}`)
            console.log(`Loaded ${props.help.name} command.`)
            client.commands.set(props.help.name, props)
            client.description.set(props.help.description, props)
            props.conf.aliases.forEach(alias => {
                client.aliases.set(alias, props.help.name)
            })
        })
    })
})