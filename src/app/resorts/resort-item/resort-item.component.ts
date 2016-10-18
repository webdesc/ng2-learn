import { Component, Input } from '@angular/core';
import { IResort } from '../../../app/shared/interfaces/resorts';

@Component({
  selector: 'app-resort-item',
  templateUrl: './resort-item.component.html',
  styleUrls: ['./resort-item.component.css']
})
export class ResortItemComponent {

  @Input()
  public resort:IResort;

}
