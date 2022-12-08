import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { ListUComponent } from './list/listU.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListUComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule
  ]
})
export class UniversiteModule { }
