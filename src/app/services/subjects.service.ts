import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = 'http://localhost:8080/api/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }





}
