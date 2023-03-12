const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require('discord.js');
const QRGenerator = require('../utils/qr-generator');

const data = new SlashCommandBuilder()
	.setName('generate')
	.setDescription('generates qr code')
	.addStringOption(option => {
		return option.setName('input')
			.setDescription('The characters you want to embed in the QR code')
			.setRequired(true);
	})
    .addStringOption(option => {
        return option.set
    });

const execute = async function execute(interaction) {
	const input = interaction.options.getString('input');
	console.log(`input: ${input}`);

	await QRGenerator(input);

	const file = new AttachmentBuilder('qr-code.png');

	const QREmbed = new EmbedBuilder()
		.setTitle('QR Code')
		.setDescription(`QR code for '${input}'`)
		.setImage('attachment://qr-code.png');
	await interaction.deferReply();
	await interaction.editReply({ embeds: [QREmbed], files: [file] });
};


module.exports = {
	data,
	execute,
};