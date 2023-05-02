import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/service/question.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  public quizList: any;

  constructor(private service: QuestionService) {
    this.service.getQuestionJson().subscribe(res => {
      this.quizList = res
    });
  }

  ngOnInit(): void {
  }
}
