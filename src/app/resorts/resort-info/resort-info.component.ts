import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resort-info',
  templateUrl: './resort-info.component.html',
  styleUrls: ['./resort-info.component.css']
})
export class ResortInfoComponent {

  @Input()
  public imageMore:string;
  @Input()
  public follows:Object;

}
