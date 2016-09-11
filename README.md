## MA WEB DEVS
### Boilerplate Web App

When it's time to build, you don't want to build the foundation... MA Web Devs Boilerplate is already laid out with common utilities and libraries for fast building. Based off the Yeoman teams webapp generator (Bootstrap, SASS), "MWD-BWA" has a bunch of extras baked in that you can use ES6 out the box along with tons of other cool libraries such as Firebase, Moment.js, jQuery.validation, emojiOne, D3, and on and on.

To download and install

```sh
$ cd my/projects/folder
$ git clone https://github.com/ma-web-devs/webapp-boilerplate.git
$ cd webapp-boilerplate
$ bower install
$ npm install
```
Awesome! Everything should be installed now. The `app` folder is the working directory, this is where you should build your webpage or webapp. To develop with livereload on http://localhost:9000 simply open the command line and:
```sh
$ gulp serve
```

When your ready to show the world your work, simply build out the final project to the `dist` folder by running:
```sh
$ gulp build
```

To exit the `gulp serve` process running on the ommtask hit `cmd-C` or `ctrl+C` to cancel the process.

When your ready to build your final project, simply run `gulp build` and the files to be uploaded to your server will be in the `dist` folder.


#### Changelist

> 09/10/2016 - Started building, added D3, Firebase, jQuery.validation, Masonry and Moment. Built the main project off of the Yeoman webapp starter and added new folder structure, comments and code along with the Masonry front page with links to all the learning resources for each library/tech.
> 09/11/2016 - Added Emojione, fixed missing packages in bower. Started to add code examples to main page