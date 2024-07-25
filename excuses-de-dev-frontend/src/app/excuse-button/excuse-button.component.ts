import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-excuse-button',
  template: `<button (click)="onClick()">Generate Excuse</button>`,
  styles: ['button { margin-top: 20px; }'],
  // standalone: true
})
export class ExcuseButtonComponent {
  @Output() generate = new EventEmitter<void>();

  onClick() {
    this.generate.emit();
  }
}
