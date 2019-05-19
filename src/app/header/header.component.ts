import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: [ './header.scss' ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  date: Date  = new Date();
}
