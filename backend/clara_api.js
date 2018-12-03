const fetch = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
//get_weeks get the current week in ascending order
function get_weeks () {
	const navbar =  {
		uri: 'https://www.clara-online.de/vertretung/Plan_SUS/frames/navbar.htm',
		transform: (body) => {
			return cheerio.load(body);
		}
	};

	return fetch(navbar)
		.then(($) => {
			let weeks = [];
			$('select[name=week] option').each(function () {
				let calender = $(this).attr();
				calender = calender.value;
				let date = $(this).text();
				weeks.push({calender,date:date});
			});
			weeks = weeks.sort((a, b) => parseInt(a.calender) - parseInt(b.calender));
			return weeks;
		});
}

async function query( week , class_id ) {
	const class_list_file = fs.readFileSync('./data/class_names.json');
	const class_list = JSON.parse(class_list_file);
	// get it working with EF as a start 

	//search for classes id and prepare query 
	const base_query_uri = `https://www.clara-online.de/vertretung/Plan_SUS/${week}/w/w000${class_id}.htm`;
	//append id + week 
	console.log(base_query_uri);
}

module.exports = {
	get_weeks:get_weeks,
	query:query
};
