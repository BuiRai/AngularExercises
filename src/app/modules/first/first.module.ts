import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from '../../components/first/first.component';
import { ModuleInjectableService } from '../../services/module-injectable.service';
import { SecondComponent } from '../../components/second/second.component';


@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [
    CommonModule,
  ],
  exports: [FirstComponent, SecondComponent],
  providers: [ModuleInjectableService]
})
export class FirstModule { }
