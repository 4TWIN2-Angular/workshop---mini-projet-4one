import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { ListEquipeComponent } from "./pages/list-equipe/list-equipe.component";
import { UpdateDetailEquipeComponent } from "./pages/update-detail-equipe/update-detail-equipe.component";

import { EquipesComponent } from "./pages/ModEquipe/equipes/equipes.component";
import { AddEquipeComponent } from "./pages/add-equipe/add-equipe.component";
import { UpdateEquipeComponent } from "./pages/update-equipe/update-equipe.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,

    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EquipesComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    ListEquipeComponent,
    UpdateDetailEquipeComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
