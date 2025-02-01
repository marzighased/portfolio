import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
