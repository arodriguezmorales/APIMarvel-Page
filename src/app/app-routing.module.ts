import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiMarvelComponent } from './api-marvel/api-marvel.component';
import { ApiMarvelHomeComponent } from './api-marvel-home/api-marvel-home.component';
import { ApiMarvelCharactersComponent } from './api-marvel-characters/api-marvel-characters.component';
import { ApiMarvelSeriesComponent } from './api-marvel-series/api-marvel-series.component';

const routes: Routes = [
  { path: '', component:ApiMarvelHomeComponent },
  { path: 'Comics', component:ApiMarvelComponent },
  { path: 'Characters', component:ApiMarvelCharactersComponent },
  { path: 'Series', component:ApiMarvelSeriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
