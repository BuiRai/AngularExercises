import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const text = this.element.nativeElement.textContent;
    this.element.nativeElement.textContent = text[0].toUpperCase() + text.substring(1);
  }
}
