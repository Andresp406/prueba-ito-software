import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ModalModule } from '../form/modals/modal.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }
