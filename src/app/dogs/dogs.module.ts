import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogsViewComponent } from './dogs-view/dogs-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DogsRoutingModule } from './dogs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    DogsRoutingModule
  ],
  declarations: [
    DogsListComponent,
    DogsViewComponent
  ]
})
export class DogsModule { }
