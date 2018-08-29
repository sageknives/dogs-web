import { TestBed, async } from '@angular/core/testing';
import { Breed } from './breed';

describe('Breed Model', () => {
  it('should create an instance of breed', () => {
    let name: string = 'bulldog';
    let subbreeds: string[] = ['boston'];
    let breed: Breed = new Breed(name, subbreeds);
    expect(breed.getName()).toEqual(name);
    expect(breed.getSubbreeds()).toEqual(subbreeds);
  });

  it('should create an instance of breed using fromJSON method', () => {
    let name: string = 'bulldog';
    let subbreeds: string[] = ['boston'];
    let breed: Breed = Breed.fromJSON({ name: name, subbreeds: subbreeds });
    expect(breed.getName()).toEqual(name);
    expect(breed.getSubbreeds()).toEqual(subbreeds);
  });

  it('should create an array of breed using fromJSONS method', () => {
    let jsons: any[] = [
      { name: 'bulldog', subbreeds: ['boston', 'frenchy'] },
      { name: 'wolf', subbreeds: ['grey', 'super'] },
      { name: 'mutt', subbreeds: [] },
    ];
    let breeds: Breed[] = Breed.fromJSONS(jsons);
    expect(breeds.length).toEqual(3);
  });

  it('should create an array of breed using fromJSONS method with no input', () => {
    let jsons: any[];
    let breeds: Breed[] = Breed.fromJSONS(jsons);
    expect(breeds.length).toEqual(0); 
  });

  it('should be able to add a subBreed', () => {
    let name: string = 'bulldog';
    let subbreeds: string[] = ['boston'];
    let breed: Breed = Breed.fromJSON({ name: name, subbreeds: subbreeds });
    breed.addSubbreed("frenchy");
    expect(breed.getName()).toEqual(name);
    expect(breed.getSubbreeds().length).toEqual(2);
  });
});
