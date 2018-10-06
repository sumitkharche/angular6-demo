import { Component } from '@angular/core';
import { ToasterConfig } from '../../node_modules/angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6Demo';
  config: ToasterConfig =
    new ToasterConfig({ positionClass: 'toast-bottom-right' });
}
