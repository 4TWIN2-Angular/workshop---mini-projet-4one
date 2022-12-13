import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { EquipesComponent } from './pages/ModEquipe/equipes/equipes.component';
import { AddEquipeComponent } from './pages/add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './pages/update-equipe/update-equipe.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { UpgradequipeComponent } from './pages/upgradequipe/upgradequipe.component';



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
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EquipesComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    EquipeComponent,
    UpgradequipeComponent,
   
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
