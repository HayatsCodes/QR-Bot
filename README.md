# QR Generator Discord Bot (QR-BOT)
A Discord bot that generates preferred color QR codes for text and URLs.

## Architecture
The bot was built using the [discord.js](https://discord.js.org/#/) library while the [qrcode](https://www.npmjs.com/package/qrcode) npm package was used to generate the qr code.

![QR-Bot Architectural diagram](/assets/images/qr-bot-architecture.png "QR-Bot Architecture")

## Requirements 
Discord User:

- Have an active discord account
- Join this [discord server](https://discord.gg/e5u7wujE) to use the bot.
- Click [here](#usage) for usage instructions

Discord Server:

- Have an active discord account
- Be the owner of a discord [server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-) or have a "Manage Server" permission on a server.

## Installations
To add the bot to a server follow this steps:
- Follow this [link](https://discord.com/api/oauth2/authorize?client_id=1084267438213963787&permissions=0&scope=bot%20applications.commands)
- You should see something like this:

![Bot permmission](/assets/images/bot-permission.jpg)

- Choose the server you want to add it to and click "Authorize"
- This should then present you a nice confirmation message:

![Bot Authorized](/assets/images/bot-authorized.png)

- Congratulations! You've successfully added QR-BOT to your Discord server. It should show up in your server's member list somewhat like this:

![Bot Added](/assets/images/bot-added.jpg)

## Usage
The bot responds to the following commands:
- `/generate input[<text>]`: Generates a QR code for the specified text/URL.

Example:

`/generate input[Hello world]`: Generates a QR code for the text hello world.

`/generate input[github.com]`: Generates a QR code for github.com URL.


### Optional commands
`/generate input[<text>] background-color[<color>] foreground-color[<color>]`: Generates a QR code for the specified text/URL with the option to specify a background/foreground color. The color can be one of the following:

1. White
2. Black
3. Red
4. Green
5. Yellow
6. Blue

Example:

`/generate input[github.com]  background-color[Red] foreground-color[Green]`

## Contributing
If you would like to contribute to this project, feel free to open an issue or submit a pull request.

## Acknowledgments
- This bot was built using the discord.js library.
- QR code generation is powered by the qrcode npm package.
- The bot is hosted on [Railway](https://railway.app/)
