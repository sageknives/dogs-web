import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogsViewComponent } from './dogs-view/dogs-view.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DogsService } from './core/dogs.service';
// import {
//   MatButtonModule,
//   MatDialogModule,
//   MatIconModule,
//   MatListModule,
//   MatSidenavModule,
//   MatToolbarModule,
//   MatCardModule
// } from "@angular/material";
import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule } from "@angular/material/dialog"
import { MatIconModule } from "@angular/material/icon"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatCardModule } from "@angular/material/card"
import { MatListModule } from "@angular/material/list"
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './core/custom-reuse-strategy';
import { PreviousRouteService } from './core/previous.route.service';


@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    DogsViewComponent,
    LayoutComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    DogsService,
    PreviousRouteService,
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
