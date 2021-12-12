import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    CreateUserComponent,
    UpdateUserComponent,
    BaseModalComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule

  ],
  exports:[
    BaseModalComponent,    
  ]
})
export class ModalModule { }
