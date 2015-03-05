'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var _ = require('lodash'),
        scarc = grunt.file.readJSON('./.scarc'),
        exclude = _.map(scarc.exclude, function (path) {
            return '!' + path;
        });

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['**/*.js'].concat(exclude)
        },

        phpcs: {
            options: {
                standard: 'PSR2'
            },
            all: {
                dir: ['**/*.php'].concat(exclude)
            }
        }

    });

    grunt.registerTask('js-sca', ['jshint']);
    grunt.registerTask('php-sca', ['phpcs']);
    grunt.registerTask('sca', ['jshint', 'phpcs']);

};
