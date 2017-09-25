module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        changelog: {},

        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
        },

        jshint: {
            options: {
                node: true,
                browser: true,
                esnext: true,
                bitwise: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                regexp: true,
                undef: true,
                unused: true,
                trailing: true,
                smarttabs: true,
                globals: {
                    L: false,
                    LeafletToolbar: false,

                    // Mocha

                    describe: false,
                    it: false,
                    before: false,
                    after: false,
                    beforeEach: false,
                    afterEach: false,
                    chai: false,
                    expect: false,
                    sinon: false
                }
            },
            source: {
                src: [ 'src/*.js', 'Gruntfile.js', 'package.json' ]
            },
            test: {
                src: [ 'test/SpecHelper.js', 'test/src/**' ],
            },
            grunt: {
                src: [ 'Gruntfile.js' ]
            }
        },

        autoprefixer: {
            dist: {
                src:    'dist/leaflet.draw-toolbar.css',
                dest:   'dist/leaflet.draw-toolbar.css'
            }
        },

        cssmin: {
            target: {
                files: {
                    'dist/leaflet.draw-toolbar.min.css': ['dist/leaflet.draw-toolbar.css']
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/leaflet.draw-toolbar.min.js': ['dist/leaflet.draw-toolbar.js']
                }
            }
        },

        less: {
            source: {
                files: {
                    'dist/leaflet.draw-toolbar.css': 'src/Toolbar.less'
                }
            }
        },

        copy: {
            dist: {
                files: [
                    { cwd: 'src/images', src: ['**'], dest: 'dist/images', expand: true }
                ]
            }
        },

        karma: {
            travis: {
                configFile: 'test/karma.conf.js',
                background: false,
                singleRun: true,
                browsers: [ 'PhantomJS' ]
            },
            development: {
                configFile: 'test/karma.conf.js',
                background: true
            },
            unit: {
                configFile: 'test/karma.conf.js',
                background: false,
                singleRun: true
            }
        },

        watch: {
            options : {
                livereload: true
            },
            source: {
                files: [
                    'src/**',
                    'test/**',
                    'Gruntfile.js'
                ],
                tasks: [ 'build:js' ]
            },
            css: {
                files: [ 'src/*.less' ],
                tasks: [ 'build:css' ]
            }

        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    keepalive: true
                }
            }
        },

        concat: {
            dist: {
                options: {
                    banner: '(function(window, document, undefined) {\n\n"use strict";\n\n',
                    footer: '\n\n})(window, document);'
                },
                src: [
                    'src/draw/DrawAction.js',
                    'src/draw/control/subactions/DrawAction.Cancel.js',
                    'src/draw/control/subactions/DrawAction.RemoveLastPoint.js',
                    'src/draw/control/actions/DrawAction.Circle.js',
                    'src/draw/control/actions/DrawAction.Marker.js',
                    'src/draw/control/actions/DrawAction.Polygon.js',
                    'src/draw/control/actions/DrawAction.Polyline.js',
                    'src/draw/control/actions/DrawAction.Rectangle.js',
                    'src/draw/DrawToolbar.js',
                    'src/edit/EditToolbar.js',
                    'src/edit/EditAction.js',
                    'src/edit/control/EditAction.Control.js',
                    'src/edit/control/subactions/EditAction.Control.Save.js',
                    'src/edit/control/subactions/EditAction.Control.Undo.js',
                    'src/edit/control/actions/EditAction.Control.Edit.js',
                    'src/edit/control/actions/EditAction.Control.Delete.js',
                    'src/edit/control/EditToolbar.Control.js',
                    'src/edit/popup/EditAction.Popup.js',
                    'src/edit/popup/actions/EditAction.Popup.Edit.js',
                    'src/edit/popup/actions/EditAction.Popup.Delete.js',
                    'src/edit/popup/EditToolbar.Popup.js'
                ],
                dest: 'dist/leaflet.draw-toolbar.js',
            }
        },

        'gh-pages': {
            src: [
                'dist/**',
                'examples/**',
                'node_modules/leaflet/**',
                'node_modules/leaflet-draw/**'
            ]
        }
    });

    /* Run tests once. */
    grunt.registerTask('test', [ 'jshint', 'karma:unit', 'coverage' ]);

    /* Default (development): Watch files and lint, test, and build on change. */
    grunt.registerTask('default', ['karma:development:start', 'watch']);

    grunt.registerTask('travis', [ 'jshint', 'karma:travis' ]);

    grunt.registerTask('build:js', [
        'jshint',
        'karma:development:run',
        'coverage',
        'concat:dist',
        'uglify:dist'
    ]);

    grunt.registerTask('build:images', [ 'copy:dist' ]);

    grunt.registerTask('build:css', [ 'less', 'autoprefixer', 'cssmin' ]);

    grunt.registerTask('coverage', 'Custom commmand-line reporter for karma-coverage', function() {
        var coverageReports = grunt.file.expand('coverage/*/coverage.txt'),
            reports = {},
            report, i, len;

        for (i = 0, len = coverageReports.length; i < len; i++) {
            report = grunt.file.read(coverageReports[i]);
            if (!reports[report]) {
                reports[report] = [coverageReports[i]];
            } else {
                reports[report].push(coverageReports[i]);
            }
        }

        for (report in reports) {
            if (reports.hasOwnProperty(report)) {
                for (i = 0, len = reports[report].length; i < len; i++) {
                    grunt.log.writeln(reports[report][i]);
                }
                grunt.log.writeln(report);
            }
        }
    });
};
