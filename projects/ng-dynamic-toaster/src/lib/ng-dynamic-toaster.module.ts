import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgDynamicToasterComponent } from './ng-dynamic-toaster.component';



@NgModule({
  declarations: [
    NgDynamicToasterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgDynamicToasterComponent
  ]
})
export class NgDynamicToasterModule { }
