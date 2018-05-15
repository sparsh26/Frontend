import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subject} from '../Models/Subject'

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { 
    
  }
  
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>("http://127.0.0.1:3000/subjects")
  }


  addSubjects(name: string): Observable<Subject> {
    return this.http.post<Subject>("http://127.0.0.1:3000/subjects?name="+name,name)
  }

}
