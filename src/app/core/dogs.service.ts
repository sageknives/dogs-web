import { Injectable } from '@angular/core';
import { Breed } from '../models/breed';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private apiURL: string = 'https://dog.ceo/api/';
  constructor(
    private http: HttpClient
  ) { }

  public getBreeds(): Promise<Breed[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}breeds/list/all`)
        .subscribe(
          (response: any) => {
            if (response.status = 201) {
              let breeds: Breed[] = Object
                .keys(response.message)
                .map((key) => {
                  return Breed.fromJSON({ name: key, subbreeds: response.message[key] });
                });
              resolve(breeds)
            } else {
              reject("No Breeds found");
            }
          }, reject)
    });
  }

  public getBreedImage(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}breed/${name}/images/random`)
        .subscribe(
          (response: any) => {
            if (response.status = 201) {
              resolve(response.message)
            } else {
              reject("No image found");
            }
          }, reject)
    })
  }
}
