import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Testimonial {
  id: number;
  textKey: string;
  author: string;
  roleKey: string;
}

@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './feedback-section.component.html',
  styleUrls: ['./feedback-section.component.scss']
})
export class FeedbackSectionComponent {
  currentIndex = 0;
  testimonials: Testimonial[] = [
    {
      id: 1,
      textKey: "FEEDBACK.TESTIMONIAL1.TEXT",
      author: "T.Schulz",
      roleKey: "FEEDBACK.TESTIMONIAL1.ROLE"
    },
    {
      id: 2,
      textKey: "FEEDBACK.TESTIMONIAL2.TEXT",
      author: "H.Janisch",
      roleKey: "FEEDBACK.TESTIMONIAL2.ROLE"
    },
    {
      id: 3,
      textKey: "FEEDBACK.TESTIMONIAL3.TEXT",
      author: "S.Miller",
      roleKey: "FEEDBACK.TESTIMONIAL3.ROLE"
    }
  ];

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  isLeft(index: number): boolean {
    return this.currentIndex === (index + 1) % this.testimonials.length;
  }

  isRight(index: number): boolean {
    return this.currentIndex === (index - 1 + this.testimonials.length) % this.testimonials.length;
  }
}