import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcuseButtonComponent } from './excuse-button.component';

describe('ExcuseButtonComponent', () => {
  let component: ExcuseButtonComponent;
  let fixture: ComponentFixture<ExcuseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcuseButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcuseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
