import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { detailequipe } from '../models/detailequipe';
@Injectable({
  providedIn: 'root'
})
export class DetailEquipeServiceService {
accountUrl="http://localhost:9090";
  constructor(private http:HttpClient) { }

  public addDetailEquipe(detailequipe:any){
    return this.http.post(this.accountUrl+"/addDetailEquipe",detailequipe)
  }
  public retrieveAllDetailEquipes():Observable<detailequipe[]>{
    console.log("service appelé");
    return this.http.get<detailequipe[]>(this.accountUrl+"/getAllDetailEquipes");
  }
  public retrieveEquipe(id:any):Observable<detailequipe>{
    return this.http.get<detailequipe>(this.accountUrl+"/getDEquipe/"+id);
  }
  public removeDetailEquipe(id:any){
    return this.http.delete(this.accountUrl+"/removeDEquipe/"+id);
  }
  public updateEquipe(detailequipe:any,idDetailEquipe:number)
  {
    return this.http.put(this.accountUrl+"/updateDEquipe/"+idDetailEquipe,detailequipe);
  }

  public retrieveLangue():Observable<number>{
    console.log("service appelé");
    return this.http.get<number>(this.accountUrl+"/nbLangue");
  }
  public retrieveScience():Observable<number>{
    console.log("service appelé");
    return this.http.get<number>(this.accountUrl+"/nbScience");
  }
  public retrieveMath():Observable<number>{
    console.log("service appelé");
    return this.http.get<number>(this.accountUrl+"/nbmath");
  }
  public retrieveHistoire():Observable<number>{
    console.log("service appelé");
    return this.http.get<number>(this.accountUrl+"/nbhist");
  }

}
