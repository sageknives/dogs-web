import { TestBed, async } from '@angular/core/testing';
import { Breed } from './breed';

describe('Breed Model', () => {
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       Breed
  //     ],
  //   }).compileComponents();
  // }));
  it('should create an instance of breed', async(() => {
    const name: string = 'bulldog';
    const subbreeds: string[] = ['boston'];
    const breed: Breed = new Breed(name,subbreeds);
    expect(breed.getName()).toEqual(name);
  }));
});
