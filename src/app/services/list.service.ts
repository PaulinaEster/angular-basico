import { Injectable } from '@angular/core';
import { Animal } from '../Animals';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../Hero';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  private apiUrlHeros = 'http://localhost:3000/heros';

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  adicionar(animals: Animal[], animal: Animal): Animal[]{
    animals.push(animal);
    this.http.post(this.apiUrl,animals);
    animals.push(animal);
    return animals;
  }
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getAllHeros(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrlHeros);
  }

  getItem(id: Number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
