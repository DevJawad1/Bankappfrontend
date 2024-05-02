import { Component } from '@angular/core';

@Component({
  selector: 'app-buycoin',
  templateUrl: './buycoin.component.html',
  styleUrls: ['./buycoin.component.css']
})
export class BuycoinComponent {
 public quantity:any=""
 public coinPrice = 1200/10
 public total=0
 calc(){
  this.total = Number(this.quantity)*this.coinPrice
 }
 buyCoin(){
   console.log(this.total)
 }
}
