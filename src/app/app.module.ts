import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudioListComponent } from './studio-list/studio-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  // define the components, directives, and pipes (CDP) that belong to this module
  declarations: [
    AppComponent,
    HomeComponent,
    StudioListComponent
  ],
  // extend this module by importing capabilities of other modules
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  // register services (old practice — use providedin property of the service itself)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
