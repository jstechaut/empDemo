import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   constructor(private http: HttpClient){}


  public getUsers(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }
  

  public getUserTasks(userId:string): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  }
}