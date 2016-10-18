import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IResort } from '../../../app/shared/interfaces/resorts';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent {

  @Input()
  public resorts:IResort[];
  
  @Output()
  public changeImageEvent:EventEmitter<IResort> = new EventEmitter();

}
