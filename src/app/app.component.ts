import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Tracker';
  selectedFood = null;

  masterFoodList: Food[] = [
    new Food('Breakfast','Burrito', 300, 'Eggs, ham, hot sauce', 'Monday'),
    new Food('Lunch', 'Sushi roll', 500, 'Yum!', 'Tuesday'),
    new Food('Dinner', 'Steak', 1000, 'Diet tomorrow', 'Tuesday'),
    new Food('Dinner', 'Stir-fry', 550, 'MUch Better', 'Monday')
  ];

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

}
