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
				copy: 'While Michael has held cushy corporate jobs, he is also no stranger to being in a startup environment. He has spent many hours in the “coffice”—building (coding and designing) and validating startup/product ideas. Heres a list of entrepreneurial ventures he has been involved in:',
				logos: [
					{  name: 'Credibly (Troy, MI)', alias: 'credibly'  },
					{  name: 'Cup of Wifi (Minneapolis, MN)', alias: 'cupofwifi'  },
					{  name: 'Black Mamba (Park City, UT)', alias: 'blackmamba' },
					{  name: 'Pamela Kay (Astoria, NY)', alias: 'pamelakay' },
					{  name: 'ParkingSkillz (New York, NY)', alias: 'parkingskillz' },
					{  name: 'Scholar Athlete Venture (Washington, DC)', alias: 'scholarathlete' },
					{  name: 'Screech Owl (Grand Forks, ND)', alias: 'screechowl' },
					{  name: 'Top MBA Applicants (Cambridge, MA)', alias: 'topmbaapplicants' },
					{  name: 'WorkLifeEdge (Boulder, CO)', alias: 'worklifeedge' }
				]
			}
		}
	});
};