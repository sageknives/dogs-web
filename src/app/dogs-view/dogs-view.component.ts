import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed } from '../models/breed';
import { DogsService } from '../core/dogs.service';

@Component({
  selector: 'app-dogs-view',
  templateUrl: './dogs-view.component.html',
  styleUrls: ['./dogs-view.component.scss']
})
export class DogsViewComponent implements OnInit {

  private breed: Breed = new Breed("", []);
  private imageURL: string = "";
  constructor(
    private route: ActivatedRoute,
    private dogService: DogsService
  ) { }

  ngOnInit() {
    this.breed.setName(this.route.snapshot.paramMap.get('breed'));
    let subbreed = this.route.snapshot.paramMap.get('subbreed');
    if (subbreed) {
      this.breed.addSubbreed(subbreed);
    }
    this.getRandomPicture();
  }

  public getRandomPicture() {
    let name: string = this.breed.getName();
    if (this.breed.hasSubbreeds()) {
      name += `-${this.breed.getSubbreeds()[0]}`;
    }
    this.dogService.getBreedImage(name)
      .then((url: string) => {
        this.imageURL = url;
      }).catch(error => {
        console.log(error);
      })
  }

}
