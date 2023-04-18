import { Component } from '@angular/core';
import { data } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '13-04-23';
  T1: string=data.title1;
  T2: string=data.title2;
  T3: string[]=data.title3;
  D1: string=data.description;
  
}
