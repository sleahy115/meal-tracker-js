import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'calorieSort'
})
export class CalorieSortPipe implements PipeTransform {

  transform(input: Food[], desiredCalories) {
    var output: Food[] = [];
    if (desiredCalories === "lessThanFiveHundred") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "moreThanOneThousand") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 1000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
