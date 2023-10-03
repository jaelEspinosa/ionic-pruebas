
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from './services/customers.service';
import { Users } from '../interfaces/users-interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {


private router = inject( Router )
private customersService = inject ( CustomersService )
public customers : Users[] = []

ngOnInit() {
    this.getAllCustomers()
  }


  getAllCustomers () {
  this.customersService.getCustomers()
    .subscribe ({
      next: res => {
        this.customers = res
        console.log( this.customers )
      }
    })
}

goToHome(){
  this.router.navigateByUrl('/home')
}
}
