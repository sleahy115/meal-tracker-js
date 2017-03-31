import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() childFoodList:Food[];
  @Output() clickSender = new EventEmitter();

  showDetails: Food = null;
  selectedFood: Food = null;
  filterByCalories: string="allMeals";
  filterByDays: string="allDays";
  showDaily: number = 0;

  showFoodDetails(currentFood) {
    this.showDetails = currentFood;
    this.showDaily = 0;
  }

  hideFoodDetails(currentFood) {
    this.showDetails = null;
    this.showDaily = 0;
  }
  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChangeCalories(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

  onChangeDays(optionFromMenu) {
    this.filterByDays = optionFromMenu;
  }

  showDailyCalories(currentFood) {
    var sum = 0;
    for(var i=0; i<this.childFoodList.length; i++) {
      if(this.childFoodList[i].dayOfWeek.toLowerCase() === currentFood.dayOfWeek.toLowerCase()) {
      var calories = this.childFoodList[i].calories;
       sum += calories;
    }
  }
  this.showDaily = sum;
}

  calorieColor(currentFood){
    if(currentFood.calories > 500) {
      return "high";
    }else if (currentFood.calories >=300) {
      return "medium";
    }else {
      return "low";
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
