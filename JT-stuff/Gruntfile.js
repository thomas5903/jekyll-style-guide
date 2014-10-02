// Generated on 2014-01-23 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: styles
//   javascript: scripts
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
	// Show elapsed time after tasks run
	require('time-grunt')(grunt);
	// Load all Grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// Configurable paths
		yeoman: {
			app: 'app',
			dist: 'dist'
		},

		watch: {
			jekyll: {
				files: [
					'<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
					'!<%= yeoman.app %>/_bower_components/**/*'
				],
				tasks: ['jekyll:server']
			},
			js: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
				// tasks: ['concat'],
				// tasks: ['jshint'], NEED TO FIX PLUGINS OF JSHINT ERRORS THEN KEEP THIS ON
				options: {
						livereload: true
				}
			},
			less: {
				files: ['<%= yeoman.app %>/styles/**/*.less'],
				tasks: ['less:server']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
						'.jekyll/**/*.html',
						// '.jekyll/**/*.handlebars',
						'{.tmp,<%= yeoman.app %>}/<%= styles %>/**/*.less',
						'{.tmp,<%= yeoman.app %>}/<%= scripts %>/**/*.js',
						'<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
						]
				}
		},

		connect: {
			options: {
				port: 9014,
				livereload: 35728,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp',
						'.jekyll',
						'<%= yeoman.app %>'
					]
				}
			},
			test: {
				options: {
					base: [
						'.tmp',
						'.jekyll',
						'test',
						'<%= yeoman.app %>'
					]
				}
			},
			dist: {
				options: {
					open: true,
					base: '<%= yeoman.dist %>',
					livereload: false
				}
			}
		},

		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						// Running Jekyll also cleans the target directory. Exclude any
						// non-standard `keep_files` here (e.g., the generated files
						// directory from Jekyll Picture Tag).
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: [
				'.tmp',
				'.jekyll'
			]
		},
//Remember that Usemin takes care of transporting the main.min.css file to dist folder
		// Compiles LESS to CSS and generates necessary files if requested
		less: {
			options: {
				paths: ['<%= yeoman.app %>/_bower_components'],
			},
			dist: {
				options: {
					yuicompress: true,
					report: 'min'
				},
				files: {
					'<%= yeoman.app %>/styles/main.min.css': '<%= yeoman.app %>/styles/main.less',
					'<%= yeoman.dist %>/styles/ie.css': '<%= yeoman.app %>/styles/ie.less'
				}
			},
			server: {
				options: {
					sourceMap: true,
					sourceMapBasepath: 'app/',
					sourceMapRootpath: '../'
				},
				files: [{
					'.tmp/styles/main.min.css': '<%= yeoman.app %>/styles/main.less',
					'.tmp/styles/ie.css': '<%= yeoman.app %>/styles/ie.less'
				}]
			}
		},
//Remember that Usemin takes care of transporting the main.min.css file to dist folder
		autoprefixer: {
			// prefix all files
			server: {
				files: [{
					expand: true,
					cwd: '.tmp/styles',
					src: '{,*/}*.css',
					dest: '.tmp/styles'
				}]
			},
			dist: {
				src: '<%= yeoman.app %>/styles/main.min.css',
				dest: '<%= yeoman.app %>/styles/css/main.min.css'
			},
			sourcemap: {
				options: {
					map: true
				}
			}
		},

		jekyll: {
			options: {
				bundleExec: true,
				config: '_config.yml,_config.build.yml',
				src: '<%= yeoman.app %>'
			},
			dist: {
				options: {
					dest: '<%= yeoman.dist %>',
				}
			},
			server: {
				options: {
					config: '_config.yml',
					dest: '.jekyll'
				}
			},
			check: {
				options: {
					doctor: true
				}
			}
		},

		// Automatically inject Bower components into the HTML file
		'bower-install': {
				app: {
						html: '<%= yeoman.app %>/index.html',
						ignorePath: '<%= yeoman.app %>/'
				}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= yeoman.dist %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},
		usemin: {
			options: {
				assetsDirs: '<%= yeoman.dist %>',
			},
			html: ['<%= yeoman.dist %>/**/*.html'],
			css: ['<%= yeoman.dist %>/styles/**/*.css']
		},
		htmlmin: {
			dist: {
				// options: {
				// 	collapseWhitespace: true,
				// 	collapseBooleanAttributes: true,
				// 	removeAttributeQuotes: true,
				// 	removeRedundantAttributes: true
				// },
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>',
					src: '**/*.html',
					dest: '<%= yeoman.dist %>'
				}]
			}
		},
		// Usemin adds files to concat
		concat: {},
		// Usemin adds files to uglify
		uglify: {},
		// Usemin adds files to cssmin
		cssmin: {
			dist: {
				files: {
					'<%= yeoman.dist %>/styles/main.min.css': [
						// '.tmp/styles/{,*/}*.css',
						'<%= yeoman.app %>/styles/css/main.min.css'
					]
				}
			}
		},

		// The following *-min tasks produce minified files in the dist folder
		// imagemin currently broken when using on 'grunt build' task - run separately after build task
		// https://github.com/gruntjs/grunt-contrib-imagemin/issues/169
		imagemin: {
				// static: {                          // Target
			//     options: {                       // Target options
			//       optimizationLevel: 3
			//     },
			//     files: {                         // Dictionary of files
			//       '<%= yeoman.dist %>/img.png': '<%= yeoman.app %>/img.png', // 'destination': 'source'
			//       '<%= yeoman.dist %>/img.jpg': '<%= yeoman.app %>/img.jpg',
			//       '<%= yeoman.dist %>/img.gif': '<%= yeoman.app %>/img.gif'
			//     }
			//   },
				dynamic: {
					options: {
						cache: false
						// optimizationLevel: 5
					},
					files: [{
						expand: true,
						cwd: '<%= yeoman.app %>/img/',
						src: ['**/*.{gif,jpeg,jpg,png}'],
						dest: '<%= yeoman.dist %>/img/'
					}]
				}
		},

		svgmin: {
				dist: {
						files: [{
								expand: true,
								cwd: '<%= yeoman.app %>/svg',
								src: ['**/*.svg'],
								dest: '<%= yeoman.dist %>/svg'
						}]
				}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/**/*.js',
				'test/spec/**/*.js'
			]
		},

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			check: {
				src: [
					'<%= yeoman.app %>/styles/**/*.css'
				]
			}
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					src: [
						// Jekyll processes and moves HTML and text files.
						// Usemin moves CSS and javascript inside of Usemin blocks.
						// Copy moves asset files and directories.
						'img/**/*',
						'fonts/**/*',
						// Like Jekyll, exclude files & folders prefixed with an underscore.
						'!**/_*{,/**}',
						// Explicitly add any files your site needs for distribution here.
						'_bower_components/jquery-icheck/**/*',
						'_bower_components/flexslider/jquery.flexslider-min.js',
						'_bower_components/flexslider/flexslider.css',
						'_bower_components/flexslider/fonts/*',
						'_bower_components/pickadate/**/*',
						'_bower_components/fontawesome/css/**/*',
						'_bower_components/fontawesome/fonts/**/*',
						'_bower_components/bootstrap/js/*',
						'scripts/validate/**/*',
						'scripts/enrollment.js',
						'scripts/smart-wizard.js',
						'scripts/file-upload.js',
						'scripts/ie.js',
						'scripts/patient-registration.js'
						//'favicon.ico',
						//'apple-touch*.png'
					],
					dest: '<%= yeoman.dist %>'
				}]
			},
			templates: {
				expand: true,
				dot: true,
				cwd: '<%= yeoman.dist %>/handlebars/',
				src: '**/*',
				dest: 'staging/'
			}
		},

		// Generates a custom Modernizr build that includes only the tests you
		// reference in your app
		modernizr: {
				devFile: '<%= yeoman.app %>/_bower_components/modernizr/modernizr.js',
				outputFile: '<%= yeoman.dist %>/_bower_components/modernizr/modernizr.js',
				files: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'!<%= yeoman.dist %>/scripts/vendor/*'
				],
				uglify: true
		},

		handlebars: {
			dist: {
			  compile: {
			    options: {
			      // namespace: 'JST',
			    },
			    files: [{
			    	expand: true,
			    	dot: true,
			    	cwd: '<%= yeoman.dist %>/handlebars/',
			    	src: '**/*.handlebars',
			    	dest: '<%= yeoman.dist %>/handlebars/',
			    	ext: '.js'
			    }]
			  }
			},
			server: {
			  compile: {
			    options: {
			      // namespace: 'JST',
			    },
			    files: [{
			    	expand: true,
			    	dot: true,
			    	cwd: '.jekyll/handlebars/',
			    	src: '**/*.handlebars',
			    	dest: '.jekyll/handlebars/',
			    	ext: '.js'
			    }]
			  }
			}
		},

		concurrent: {
			server: [
				'less:server',
				'jekyll:server',
				'handlebars:server'
			],
			test: [
				'less:server'
			],
			dist: [
				'less:dist',
				'copy:dist'
				// 'concat',
				// 'uglify'
			]
		}
	});

	// Define Tasks
	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			// 'useminPrepare',
			// 'concat',
			'autoprefixer:server',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});

	// No real tests yet. Add later.
	grunt.registerTask('test', [
	//   'clean:server',
	//   'concurrent:test',
	//   'connect:test'
	]);

	grunt.registerTask('check', [
		'clean:server',
		'jekyll:check'
		// 'connect:dist',
		// 'jshint:all',
		// 'csslint:check'
	]);

	grunt.registerTask('build', [
		'clean',
		// Jekyll cleans files from the target directory, so must run first
		'jekyll:dist',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer:dist',
		'concat',
		'cssmin',
		'uglify',
		'usemin',
		'htmlmin'
		// 'modernizr'
		]);

	grunt.registerTask('deploy', [
		'check',
		'test',
		'build'
		// 'buildcontrol'
		]);

	grunt.registerTask('default', [
		'check',
		'test',
		'build'
	]);
};
