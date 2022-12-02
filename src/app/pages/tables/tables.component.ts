import { Component, OnInit } from "@angular/core";
import { Contrat } from "src/app/models/contrat";
import { ContratService } from "src/app/services/contrat.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss"],
})
export class TablesComponent implements OnInit {
  list: Contrat[] = [];
  constructor(private cs: ContratService) {}
  getDataFromContratService() {
    this.cs.getContrats().subscribe((res) => {
      this.list = res;
      console.log(res);
    });
  }

  deleteContrat(idContrat: number) {
    this.cs
      .deleteContrat(idContrat)
      .subscribe(() =>
        this.cs.getContrats().subscribe((res) => (this.list = res))
      );
  }

  ngOnInit() {
    console.log(this.getDataFromContratService());
  }
}
