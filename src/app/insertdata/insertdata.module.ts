import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertdataRoutingModule } from './insertdata-routing.module';
import { InsertdataComponent } from './insertdata.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { RepresentativesComponent } from './representatives/representatives.component';


@NgModule({
  declarations: [InsertdataComponent, ViewdataComponent, RepresentativesComponent],
  imports: [
    CommonModule,
    InsertdataRoutingModule
  ]
})
export class InsertdataModule { }
