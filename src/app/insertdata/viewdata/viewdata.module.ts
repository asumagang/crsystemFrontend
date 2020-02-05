import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewdataRoutingModule } from './viewdata-routing.module';
import { ViewdataComponent } from './viewdata.component';
import { DatatableComponent } from './datatable/datatable.component';
import { InsertformComponent } from './insertform/insertform.component';


@NgModule({
  declarations: [DatatableComponent,InsertformComponent,ViewdataComponent],
  imports: [
    CommonModule,
    ViewdataRoutingModule
  ]
})
export class ViewdataModule { }
