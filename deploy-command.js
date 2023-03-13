/* eslint-disable brace-style */
const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./index');


const commands = [];
// Grab all the command files from the commands directory
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(config.TOKEN);

// and deploy your commands!
(async () => {
	try {
	  console.log(`Started refreshing ${commands.length} application (/) commands.`);

	  // The put method is used to fully refresh all commands in the guild with the current set
	  const data = await rest.put(
			Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID),
			{ body: commands },
	  );

	  console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
	  // And of course, make sure you catch and log any errors!
	  console.error(error);
	}
})();

// Stop the IIFE after 30 seconds
setTimeout(() => {
	return;
}, 30000);
//   The setTimeout function takes two arguments: a callback function to be executed after the specified delay (in milliseconds), and the delay itself. In this case, the callback function simply returns, which stops the IIFE from executing any further. The delay is set to 30,000 milliseconds (i.e., 30 seconds).

