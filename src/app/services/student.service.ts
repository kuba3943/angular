import { Student } from './../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/api/student';

const pointsURL = 'http://localhost:8080/api/points';

@Injectable({
  providedIn: 'root'
})
export class StudentService {





  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get(baseURL);
  }

  get(id: any): Observable<Student> {
    return this.http.get<Student>(`${baseURL}/${id}`);
  }

  delete(id:any): Observable<any> {
     return this.http.delete(`${baseURL}/${id}`);
  }

  add(data: any): Observable<Student>{
    return this.http.post<Student>(baseURL, data);
  }

  update(data: any): Observable<Student>{
    return this.http.patch<Student>(baseURL, data);
  }

  getSubjects(id:any): Observable<any>{
    return this.http.get(`${baseURL}/${id}/subjects`);
  }

  getGrades(studentId:any, subjectId:any ): Observable<any>{
    return this.http.get(`${baseURL}/${studentId}/subject/${subjectId}`);
  }

  getPoints(): Observable<any>{
    return this.http.get(pointsURL);
  }


  addPointToStudent(studentId:any, subjectId:any, pointId:any): Observable<any>{
    return this.http.post(`${baseURL}/${studentId}/subject/${subjectId}/point/${pointId}`, pointId)
  }

  getStudentsWithNoClass(): Observable<any>{
    return this.http.get(`${baseURL}/noClass`);
  }

}
