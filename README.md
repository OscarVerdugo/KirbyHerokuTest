## npm install @angular/cli@latest @angular/compiler-cli -D
## copy @angular/cli and @angular/compiler-cli dependencies from dev-dependencies to dependencies
## add command "heroku-postbuild":"ng build --prod" to scripts section in package.json
## put your npm and node versions in "engine" section
"engines": {
    "node": "12.18.1",
    "npm":"6.14.8"
  }
## copy typescript dependencie from dev-dependencies to dependencies
## npm install express path --save
## create and configure server.js in root folder of the application
## change "start" command to "start":"node server.js" in package.json
## add changes to git and push to master