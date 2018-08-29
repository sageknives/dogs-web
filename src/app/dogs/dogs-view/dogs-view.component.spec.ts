import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DogsViewComponent } from './dogs-view.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DogsRoutingModule } from '../dogs-routing.module';
import { DogsListComponent } from '../dogs-list/dogs-list.component';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from '../../core/dogs.service';
import { AppRoutingModule } from '../../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('DogsViewComponent', () => {
  let component: DogsViewComponent;
  let fixture: ComponentFixture<DogsViewComponent>;
  let imageURL: string = "image.png";
  const paramMap = new Map<string, string>();
  paramMap.set('breed', 'bulldog');
  paramMap.set('subbreed', 'boston');

  const fakeActivatedRoute = {
    snapshot:
    {
      paramMap: paramMap
    }
  };
  const fakeDogService = {
    getBreedImage: () => Promise.resolve(imageURL)
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogsViewComponent, DogsListComponent],
      imports: [
        SharedModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        DogsRoutingModule,
        AppRoutingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: DogsService, useValue: fakeDogService },
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should setup view correctly', async(() => {
    const fixture = TestBed.createComponent(DogsViewComponent);
    const app = fixture.debugElement.componentInstance;
    app.setupView()
      .then(() => {
        expect(app.breed).toEqual(paramMap.get('breed'));
        expect(app.subBreed).toEqual(paramMap.get('subbreed'));
        expect(app.imageURL).toEqual(imageURL);
      })
  }));

  it('should get a random picture', async(() => {
    const fixture = TestBed.createComponent(DogsViewComponent);
    const app = fixture.debugElement.componentInstance;
    app.setRandomPicture()
      .then(() => {
        expect(app.imageURL).toEqual(imageURL);
      })
  }));
});
