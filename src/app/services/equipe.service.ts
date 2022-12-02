import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../Model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  accountUrl="http://localhost:9090";

  constructor(private http:HttpClient) { }

  public getEquipes():Observable<Equipe[]>{
    console.log("service appelé");

    return this.http.get<Equipe[]>(this.accountUrl+"/getAllEquipes");
    

  }

  public addEquipe(equipe:any){

    return this.http.post(this.accountUrl+"/addEquipe",equipe);


  }
}
