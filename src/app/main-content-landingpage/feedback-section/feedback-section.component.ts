import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-section.component.html',
  styleUrls: ['./feedback-section.component.scss']
})
export class FeedbackSectionComponent {
  currentIndex = 0;
  testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I worked with Marzi in an efficient way",
      author: "T.Schulz",
      role: "Frontend Developer"
    },
    {
      id: 2,
      text: "Marzi has proven to be a reliable group partner. Her technical skills and proactive approach were crucial to the success of our project.",
      author: "H.Janisch",
      role: "Team Partner"
    },
    {
      id: 3,
      text: "I had the good fortune of working with Marzi on a project at the Developer Academy. She put a lot of effort into every task we worked on together and stayed focused throughout the project.",
      author: "S.Miller",
      role: "Project Manager"
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