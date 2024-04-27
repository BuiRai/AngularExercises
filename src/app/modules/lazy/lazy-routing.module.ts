import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondLazyComponent } from '../../components/second-lazy/second-lazy.component';

const routes: Routes = [{
  path: '',
  component: SecondLazyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }