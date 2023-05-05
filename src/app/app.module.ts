import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiMarvelComponent } from './api-marvel/api-marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiMarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ApiMarvelComponent]
})
export class AppModule { }
