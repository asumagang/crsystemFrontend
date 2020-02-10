import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs.component';
import { AddProgramComponent } from '../add-program/add-program.component';


const routes: Routes = [
  {
    path: "",
    component: ProgramsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents:[AddProgramComponent]
})
export class ProgramsRoutingModule { }
