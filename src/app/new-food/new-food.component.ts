import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  @Input() childFoodList: Food;
  @Output() newFoodSender = new EventEmitter;

  showNew: boolean = false;

  submitNewFood(meal: string, name: string, calories: number, details: string, dayOfWeek: string) {
    var newFoodToAdd: Food = new Food(meal, name, calories, details, dayOfWeek);
    this.newFoodSender.emit(newFoodToAdd);
  }

  showNewForm() {
    this.showNew = true;
  }

  hideNewForm() {
    this.showNew = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
