import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepresentativesComponent } from './representatives.component';
import { RepresentativelistComponent } from './representativelist/representativelist.component';
import { AddrepresentativeComponent } from './addrepresentative/addrepresentative.component';


const routes: Routes = [
  {
    path: '', component: RepresentativesComponent, children: [
      
      {
        path: 'representativelist', component: RepresentativelistComponent
      },
      {
        path: 'addrepresentative', component: AddrepresentativeComponent
      },
      {
        path: '', redirectTo: 'representativelist', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentativesRoutingModule { }
