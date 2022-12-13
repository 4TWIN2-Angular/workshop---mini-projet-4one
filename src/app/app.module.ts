import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

<<<<<<< HEAD
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ListEquipeComponent } from './pages/list-equipe/list-equipe.component';
import { UpdateDetailEquipeComponent } from './pages/update-detail-equipe/update-detail-equipe.component';
=======
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { ListEquipeComponent } from "./pages/list-equipe/list-equipe.component";
import { UpdateDetailEquipeComponent } from "./pages/update-detail-equipe/update-detail-equipe.component";
>>>>>>> efdd74ac44502422cb9d1b132e4fb6b12289d834

import { EquipesComponent } from "./pages/ModEquipe/equipes/equipes.component";
import { AddEquipeComponent } from "./pages/add-equipe/add-equipe.component";
import { UpdateEquipeComponent } from "./pages/update-equipe/update-equipe.component";
import { SearchPipe } from './search.pipe';
import { NgxPaginationModule } from "ngx-pagination";
import { ToastrModule } from 'ngx-toastr';
import { ComboboxEtudComponent } from './pages/combobox-etud/combobox-etud.component';
import { ThematiqueComponent } from './pages/thematique/thematique.component';

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
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
<<<<<<< HEAD
    ListEquipeComponent,
    UpdateDetailEquipeComponent
=======
    EquipesComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    ListEquipeComponent,
    UpdateDetailEquipeComponent,
<<<<<<< HEAD
>>>>>>> efdd74ac44502422cb9d1b132e4fb6b12289d834
=======
    SearchPipe,
    ComboboxEtudComponent,
    ThematiqueComponent,

>>>>>>> 2cbb1ac9e77194f273aa4648f27020848ecc9502
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
