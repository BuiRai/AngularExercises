import { Component } from '@angular/core';
import { ModuleInjectableService } from '../../services/module-injectable.service';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  listValues: string[];
  rootVariable: string;

  constructor(moduleInjectableService: ModuleInjectableService, rootInjectableService: RootInjectableService) {
    this.listValues = moduleInjectableService.list;
    this.rootVariable = rootInjectableService.persistentData;
  }
}
