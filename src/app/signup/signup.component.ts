import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupbeService } from '../services/signupbe.service';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
constructor(public backend:SignupbeService, public formbuilder:FormBuilder, public navigator:Router){}

public form = this.formbuilder.group({
  fname:['', Validators.required],
  uname:['', Validators.required],
  phone:['', Validators.required],
  email:['', Validators.required],
  pass:['', Validators.required],
})
submit(){
  console.log(this.form.value);
  if(this.form.value.fname==""|| this.form.value.uname==""|| this.form.value.phone=="" || this.form.value.email==""||this.form.value.pass==""){
    alert("All details must be fill")
  }
  else{
    this.backend.sign(this.form.value).subscribe(
      (data:any)=>{
      console.log(data);
      if(data.status==true){
       this.navigator.navigate(['login'])
      }
    }, 
    (error)=>{
      console.log(error);
    })
  }
 }
}
