import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'daySort'
})
export class DaySortPipe implements PipeTransform {

  transform(input: Food[], desiredDay) {
    var output: Food[] = [];
    if (desiredDay === "monday") {
      for (var i=0; i<input.length; i++) {
        if (input[i].dayOfWeek.toLowerCase() === "monday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "tuesday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek.toLowerCase() === "tuesday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "wednesday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek.toLowerCase() === "wednesday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "thursday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek.toLowerCase() === "thursday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "friday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek.toLowerCase() === "friday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "saturday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek.toLowerCase() === "saturday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "sunday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek.toLowerCase() === "sunday") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
