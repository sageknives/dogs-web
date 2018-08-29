import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../core/dogs.service';
import { Breed } from '../../models/breed';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  private breeds: Breed[] = [];
  private hasBackButton: boolean = false;
  
  constructor(
    private dogService: DogsService
  ) { }

  ngOnInit() {
    this.hasBackButton = false;
    this.dogService.getBreeds()
      .then((breeds: Breed[]) => {
        this.breeds = breeds;
      }).catch(error => {
        console.log(error);
      })
  }

}