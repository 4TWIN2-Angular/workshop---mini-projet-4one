import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUComponent } from './list/listU.component';

const routes: Routes = [

  {
    path:'',
    component:ListUComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
