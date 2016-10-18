import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resort-weather',
  templateUrl: './resort-weather.component.html',
  styleUrls: ['./resort-weather.component.css']
})
export class ResortWeatherComponent {

  @Input()
  public weather:Object;

}
