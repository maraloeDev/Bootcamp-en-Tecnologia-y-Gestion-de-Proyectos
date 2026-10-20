// Permite añadir comportamiento aun elemento HTML existente

import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appMyDirective]' })
export class MyDirectiveDirective {
 constructor(private el: ElementRef) {
 el.nativeElement.style.backgroundColor = 'yellow';
 }
}
