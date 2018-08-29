import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dogs",
    loadChildren: "./dogs/dogs.module#DogsModule"
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/dogs"
  },
  {
    path: "**",
    redirectTo: "/dogs"
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ]
})
export class AppRoutingModule { }
