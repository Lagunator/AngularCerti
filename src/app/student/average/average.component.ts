import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-average',
  standalone: true,
  imports: [],
  templateUrl: './average.component.html',
  styleUrl: './average.component.css'
})
export class AverageComponent {
  constructor(private _authService: AuthService) { }
  onPrint(){
    console.log('LOGGED USER: ', this._authService.getUser())
  }
}
