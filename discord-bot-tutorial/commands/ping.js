const { SlashCommandBuilder } = require('discord.js');

new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with pong');