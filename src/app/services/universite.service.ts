import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite.mode';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  apiUrl = "http://localhost:9090/";
  constructor( private http : HttpClient) { }
  getUniversite():Observable<Universite[]>{
    return this.http.get<Universite[]>(this.apiUrl + 'Universite')
  
  }
  
  addUniversite(Universite : Universite){
  return this.http.post(this.apiUrl + 'Universite',Universite)
  }
  
  deleteUniversite(id:any){
    return this.http.delete(this.apiUrl+ 'Universite/'+id)
  }
  
  editUniversite(Universite:Universite,id:any){
    return this.http.put(this.apiUrl+ 'Universite/'+id,Universite)
  }
  
}
