import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseScheduleComponent } from './courseSchedule/courseSchedule.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
