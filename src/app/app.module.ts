import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';

import { AdminPortfolioComponent } from './admin-portfolio/admin-portfolio.component';
import { PortComponent } from './port/port-dash.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    
    AdminPortfolioComponent,
    PortComponent,
    UserPortfolioComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 