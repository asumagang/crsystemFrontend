import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertdataRoutingModule } from './insertdata-routing.module';
import { InsertdataComponent } from './insertdata.component';



@NgModule({
  declarations: [InsertdataComponent],
  imports: [
    CommonModule,
    InsertdataRoutingModule
  ]
})
export class InsertdataModule { }
