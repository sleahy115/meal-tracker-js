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
    new Food('Breakfast','Burrito', 300, 'Eggs, ham, hot sauce'),
    new Food('Lunch', 'Sushi roll', 500, 'Yum!'),
    new Food('Dinner', 'Steak', 1000, 'Diet tomorrow'),
    new Food('Dinner', 'stir-fry', 550, 'MUch Better')
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
