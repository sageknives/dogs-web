import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed } from '../../models/breed';
import { DogsService } from '../../core/dogs.service';

@Component({
  selector: 'app-dogs-view',
  templateUrl: './dogs-view.component.html',
  styleUrls: ['./dogs-view.component.scss']
})
export class DogsViewComponent implements OnInit {

  private breed: string = "";
  private subBreed: string = "";
  private imageURL: string = "";
  private hasBackButton: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogsService
  ) { }

  ngOnInit() {
    this.setupView()
      .then(() => {
        console.log("Dogs view setup")
      }).catch(error => {
        console.log(error);
      })
  }

  public setupView(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.hasBackButton = true;
      this.breed = this.route.snapshot.paramMap.get('breed');
      this.subBreed = this.route.snapshot.paramMap.get('subbreed');
      this.setRandomPicture(this.breed, this.subBreed)
        .then((url: string) => {
          this.imageURL = url;
          resolve();
        }).catch(reject);
    })
  }

  public setRandomPicture(breed: string, subBreed?: string) {
    return new Promise((resolve, reject) => {
      let param = breed;
      if (subBreed) {
        param += `-${subBreed}`;
      }
      this.dogService.getBreedImage(param)
        .then((url: string) => {
          this.imageURL = url;
          resolve(url);
        }).catch(reject)
    });
  }
}
