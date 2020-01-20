import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({selector: '[color]'})
export class ColorDirective {

    keysArray: string[] = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    colorsArray: string[] = ['red', 'yellow', 'green', 'black'];
    @Input('color') colorConfig:string;

    constructor() {}

    @HostBinding('style.color') color:string;

    @HostListener('window:keydown', ['$event']) windowKeyDown($event:KeyboardEvent) {
        const index:number = this.keysArray.indexOf($event.code);

        if (index > -1) {
            this.color = this.colorsArray[index];
        }
    }
}