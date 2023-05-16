import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-api-marvel-home',
  templateUrl: './api-marvel-home.component.html',
  styleUrls: ['./api-marvel-home.component.css']
})
export class ApiMarvelHomeComponent {
  constructor (public router:RouterModule) {}
}
