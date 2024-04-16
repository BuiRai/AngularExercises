import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  protected text: string = 'Hello World';
  protected textInput: string = 'Hello World';

  displayAlert() {
    alert('I was triggered by an event');
  }
}
