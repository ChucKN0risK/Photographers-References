Photographer's References
=========================

## Requirements
* [node.js 0.12.x/npm](http://nodejs.org/download/)

## Getting Started

1. If you already have MAMP/WAMP installed go to the corresponding folder : `/www` for Windows or `/htdocs` for OSX.
Don’t forget to launch your Apache server.

2. Clone this repo in your dev directory via your git interface or via your CLI (Command Line Interface). I personally use [iTerm](https://iterm2.com/).

3. Once you are in the repo directory download node packages : `(sudo) npm install`. It will download all the packages listed in the `package.json` situated at the root of the project.

4. Since we use [BrowserSync](http://www.browsersync.io/) in our Gulp build process you have to set your own 'proxy’. Create at the root of the project the `localconfig.json` file so it suits your own configuration : 
```json
{
    "serverName": "localhost:XXXX/",
    "subDirectory": "path/to/your/directory",
    "enableBrowserSync": true
}
```

5. When you're done you can compile the assets and start the server with the `gulp` command.