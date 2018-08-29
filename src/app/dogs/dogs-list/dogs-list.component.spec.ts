import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsListComponent } from './dogs-list.component';
import { DogsViewComponent } from '../dogs-view/dogs-view.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DogsRoutingModule } from '../dogs-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
import { DogsService } from '../../core/dogs.service';
import { APP_BASE_HREF } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Breed } from '../../models/breed';

describe('DogsListComponent', () => {
  let component: DogsListComponent;
  let fixture: ComponentFixture<DogsListComponent>;
  let imageURL: string = "image.png";
  const fakeDogService = {
    getBreeds: () => Promise.resolve([
      Breed.fromJSONS([
        {
          name: "bulldog",
          subBreeds: ['boston']
        }
      ])
    ]),
    getBreedImage: () => Promise.resolve(imageURL)

  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogsListComponent, DogsViewComponent],
      imports: [
        SharedModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatSnackBarModule,
        DogsRoutingModule,
        AppRoutingModule
      ],
      providers: [
        { provide: DogsService, useValue: fakeDogService },
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should setup view correctly', async(() => {
    const fixture = TestBed.createComponent(DogsListComponent);
    const app = fixture.debugElement.componentInstance;
    app.setupView()
      .then(() => {
        expect(app.backButton).toBeFalsy();
        expect(app.breeds.length).toEqual(1);
      })
  }));
});
