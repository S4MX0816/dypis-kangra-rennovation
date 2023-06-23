import { Pipe, PipeTransform } from '@angular/core';

const spaceEmitter = / {2,}/g;

@Pipe({
  name: 'filterDocs',
})
export class FilterDocsPipe implements PipeTransform {
  transform(docs: string[], name: string | null | undefined): string[] {
    name = name?.replace(spaceEmitter, ' ').trim();
    if (!name) {
      return docs;
    }

    name = name.toLowerCase();
    name = name.split(' ').join('-');
    return docs.filter((doc) => doc.toLowerCase().indexOf(name!) > -1);
  }
}
