import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExcuseModalComponent } from './add-excuse-modal.component';

describe('AddExcuseModalComponent', () => {
  let component: AddExcuseModalComponent;
  let fixture: ComponentFixture<AddExcuseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExcuseModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExcuseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
