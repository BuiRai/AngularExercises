import { Component } from '@angular/core';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  protected stringValue: string;

  constructor(rootInjectableService: RootInjectableService) {
    this.stringValue = rootInjectableService.persistentData; 
  }
}
