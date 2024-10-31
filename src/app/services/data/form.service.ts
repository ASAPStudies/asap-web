import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}
  postData(data: object): Observable<any> {
    // const url = 'https://formsubmit.co/ajax/info@asapstudies.com';
        const url = 'https://formsubmit.co/ajax/yelpoeayahaya@gmail.com';


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    return this.http.post(url, data, { headers });
  }
}
