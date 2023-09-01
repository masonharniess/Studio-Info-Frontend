import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  // define the components, directives, and pipes (CDP) that belong to this module
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // extend this module by importing capabilities of other modules
  imports: [
    BrowserModule
  ],
  // register services (old practice — use providedin property of the service itself)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
