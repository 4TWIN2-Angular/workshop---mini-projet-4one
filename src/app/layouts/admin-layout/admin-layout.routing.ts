import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { EquipesComponent } from "src/app/pages/ModEquipe/equipes/equipes.component";
import { AddEquipeComponent } from "src/app/pages/add-equipe/add-equipe.component";
import { UpdateEquipeComponent } from "src/app/pages/update-equipe/update-equipe.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "contrats", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  {path:"equipes" ,component:EquipesComponent,children:
[
  { path:'updateEquipe/:idEquipe',component: UpdateEquipeComponent},

]},
  { path:'add-equipe',component: AddEquipeComponent},


];