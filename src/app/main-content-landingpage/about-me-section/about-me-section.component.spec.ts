import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeSectionComponent } from './about-me-section.component';

describe('AboutMeSectionComponent', () => {
  let component: AboutMeSectionComponent;
  let fixture: ComponentFixture<AboutMeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
