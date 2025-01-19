import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverviewSectionComponent } from './projects-overview-section.component';

describe('ProjectsOverviewSectionComponent', () => {
  let component: ProjectsOverviewSectionComponent;
  let fixture: ComponentFixture<ProjectsOverviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsOverviewSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsOverviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
