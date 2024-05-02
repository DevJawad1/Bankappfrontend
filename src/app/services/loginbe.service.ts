import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginbeService {
  constructor(private httpClient:HttpClient) { }
  public url=""
  getLoginApi(obj:any){
    return this.httpClient.post('http://localhost/phpProject/login.php', obj)
  }
}
