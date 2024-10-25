import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { ExamService } from './exam.service';
const routes: Routes = [
  {
    path: '', component: ScoreComponent
  },
  {
    path: 'classmate',
    loadComponent: () => import('./classmate/classmate.component').then(c => c.ClassmateComponent)
  }
];
@NgModule({
  declarations: [
    ScoreComponent,
    ClassmateComponent,
    AverageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  providers: [
    ExamService
  ]
})
export class StudentModule { }