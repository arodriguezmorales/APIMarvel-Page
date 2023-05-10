import { Component } from '@angular/core';
import { ApiMarvelService } from '../service/api-marvel.service';

@Component({
  selector: 'app-api-marvel',
  templateUrl: './api-marvel.component.html',
  styleUrls: ['./api-marvel.component.css']
})
export class ApiMarvelComponent {
  data: any = {};
  dataArray: any = []

  constructor (private apiServiceMarvel: ApiMarvelService) {}

  ngOnInit (): void {
    this.getResponse();
  }

  getResponse(){
    this.apiServiceMarvel.getData().subscribe( data => {
      this.data = data.data.results;

      // Procesar los datos y agregarlos a dataArray
      let row = [];
      for (let i = 0; i < this.data.length; i++) {
        if (i > 0 && i % 3 === 0) {
          this.dataArray.push(row);
          row = [];
        }
        row.push(this.data[i]);
      }
      this.dataArray.push(row);
      console.log(this.dataArray)
    })
  }
}
