import { Component } from '@angular/core';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  protected stringValue: string;

  constructor(rootInjectableService: RootInjectableService) {
    this.stringValue = rootInjectableService.persistentData; 
  }
}
