var request = require('request');
var requestOptions = {
	url: 'https://someurl.com',
	method: "GET",
	json: {},
	qs: {}
}


// GET Data landing page - http://www.michaelmallari.com/data/
module.exports.index = function(req, res, next) {
	res.render('data', {
		html: {
			head: {
				title: 'Data-driven thinking + doing',
				description: 'During his undergraduate studies in CS, Michael developed a solid foundation in data, databases, and ER modeling. He continued his interests in data, models, and data-driven decison-making during his MBA studies.',
				url_path: '/data/'
			},
			body: {
				class: 'data',
				url_base
			}
		}
	});
};


// GET Data landing page - http://www.michaelmallari.com/data/lottery-ny-take5/
var renderTake5 = function(req, res, responseBody) {
	res.render('data-lottery-ny-take5', {
		html: {
			head: {
				title: 'Analytics tool for Take 5 (New York State) lottery drawings',
				description: 'With a 1:575,757 chance of winning the New York State Take 5 lottery jackpot, this tool helps you increase your odds of winning.',
				url_path: '/data/lottery-ny-take5/'
			},
			body: {
				class: 'data lottery-ny-take5',
				url_base
			}
		},
		// JSON-formatted data from NY Open Data - Take 5 winning numbers
		drawings: responseBody
	});
};
module.exports.take5 = function(req, res, next) {
	var requestOptions;
	requestOptions = {
		url: 'https://data.ny.gov/resource/hh4x-xmbw.json?$$app_token=5STaLX41TI9rRUSlhpcKTgToH',
		method: "GET",
		json: {},
		qs: {}
	};
	request(
		requestOptions,
		function(err, response, body) {
			renderTake5(req, res, body);
		}
	);
};