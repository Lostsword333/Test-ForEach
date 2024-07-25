import { Component, OnInit } from '@angular/core';
import { ExcusesService } from '../excuses.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  excuses: string[] = [];
  currentExcuse: string = '';

  constructor(private excuseService: ExcusesService) { }

  ngOnInit(): void {
    this.excuseService.getExcuses().subscribe((data: string[]) => {
      this.excuses = data;
    });
  }

  generateExcuse() {
    if (this.excuses.length > 0) {
      let newExcuse;
      do {
        newExcuse = this.excuses[Math.floor(Math.random() * this.excuses.length)];
      } while (newExcuse === this.currentExcuse);
      this.currentExcuse = newExcuse;
    }
  }
}
