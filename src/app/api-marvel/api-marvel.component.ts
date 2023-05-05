import { Component } from '@angular/core';
import { ApiMarvelService } from '../service/api-marvel.service';

@Component({
  selector: 'app-api-marvel',
  templateUrl: './api-marvel.component.html',
  styleUrls: ['./api-marvel.component.css']
})
export class ApiMarvelComponent {
  data: any = {};

  constructor (private apiServiceMarvel: ApiMarvelService) {}

  ngOnInit (): void {
    this.getResponse();
  }

  getResponse(){
    this.apiServiceMarvel.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }
}
