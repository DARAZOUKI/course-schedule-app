import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseScheduleService } from '../course-schedule.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
    this.courseScheduleService.getCourses().subscribe(data => {
      this.courses = data;
      this.filteredCourses = [...this.courses];
    });
  }

  sortData(key: string): void {
    this.filteredCourses.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
  }
  

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredCourses = this.getFilteredCourses();
  }

  private getFilteredCourses(): Course[] {
    return this.courses.filter(course =>
      course.code.toLowerCase().includes(this._searchTerm.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this._searchTerm.toLowerCase())
    );
  }
}
