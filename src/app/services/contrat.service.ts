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

  contratsUrl = "http://localhost:9090/Contrats";
  getContrats(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(this.contratsUrl);
  }

  constructor(private http: HttpClient) {}
}
