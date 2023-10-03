import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { City } from 'src/app/interfaces/cities-interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {

 private http = inject ( HttpClient )

 getAllCities():Observable<City[]>{
  return this.http.get<any>('assets/files/cities.json')
  .pipe(
    map( res => {
      return res.data
    })
  )
 }
}
