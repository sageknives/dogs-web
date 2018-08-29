import { TestBed, inject } from '@angular/core/testing';

import { PreviousRouteService } from './previous.route.service';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('PreviousRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      providers: [
        PreviousRouteService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });
  });

  it('should be created', inject([PreviousRouteService], (service: PreviousRouteService) => {
    expect(service).toBeTruthy();
  }));
});
