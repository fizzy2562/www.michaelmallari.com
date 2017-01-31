var section_hands_on = {
	heading: 'Geeking out with modern web and mobile technologies',
	copy: 'With an undergraduate degree in Computer Science from New York Institute of Technology\'s School of Engineering and Computing Sciences and over ten years of professional software engineering experience, Michael has been (and still is) a techie at heart. Here\'s an abbreviated list of technologies he codes with/uses to deploy digital solutions:',
	logos: [
		{  name: 'HTML5', alias: 'html5', url: ''  },
		{  name: 'CSS3', alias: 'css3', url: ''  },
		{  name: 'JavaScript', alias: 'js', url: '' },
		{  name: 'Node.js', alias: 'nodejs', url: '' },
		{  name: 'Python', alias: 'python', url: '' },
		{  name: 'PHP', alias: 'php', url: '' },
		{  name: 'Angular', alias: 'angular', url: '' },
		{  name: 'NativeScript', alias: 'nativescript', url: '' },
		{  name: 'React', alias: 'react', url: '' },
		{  name: 'Git', alias: 'git', url: '' },
		{  name: 'AWS', alias: 'aws', url: '' },
		{  name: 'Heroku', alias: 'heroku', url: '' }
	]
}








// GET Computational landing page - http://www.michaelmallari.com/computational/
module.exports.index = function(req, res, next) {
	res.render('computational', {
		meta: {
			title: 'Computational thinking + doing',
			description: 'Michael developed an interest in CS in high school, pursued a BS degree in CS, and accumulated over ten years of experience as a professional developer.',
			url_base,
			url_path: '/computational/'
		},
		content: {
			section_hands_on
		}
	});
};
