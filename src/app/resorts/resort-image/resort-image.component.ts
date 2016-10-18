import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resort-image',
  templateUrl: './resort-image.component.html',
  styleUrls: ['./resort-image.component.css']
})
export class ResortImageComponent {

  @Input()
  public imageDetail:string;

  constructor() {
    console.log(this.imageDetail);
  }

}
