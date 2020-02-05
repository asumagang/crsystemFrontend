import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProgramsComponent } from './programs/programs.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReportsComponent } from './reports/reports.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { ViewdataComponent } from './insertdata/viewdata/viewdata.component';
import { RepresentativesComponent } from './insertdata/representatives/representatives.component';
import { DatatableComponent } from './insertdata/viewdata/datatable/datatable.component';
import { InsertformComponent } from './insertdata/viewdata/insertform/insertform.component';
import { RepresentativelistComponent } from './insertdata/representatives/representativelist/representativelist.component';
import { AddrepresentativeComponent } from './insertdata/representatives/addrepresentative/addrepresentative.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    ProgramsComponent,
    FooterComponent,
    NotificationsComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
