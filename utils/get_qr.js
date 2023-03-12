const QRCode = require('qrcode');

async function getQR(userInput) {
	const QRData = userInput;
	const QROptions = {
		errorCorrectionLevel: 'H',
		type: 'png',
		rendererOpts: {
			quality: 0.3,
		},
	};
}

module.exports = getQR;