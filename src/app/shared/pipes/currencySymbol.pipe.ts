import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Pipe({name: 'currencySymbol'})
export class CurrencySymbolPipe extends CurrencyPipe implements
PipeTransform {
    transform(value: string): any {
    let currencyValue = super.transform(0, value, true, "1.0");
    let symbol = currencyValue.replace(/[0-9]/g, '');
    return symbol;
    }
}
