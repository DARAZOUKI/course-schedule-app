import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseScheduleService {
  private apiUrl = 'https://webbutveckling.miun.se/files/ramschema_ht23.json';

  constructor(private http: HttpClient) { } // Dependency injection for HttpClient

  // Method to fetch course schedule data from the api
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
}
