module.exports = function (grunt){
  // Do Grunt related tasks here 
  grunt.task.loadTasks('tasks/');
  grunt.config.init();
  grunt.config('stringCheck.file', 'src/program.js');
  grunt.config('stringCheck.string','console');
  
};

