import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoccComponent} from './bocc/bocc.component';

const routes: Routes = [
  {path: 'Bocc', component: BoccComponent},
  {path: '', redirectTo: '/Bocc', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
