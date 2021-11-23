import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PasswordComponent } from './password/password.component';
// import { CheckComponent } from './check/check.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  // {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
