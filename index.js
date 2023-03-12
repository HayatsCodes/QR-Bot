/* eslint-disable brace-style */
const fs = require('fs');
const path = require('path');
const { Client, Events, GatewayIntentBits, Collection, Events } = require('discord.js');
require('dotenv').config();

const config = {
	TOKEN: process.env.TOKEN,
	CLIENT_ID: process.env.CLIENT_ID,
	GUILD_ID: process.env.GUILD_ID,
};

const client = new Client({ intents: GatewayIntentBits.Guilds });

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
		console.error(`No command matching ${interaction.commandName} was found`);
		return;
	}

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
    }
});

client.login(config.TOKEN);