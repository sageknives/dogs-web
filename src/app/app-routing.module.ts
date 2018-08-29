import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { DogsViewComponent } from "./dogs-view/dogs-view.component";

const routes: Routes = [
  {
    path: "dogs",
    component: DogsListComponent
  },
  {
    path: "dogs/:breed",
    component: DogsViewComponent
  },
  {
    path: "dogs/:breed/:subbreed",
    component: DogsViewComponent
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
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    })
  ]
})
export class AppRoutingModule { }
