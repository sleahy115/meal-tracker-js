# MealTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

##Setup
* clone repository from https://github.com/sleahy115/meal-tracker-js
* `npm install -g @angular/cli`
* ` cd meal-tracker-js`
* `npm install`
* `bower install`
* `ng-serve`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Planning

* File structure
  * App Module
  -app.module.ts
    * Food model
    -food.model.ts
    * App-root- root component
    -app.component.css
    -app.component.ts
    -app.component.html
      * food-list - list component
      -food-list.component.css
      -food-list.component.ts
      -food-list.component.html
      * add-food - new-food component
      -add-food.component.css
      -add-food.component.ts
      -add-food.component.html
      * edit-food - edit-food component
      -edit-food.component.css
      -edit-food-list.component.ts
      -edit-food-list.component.html
      * calorie-sort - sorting pipe
      -calorie-sort.pipe

### Development
1. Create model with hardcoded values.
2. Create food-list component with output.
3. Create add-food component with form.
4. Create edit-food component with form.
5. Create calorie-sort pipe
6. Add Bootstrap and styling.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
