import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PRACTICEISAACComponent } from '../app/practice-isaac/practice-isaac.component';
import { AdamComponent } from '../app/adam/adam.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'practice', component: PracticeComponent},
  { path: 'adam', component: AdamComponent},
  { path: 'isaac', component: PRACTICEISAACComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
