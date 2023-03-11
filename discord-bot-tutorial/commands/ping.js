const { SlashCommandBuilder } = require('discord.js');

new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with pong');

async execute(interaction) {
    await interaction.reply('pong');
}