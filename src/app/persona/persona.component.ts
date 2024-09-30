import {Component, Input} from '@angular/core';
import { IPerson } from '../app.component';
@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss'
})
export class PersonaComponent {
  @Input() person!: IPerson;
  @Input() hasDiscount!: boolean;
}