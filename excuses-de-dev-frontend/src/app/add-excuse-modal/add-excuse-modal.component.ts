import { Component, EventEmitter, Output } from '@angular/core';
import { ExcusesService } from '../excuses.service';

@Component({
  selector: 'app-add-excuse-modal',
  templateUrl: './add-excuse-modal.component.html',
  // template: `
  //   <div>
  //     <input [(ngModel)]="newExcuse" placeholder="Enter new excuse">
  //     <button (click)="addExcuse()">Add Excuse</button>
  //   </div>
  // `,
  styleUrl: './add-excuse-modal.component.css'
  // styles: ['div { margin-top: 20px; }'],
  // standalone: true
})
export class AddExcuseModalComponent {
  newExcuse: string = '';
  @Output() excuseAdded = new EventEmitter<void>();

  constructor(private excusesService: ExcusesService) {}

  addExcuse() {
    if (this.newExcuse.trim()) {
      this.excusesService.addExcuse(this.newExcuse).subscribe(() => {
        this.newExcuse = '';
        this.excuseAdded.emit();
      });
    }
  }
}
