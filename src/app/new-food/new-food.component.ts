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

  submitNewFood(meal: string, name: string, calories: number, details: string) {
    var newFoodToAdd: Food = new Food(meal, name, calories, details);
    this.newFoodSender.emit(newFoodToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}
