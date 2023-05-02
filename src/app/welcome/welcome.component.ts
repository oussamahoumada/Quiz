import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  constructor( private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  startQuiz() {
    this.router.navigate(['question',this.route.snapshot.paramMap.get('id')]);
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
