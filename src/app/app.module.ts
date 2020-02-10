import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProgramsComponent } from './programs/programs.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProgramComponent } from './add-program/add-program.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardUserComponent,
    ProfileComponent,
    FooterComponent,
    NotificationsComponent,
    ReportsComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbToastModule
  ],
  providers: [authInterceptorProviders,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
