import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'docsName',
})
export class DocsNamePipe implements PipeTransform {
  transform(value: string): string {
    const arr = value.split('-');
    const formattedVal = arr.reduce((acc, val) => {
      if (val === 'pta') {
        return acc + 'PTA' + ' ';
      }
      return acc + val.at(0)?.toUpperCase() + val.substring(1) + ' ';
    }, '');
    return formattedVal.trim();
  }
}
