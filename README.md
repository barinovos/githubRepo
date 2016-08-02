## Description

 Github repositories for a given user. Test app.
 
 Based on a [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)
 
 Why Angular2? Because it is a present and a future, for now - knowledge of Angular2 is much more valuable, than of Angular 1
 
 Why this _starter_? Cause it's scalable and powerful, I use it for my current project (already in production)
  and [Webpack](https://github.com/webpack/webpack) is the best professional choice for An2 and React
  
 From 3d-party libs - only [Materialize CSS](http://materializecss.com), cause it's fancy
 
 Fresh [Jasmine](http://jasmine.github.io/2.4/introduction.html) for Unit testing, cause it's rich and awesome, provides nice mocking.
 
 
## Author

Barinov Oleg, Senior Front End Developer

[LinkedIn](https://www.linkedin.com/in/oleg-barinov-7444a69a)
[StackOverflow](http://stackoverflow.com/users/6589841/oleg-barinov)
[Github](https://github.com/barinovos)

## Global Dependencies

| Dependency | Version | Install                               |
| ---------- | ------- | ------------------------------------- |
| NodeJS     | 5.x.x   | [http://node.org](http://nodejs.org/) |
| npm        | 3.x.x   | [http://node.org](http://nodejs.org/) |

## Install & Start

```bash
$ npm install
$ npm start
```

By default - open [localhost:8080](http://localhost:8080) to check the working app after `npm start`

#### Development
```bash
$ npm start
```
#### Production
```bash
$ npm run build:prod
$ npm run start:prod
```

Note: the server won't automatically launch the browser for you.
To view the app please open a new tab and go to `http://localhost:8080/`.

### Defaults
`NODE_ENV` = `development`

`PORT` = `8080`

## Other commands
After you have installed all dependencies you can now run the app.
Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you.

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### run unit tests
```bash
npm run test
```
or
```bash
npm test
```

## E2E Tests

...wasn't in requirements, but is not a problem - I also can do it, using Protractor