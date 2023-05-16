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
  dataArrayRecent: any = []
  isLoading = true;
  constructor (private apiServiceMarvel: ApiMarvelService) {}

  ngOnInit (): void {
    this.getResponse();
  }

  getResponse(){
    this.apiServiceMarvel.getData().subscribe( data => {
      this.data = data.data.results;

      // Procesar los datos y agregarlos a dataArray
      let row = [];
      let rowRecent = [];
      let diffDays = 0;

      for (let i = 0; i < this.data.length; i++) {
        if (i > 0 && i % 3 === 0) {
          this.dataArray.push(row);
          this.dataArrayRecent.push(rowRecent);

          row = [];
          rowRecent = [];
        }
        row.push(this.data[i]);
        rowRecent.push(this.dataArrayRecent[i]);
      }
      this.isLoading = false;

      this.dataArray.push(row);
      this.dataArrayRecent.push(rowRecent);

      console.log(this.dataArray)
    })
  }

  get(){
    return this.isLoading;
  }
}
