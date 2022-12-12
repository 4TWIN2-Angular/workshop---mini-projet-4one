import { Component, OnInit, Input } from "@angular/core";
import Chart from "chart.js";
import { Contrat } from "src/app/models/contrat";
import { ContratService } from "src/app/services/contrat.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit {
  public chart: any;
  @Input() startDate: string;
  @Input() endDate: string;
  listC: Contrat[] = [];
  dateArray: string[] = [];
  montantArray: number[] = [];

  constructor(private cs: ContratService) {}

  getContratBetweenTwoDates() {
    this.cs
      .getContratBetweenTwoDates(this.startDate, this.endDate)
      .subscribe((res) => {
        this.listC = res;
        this.dateArray = this.listC.map((date) => date.dateDebutContrat);
        this.montantArray = this.listC.map((montant) => montant.montantContrat);
        this.chart = new Chart("MyChart", {
          type: "line", //this denotes tha type of chart

          data: {
            // values on X-Axis
            labels: this.dateArray,
            datasets: [
              {
                label: "Montant",
                data: this.montantArray,
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
          options: {
            aspectRatio: 2.5,
          },
        });
      });
  }

  ngOnInit(): void {
    this.getContratBetweenTwoDates();
  }
}
