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

  showFoodDetails(currentFood) {
    this.showDetails = currentFood;
  }

  hideFoodDetails(currentFood) {
    this.showDetails = null;
  }
  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChangeCalories(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

  onChangeDays(optionFromMenu) {
    this.filterByDays = optionFromMenu;
    var days = [];
    for(var i=0; i<=this.childFoodList.length; i++) {
      if(this.childFoodList[i].dayOfWeek.toLowerCase() === optionFromMenu) {
        days.push(this.childFoodList[i]);
        console.log(days);
      for(var i=0; i<days.length; i++) {
        console.log(calories);
        var calories = days[i].calories+ calories;
      }
      console.log(calories);
    }
  }
    return calories;
  }
  // var output: Food[] = [];
  // if(desiredCalories === "lessThanFiveHundred") {
  //   for(var i=0; i< input.length; i++){
  //     if(input[i].calories <= 500) {
  //       output.push(input[i]);
  //     }
  //   }
  //   return output;


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
