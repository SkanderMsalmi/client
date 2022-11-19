import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailEquipeComponent } from './form-detail-equipe.component';

describe('FormDetailEquipeComponent', () => {
  let component: FormDetailEquipeComponent;
  let fixture: ComponentFixture<FormDetailEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
