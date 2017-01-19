NextBus
=======

http://www.harrymt.com/nextbus

Simply show the next bus from Bristol to Wells and back, using the [Transport API](http://transportapi.com/).

Uses the following technologies:

- [GruntJS](http://gruntjs.com/)

## Gruntfile.js

The following Grunt tasks are used they can be found [here](Gruntfile.js).

```javascript

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // Minify HTML
  grunt.loadNpmTasks('grunt-contrib-concat'); // Concatenate JS
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify JS
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task
  grunt.loadNpmTasks('grunt-serve'); // Local server

```
