import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Cinema } from './services/Cinema.service';

import { RouterModule, Routes } from '@angular/router';
import { RouterConfigurator } from './router.configurator';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterConfigurator
  ],
  providers: [Cinema],
  bootstrap: [AppComponent]
})
export class AppModule { }
