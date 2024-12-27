import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,from} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}
  
  postData(formData:any):Observable<any>{
    const dataSub = from(
      fetch('https://formsubmit.co/ajax/asapstudies1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData), // Use form value here
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => null)
    );
   return dataSub
    
  }
}
