import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { filter, from, map, tap } from "rxjs";
import { AppColorsDirective } from "./app-colors.directive";
import { CreateHtmlDirective } from "./create-html.directive";
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";

interface IPerson {
  name: string;
  lastName: string;
  age?: number;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    AppColorsDirective,
    CreateHtmlDirective,
    RouterLink,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  users = [
    { name: "abc", email: "abc@gmail.com" },
    { name: "dfg", email: "dfg@gmail.com" },
  ];
  selectedUser: any = this.users[0];

  userCardCreated: boolean = false;

  result: number = 0;
  title: number = 10;
  animals: string[] = ["a", "b", "c", "d", "e", "f", "g"];

  person: IPerson = {
    name: "Juan",
    lastName: "Perez",
    age: 25,
  };
  students: number[] = [1, 2, 3, 4, 5, 6];
  parents: number[] = [7, 8, 9, 10];

  var1 = 0;
  var2 = null;
  var3 = "hola";

  youtube = from([1, 2, 3, 4, 5, 6]);

  constructor() {
    const { name, age } = this.person;
    let both = [...this.students, ...this.parents];

    this.youtube.subscribe((res) => {
      console.log("SUSCRIBER 1: ", res);
    });
  }
  public sum(...persons: number[]) {
    //return persons[0] + persons[1]
    return persons.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      10
    );
  }

  addVideo() {
    this.youtube
      .pipe(
        map((res: number) => {
          //console.log("MAP OPERATOER RXJS: ", res);
          if (res % 2 === 0) {
            return res;
          } else {
            return null
          }
        }),
        tap((res)  => {console.log('VALUE: ', res)}),
        filter((res: number | null) => res !== null),
      )
      .subscribe((res) => {
        console.log("SUSCRIBER 2: ", res);
      });
  }

  public sum2(num1: number, num2: number): number {
    return num1 + num2;
  }

  private subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  public getArray(): void {
    const persons: number[] = [1, 2, 3, 4, 5];
    for (let i = 0; i < persons.length; i++) {
      //console.log('person =', persons[i])
    }
  }

  public getColor(value:any): void {
    console.log("value: ", value);
  }
  //  function sumar(){
  //   return 1 + 2;
  //  }

  //  const suma = () => {
  //   return 1 + 2
  //  }

  //  function resta(){
  //   return 'hola' + a
  //  }

  // arrow functions
  //  const resta = () => ('hola' + a)

  public receiveData(data: any) {
    console.log("Print in father component: ", data);
  }

  public onResult(event: any) {
    console.log("event from child:", event);
    this.result = event ?? 0;
  }
}