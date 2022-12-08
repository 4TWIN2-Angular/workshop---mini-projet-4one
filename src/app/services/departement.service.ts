import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement.mode';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  apiUrl = "http://localhost:9090/";
  constructor(
    private http : HttpClient
  ) { }

getDepartement():Observable<Departement[]>{
  return this.http.get<Departement[]>(this.apiUrl + 'Departement')

}

addDepartement(departement : Departement){
return this.http.post(this.apiUrl + 'Departement',departement)
}

deleteDepartement(id:any){
  return this.http.delete(this.apiUrl+ 'Departement/'+id)
}

editDepartement(Departement:Departement,id:any){
  return this.http.put(this.apiUrl+ 'Departement/'+id,Departement)
}
}
