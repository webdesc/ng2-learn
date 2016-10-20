import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IResort } from '../../shared/interfaces/resorts';

@Component({
  selector: 'app-resort-menu',
  templateUrl: './resort-menu.component.html',
  styleUrls: ['./resort-menu.component.css']
})
export class ResortMenuComponent {

  @Input() public resorts:IResort[];

  @Input() public sortBy:string;

  @Output() public actionSortResort:EventEmitter<string> = new EventEmitter();

}
