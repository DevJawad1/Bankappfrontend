import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public navCondition="sidebarOpen"
  public mainWidth="77%"
  changecondition(){
    
    console.log(this.navCondition);
    if(this.navCondition=="sidebarOpen"){
      this.navCondition="sidebarClose"
      this.mainWidth="100%"
    }
    else{
      this.navCondition="sidebarOpen"
      this.mainWidth="77%"
    }
  }
}
