import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdamComponent } from '../app/adam/adam.component';


const routes: Routes = [
  { path: 'adam', component: AdamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
