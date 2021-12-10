import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { IDataUser } from '../../form/modals/create-user/create-user.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataUser!:IDataUser;
  @Input() field:string='';
  @Input() searchUser:string='';
  @Output() data = new EventEmitter<IDataUser[]>();
  @Output() pagination = new EventEmitter<number>();

  dataCustomers: IDataUser []=[];
  page:number = 0;
  pag:number = 1;
  

  constructor(
    private customers:CustomersService,
  ) {
    this.getAllDataCustomers();
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.dataUser){
      const change = changes.dataUser.currentValue;
      this.dataCustomers.push(change);
    }
 
  } 

  ngOnInit(): void {
  }

  getAllDataCustomers(){
    this.customers.getAllCustomers().subscribe(resp => {
      this.dataCustomers = resp;
      this.data.emit(resp)
    })
  }

  updateUser(customer:IDataUser): void{
    for (let key in this.dataCustomers) {
        if (this.dataCustomers[key].id === customer.id){
          this.dataCustomers[key] = customer;           
        }
    }
  }

  nextPage(){
    this.page += 5;
    this.pag += 1; 

  }

  previousPage(){
    if(this.page > 0){
      this.page -= 5;
      this.pag -= 1; 

    }
  }



}
