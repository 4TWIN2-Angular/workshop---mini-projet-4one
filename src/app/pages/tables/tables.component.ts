import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Contrat } from "src/app/models/contrat";
import { Etudiant } from "src/app/models/etudiant";
import { ContratService } from "src/app/services/contrat.service";
declare var $: any;

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss"],
})
export class TablesComponent implements OnInit {
  list: Contrat[] = [];
  contrats: Contrat[] = [];
  studentsList: Etudiant[] = [];
  etudiant = <Etudiant>{};
  alert: boolean;
  msg: string;
  idContrat: number;
  date = {
    startDate: "",
    endDate: "",
  };
  sumMontant: number;
  nbContratsValides: number;
  showForm: boolean = true;
  totalRecords: any;
  page: number;
  err: boolean = false;
  error: any = { isError: false, errorMessage: "" };
  isValidDate: any;
  show: boolean = false;

  constructor(
    private cs: ContratService,
    ac: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    ac.params.subscribe(() => {
      this.getDataFromContratService();
      this.alert = this.cs.b;
      this.msg = this.cs.text;
    });
  }

  getDataFromContratService() {
    this.cs.getContrats().subscribe((res) => {
      this.list = res;
      this.contrats = this.list;
      //console.log(this.list);
    });

    this.cs.getEtudiants().subscribe((res) => {
      this.studentsList = res;
      //console.log(this.studentsList);
    });
  }

  deleteContrat(idContrat: number) {
    this.cs.deleteContrat(idContrat).subscribe(() =>
      this.cs.getContrats().subscribe((res) => {
        this.list = res;
        this.contrats = this.list;
      })
    );
  }

  getIdContrat(idContrat: number) {
    this.idContrat = idContrat;
    console.log(this.idContrat);
  }

  assignEtudiantToContrat(idEtudiant: number) {
    this.cs.assignEtudiantToContrat(this.idContrat, idEtudiant).subscribe(() =>
      this.cs.getContrats().subscribe((res) => {
        this.list = res;
        this.contrats = this.list;
      })
    );
    //console.log(idEtudiant);
  }

  validateDates(sDate: string, eDate: string) {
    this.isValidDate = true;

    if (sDate != null && eDate != null && eDate < sDate) {
      this.error = {
        isError: true,
        errorMessage: "La date de fin doit être supérieure à la date de début.",
      };
      this.isValidDate = false;
    }
    return this.isValidDate;
  }

  getMontantContratBetweenTwoDates() {
    this.isValidDate = this.validateDates(
      this.date.startDate,
      this.date.endDate
    );
    if (this.isValidDate) {
      this.cs
        .getMontantContratBetweenTwoDates(
          this.date.startDate,
          this.date.endDate
        )
        .subscribe((res) => {
          this.sumMontant = res;
          //console.log(this.sumMontant);
        });
      //this.getContratBetweenTwoDates();
      this.show = true;
      this.cs
        .getnbContratsValides(this.date.startDate, this.date.endDate)
        .subscribe((res) => {
          this.nbContratsValides = res;
          //console.log(this.nbContratsValides);
        });
      $("#exampleModal2").modal("show");
      this.error.isError = false;
      this.showForm = true;
    }
  }

  clickShowFormButton() {
    this.showForm = false;
  }

  searchContrats(searchValue: string) {
    const searchedContrats = this.list.filter((contrat) => {
      for (const key in contrat) {
        if (contrat[key]?.toString().toLowerCase().includes(searchValue)) {
          return contrat;
        }
        if (typeof contrat[key] === "object" && contrat[key] !== null) {
          if (
            contrat.etudiant?.nomE.includes(searchValue) ||
            contrat.etudiant?.prenomE.includes(searchValue)
          ) {
            return contrat;
          }
        }
      }
    });
    this.contrats = searchedContrats;
    //console.log(this.contrats);
    if (searchedContrats.length === 0) {
      this.err = true;
    } else {
      this.err = false;
    }
  }

  ngOnInit() {}
}
