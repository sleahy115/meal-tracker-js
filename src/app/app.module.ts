import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { CalorieSortPipe } from './calorie-sort.pipe';
import { DaySortPipe } from './day-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    NewFoodComponent,
    EditFoodComponent,
    CalorieSortPipe,
    DaySortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
