module.exports = function (grunt) {

    'use strict';

    // Configure project.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    cleanBowerDir: true,
                    install: true,
                    targetDir: 'lib',
                    layout: 'byComponent',
                    verbose: true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    'js/src/bootstrap-offcanvas-navigation.js'
                ],
                dest: 'js/<%= pkg.name %>.js'
            }
        },
        jslint: {
            plugin: {
                directives: {
                    browser: true,
                    predef: [
                        'FastClick',
                        'jQuery',
                        'module'
                    ]
                },
                src: [
                    'Gruntfile.js',
                    'js/src/*.js'
                ]
            }
        },
        recess: {
            less: {
                options: {
                    compile: true,
                    compress: true
                },
                files: {
                    'dist/<%= pkg.name %>.min.css': [
                        'less/<%= pkg.name %>.less'
                    ]
                }
            }
        },
        uglify: {
            options: {
                report: 'gzip'
            },
            js: {
                dest: 'dist/<%= pkg.name %>.min.js',
                src: ['<%= concat.js.dest %>']
            }
        },
        watch: {
            recess: {
                files: [
                    'less/*.less'
                ],
                tasks: ['recess']
            },
            js: {
                files: [
                    'js/src/*.js'
                ],
                tasks: [
                    'jslint',
                    'concat',
                    'uglify'
                ]
            }
        }
    });

    // Load tasks.
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-recess');

    // Default tasks.
    grunt.registerTask('default', [
        'recess',
        'jslint',
        'concat',
        'uglify'
    ]);

};