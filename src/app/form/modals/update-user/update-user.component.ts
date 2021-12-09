import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IDataUser } from '../create-user/create-user.component';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() user!:IDataUser;
  @Output() cerrarModal = new EventEmitter<boolean>();
  forma:FormGroup;

  constructor() {
    this.forma = this.setValidation();
   }

  ngOnInit(): void {
    console.log(this.user)
    const dataUser = {
      id: this.user.id,
      email: this.user.email,
      usuario : this.user.usuario,
      nombre : this.user.nombre,
      apellido : this.user.apellido,
      status : this.user?.status,
    }
    this.forma.setValue(dataUser);
    
  }


  cerrar(event: any) {
    this.cerrarModal.emit(true);
  }

  setValidation(){
    return new FormGroup({
      id : new FormControl(null, [Validators.required]),
      email :new FormControl(null, [Validators.required, Validators.email, Validators.pattern(environment.patternEmail)]),
      usuario : new FormControl(null,[Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z0-9]+$')]),
      nombre :new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      apellido: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      status: new FormControl(null, [Validators.required]),

    });
  }

}
