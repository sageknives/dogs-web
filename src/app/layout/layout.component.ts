import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PreviousRouteService } from '../core/previous.route.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  private title: string = "Dogs";
  private isChild: boolean = false;
  private subscription: Subscription;
  @Input() backButton: boolean;
  constructor(
    public router: Router,
    public location: Location,
    public previousRouteService: PreviousRouteService
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  gotoBreeds() {
    if (this.previousRouteService.getPreviousUrl()) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/dogs");
    }
  }

}
