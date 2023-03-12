const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const config = {
    TOKEM
};

const client = new Client({ intents: GatewayIntentBits.Guilds });

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

