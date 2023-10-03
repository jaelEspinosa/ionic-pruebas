import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Users } from 'src/app/interfaces/users-interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private http = inject ( HttpClient );


  getCustomers():Observable<Users[]> {
    return this.http.get<any>('assets/files/customers.json')
    .pipe(
      map( res => {
        return res.data
      })
    )
  }
}
