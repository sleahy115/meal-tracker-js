import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'daySort'
})
export class DaySortPipe implements PipeTransform {

  transform(input: Food[], desiredDay) {
    var output: Food[] = [];
    if (desiredDay === "monday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "monday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "tuesday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "tuesday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "wednesday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "wednesday") {
          output.push(input[i]);
        }
      }
    } else if (desiredDay === "thursday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "thursday") {
          output.push(input[i]);
        }
      }
    } else if (desiredDay === "friday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "friday") {
          output.push(input[i]);
        }
      }
    } else if (desiredDay === "saturday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "saturday") {
          output.push(input[i]);
        }
      }
    } else if (desiredDay === "sunday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "sunday") {
          output.push(input[i]);
        }
      }
    } else {
      return input;
    }
  }

}
