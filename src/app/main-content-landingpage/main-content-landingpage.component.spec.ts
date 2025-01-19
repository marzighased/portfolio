import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentLandingpageComponent } from './main-content-landingpage.component';

describe('MainContentLandingpageComponent', () => {
  let component: MainContentLandingpageComponent;
  let fixture: ComponentFixture<MainContentLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentLandingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContentLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
