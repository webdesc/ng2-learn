import { Pipe, PipeTransform } from '@angular/core';
import { IResort } from '../../shared/interfaces/resorts';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(value:any, args:string):any {
    return value.sort((a, b) => a[args] > b[args]);
  }

}
