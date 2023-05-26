import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiMarvelComponent } from './api-marvel/api-marvel.component';
import { ApiMarvelHomeComponent } from './api-marvel-home/api-marvel-home.component';
import { ApiMarvelCharactersComponent } from './api-marvel-characters/api-marvel-characters.component';
import { ApiMarvelSeriesComponent } from './api-marvel-series/api-marvel-series.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiMarvelComponent,
    ApiMarvelHomeComponent,
    ApiMarvelCharactersComponent,
    ApiMarvelSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
