import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})
export class Body1Component {
  @Input() public t1:string=""
  @Input() public d1:string=""
}
