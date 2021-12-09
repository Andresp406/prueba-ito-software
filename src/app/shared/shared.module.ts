import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCloseComponent } from './button-close/button-close.component';
import { ValidationsErrorsComponent } from './validations-errors/validations-errors.component';



@NgModule({
  declarations: [
    ButtonCloseComponent,
    ValidationsErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonCloseComponent,
    ValidationsErrorsComponent
  ]
})
export class SharedModule { }
