import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseScheduleService } from '../course-schedule.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  //for ngModel


@Component({
  selector: 'course-schedule-app',
  standalone: true,
  templateUrl:'./courseSchedule.component.html',
  styleUrls: ['./courseSchedule.component.css'],
  imports: [CommonModule, FormsModule],
  
})
export class CourseScheduleComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  private _searchTerm: string = '';

  constructor(private courseScheduleService: CourseScheduleService) { }

  ngOnInit(): void {
    // Fetch courses from the service and initialize component properties
    this.courseScheduleService.getCourses().subscribe(data => {
      this.courses = data;
      this.filteredCourses = [...this.courses];
    });
  }

  // Method to sort the courses based on a given key
  sortData(key: string): void {
    this.filteredCourses.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
  }
  

  // Get method for the searchTerm
  get searchTerm(): string {
    return this._searchTerm;
  }


  // Set method for the searchTerm
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredCourses = this.getFilteredCourses();
  }


   // Method to filter the courses based on the searchTerm
  private getFilteredCourses(): Course[] {
    return this.courses.filter(course =>
      course.code.toLowerCase().includes(this._searchTerm.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this._searchTerm.toLowerCase())
    );
  }
}
