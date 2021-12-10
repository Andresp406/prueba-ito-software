import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IDataUser } from '../modals/create-user/create-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  forma : FormGroup;
  dataUser!:IDataUser;
  customers:IDataUser[]=[]
  searchUser : string = '';
  field : string = '';
  page:number = 0;
  constructor(
  ) {
    this.forma = this.setValidation();
   }

  ngOnInit(): void {
  }

  setValidation(){
    return new FormGroup({
      email : new FormControl(null, [Validators.required, ]),
      usuario : new FormControl(null, [Validators.required, ]),
      nombre: new FormControl(null, [ Validators.required, ]),
      apellido: new FormControl(null, [Validators.required, ]),
    });
  }

 

  newUser(event:IDataUser){
    this.dataUser = event;
  }

  search(search:string, field:string){    
    this.page = 0; 
    this.searchUser = search;
    this.field = field;
  }

  dataCustomer(customers:IDataUser[]){
    console.log(customers);
    this.customers = customers;
  }

  pagination(page:number){
    this.page = page;
  }
  
}
