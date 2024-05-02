import { Injectable } from '@angular/core';
// import import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SignupbeService {
  constructor(private httpClient: HttpClient) { }
  public url=""
  sign(obj:any){
    return this.httpClient.post('http://localhost/phpProject/submit.php',obj)
  }
  
}