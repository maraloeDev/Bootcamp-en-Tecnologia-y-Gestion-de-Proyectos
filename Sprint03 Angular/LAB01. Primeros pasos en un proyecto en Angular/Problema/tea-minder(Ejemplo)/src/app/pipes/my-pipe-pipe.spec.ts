//Sirve para transformar datos antes de mostrarlos en la lista

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myPipe' })
export class MyPipePipe implements PipeTransform {
 transform(value: string): string {
 return value.toUpperCase();
 }
}
