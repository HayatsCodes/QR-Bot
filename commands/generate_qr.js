const fs = require('fs');
const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require('discord.js');
const getQR = require('../utils/get_qr');

const data = new SlashCommandBuilder()
	.setName('generate')
	.setDescription('generates qr code')
	.addStringOption(option => {
		return option.setName('input')
			.setDescription('The characters you want to embed in the QR code')
			.setRequired(true);
	});

const execute = async function execute(interaction) {
	const input = interaction.options.getString('input');
	console.log(`input: ${input}`);
	const QRImage = await getQR(input);
	const QRImageUrl = await new AttachmentBuilder('/');

	const QREmbed = new EmbedBuilder()
		.setTitle('QR Code')
		.setDescription(`QR code for '${input}'`)
		.setImage(`attachment://${QRImageUrl}`);
	await interaction.reply({ embeds: [QREmbed], files: [QRImage] });
};


module.exports = {
	data,
	execute,
};