import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillPageComponent } from './pages/bill-page/bill-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: 'comfirmation', component: BillPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
