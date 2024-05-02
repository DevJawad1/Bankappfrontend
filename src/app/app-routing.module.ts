import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AddbgComponent } from './addbg/addbg.component';
import { BuycoinComponent } from './buycoin/buycoin.component';

const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'activities', component:ActivitiesComponent},
  {path:'addmoney', component:AddbgComponent},
  {path:'buycoin', component:BuycoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
