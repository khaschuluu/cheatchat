module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: { files: [ 'grunt.js', 'app.js', 'routes/**/*.js', 'test/**/*.js' ] },
    test: { files: ['test/**/*.js'] },
    watch: { files: '<config:lint.files>', tasks: 'default' },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test');
};
