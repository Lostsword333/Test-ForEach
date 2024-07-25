import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button (click)="generate()">Générer une excuse</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() generate = new EventEmitter<void>();

  generateExcuse() {
    this.generate.emit();
  }
}
