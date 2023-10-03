
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from './services/customers.service';
import { User } from '../interfaces/users-interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {


private router = inject( Router )
private customersService = inject ( CustomersService )

public customers : User[] = []
public searchedUser! :User[]

ngOnInit() {
    this.getAllCustomers()

  }


getAllCustomers () {
  this.customersService.getCustomers()
    .subscribe ({
      next: res => {
        this.customers = res
        this.searchedUser = this.customers
      }
    })
}

searchCustomer(event:any){
  const text = event.target.value;
  this.searchedUser = this.customers;
  if (text && text.trim() !== ''){
    this.searchedUser = this.searchedUser.filter((user:User)=>{
      return (user.name.toLowerCase().includes(text))
    })
  }
}

goToHome(){
  this.router.navigateByUrl('/home')
}
}
