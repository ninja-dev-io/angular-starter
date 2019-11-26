import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

  transform(value: any) {
    if (value) {
      return value.split(' ').map((fragment: string) => {
        return fragment.charAt(0).toUpperCase() + fragment.slice(1);
      }).toString().replace(new RegExp(',', 'g'), ' ');
    }
  }

}
