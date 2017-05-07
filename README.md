
# Getting Started with Grunt by Jamie Pilora

1. Setup Project Folders 
```
mkdir -p ~/code/hello-grunt/tasks
mkdir -p ~/code/hello-grunt/src
```
1. Initialize npm and Install grunt-cli and grunt locally 
```
npm init 
npm install grunt-cli --save-dev 
npm install grunt --save-dev 
```
1. Add custom script called grunt package.json
```
{
  "name": "hello-grunt",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "grunt" : "grunt "
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vishalz/hello-grunt.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/vishalz/hello-grunt/issues"
  },
  "homepage": "https://github.com/vishalz/hello-grunt#readme",
  "devDependencies": {
    "grunt": "^1.0.1",
    "grunt-cli": "^1.2.0"
  }
}

```
1. Setup Gruntfile.js to load tasks from ./tasks folders 

```
module.exports = function(grunt){
  let gruntInit = {};
  gruntInit.pkg = grunt.file.readJSON('package.json');
  grunt.initConfig(gruntInit);
  grunt.loadTasks("./tasks");
  grunt.registerTask("default", ["foo"]);

};
```
1. Write a custom task foo.js in ./tasks folder

```
module.exports = function(grunt){
  let sayHello = function(){
    let optionBar = grunt.option('bar');
    grunt.log.writeln("Hello Grunt");
    grunt.log.writeln('Bar = ' + optionBar);
  }; // end of sayHello

  grunt.registerTask('foo',sayHello);

};

```
1. Invoke the task using npm run command 
```
npm run grunt -- foo --bar=hello 

> hello-grunt@1.0.0 grunt /home/vishal/code/hello-grunt
> > grunt  "foo" "--bar=hello"
>
> Running "foo" task
> Hello Grunt
> Bar = hello
>
> Done.
```


