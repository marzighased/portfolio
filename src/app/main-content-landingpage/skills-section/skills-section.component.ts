import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
