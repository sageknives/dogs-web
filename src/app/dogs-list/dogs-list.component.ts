import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  private breeds: any[] = [
    {
      id: 1,
      name: "wolf"
    },
    {
      id: 2,
      name: "retriever"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
