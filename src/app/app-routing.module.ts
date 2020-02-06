import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { BoardUserComponent } from "./board-user/board-user.component";
import { BoardModeratorComponent } from "./board-moderator/board-moderator.component";
import { BoardAdminComponent } from "./board-admin/board-admin.component";
import { ProgramsComponent } from "./programs/programs.component";
import { ReportsComponent } from "./reports/reports.component";
import { AuthGuard } from "./_helpers/auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "user", component: BoardUserComponent , canActivate: [AuthGuard]},
  { path: "mod", component: BoardModeratorComponent , canActivate: [AuthGuard]},
  { path: "admin", component: BoardAdminComponent , canActivate: [AuthGuard]},
  { path: "programs", component: ProgramsComponent, canActivate: [AuthGuard] },
  { path: "reports", component: ReportsComponent, canActivate: [AuthGuard] },
  {
    path: "insertdata",
    loadChildren: () =>
      import(`./insertdata/insertdata.module`).then(m => m.InsertdataModule), canActivate: [AuthGuard]
  },
  {
    path: "manageusers",
    loadChildren: () =>
      import(`./manageusers/manageusers.module`).then(m => m.ManageusersModule), canActivate: [AuthGuard]
  },

  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
