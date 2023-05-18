import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {

  private apiUrlComics = environment.apiKeyComicMarvel;
  private apiUrlCharacters = environment.apiKeyCharactersMarvel;

  constructor(private http: HttpClient) { }

  public getDataComics(): Observable<any> {
    return this.http.get<any>(this.apiUrlComics);
  }

  public getDataCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrlCharacters);
  }
}
