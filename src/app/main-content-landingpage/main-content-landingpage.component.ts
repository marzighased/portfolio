import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-main-content-landingpage',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './main-content-landingpage.component.html',
  styleUrl: './main-content-landingpage.component.scss'
})
export class MainContentLandingpageComponent {

}
