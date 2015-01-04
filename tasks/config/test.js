/**
 * Run mocha tests
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-mocha-test
 *
 */
module.exports = function(grunt) {

	grunt.config.set('mochaTest', {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'mocha_test_results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
	});

	grunt.loadNpmTasks('grunt-mocha-test');
};
