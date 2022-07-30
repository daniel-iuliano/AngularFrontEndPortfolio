import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionSectionComponent } from './educacion-section.component';

describe('EducacionSectionComponent', () => {
  let component: EducacionSectionComponent;
  let fixture: ComponentFixture<EducacionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
