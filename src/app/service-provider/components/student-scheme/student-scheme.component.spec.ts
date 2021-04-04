import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchemeComponent } from './student-scheme.component';

describe('StudentSchemeComponent', () => {
  let component: StudentSchemeComponent;
  let fixture: ComponentFixture<StudentSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
