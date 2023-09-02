import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';

import {Routes, RouterModule } from '@angular/router';
import { StudioListComponent } from '../studio-list/studio-list.component';

// set up routes constant where you define routes
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'studios', component: StudioListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
]; 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
