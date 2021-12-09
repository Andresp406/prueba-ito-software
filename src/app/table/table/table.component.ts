import { Component, Input, OnInit, SimpleChanges, ElementRef } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { IDataUser } from '../../form/modals/create-user/create-user.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataUser!:IDataUser;
  dataCustomers: any []=[];

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

  edit(customer:IDataUser){
    console.log(customer);

  }





}
