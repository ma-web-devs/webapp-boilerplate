## MA WEB DEVS
### Boilerplate Web App


```sh
$ cd my/projects/folder
$ git clone https://github.com/ma-web-devs/webapp-boilerplate.git
$ cd webapp-boilerplate
$ bower install
$ npm install
```

Awesome! Everything should be installed now. The `app` folder is the working directory, this is where you should build the webapp. There are 2 important commands for you to know, `gulp serve` and `gulp build`. The serve command will launch a tab in your browser at `http://localhost:9000`, this is the working website. Any changes that you make will automatically reload into the browser.

To exit the `gulp serve` process running on the ommtask hit `cmd-C` or `ctrl+C` to cancel the process.

When your ready to build your final project, simply run `gulp build` and the files to be uploaded to your server will be in the `dist` folder.
