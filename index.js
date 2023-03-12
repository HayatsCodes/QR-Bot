const fs = require('fs');

const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
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

const commandsPath = 

client.login(config.TOKEN);