import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService } from './auth-guard.service';
import { FormsModule } from '@angular/forms';


const routes: Routes = [

  { path: '',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent, 
  canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
