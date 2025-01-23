import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  href: string;
  active: boolean;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  isMenuOpen = false;

  menuItems: MenuItem[] = [
    { label: 'About me', href: '#about', active: false },
    { label: 'Skills', href: '#skills', active: false },
    { label: 'Projects', href: '#projects', active: false }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveItem(index: number): void {
    this.menuItems.forEach((item, i) => {
        item.active = i === index;
    });
    this.isMenuOpen = false;
  }
}

