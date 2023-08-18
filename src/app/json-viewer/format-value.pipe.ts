import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatValue',
})
export class FormatValuePipe implements PipeTransform {
  transform(value: any): any {
    if (value === null) {
      return 'null';
    }
    if (typeof value === 'string') {
      value = value.replace(/\\/g, '\\\\');
      value = value.replace(/"/g, '\\"');
      return `"${value}"`;
    }
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    if (typeof value === 'boolean') {
      return value.toString();
    }
    if (typeof value === 'function') {
      return value.toString();
    }
    if (typeof value === 'symbol') {
      return value.toString();
    }
    if (typeof value === 'undefined') {
      return 'undefined';
    }
    return value;
  }
}
