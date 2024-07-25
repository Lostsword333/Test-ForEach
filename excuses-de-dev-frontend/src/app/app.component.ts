import { Component, OnInit } from '@angular/core';
import { ExcusesService } from './excuses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Les excuses de dev';
  excuses: string[] = [];
  currentExcuse: string = '';
  isLoading: boolean = false;
  isTitleMoved: boolean = false;

  constructor(private excusesService: ExcusesService) {}

  ngOnInit() {
    this.loadExcuses();
  }

  loadExcuses() {
    this.excusesService.getExcuses().subscribe(data => {
      this.excuses = data;
    });
  }

  generateExcuse() {
    this.isLoading = true;
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.excuses.length);
      this.currentExcuse = this.excuses[randomIndex];
      this.isLoading = false;
    }, Math.random() * 4000 + 1000);
  }
}
