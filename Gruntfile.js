module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'lodash': {
			'build': {
				// output location
				'dest': 'dist/lodash.js',
				'options': {
					// modifiers for prepared builds
					// backbone, legacy, modern, mobile, strict, underscore
					//'modifier': 'legacy'
					'include': ['debounce', 'delay', 'defer']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-lodash');

	// Default task(s).
	grunt.registerTask('default', ['lodash']);

};