import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsViewComponent } from './dogs-view.component';

describe('DogsViewComponent', () => {
  let component: DogsViewComponent;
  let fixture: ComponentFixture<DogsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
