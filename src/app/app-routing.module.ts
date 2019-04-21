import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './_routes/redirect/redirect.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'c/redirect', component: RedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
