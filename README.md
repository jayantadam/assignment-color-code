## ColorCode
## Running this project this should version dependencies install

Angular CLI: 10.2.3
Node: 10.24.1
NPM : 6.14.12

## After installation

Need to run 2 commands

- npm install
- ng service

## API

## Single Color

 https://api.color.pizza/v1/212121

{
  "colors": [{
    "name": "Lead",
    "hex": "#212121",
    "rgb": {"r": 33, "g": 33, "b": 33},
    "distance": 0, // its an exact match
    "luminance": 22.062320231562225,
    "requestedHex": "#212121",
  }]
}

## Multiple Colors

https://api.color.pizza/v1/212121,060606,ff0012,550055,123456 or curl https://api.color.pizza/v1/?values=212121,060606,ff0012,550055,123456

## Search for colors by name

https://api.color.pizza/v1/names/{{query}}



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

