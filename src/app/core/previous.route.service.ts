import { Injectable } from '@angular/core';
import { Router, NavigationEnd, RoutesRecognized } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {
  private previousUrl: string;
  private currentUrl: string;

  constructor(
    private router: Router
  ) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }
}
