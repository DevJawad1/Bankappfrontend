import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AllbackendapiService } from '../services/allbackendapi.service';
@Component({
  selector: 'app-addbg',
  templateUrl: './addbg.component.html',
  styleUrls: ['./addbg.component.css']
})
export class AddbgComponent {
  constructor(public addmoneyUrl:AllbackendapiService){}
  public amount=""
  public getuser=""
  public obj:any=""
  sendmoney(){
    this.obj = {
      amount:this.amount,
      user:localStorage.getItem("coinUser")
     }
    this.addmoneyUrl.addmoney(this.obj).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
