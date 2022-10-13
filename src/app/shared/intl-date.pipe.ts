import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intlDate',
  standalone: true,
})
export class IntlDatePipe implements PipeTransform {
  private dateTimeFormat = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' });

  transform(value: Date | string, ...args: unknown[]): unknown {
    const date = value instanceof Date ? value : new Date(value);
    return isNaN(date.valueOf()) ? 'Invalid Date' : this.dateTimeFormat.format(date);
  }
}
