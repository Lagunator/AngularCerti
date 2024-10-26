import { Component } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-classmate',
  standalone: true,
  imports: [],
  templateUrl: './classmate.component.html',
  styleUrl: './classmate.component.css'
})
export class ClassmateComponent {
  newScores:number[] = []
  constructor(private _examService: ExamService) { 
    this._examService.getScoresAsObservable().subscribe(scores => {
      console.log('SCORES: ', scores)
      this.newScores = scores
    })
  }
}
