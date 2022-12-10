import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/tableEtudiant",
    title: "Etudiants",
    icon: "ni-hat-3 text-red",
    class: "",
  },
  {
    path: "/contrats",
    title: "Contrats",
    icon: "ni-hat-3 text-red",
    class: "",
  },
  {
    path: "/equipes",
    title: "Equipes",
    icon: "ni-hat-3 text-red",
    class: "",
  },
  {
    path: "/ListEquipe",
    title: "Detail equipes",
    icon: "ni-hat-3 text-red",
    class: "",
  },
  {
    path: "/departement",
    title: "Departements",
    icon: "ni-hat-3 text-red",
    class: "",
  },
  {
    path: "/universite",
    title: "Universites",
    icon: "ni-hat-3 text-red",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
