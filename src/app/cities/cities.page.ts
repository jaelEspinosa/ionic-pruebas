import { Component, OnInit, inject } from '@angular/core';
import { City } from '../interfaces/cities-interface';
import { CityService } from './services/city.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  public cities!: City[]

  private citiesService = inject ( CityService );
  public toastController = inject ( ToastController )
  public alertController = inject ( AlertController )

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

  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 2000,
      position: 'bottom'
    })
    toast.present()
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header: 'Borrar ciudad',
      message: 'Se ha borrado la ciudad correctamente',
      buttons: ["ok"],
    })
    alert.present()
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'Borrar ciudad',
      message: '¿Estas seguro?',
      buttons: [
        {
          text:'No',
          handler: ()=>{
            console.log('No, Cancel')
          }
        },
        {
          text:'Si',
          handler: ()=>{
            console.log('Ciudad Eliminada')
          }
        }
      ],
    })
    alert.present()
  }

}
