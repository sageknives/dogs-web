import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PreviousRouteService } from '../../core/previous.route.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private title: string = "Dogs";
  @Input() backButton: boolean;
  
  constructor(
    public router: Router,
    public location: Location,
    public previousRouteService: PreviousRouteService
  ) {
  }

  ngOnInit() {
  }

  gotoBreeds() {
    if (this.previousRouteService.getPreviousUrl()) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/dogs");
    }
  }

}
