import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Player } from './player.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }
  getPlayers():Observable<Player[]>{
    return this.http.get<Player[]>(`${environment.apiUrl}/Player`);
  }
}
