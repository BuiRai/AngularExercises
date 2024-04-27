import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from '../../components/third/third.component';



@NgModule({
  declarations: [ThirdComponent],
  imports: [
    CommonModule
  ],
  exports: [ThirdComponent]
})
export class SecondModule { }
