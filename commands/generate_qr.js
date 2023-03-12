const { SlashCommandBuilder } = require('discord.js');
const getQR = require('../utils/get_qr');

const data = new SlashCommandBuilder()
	.setName('generate')
	.setDescription('generates qr code')
	.addStringOption(option => {
		option.setName('input')
			.setDescription('The characters you want to embed in the QR code')
			.setRequired(true);
	});
const execute = async function execute(interaction) {
	const input = interaction.options.getString('input');
	await interaction.reply(getQR(input));
};