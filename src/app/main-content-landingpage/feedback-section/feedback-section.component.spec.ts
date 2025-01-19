import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSectionComponent } from './feedback-section.component';

describe('FeedbackSectionComponent', () => {
  let component: FeedbackSectionComponent;
  let fixture: ComponentFixture<FeedbackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
