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
  page:number = 0;
  constructor(
  ) {
    this.forma = this.setValidation();
   }

  ngOnInit(): void {
  }

  setValidation(){
    return new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      usuario : new FormControl(null, [Validators.required]),
      nombre: new FormControl(null, [ Validators.required]),
      apellido: new FormControl(null, [Validators.required]),
    });
  }

  createUser(event:any){

  }

  newUser(event:IDataUser){
    this.dataUser = event;
  }

  search(search:string){
    this.page = 0; 
    this.searchUser = search;
  }

  dataCustomer(customers:IDataUser[]){
    console.log(customers);
    this.customers = customers;
  }

  pagination(page:number){
    this.page = page;
  }
  
}
