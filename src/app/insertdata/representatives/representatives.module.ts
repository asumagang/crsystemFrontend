import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentativesRoutingModule } from './representatives-routing.module';
import { RepresentativesComponent } from './representatives.component';
import { AddrepresentativeComponent } from './addrepresentative/addrepresentative.component';
import { RepresentativelistComponent } from './representativelist/representativelist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RepresentativesComponent,AddrepresentativeComponent,RepresentativelistComponent],
  imports: [
    CommonModule,
    RepresentativesRoutingModule,
    FormsModule
  ]
})
export class RepresentativesModule { }
