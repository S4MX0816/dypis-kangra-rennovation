import { Pipe, PipeTransform } from '@angular/core';

import { Doc } from '../models/interfaces';

const spaceEmitter = / {2,}/g;

@Pipe({
  name: 'filterDocs',
})
export class FilterDocsPipe implements PipeTransform {
  transform(docs: Doc[], name: string | null | undefined): Doc[] {
    name = name?.replace(spaceEmitter, ' ').trim();
    if (!name) {
      return docs;
    }

    name = name.toLowerCase();
    name = name.split(' ').join('-');
    return docs.filter((doc) => doc.name.toLowerCase().indexOf(name!) > -1);
  }
}
