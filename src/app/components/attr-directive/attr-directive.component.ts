import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrl: './attr-directive.component.css'
})
export class AttrDirectiveComponent {
  public active: boolean = false;

  toggleActive() {
    this.active = !this.active;
  }
}