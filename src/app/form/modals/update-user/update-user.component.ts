import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IDataUser } from '../create-user/create-user.component';
import { CustomersService } from '../../../services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() user!:IDataUser;
  @Output() cerrarModal = new EventEmitter<boolean>();
  @Output() modalEmitter = new EventEmitter<IDataUser>();

  forma:FormGroup;

  constructor(
    private customers:CustomersService,
    private activateRouter: ActivatedRoute,
    private toastr: ToastrService

  ) {
    this.forma = this.setValidation();
   }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(({id})=>{console.log(id)})

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

  updateData(customer:any){
    const data = {
      id : customer.target[0].value,
      email: customer.target[1].value,
      usuario: customer.target[2].value,
      nombre : customer.target[3].value,
      apellido : customer.target[4].value,
      status : customer.target[5].value
    }
    this.customers.updateCustomer(data).subscribe(resp => {
      this.user = resp;
      this.modalEmitter.emit(resp);
      this.cerrar(true);
      this.toastr.success('Cliente Actualizado Exitosamente!', '', {timeOut:1000});

    })
  }

}
