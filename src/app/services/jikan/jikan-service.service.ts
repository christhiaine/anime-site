import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopAnime } from '../../models/jikan/topanime.model'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}


@Injectable({
  providedIn: 'root'
})

export class JikanService {

  url: string = "https://api.jikan.moe/v3"
  id: number;


  constructor(private http: HttpClient) { }

  // getAnime(): Observable<any> {
  //   return this.http.get(`${this.url}/top/anime/1/tv`)
  // }
  // https://api.jikan.moe/v3/search/anime?q=naruto

  getTopAnime(): Observable<any> {
    return this.http.get<any>(`${this.url}/top/anime/1/tv`)
  }

  searchAnime(query:string): Observable<any> {
    return this.http.get<any>(`${this.url}/search/anime?q=${query}`)
  }

  // getAnime2(): Observable<any> {
  //   return this.http.get(`${this.url}${/anime/}`)
  // }

}
