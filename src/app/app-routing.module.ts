import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ThirdSlugComponent } from './components/third-slug/third-slug.component';

const routes: Routes = [
  { path: 'simple', component: FirstComponent },
  { path: 'lazy', loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule) },
  { path: 'slug/:slug', component: ThirdSlugComponent },
  { path: '**', redirectTo: 'simple' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
