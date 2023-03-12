const {Client, Events, GatewayIntentBits } = require('discord.js');

client = new Client({ intents: GatewayIntentBits.Guilds });