import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { CustomersService } from '../../../services/customers.service';


export interface IDataUser {
  id:number
  email:string;
  usuario:string;
  nombre:string;
  apellido:string;
  status:string
}
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  forma : FormGroup;
  status: string []=[];
  id:number = 0;
  @Input() user:any;
  @Output() cerrarModal = new EventEmitter<boolean>();
  @Output() dataUser = new EventEmitter<IDataUser>();
  
  constructor(
    private customer : CustomersService,
    private toastr: ToastrService

  ) { 
    this.forma = this.setValidation();
    this.status = [
      'activo',
      'inactivo'
    ]
  }

  ngOnInit(): void {
   this.customer.getAllCustomers().subscribe(resp => {
     const ultimo : IDataUser=  resp.pop();
     this.id = ultimo.id;
    });
    
  }
  
  cerrar(event: any) {
    this.cerrarModal.emit(true);
  }

  setValidation(){
    return new FormGroup({
      id: new FormControl(null),
      email :new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email, Validators.pattern(environment.patternEmail)]),
      usuario : new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[A-Za-z0-9]+$')]),
      nombre :new FormControl(null, [Validators.required,Validators.minLength(3),  Validators.maxLength(100)]),
      apellido: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      status: new FormControl(null, [Validators.required]),

    });
  }

  createEditProfile(event:any){
    const data = this.objDataCustomer(event);
    console.log(data)    
    this.customer.setCustomer(data).subscribe((resp:any) => {
      this.dataUser.emit(resp)
      this.cerrar(true);    
      this.toastr.success('Cliente Ingresado Exitosamente!', 'Crear Cliente', {timeOut:1000});
  
      
    });
  }

  private objDataCustomer(event:any){
    const data:IDataUser = {
      id : this.id + 1,
      email : this.forma.get('email')?.value,
      usuario : this.forma.get('usuario')?.value,
      nombre : this.forma.get('nombre')?.value,
      apellido : this.forma.get('apellido')?.value,
      status :  this.forma.get('status')?.value
    }
    return data;
  }

}
