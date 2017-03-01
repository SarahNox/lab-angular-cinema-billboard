import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyHomeComponent } from './my-home/my-home.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MyHomeComponent },
  { path: 'movie/:id', component: MyMoviesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RouterConfigurator{}
