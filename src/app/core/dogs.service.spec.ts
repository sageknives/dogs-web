import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { DogsService } from './dogs.service';
import { Breed } from '../models/breed';
import { Observable } from 'rxjs';

const fakeHttp = {
  get: (url) => {
    return new Observable(observer => {
      if (url === "https://dog.ceo/api/breeds/list/all") {
        observer.next({
          status: 201,
          message: {
            'bulldog': ['french', 'boston'],
            'wolf': ['grey', 'white'],
            'poodle': []
          }
        });
      } else if (url.startsWith("https://dog.ceo/api/breed/")) {
        observer.next({
          status: 201,
          message: "image.png"
        });
      } else {
        observer.error({ status: 404, message: "not found" });
      }
      observer.complete()
    })
  }
}
describe('DogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DogsService,
        { provide: HttpClient, useValue: fakeHttp },
      ]
    });
  });

  it('should be created', inject([DogsService], (service: DogsService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to return a list of breeds', inject([DogsService], (service: DogsService) => {
    service.getBreeds()
      .then((breeds: Breed[]) => {
        expect(breeds.length).toEqual(3);
        expect(breeds.find(b => b.getName() === "bulldog").getSubbreeds().length).toEqual(2);
      }).catch(error => {
        expect(error).toBe(null);
      })
  }));

  it('should be able to return a random image', inject([DogsService], (service: DogsService) => {
    service.getBreedImage("bulldog")
      .then((url: string) => {
        expect(url).toEqual("image.png");
      }).catch(error => {
        expect(error).toBe(null);
      })
  }));
});
