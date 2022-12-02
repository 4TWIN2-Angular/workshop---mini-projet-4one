import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contrat } from "../models/contrat";

@Injectable({
  providedIn: "root",
})
export class ContratService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  apiUrl = "http://localhost:9090";
  getContrats(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(this.apiUrl + "/Contrats");
  }

  deleteContrat(idContrat: number): Observable<Contrat> {
    return this.http.delete<Contrat>(
      this.apiUrl + "/removeContrat/" + idContrat
    );
  }

  constructor(private http: HttpClient) {}
}
