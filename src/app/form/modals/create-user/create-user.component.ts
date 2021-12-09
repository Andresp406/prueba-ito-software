import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private customer : CustomersService
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
    this.customer.setCustomer(data).subscribe((resp:any) => {
      this.dataUser.emit(resp)
    
      this.cerrar(true);    

    });
  }

  private objDataCustomer(event:any){
    const data:IDataUser = {
      id : this.id + 1,
      email : event.target[1].value,
      usuario : event.target[2].value,
      nombre : event.target[3].value,
      apellido : event.target[4].value,
      status :  event.target[5].value
    }
    return data;
  }

}
