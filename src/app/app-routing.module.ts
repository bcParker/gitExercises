import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PRACTICEISAACComponent } from '../app/practice-isaac/practice-isaac.component';


const routes: Routes = [
  { path: 'isaac', component: PRACTICEISAACComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
