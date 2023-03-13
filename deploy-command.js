// your code here

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
  