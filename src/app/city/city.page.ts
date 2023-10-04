import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../cities/services/city.service';
import { City } from '../interfaces/cities-interface';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  public id: any;

  public activatedRoute = inject ( ActivatedRoute )
  public citiesService = inject ( CityService )

  public cityToShow!: City
  public allCities: City[] = []

  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.getCities();
  }

  getCities() {
    this.citiesService.getAllCities()
     .subscribe({
      next: res =>{
        this.allCities = res;
        this.cityToShow = this.allCities[Number(this.id)-1]

      }
     })
  }

}
