const fetch = require('request-promise');
const cheerio = require('cheerio');

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

function query(week,classes) {
	const class_list = require('./data/class_names.json');
	let url = '';
	console.log(class_list);
}

module.exports = {
	get_weeks:get_weeks,
	query:query
};
