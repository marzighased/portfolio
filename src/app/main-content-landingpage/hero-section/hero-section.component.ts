import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  isMenuOpen = false;
  currentLang: string;

  menuItems = [
    { label: 'NAV.ABOUT', href: '#about', active: false },
    { label: 'NAV.SKILLS', href: '#skills', active: false },
    { label: 'NAV.PROJECTS', href: '#projects', active: false }
  ];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || 'en';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveItem(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
    this.isMenuOpen = false;
    const sectionId = this.menuItems[index].href.substring(1);
    this.scrollToSection(sectionId);
  }

  switchLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  sendEmail(email: string): void {
    window.location.href = `mailto:${email}`;
  }
}