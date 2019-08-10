import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdamComponent } from '../app/adam/adam.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'practice', component: PracticeComponent},
  { path: 'adam', component: AdamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
