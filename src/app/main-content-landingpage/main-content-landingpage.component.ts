import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsOverviewSectionComponent } from './projects-overview-section/projects-overview-section.component';
import { FeedbackSectionComponent } from './feedback-section/feedback-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@Component({
  selector: 'app-main-content-landingpage',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, AboutMeSectionComponent,SkillsSectionComponent, 
    ProjectsOverviewSectionComponent, FeedbackSectionComponent, ContactMeSectionComponent, FooterSectionComponent],
  templateUrl: './main-content-landingpage.component.html',
  styleUrl: './main-content-landingpage.component.scss'
})
export class MainContentLandingpageComponent {

}
