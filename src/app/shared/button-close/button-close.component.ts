import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-button-close',
  templateUrl: './button-close.component.html',
  styleUrls: ['./button-close.component.css']
})
export class ButtonCloseComponent implements OnInit {

  @Output() cerrarModal = new EventEmitter<boolean>();
  @Input() addClassTopRight = false;

  constructor(
    public modal: ModalService
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.cerrarModal.emit(true);
  }

}
