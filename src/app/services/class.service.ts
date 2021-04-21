import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';


const baseURL = 'http://localhost:8080/api/class';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseURL);
  }

  getStudents(id: any): Observable<any> {
    return this.http.get(`${baseURL}/${id}/students`);
  }

  getClass(id:any): Observable<any>{
    return this.http.get(`${baseURL}/${id}`);
  }

  addStudentToClass(classId:any, studentId: any ): Observable<any>{
    return this.http.patch(`${baseURL}/${classId}/addStudent/${studentId}`, studentId);
  }

  getSubjects(id:any): Observable<any>{
    return this.http.get(`${baseURL}/${id}/subjects`);
  }

  addSubjectToClass(classId:any, subject:any ): Observable<any>{
    return this.http.patch(`${baseURL}/${classId}/addSubject`, subject);
  }

}
