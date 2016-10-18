import { Component, Output } from '@angular/core';
import { IResort } from '../../app/shared/interfaces/resorts';

let resorts: IResort[] = [{
  id: 1,
  name: 'Super Resort',
  description: 'xxx',
  phone: '+7926836926',
  images: [
    './assets/images/1.jpg',
    './assets/images/b1.jpg'
  ],
  weather: {
    temperature_water: 22,
    temperature_air: 20,
    cloudiness: 'Облачно'
  },
  follows: {
    followers: 6463,
    following: 632
  }
}, {
  id: 1,
  name: 'Abstract Resort',
  description: 'xxx',
  phone: '+7926836926',
  images: [
    './assets/images/resort-slu.jpg',
    './assets/images/grand-solmar-land-s-end-resort-spa-los-cabos-los-cabos-mexico-112584-5.jpg'
  ],
  weather: {
    temperature_water: 44,
    temperature_air: 12,
    cloudiness: 'Ясно'
  },
  follows: {
    followers: 1236,
    following: 402
  }
}, {
  id: 1,
  name: 'Mega Resort',
  description: 'дескрипшион',
  phone: '+7926836926',
  images: [
    './assets/images/98r3p32.jpg',
    './assets/images/byugwig8iwe.jpg'
  ],
  weather: {
    temperature_water: 11,
    temperature_air: 32,
    cloudiness: 'Необлачно'
  },
  follows: {
    followers: 43346,
    following: 407332
  }
}, {
  id: 1,
  name: 'Giper Resort',
  description: 'xxx',
  phone: '+7926836926',
  images: [
    './assets/images/b1.jpg',
    './assets/images/1.jpg'
  ],
  weather: {
    temperature_water: 1,
    temperature_air: 3,
    cloudiness: 'Пасмурно'
  },
  follows: {
    followers: 1236,
    following: 402
  }
}, {
  id: 1,
  name: 'Puper Resort',
  description: 'xxx',
  phone: '+7926836926',
  images: [
    './assets/images/76398437.jpg',
    './assets/images/images.jpg'
  ],
  weather: {
    temperature_water: 22,
    temperature_air: 20,
    cloudiness: 'По всякому'
  },
  follows: {
    followers: 436,
    following: 666
  }
}, {
  id: 1,
  name: 'Super Resort',
  description: 'описание например',
  phone: '+7926836926',
  images: [
    './assets/images/1.jpg',
    './assets/images/b1.jpg'
  ],
  weather: {
    temperature_water: 22,
    temperature_air: 20,
    cloudiness: 'Облачно'
  },
  follows: {
    followers: 1236,
    following: 402
  }
}];

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortComponent {

  public resorts:IResort[] = resorts;
  public resortDetail:IResort;

  constructor() {
    this.resortDetail = resorts[0];
  }

  public viewResortDetail(index) {
    this.resortDetail = resorts[index];
  }

}
