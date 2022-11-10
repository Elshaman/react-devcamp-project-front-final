import { Component } from '@angular/core';
import Product from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  names: string[] = ['Malambo' , 'Valentina' , 'Chucky']
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      category: 'juguetes'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
     
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      
    },
    {
      name: 'Mis libros',
      price: 23,
      
    },
    {
      name: 'Casa para perro',
      price: 34,
      
    },
    {
      name: 'Gafas',
      price: 3434,
      
    }
  ]

  name = 'shaman';
  age= 18;
  btnDisabled= true;

  activar(){
    this.btnDisabled=false;
  }

  incrementarEdad(){
    this.age++;
  }

  cambiarNombre(event: Event){
    const element = event.target as HTMLInputElement
    this.name = element.value
  }

  addNameInArray(){
    this.names.push(this.newName)
  }

  deleteNameFromArray(index: number){
    this.names.splice(index,1)
  }
}
