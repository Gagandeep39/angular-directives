import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onlyOdd = true;
  oddNumber = [1, 3, 5, 7, 9];
  evenNumber = [2, 4, 6, 8];
  title = 'angular-directives';
}
