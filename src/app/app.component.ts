import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryCalculatorComponent } from './history-calculator/history-calculator.component';

interface IPerson {
  name:string
  lastName: string
  age?: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, HistoryCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  result:number = 0;
  title = 'AngularCerti';
  history: string[] = ['','',''];
  sumNumber = 5;
  evenPersons: number[] = [];

  animals:string[] = ['a','b','c','d','e','f','g']

  person: IPerson = {
    name: 'Luis',
    lastName: 'Arce',
    age: 50
  }

students:number[] = [1,2,3,4,5,6]
parents:number[] = [7,8,9,10]

var1 = 0
var2 = null
var3 = 'hola'

constructor(){
  console.log('subtract', this.subtract(8,4))

  const{ name, age} = this.person
  console.log('desestructuracion:', name, age)

let both = [...this.students, ...this.parents]
console.log('spread operator', both)
console.log('Rest operator:', this.sum1(2,4,6))

console.log('Nullish Coalesing:',  this.var2 ?? this.var3  )
console.log('OR:', this.var2 || this.var1)


  console.log('MAP:', this.animals.map( (animal:string) => ( animal + 'new')    ))
  console.log('FOREACH:', this.animals.forEach( (animal) => ( animal + 'new')    ))
  console.log('FIND', this.animals.find((animal)=>  animal === 'z'))
  console.log('FILTER', this.animals.filter((animal)=>  animal === 'z'))
  console.log('INDEXOF', this.animals.indexOf('c'))
  
}

public sum1(...person:number[]){
  return person.reduce(
    (acumulador, valorActual) => (acumulador + valorActual), 10
  )
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
public receiveData(data:any){
  console.log('Print in father component: ', data)
}

public onResult(event:any){
  console.log('event from child:', event)
  this.result = event ?? 0
  this.history.pop(); 
  this.history.unshift(`Resultado: ${this.result}`); 

}


}