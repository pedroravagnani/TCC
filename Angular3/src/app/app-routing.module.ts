import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
    component:LoginComponent
  },
  {
    path: '',
    component: ChartComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
