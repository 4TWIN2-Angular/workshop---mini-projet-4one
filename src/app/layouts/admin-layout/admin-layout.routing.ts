import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { AddContratComponent } from "src/app/pages/add-contrat/add-contrat.component";
import { UpdateContratComponent } from "src/app/pages/update-contrat/update-contrat.component";
import { EquipesComponent } from "src/app/pages/ModEquipe/equipes/equipes.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "contrats", component: TablesComponent },
  { path: "addContrat", component: AddContratComponent },
  { path: "updateContrat/:idContrat", component: UpdateContratComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "equipes", component: EquipesComponent },
];
