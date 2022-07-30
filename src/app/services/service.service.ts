import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class portfolioService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get("./assets/data/data.json");
  }
}
