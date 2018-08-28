import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs-view',
  templateUrl: './dogs-view.component.html',
  styleUrls: ['./dogs-view.component.scss']
})
export class DogsViewComponent implements OnInit {

  private breed: any = {};
  constructor() { }

  ngOnInit() {
  }

  public getRandomPicture() {

  }

}
