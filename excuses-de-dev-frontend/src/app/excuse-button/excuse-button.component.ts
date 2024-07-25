import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-excuse-button',
  templateUrl: './excuse-button.component.html',
  styleUrls: ['./excuse-button.component.css']
})
export class ExcuseButtonComponent {
  @Output() generate = new EventEmitter<void>();

  onClick() {
    this.generate.emit();
  }
}
