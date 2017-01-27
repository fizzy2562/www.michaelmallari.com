// GET Home page - http://www.michaelmallari.com/
module.exports.index = function(req, res, next) {
	res.render('home', {
		meta: {
			title: 'Hybrid thinker + doer',
			description: 'Hybrid product manager, designer, and developer. Launched digital products for American Express, Ford, Hasbro, Marriott, Marvel, Ralph Lauren, and others.',
			url_base,
			url_path: '/'
		}, 
		content: {
			section_hands_on: {
				heading: 'Not affraid of getting dirty in the proverbial garage',
				copy: 'While Michael has held cushy corporate jobs, he is also no stranger to being lean and scrappy. He has spent many hours in the “coffice”—building (coding and designing) and validating startup/product ideas. Heres a list of entrepreneurial ventures he has been involved in:',
				logos: [
					{  name: 'Credibly', alias: 'credibly'  },
					{  name: 'Cup of Wifi', alias: 'cupofwifi'  },
					{  name: 'Black Mamba', alias: 'blackmamba' },
					{  name: 'Pamela Kay', alias: 'pamelakay' },
					{  name: 'ParkingSkillz', alias: 'parkingskillz' },
					{  name: 'Scholar Athlete Venture', alias: 'scholarathlete' },
					{  name: 'Screech Owl', alias: 'screechowl' },
					{  name: 'Top MBA Applicants', alias: 'topmbaapplicants' },
					{  name: 'WorkLifeEdge', alias: 'worklifeedge' }
				]
			}
		}
	});
};





// GET About page - http://www.michaelmallari.com/about/
module.exports.about = function(req, res, next) {
	res.render('default', {

	});
};
