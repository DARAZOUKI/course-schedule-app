import { Routes } from '@angular/router';
import { CourseScheduleComponent } from './courseSchedule/courseSchedule.component';
export const routes: Routes = [
    { path: 'courseSchedule', component: CourseScheduleComponent},
    { path: '', redirectTo : '/courseSchedule' , pathMatch: 'full'},
];
