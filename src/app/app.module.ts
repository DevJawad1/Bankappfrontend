import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddbgComponent } from './addbg/addbg.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BuycoinComponent } from './buycoin/buycoin.component';
import { TradecoinComponent } from './tradecoin/tradecoin.component';
import { ChartareaComponent } from './chartarea/chartarea.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    AddbgComponent,
    ServicesComponent,
    ServiceComponent,
    SideNavComponent,
    ActivitiesComponent,
    BuycoinComponent,
    TradecoinComponent,
    ChartareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
