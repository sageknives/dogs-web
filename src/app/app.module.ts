import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogsViewComponent } from './dogs-view/dogs-view.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DogsService } from './core/dogs.service';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    DogsViewComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
