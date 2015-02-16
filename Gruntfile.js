
// Gruntfile.js 

module.exports = function (grunt){
  grunt.initConfig({
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
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false
      }
    },
    stringCheck: { 
      file: 'src/program.js',
      string: 'console'
    },
  });
  // Load Custom Task 
  grunt.task.loadTasks('tasks/');
  // Load npm Tasks
  grunt.loadNpmTasks('grunt-bump');

}

