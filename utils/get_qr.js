const qrcode = require('qrcode');
const axios = require('axios');

async function getQR(userInput) {
	try {
		const response = await axios.get(`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${userInput}`, {
			responseType: ArrayBuffer,
		});

		// const QRImageUrl = `data:image/png;base64,${QRData}`;

		// console.log(QRImageUrl);
		// return QRImageUrl;
	}
	catch (error) {
		console.log(error);
	}
}

module.exports = getQR;