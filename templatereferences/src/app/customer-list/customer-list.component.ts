import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  selectedCustomer:any;
 
  customers:Customer[]=[
   {customerNo:1,name :'Mark Vought' ,address:'',city :'London',country:'Uk'},
   {customerNo:2,name :'John Smith' ,address:'',city :'New York',country:'Usa'},
   {customerNo:3,name :'Merry An' ,address:'',city :'Berlin',country:'Germany'},
   {customerNo:4,name :'Tom Tom' ,address:'',city :'London',country:'Uk'},
   {customerNo:5,name :'Ali ' ,address:'',city :'Copenhagen',country:'Denamrk'}
  ]
}
