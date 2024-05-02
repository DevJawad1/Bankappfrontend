import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() receiveCondition=""
 public navCondition=this.receiveCondition
 ngOnInit(){
  console.log(this.receiveCondition)
 }
}
