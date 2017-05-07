module.exports = function(grunt){

  let sayHello = function(){
    let optionBar = grunt.option('bar');
    grunt.log.writeln("Hello Grunt");
    grunt.log.writeln('Bar = ' + optionBar);
    
  };
  grunt.registerTask('foo',sayHello);

};
