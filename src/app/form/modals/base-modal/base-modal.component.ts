import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { IDataUser } from '../create-user/create-user.component';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent implements OnInit {

  @Input() target='';
  @ViewChild('divModal') divModal!: ElementRef;
  @Output() newUser = new EventEmitter<IDataUser>() ;
  data:any;
  constructor(
    private modal :ModalService
  ) { }

  ngOnInit(): void {
  }

  open(data:any){
    if(data){
      this.data = data
    }
    this.modal.showModal(this.divModal);
  }

  dataUser(event:IDataUser){
    this.newUser.emit(event);
  }

}
