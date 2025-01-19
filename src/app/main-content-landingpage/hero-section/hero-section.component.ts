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
  menuItems: MenuItem[] = [
    { label: 'About me', href: '#about', active: false },
    { label: 'Skills', href: '#skills', active: false },
    { label: 'Projects', href: '#projects', active: false }
  ];

  setActiveItem(index: number): void {
    this.menuItems = this.menuItems.map((item, i) => ({
      ...item,
      active: i === index
    }));
  }
}

