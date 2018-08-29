import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DogsListComponent } from "./dogs-list/dogs-list.component";
import { DogsViewComponent } from "./dogs-view/dogs-view.component";

const routes: Routes = [
  {
    path: "",
    component: DogsListComponent
  },
  {
    path: ":breed",
    component: DogsViewComponent
  },
  {
    path: ":breed/:subbreed",
    component: DogsViewComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/"
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DogsRoutingModule { }
