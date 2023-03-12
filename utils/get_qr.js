/* eslint-disable brace-style */
const axios = require('axios');

async function getQR(userInput) {
	try {
		const response = await axios.get(`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${userInput}`);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
	}

}

module.exports = getQR;