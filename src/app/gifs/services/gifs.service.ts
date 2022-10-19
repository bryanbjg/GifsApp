import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs-interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'PEemMhoHxegoo8hXdb7WApTLAnsnDAy8';
  private _record: string[] = [];

  public results: Gif[] = [];

  get record(){
    return [...this._record];
  }

  constructor(private http: HttpClient){
    this._record = JSON.parse(localStorage.getItem('record')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchGifs(query: string){

    query = query.trim().toLocaleLowerCase();
    
    if(!this._record.includes(query)){
      this._record.unshift(query);
      this._record = this._record.slice(0, 10);

      localStorage.setItem('record', JSON.stringify(this._record));
      
    }
    
   this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=PEemMhoHxegoo8hXdb7WApTLAnsnDAy8&q=${query}&limit=10`)
   .subscribe((resp)  => {
    console.log(resp.data);
    this.results = resp.data;
    localStorage.setItem('results', JSON.stringify(this.results));
   });
 }
}
