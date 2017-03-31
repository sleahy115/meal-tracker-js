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

  showFoodDetails(currentFood) {
    this.showDetails = currentFood;
  }

  hideFoodDetails(currentFood) {
    this.showDetails = null;
  }
  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
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
