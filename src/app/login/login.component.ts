import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginbeService } from '../services/loginbe.service';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public navigator:Router, public backend:LoginbeService, public formbuilder:FormBuilder){}
  public form = this.formbuilder.group({
    email:['', Validators.required],
    pass:['', Validators.required],
  })
  submit(){
    console.log(this.form.value);
    this.backend.getLoginApi(this.form.value).subscribe(
      (data:any)=>{
      console.log(data);
      if(data.status==true){
        localStorage.setItem("coinUser", data.userDetails.username)
       this.navigator.navigate(['dashboard'])
      }
    }, 
    (error:any)=>{
      console.log(error);
    })
    
  }
}
