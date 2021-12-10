import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ModalModule } from '../form/modals/modal.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationPipe } from './pagination.pipe';


@NgModule({
  declarations: [
    TableComponent,
    PaginationPipe
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatPaginatorModule,
  ],
  exports:[
    TableComponent
  ]
})
export class TableModule { }
