import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: ":id/:name",
        component: UserComponent,
      },
    ],
  },
  {
    path: "servers",
    component: ServersComponent,
    // canActivate:[AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ":id",
        component: ServerComponent,
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  // {
  //   path: "not-found",
  //   component: PageNotFoundComponent,
  // },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data : {message:'Page not found!'}
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
