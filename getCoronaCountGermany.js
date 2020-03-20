const fs = require('fs-extra');
const axios = require('axios');
const cheerio = require('cheerio');

const CACHE_FILE = './data.tmp.html';

async function getCoronaCountGermany(force = false) {
	try {
		var data;

		if (fs.existsSync(CACHE_FILE) && !force) {
			// load data from cache
			try {
				data = await fs.readFile(CACHE_FILE);
			} catch(err) {
				return console.error(`Error loading cahe-file "${CACHE_FILE}": ${err}`);
			}
		} else {
			// load data from remote
			try {
				const response = await axios.get('https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html');
				if (response.status != 200) {
					throw new Error(`Could not load data: ${response.statusText}`);
				}
				data = response.data;
			} catch(err) {
				return console.error(`Error loading cache-file "${CACHE_FILE}": ${err}`);
			}

			try {
				fs.writeFile(CACHE_FILE, data);
			} catch(err) {
				console.error(`Error saving cache-file "${CACHE_FILE}": ${err}`);
			}
		}

		const $ = cheerio.load(data);
	
		const dateString = $('#main > div.text > p:nth-child(5)').text();
		const regexDate = /\(Stand:\s?([\d\.]*)\s?,\s?([\d:]*)\s?Uhr\)/g;
		const match = [...dateString.matchAll(regexDate)][0];
		if (!match || !match.length) {
			throw new Error(`Could not find date&time in "${dateString}"`);
		}
		
		const date = match[1];
		const time = match[2];
		const dateTime = `${date} ${time}`; //TODO use real date`

		const count = $('#main > div.text > table:nth-child(6) > tbody > tr:nth-child(13) > td:nth-child(2)').text();

		return {
			date: dateTime,
			count: count
		}

	} catch(err) {
		console.error(err);
	}
}

(async (force = false) => {
	const data = await getCoronaCountGermany();
	console.log(`${data.date}: ${data.count}`);
})();