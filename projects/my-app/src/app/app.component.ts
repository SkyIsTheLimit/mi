import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { createRouteTransitions } from './micro-interactions/route/transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    createRouteTransitions(['Home', 'Another', 'Third', 'Fourth'])
  ]
})
export class AppComponent {
  title = 'my-app';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
