module.exports = function(grunt){

  let gruntInit = {};
  gruntInit.pkg = grunt.file.readJSON('package.json');
  grunt.initConfig(gruntInit);
  grunt.loadTasks("./tasks");
  grunt.registerTask("default", ["foo"]);

};
