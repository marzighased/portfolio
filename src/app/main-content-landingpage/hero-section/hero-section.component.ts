import { Component, HostListener } from '@angular/core';
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (this.isMenuOpen && menuOverlay && hamburgerMenu) {
      const clickedElement = event.target as HTMLElement;
      if (!menuOverlay.contains(clickedElement) && !hamburgerMenu.contains(clickedElement)) {
        this.isMenuOpen = false;
      }
    }
  }

  toggleMenu(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveItem(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
    const sectionId = this.menuItems[index].href.substring(1);
    this.scrollToSection(sectionId);
    setTimeout(() => {
      this.isMenuOpen = false;
    }, 300);
  }

  switchLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
    this.isMenuOpen = false;
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