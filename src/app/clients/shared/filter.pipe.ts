import { Pipe, PipeTransform } from '@angular/core';

import { IClient } from './client.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(clients: IClient[], search: string): any {
    if (!search) return clients;
    return clients.filter(client => {
      return containsString(client, search);
    })
  }
}

let containsString = function(value: any, string: string) {
  if (typeof value === 'string' && value.toLowerCase().includes(string.toLowerCase())) return true;
  if (typeof value === 'object') {
    for(let i in value) {
      if(value.hasOwnProperty(i) && i !== 'avatar'){  // shouldn't search in avatar link
        let contains = containsString(value[i], string);
        if (contains) {
          return true;
        }
      }
    }
  }

  return false;
};
