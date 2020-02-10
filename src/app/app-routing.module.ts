import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { BoardUserComponent } from "./board-user/board-user.component";
import { ReportsComponent } from "./reports/reports.component";
import { AuthGuard } from "./_helpers/auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "user", component: BoardUserComponent , canActivate: [AuthGuard]},
  { path: "reports", component: ReportsComponent, canActivate: [AuthGuard] },
  {
    path: "insertdata",
    loadChildren: () =>
      import(`./insertdata/insertdata.module`).then(m => m.InsertdataModule), canActivate: [AuthGuard]
  },
  {
    path: "programs",
    loadChildren: () =>
      import(`./programs/programs.module`).then(m => m.ProgramsModule), canActivate: [AuthGuard]
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
