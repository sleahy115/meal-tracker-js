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
        if (input[i].dayOfWeek === "Monday") {
          output.push(input[i]);
        }
      }
      console.log(output);
      return output;
    } else if (desiredDay === "tuesday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "Tuesday") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDay === "wednesday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "Wednesday") {
          output.push(input[i]);
        }
      }
    } else if (desiredDay === "thursday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "Thursday") {
          output.push(input[i]);
        }
      }
    } else if (desiredDay === "friday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "Friday") {
          output.push(input[i]);
        }
      }
    } else if (desiredDay === "saturday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "Saturday") {
          output.push(input[i]);
        }
      }
    } else if (desiredDay === "sunday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].dayOfWeek === "Sunday") {
          output.push(input[i]);
        }
      }
    } else {
      return input;
    }
  }

}
