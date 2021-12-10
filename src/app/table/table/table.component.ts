import { Component, Input, OnInit, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CustomersService } from 'src/app/services/customers.service';
import { IDataUser } from '../../form/modals/create-user/create-user.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataUser!:IDataUser;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  dataCustomers: any []=[];
  page:number = 0;
  

  constructor(
    private customers:CustomersService,

  ) {
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.dataUser){
      const change = changes.dataUser.currentValue;
      this.dataCustomers.push(change);
    }
  } 

  ngOnInit(): void {
    this.customers.getAllCustomers().subscribe(resp => {
      this.dataCustomers = resp;
    })
  }

  view(customer:IDataUser){
    console.log(customer);
  }

  updateUser(customer:IDataUser){
    this.dataUser = customer;
  }

  nextPage(){
    this.page += 5;

  }

  previousPage(){
    if(this.page > 0){
      this.page -= 5;
    }
  }



}
