import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _http: HttpClient) { }
  getStudents():Observable<any> {
    return this._http.get('assets/students.json');
  }
}