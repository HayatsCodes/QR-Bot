const QRCode = require('qrcode');

async function QRGenerator(userInput) {
	const QRData = userInput;
	const QROptions = {
		errorCorrectionLevel: 'H',
		type: 'png',
		rendererOpts: {
			quality: 1,
		},
	};

	await QRCode.toFile('qr-code.png', QRData, QROptions, (err) => {
		if (err) {
			console.error(err);
		}
		else {
			console.log('QR code saved to qr-code.png');
			return 'qr-code.png';
		}
	});
}

module.exports = QRGenerator;