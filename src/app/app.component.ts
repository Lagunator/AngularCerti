import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface IPerson {
  name:string
  lastName: string
  age?: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCerti';
  sumNumber = 5;
  evenPersons: number[] = [];

  animals:string[] = ['a','b','c','d','e','f','g']

  person: IPerson = {
    name: 'a',
    lastName: 'b'
  }

constructor(){
  console.log('subtract', this.subtract(8,4))

  console.log('MAP:', this.animals.map( (animal:string) => ( animal + 'new')    ))
  console.log('FOREACH:', this.animals.forEach( (animal) => ( animal + 'new')    ))
  console.log('FIND', this.animals.find((animal)=>  animal === 'z'))
  console.log('FILTER', this.animals.filter((animal)=>  animal === 'z'))
  console.log('INDEXOF', this.animals.indexOf('c'))
  
}

public sum(num1: number, num2:number): number{
  return num1 + 2
}

private subtract(num1: number, num2: number):number{
  return num1 - num2
}

public getArray(): number[] {
  const person: number[] = [1, 2, 3, 4, 5];
  return person.filter(p => p % 2 === 0); // Filtra solo los números pares
}

// Se ejecuta al inicializar el componente
ngOnInit(): void {
  this.evenPersons = this.getArray(); // Asignar el resultado de getArray() a evenPersons
}
}