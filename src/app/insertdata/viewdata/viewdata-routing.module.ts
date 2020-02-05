import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewdataComponent } from './viewdata.component';
import { DatatableComponent } from './datatable/datatable.component';
import { InsertformComponent } from './insertform/insertform.component';


const routes: Routes = [
  {
    path: '', component: ViewdataComponent, children: [
      
      {
        path: 'datatable', component: DatatableComponent
      },
      {
        path: 'insertform', component: InsertformComponent
      },
      {
        path: '', redirectTo: 'datatable', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewdataRoutingModule { }
