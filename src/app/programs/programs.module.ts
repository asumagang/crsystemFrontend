import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramsComponent } from './programs.component';
import { AddProgramComponent } from '../add-program/add-program.component';


@NgModule({
  declarations: [ProgramsComponent,AddProgramComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    FormsModule,
    RouterModule,
    NgbPaginationModule,
    NgbModalModule
  ]
})
export class ProgramsModule { }
