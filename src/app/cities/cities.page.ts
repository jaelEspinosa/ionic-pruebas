import { Component, OnInit, inject } from '@angular/core';
import { City } from '../interfaces/cities-interface';
import { CityService } from './services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  public cities!: City[]

  private citiesService = inject ( CityService )

  ngOnInit() {
    this.getCities()
  }

  getCities(){
    this.citiesService.getAllCities()
     .subscribe({
      next: res => {
        this.cities = res
        console.log(this.cities)
      }
     })
  }

}
