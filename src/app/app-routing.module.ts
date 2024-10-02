import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { AdminPortfolioComponent } from './admin-portfolio/admin-portfolio.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPortfolioComponent },
  { path: 'user-dashboard', component: UserPortfolioComponent },
  { path: 'admin-dashboard', component: AdminPortfolioComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown path to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
