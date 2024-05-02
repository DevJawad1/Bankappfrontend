import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllbackendapiService {

  constructor(private http:HttpClient) {} 
  public url=""
  addmoney(obj:any){
    return this.http.post("http://localhost/phpProject/addmoney.php", obj)
  }
}
