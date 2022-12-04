import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contrat } from "../models/contrat";
import { Etudiant } from "../models/etudiant";

@Injectable({
  providedIn: "root",
})
export class ContratService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  b: boolean = false;

  apiUrl = "http://localhost:9090";
  getContrats(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(this.apiUrl + "/Contrats");
  }

  deleteContrat(idContrat: number): Observable<Contrat> {
    return this.http.delete<Contrat>(
      this.apiUrl + "/removeContrat/" + idContrat
    );
  }

  addContrat(contrat: Contrat): Observable<Contrat> {
    return this.http.post<Contrat>(
      this.apiUrl + "/addContrat",
      contrat,
      this.httpOptions
    );
  }

  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl + "/Etudiants");
  }

  assignEtudiantToContrat(
    idContrat: number,
    idEtudiant: number
  ): Observable<Contrat[]> {
    return this.http.post<Contrat[]>(
      this.apiUrl + "/affectContratToEtudiant/" + idContrat + "/" + idEtudiant,
      this.httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}
