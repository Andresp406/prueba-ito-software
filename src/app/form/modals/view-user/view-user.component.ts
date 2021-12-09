import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDataUser } from '../create-user/create-user.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  @Output() cerrarModal = new EventEmitter<boolean>();
  @Input() user!:IDataUser;
  constructor() { }

  ngOnInit(): void {
  }

  cerrar(event: any) {
    this.cerrarModal.emit(true);
  }

} 
