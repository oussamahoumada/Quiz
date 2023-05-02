import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'quizList', pathMatch: "full" },
  { path: "welcome/:id", component: WelcomeComponent },
  { path: "question/:id", component: QuestionComponent },
  { path: "quizList", component: QuizListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
