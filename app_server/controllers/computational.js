var section_hands_on = {
	heading: 'Geeking out with modern web and mobile technologies',
	copy: 'With an undergraduate degree in Computer Science from New York Institute of Technology\'s School of Engineering and Computing Sciences and over ten years of professional software engineering experience, Michael has been (and still is) a techie at heart. Here\'s an abbreviated list of technologies he codes with/uses to deploy digital solutions:',
	logos: [
		{  name: 'HTML5', alias: 'html5'  },
		{  name: 'CSS3', alias: 'css3'  },
		{  name: 'LESS', alias: 'less' },
		{  name: 'JavaScript', alias: 'js' },
		{  name: 'Node.js', alias: 'nodejs' },
		{  name: 'Python', alias: 'python' },
		{  name: 'Flask', alias: 'flask' },
		{  name: 'PHP', alias: 'php' },
		{  name: 'Angular', alias: 'angular' },
		{  name: 'NativeScript', alias: 'nativescript' },
		{  name: 'React', alias: 'react' },
		{  name: 'React Native', alias: 'reactnative' },
		{  name: 'GitHub', alias: 'github' },
		{  name: 'AWS', alias: 'aws' },
		{  name: 'Heroku', alias: 'Heroku' }
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
